const { CookieJar } = require('tough-cookie'),
  { UrlMatchPatternList } = require('postman-collection'),
  CookieStore = require('./CookieStore');

/**
 * Extends CookieJar to add support for programmatic cookie access.
 *
 * @class
 * @extends CookieJar
 */
class PostmanCookieJar extends CookieJar {
  constructor (cookiePartitionId, options) {
    typeof options !== 'object' && (options = {});

    let store = new CookieStore(cookiePartitionId, options.readFromDB, options.writeToDB),
      domainList = Array.isArray(options.programmaticAccess) ? options.programmaticAccess : [],
      whitelistedDomains = [];

    // Initialize CookieJar with
    // rejectPublicSuffixes: false - don't reject cookies with domains like "com" and "co.uk"
    // looseMode: true - accept malformed cookies like bar and =bar
    super(store, { rejectPublicSuffixes: false, looseMode: true });

    // sanitize domains
    domainList.forEach((domain) => {
      if (typeof domain !== 'string') { return; }

      domain = domain.toLowerCase().trim();

      domain && whitelistedDomains.push(`http://${domain}/*`);
    });

    this.onCookieAccessDenied = options.onCookieAccessDenied;
    this.whitelistedDomains = new UrlMatchPatternList(null, whitelistedDomains);
  }

  /**
   * Update persistent storage with the cached cookies.
   *
   * @param {Function} callback - Callback function
   */
  updateStore (callback) {
    typeof callback !== 'function' && (callback = function () {});
    this.store.flushToStore(callback);
  }

  /**
   * Check if the given domain have programmatic access allowed or not.
   *
   * @param {String} domain - Domain name
   * @returns {Boolean}
   */
  allowProgrammaticAccess (domain) {
    let allowAccess = this.whitelistedDomains.test('http://' + domain);

    !allowAccess && typeof this.onCookieAccessDenied === 'function' && this.onCookieAccessDenied(domain);

    return allowAccess;
  }
}

module.exports = PostmanCookieJar;
