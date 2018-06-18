# exists-file

![Last version](https://img.shields.io/github/tag/Kikobeats/exists-file.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/exists-file/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/exists-file)
[![Dependency status](http://img.shields.io/david/Kikobeats/exists-file.svg?style=flat-square)](https://david-dm.org/Kikobeats/exists-file)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/exists-file.svg?style=flat-square)](https://david-dm.org/Kikobeats/exists-file#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/exists-file.svg?style=flat-square)](https://www.npmjs.org/package/exists-file)
[![Gratipay](https://img.shields.io/gratipay/Kikobeats.svg?style=flat-square)](https://gratipay.com/~Kikobeats/)

> Check if a file exists. A fs.exists implementation that is not deprecated.

Because [fs.exist](https://nodejs.org/api/fs.html#fs_fs_exists_path_callback) and [fs.existsSync](https://nodejs.org/api/fs.html#fs_fs_existssync_path) are deprecated this an implementation using [fs.stats](https://nodejs.org/api/fs.html#fs_fs_stat_path_callback) and [fs.statsSync](https://nodejs.org/api/fs.html#fs_fs_statsync_path) for get the same result.

## Install

```bash
npm install exists-file --save
```

## Usage

```js
var existsFile = require('exists-file');

// Sync version
var exists = existsFile('./README.md')
console.log(exists) // => true

// Async version just providing callback
existsFile('./README.md', function(err, exists) {
});
```

## License

MIT © [Kiko Beats](http://www.kikobeats.com)

