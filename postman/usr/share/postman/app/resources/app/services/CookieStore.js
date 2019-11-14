/**
 * @fileOverview
 *
 * A Tough-Cookie compatible in-memory store backed with a persistent storage/DB.
 * Currently only supports Electron Session Store.
 *
 * Can be used as:
 *  1. in-sync with persistent store    - new CookieStore(partition)
 *  2. read-only from persistent store  - new CookieStore(partition, true, false)
 *  3. write-only to persistent store   - new CookieStore(partition, false, true)
 *  4. in-memory store                  - new CookieStore(partition, false, false)
 *
 * For on-demand updating persistent store with in-memory state, use `flushToStore` method.
 *
 * @note To add support for different persistent store
 *  - Update `PersistentStore` methods
 *  - Maybe pass persistent store as an argument to `CookieStore`
 */

const session = require('electron').session,
  { Store, Cookie, pathMatch, permuteDomain } = require('tough-cookie'),

  /**
   * Electron's session storage name
   *
   * @const
   * @type {string}
   */
  COOKIE_STORAGE = 'cookies',

  /**
   * typeof `string`
   *
   * @const
   * @type {string}
   */
  STRING = 'string',

  /**
   * typeof `function`
   *
   * @const
   * @type {string}
   */
  FUNCTION = 'function',

  /**
   * typeof `object`
   *
   * @const
   * @type {string}
   */
  OBJECT = 'object',

  /**
   * typeof `boolean`
   *
   * @const
   * @type {string}
   */
  BOOLEAN = 'boolean',

  /**
   * Property of `idx` to denote that cookies for that domain are cached
   *
   * @const
   * @type {Symbol}
   */
  CACHED = Symbol('cached'); // eslint-disable-line no-undef

/**
 * Executes a provided function once for each array element.
 *
 * @note not completely asynchronous, don't compare with async.each
 *
 * @param {Array} items - Array of items to iterate over
 * @param {Function} fn - An async function to apply to each item in items
 * @param {Function} cb - A callback which is called when all iteratee functions have finished,
 * or an error occurs
 */
function forEachWithCallback (items, fn, cb) {
  !cb && (cb = function () { /* (ಠ_ಠ) */ });

  if (!(Array.isArray(items) && fn)) { return cb(); }

  let index = 0,
    totalItems = items.length,
    next = function (err) {
      if (err || index >= totalItems) {
        return cb(err);
      }

      try {
        fn.call(items, items[index++], next);
      } catch (error) {
        return cb(error);
      }
    };

  if (!totalItems) {
    return cb();
  }

  next();
}

/**
 * Electron Persistent Store.
 *
 * @class
 */
class PersistentStore {
  /**
   * Constructs a new PersistentStore for the given partition.
   *
   * @param {String} partition - Electron's session partition identifier
   */
  constructor (partition) {
    this.session = partition ? session.fromPartition(partition) : session.defaultSession;
    this.store = this.session.cookies;
  }

  /**
   * Convert domain string to ToughCookie compatible domain.
   *  1. remove prefixed `.` from domain name e.g, ".foo.com"
   *  2. remove `[]` from IPv6 address
   *
   * @param {String} domain - Domain name
   * @returns {String} ToughCookie compatible domain name
   */
  static serializeDomain (domain) {
    if (typeof domain !== STRING) {
      return domain;
    }

    // remove prefixed `.` from domain
    if (domain[0] === '.') {
      domain = domain.substring(1);
    }

    // workaround of following issue in tough-cookie:
    // https://github.com/salesforce/tough-cookie/issues/153
    if (domain[0] === '[' && domain[domain.length - 1] === ']') {
      domain = domain.substring(1, domain.length - 1);
    }

    return domain;
  }

  /**
   * Convert domain string to ElectronCookie compatible domain.
   *  1. Add missing `[]` for IPv6 address
   *
   * @param {String} domain - Domain name
   * @returns {String} ElectronCookie compatible domain name
   */
  static deserializeDomain (domain) {
    if (typeof domain !== STRING) {
      return domain;
    }

    if (domain.indexOf(':') !== -1) {
      domain = `[${domain}]`;
    }

    return domain;
  }

  /**
   * Convert Electron Cookie instance to Tough Cookie instance.
   *
   * @param {ElectronCookie} cookie - Electron Cookie instance
   * @returns {ToughCookie} Tough Cookie instance
   */
  static serialize (cookie) {
    if (!cookie) {
      return;
    }

    return Cookie.fromJSON({
      key: cookie.name,
      value: cookie.value,

      // * 1000 because expirationDate is number of seconds since the the UNIX epoch
      expires: cookie.expirationDate && new Date(cookie.expirationDate * 1000),
      domain: PersistentStore.serializeDomain(cookie.domain),
      path: cookie.path,
      secure: cookie.secure,
      httpOnly: cookie.httpOnly,
      hostOnly: cookie.hostOnly
    });
  }

  /**
   * Convert Tough Cookie instance to Electron Cookie instance.
   *
   * @param {ToughCookie} cookie - Tough Cookie instance
   * @returns {ElectronCookie} Electron Cookie instance
   */
  static deserialize (cookie) {
    if (!(cookie && cookie.domain)) {
      return;
    }

    let deserializedCookie,
      domain = PersistentStore.deserializeDomain(cookie.domain),
      expiry = cookie.expiryTime();

    deserializedCookie = {

      // "After all this time?"
      // Always, use https to avoid Electron's http vs https differences.
      // e.g,
      //   store.set({ url: 'https://foo.com/', path: '/', name: 'foo', value: '1', secure: true })
      //   store.set({ url: 'http://foo.com/', path: '/', name: 'foo', value: '2' }) <- throws error
      // this is because of same name cookie. however, it will not throw if http cookie is set first.
      //
      // A Store should not care about protocol, decision to set or not to set secure cookie
      // should be taken by CookieJar or Requester!
      url: `https://${domain}${cookie.path || ''}`,
      name: cookie.key,
      value: cookie.value,
      domain: domain,
      secure: cookie.secure,
      httpOnly: cookie.httpOnly,
      hostOnly: cookie.hostOnly,

      // convert milliseconds to seconds and don't set Infinity
      expirationDate: expiry === Infinity ? null : expiry / 1000,
      path: cookie.path
    };

    // remove domain to indicate its hostOnly ElectronCookie
    if (deserializedCookie.hostOnly) {
      delete deserializedCookie.domain;
    }

    return deserializedCookie;
  }

  /**
   * Force sets a cookie by removing the old cookie with the same url & cookie name
   * and then adding the new cookie
   *
   * @private
   * @param {ElectronCookie} cookie - Electron Cookie instance
   * @param {setAndClearCallback} cb - Callback function
   */
  _forceSet (cookie, cb) {
    if (!(cookie && cookie.url && cookie.name)) {
      return cb(new Error('invalid cookie'));
    }

    this.store.remove(cookie.url, cookie.name, (err) => {
      if (err) {
        return cb(err);
      }

      this.store.set(cookie, cb);
    });
  }

  /**
   * Get all cookies matching filter.
   *
   * @param {Object} filter - Filter object
   * @param {String} filter.domain - Domain name
   * @param {String} filter.path - Path String
   * @param {getCallback} cb - Callback function
   */
  get (filter, cb) {
    if (typeof cb !== FUNCTION) {
      return;
    }

    if (typeof filter !== OBJECT) {
      filter = {};
    }

    if (filter.domain) {
      filter.domain = PersistentStore.deserializeDomain(filter.domain);
    }


    this.store.get(filter, (err, cookies) => {
      if (err || !Array.isArray(cookies)) {
        return cb(err, []);
      }

      cb(null, cookies.map(PersistentStore.serialize));
    });
  }

  /**
   * Sets a cookie.
   *
   * @param {ToughCookie} cookie - Tough Cookie instance
   * @param {setAndClearCallback} cb - Callback function
   */
  set (cookie, cb) {
    const electronCookie = PersistentStore.deserialize(cookie);

    if (!electronCookie) {
      return cb(new Error('invalid cookie'));
    }

    this.store.set(electronCookie, (err) => {
      if (!(err && err.message === 'Setting cookie failed')) {
        return cb(err);
      }

      // 'Setting cookie failed' error is returned by electron when we try to update:
      // i. a HTTPOnly cookie to non-HTTPOnly cookie
      // ii. a Secure cookie to non-Secure cookie
      // In that case we force set the new cookie by removing the old one
      // NOTE: This condition will need to be updated when electron changes it underlying error handling
      // https://github.com/electron/electron/blob/eb2d2264d02abd7f34df36809d44752aaf93da93/shell/browser/api/atom_api_cookies.cc#L156
      this._forceSet(electronCookie, cb);
    });
  }

  /**
   *
   * @param {setAndClearCallback} cb - Callback function
   */
  clear (cb) {
    typeof cb !== FUNCTION && (cb = function () {});

    this.session.clearStorageData({ storages: COOKIE_STORAGE }, cb);
  }

  /**
   * Electron Cookie
   * @typedef {Object} ElectronCookie
   * @property {String} name - The name of the cookie.
   * @property {String} value - The value of the cookie.
   * @property {String} [domain] - The domain of the cookie;
   * this will be normalized with a preceding dot so that it's also valid for subdomains.
   * @property {Boolean} [hostOnly] - Whether the cookie is a host-only cookie;
   * this will only be true if no domain was passed.
   * @property {String} [path] - The path of the cookie.
   * @property {Boolean} [secure] - Whether the cookie is marked as secure.
   * @property {Boolean} [httpOnly] - Whether the cookie is marked as HTTP only.
   * @property {Boolean} [session] - Whether the cookie is a session cookie or a persistent cookie
   * with an expiration date.
   * @property {Double} [expirationDate] - The expiration date of the cookie as the number of seconds
   * since the UNIX epoch. Not provided for session cookies.
   */

  /**
   * Tough Cookie
   * @typedef {Object} ToughCookie
   * @property {String} [key=""] - The name or key of the cookie.
   * @property {String} [value=""] - The value of the cookie.
   * @property {Date} [expires="Infinity"] - The expiration date of the cookie.
   * @property {Number} [maxAge] - Number of seconds until the cookie expires.
   * @property {String} [domain] - The domain of the cookie.
   * @property {String} [path] - The path of the cookie.
   * @property {Boolean} [secure] - Whether the cookie is marked as secure.
   * @property {Boolean} [httpOnly] - Whether the cookie is marked as HTTP only.
   * @property {Array} [extensions] - Any unrecognized cookie attributes.
   * @property {Date} [creation] - When this cookie was constructed.
   * @property {Number} [creationIndex] - Set at construction, used to provide greater sort precision.
   */

  /**
   *
   * @callback getCallback
   * @param {Error} err - Error instance
   * @param {[ToughCookie]} cookies - List of serialized Tough Cookie instance
   */

   /**
   *
   * @callback setAndClearCallback
   * @param {Error} err - Error instance
   */
}

/**
 * Used as private property for CookieStore.
 *
 * @private
 * @type {PersistentStore}
 *
 * @todo clean-up once private fields are supported
 * Refer: https://github.com/tc39/proposal-private-fields
 */
let persistentStore;

/**
 * Tough-Cookie Store.
 * In-memory cookie store backed with persistent store.
 *
 * If `readFromDB` is set, it will query from persistent store first and cache cookies for given
 *  domain+path in-memory.
 * If `writeToDB` is set, it will real-time add/update cookies to the persistent store as well.
 * To avoid real-time updates, use `flushToStore` method to update persistent store on-demand.
 *
 * @class
 * @extends Store
 */
class CookieStore extends Store {
  /**
   * Constructs a new CookieStore.
   *
   * @param {String} partition - Electron's session partition identifier
   * @param {Boolean} [readFromDB=true] - Load existing cookies from Electron session
   * @param {Boolean} [writeToDB=true] - Add/Update cookies in Electron session
   *
   * @todo pass PersistentStore as an argument
   */
  constructor (partition, readFromDB, writeToDB) {
    // "Sometimes you have to take a leap of faith first, the trust part comes later."
    super();

    // disable synchronous API
    this.synchronous = false;

    // in-memory cache
    this.idx = {};

    this.readFromDB = typeof readFromDB === BOOLEAN ? readFromDB : true;
    this.writeToDB = typeof writeToDB === BOOLEAN ? writeToDB : true;

    // @note this should be private property to avoid exposing persistent store's APIs
    // as a workaround using this global variable assignment approach.
    persistentStore = new PersistentStore(partition);
  }

  /**
   * Cache all the cookies with given filer in-memory.
   * - cache all the cookies for domain by setting `path` to null.
   * - cache all the cookies in session by setting both `domain` and `path` to null.
   *
   * It will not query from session:
   *  - if given domain+path combination is cached
   *  - if `readFromDB` is false
   *
   * @private
   * @param {String} domain - Domain name
   * @param {String=} path - Path string
   * @param {Function} cb - Callback function
   */
  _cache (domain, path, cb) {
    if (typeof path === FUNCTION && !cb) {
      cb = path;
      path = null;
    }

    if (typeof cb !== FUNCTION) {
      return;
    }

    // bail out if all the domains are cached
    if (this.idx[CACHED]) {
      return cb(null);
    }

    // bail out if the domain is cached
    if (this.idx[domain] && this.idx[domain][CACHED]) {
      return cb(null);
    }

    // bail out if the path is cached
    if (this.idx[domain] && this.idx[domain][path]) {
      return cb(null);
    }

    // domain is required if path is set
    if (!domain && path) {
      return cb(new Error('invalid domain'));
    }

    if (domain && typeof domain !== STRING) {
      return cb(new Error('invalid domain'));
    }

    if (domain && path && typeof path !== STRING) {
      return cb(new Error('invalid path'));
    }

    if (domain && !this.idx[domain]) {
      this.idx[domain] = {};
    }

    // set local state to mark all domains as cached
    if (!domain) {
      this.idx[CACHED] = true;
    }

    // set local state to mark this domain as cached
    if (domain && !path) {
      this.idx[domain][CACHED] = true;
    }

    // set local state to mark this domain+path as cached
    if (domain && path && !this.idx[domain][path]) {
      this.idx[domain][path] = {};
    }

    // bail out if readFromDB is disabled
    if (!this.readFromDB) {
      return cb(null);
    }

    // query persistent store with given domain + path filter
    persistentStore.get({ domain, path }, (err, cookies) => {
      if (err || !Array.isArray(cookies)) {
        return cb(err);
      }

      // traverse all the cookies and cache in-memory
      cookies.forEach((cookie) => {
        // set local state
        if (!this.idx[cookie.domain]) {
          this.idx[cookie.domain] = {};
        }
        if (!this.idx[cookie.domain][cookie.path]) {
          this.idx[cookie.domain][cookie.path] = {};
        }

        // finally, cache the cookie
        // @note Need to check if the cookie is already present to ensure that
        // we don't overwrite it with stale info from the persistent store.
        // This situation can happen because when we have cached a path before
        // and we try to cache all paths for a domain, we read cookies for
        // this cached path again from the persistent store.
        if (!this.idx[cookie.domain][cookie.path][cookie.key]) {
          this.idx[cookie.domain][cookie.path][cookie.key] = cookie;
        }
      });

      cb(null);
    });
  }

  /**
   * Add or update cookie.
   *
   * @private
   * @param {ToughCookie} cookie - Tough Cookie instance
   * @param {Function} cb - Callback function
   */
  _update (cookie, cb) {
    typeof cb !== FUNCTION && (cb = function () {});

    const { domain, path, key } = cookie;

    // set local state
    if (domain && !this.idx[domain]) {
      this.idx[domain] = {};
    }
    if (domain && path && !this.idx[domain][path]) {
      this.idx[domain][path] = {};
    }

    // if writeToDB is disabled, just update the cache
    if (!this.writeToDB) {
      this.idx[domain][path][key] = cookie;
      return cb(null);
    }

    // set cookie in session first and cache later
    persistentStore.set(cookie, (err) => {
      if (err) {
        return cb(err);
      }
      this.idx[domain][path][key] = cookie;
      cb(null);
    });
  }

  /**
   * Unset matching cookie.
   *
   * @private
   * @param {ToughCookie} cookie - Tough Cookie instance
   * @param {Function} cb - Callback function
   */
  _unset (cookie, cb) {
    typeof cb !== FUNCTION && (cb = function () {});

    // remove single cookie by setting its expiry to past date.
    // refer: https://github.com/electron/electron/issues/13557#issuecomment-512963780
    let expiredCookie = cookie.clone();
    expiredCookie.expires = new Date(0);

    this._update(expiredCookie, (err) => {
      if (err) {
        return cb(err);
      }

      // force clean from cache
      delete this.idx[cookie.domain][cookie.path][cookie.key];
      cb(null);
    });
  }

  /**
   * Clear cache as well as session data if writeToDB is set.
   *
   * @private
   * @param {Function} cb - Callback function
   */
  _clear (cb) {
    typeof cb !== FUNCTION && (cb = function () {});

    // just clear the cache if writeToDB is disabled
    if (!this.writeToDB) {
      this.idx = {};
      return cb(null);
    }

    // "Part of the journey is the end!"
    // clear session storage
    persistentStore.clear((err) => {
      if (err) {
        return cb(err);
      }
      this.idx = {};
      cb(null);
    });
  }

  /**
   * Get all the cached cookies.
   *
   * @private
   * @returns {[ToughCookie]} - List of cookies
   */
  _getAll () {
    let cookies = [],
      idx = this.idx,
      domains = Object.keys(idx);

    domains.forEach((domain) => {
      let paths = Object.keys(idx[domain]);
      paths.forEach((path) => {
        let keys = Object.keys(idx[domain][path]);
        keys.forEach((key) => {
          if (key !== null) {
            cookies.push(idx[domain][path][key]);
          }
        });
      });
    });

    // Sort by creationIndex so deserializing retains the creation order.
    cookies.sort((a, b) => {
      return (a.creationIndex || 0) - (b.creationIndex || 0);
    });

    return cookies;
  }

  /**
   * Update session store with cached cookies.
   *
   * @note it's a custom method, not in Tough-Cookie#Store's specification
   *
   * @param {Function} cb - Callback function
   */
  flushToStore (cb) {
    forEachWithCallback(this._getAll(), (cookie, next) => {
      persistentStore.set(cookie, next);
    }, cb);
  }

  /**
   * Retrieve a cookie with the given domain, path and key.
   *
   * @param {String} domain - The domain of the cookie
   * @param {String} path - The path of the cookie
   * @param {String} key - The name or key of the cookie
   * @param {Function} cb - Callback function
   */
  findCookie (domain, path, key, cb) {
    this._cache(domain, path, () => {
      if (!this.idx[domain]) {
        return cb(null, undefined);
      }
      if (!this.idx[domain][path]) {
        return cb(null, undefined);
      }
      return cb(null, this.idx[domain][path][key] || null);
    });
  }

  /**
   * Retrieve all the  cookies matching the given domain and path.
   *
   * @param {String} domain - The domain of the cookie
   * @param {String} path - The path of the cookie
   * @param {Function} cb - Callback function
   */
  findCookies (domain, path, cb) {
    if (!domain) {
      return cb(null, []);
    }

    let pathMatcher,
      results = [],
      domains = permuteDomain(domain) || [domain];

    if (!path) {
      // null means "all paths"
      pathMatcher = function matchAll (domainIndex) {
        for (let curPath in domainIndex) {
          let pathIndex = domainIndex[curPath];
          for (let key in pathIndex) {
            results.push(pathIndex[key]);
          }
        }
      };
    } else {
      pathMatcher = function matchRFC (domainIndex) {
        // NOTE: we should use path-match algorithm from S5.1.4 here
        // (see : https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/canonical_cookie.cc#L299)
        Object.keys(domainIndex).forEach(function (cookiePath) {
          if (pathMatch(path, cookiePath)) {
            let pathIndex = domainIndex[cookiePath];
            for (let key in pathIndex) {
              results.push(pathIndex[key]);
            }
          }
        });
      };
    }

    // permute all possible domain matches of a given domain
    // e.g, for www.foo.com it traverse foo.com and www.foo.com
    forEachWithCallback(domains, (domain, next) => {
      this._cache(domain, () => {
        this.idx[domain] && pathMatcher(this.idx[domain]);
        next();
      });
    }, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, results);
    });
  }

  /**
   * Adds a new cookie to the store.
   *
   * @param {ToughCookie} cookie - Tough Cookie instance
   * @param {Function} cb - Callback function
   */
  putCookie (cookie, cb) {
    const { domain, path } = cookie;

    this._cache(domain, path, () => {
      this._update(cookie, cb);
    });
  }

  /**
   * Update an existing cookie.
   *
   * @param {ToughCookie} oldCookie - Tough Cookie instance of old cookie
   * @param {ToughCookie} newCookie - Tough Cookie instance of new cookie
   * @param {Function} cb - Callback function
   */
  updateCookie (oldCookie, newCookie, cb) {
    this.putCookie(newCookie, cb);
  }

  /**
   * Remove a cookie from the store.
   *
   * @param {String} domain - The domain of the cookie
   * @param {String} path - The path of the cookie
   * @param {String} key - The name or key of the cookie
   * @param {Function} cb - Callback function
   */
  removeCookie (domain, path, key, cb) {
    this._cache(domain, path, () => {
      if (!(this.idx[domain] && this.idx[domain][path] && this.idx[domain][path][key])) {
        return cb(null);
      }

      this._unset(this.idx[domain][path][key], cb);
    });
  }

  /**
   * Removes matching cookies from the store.
   *
   * @param {String} domain - The domain of the cookie
   * @param {String} [path] - The path of the cookie
   * @param {Function} cb - Callback function
   */
  removeCookies (domain, path, cb) {
    this._cache(domain, path, () => {
      if (!this.idx[domain]) {
        return cb(null);
      }
      if (!this.idx[domain][path]) {
        return cb(null);
      }

      let cookies = [],
        keys = Object.keys(this.idx[domain][path]);

      keys.forEach((key) => {
        if (key !== null) {
          cookies.push(this.idx[domain][path][key]);
        }
      });

      forEachWithCallback(cookies, this._unset, cb);
    });
  }

  /**
   * Removes all cookies from the store.
   *
   * @param {Function} cb - Callback function
   */
  removeAllCookies (cb) {
    this._clear(cb);
  }

  /**
   * Retrieve all the  cookies from the store.
   *
   * @param {Function} cb - Callback function
   */
  getAllCookies (cb) {
    // cache all cookies
    this._cache(null, () => {
      cb(null, this._getAll());
    });
  }
}

module.exports = CookieStore;
