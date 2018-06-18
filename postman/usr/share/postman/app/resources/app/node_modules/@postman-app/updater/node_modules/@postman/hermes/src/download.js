const path = require('path'),
      { getChecksumForFile, downloadFile } = require('./util'),
      CHECKSUM_ERROR = 'CHECKSUM_ERROR',
      DOWNLOAD_COMPLETED = 'DOWNLOAD_COMPLETED',
      DOWNLOAD_ERROR = 'DOWNLOAD_ERROR',
      INVALID_ARGUMENT_ERROR = 'INVALID_ARGUMENT_ERROR';


/**
 * The below object defines the basic properties needed for starting the download.
 *
 * @typedef downloadInputData
 *
 * @extends initOutputData
 * @property {String} downloadURL The download URL from which the download needs to happen
 * @property {String} downloadDirectory The absolute path to which the download needs to be done.
 * @property {String} [downloadChecksum] The checksum of the binary which will be downloaded
 * @property {String} [downloadChecksumAlgorithm = 'sha1'] The algorithm to be used
 *
 * @example
 * {
 *   eID: 'pack-xxx',
 *   packageName: 'pack',
 *   downloadURL: 'http://sample.com/foo.tar.gz',
 *   downloadChecksum: '2927b7c6ed350687446b7eba58bd74535afd411b'
 *   downloadChecksumAlgorithm: 'sha1'
 * }
 *
 */

/**
 * downloadInfo
 *
 * @typedef {String} downloadInfo
 *
 * They holds the values of either one of
 * 'CHECKSUM_ERROR','DOWNLOAD_ERROR','DOWNLOAD_COMPLETED','INVALID_ARGUMENT_ERROR'
 */

/**
 * The below object holds key properties defining the downloaded information
 *
 * @typedef downloadInfo
 *
 * @property {downloadInfo} status The status of the download.
 * @property {?Error} [error] Will be null initially and hold the error in case of failures.
 * @property {String} downloadDirectory The absolute location of the download Directory
 *
 * @example
 * {
 *   status: 'DOWNLOAD_COMPLETED',
 *   error: null
 *   downloadDirectory: 'User/PathForDownloadDirectory'
 * }
 */

/**
 * The below object defines the basic properties which defines
 * the download status at the end of download process.
 *
 * @typedef downloadOutputData
 *
 * @extends downloadInputData
 * @property {downloadInfo} downloadInfo
 *
 * @example
 * {
 *   eID: 'pack-xxx',
 *   packageName: 'pack',
 *   downloadURL: 'http://sample.com/foo.tar.gz',
 *   downloadDirectory: '/some/directory'
 *   downloadChecksum: '2927b7c6ed350687446b7eba58bd74535afd411b'
 *   downloadChecksumAlgorithm: 'sha1',
 *   downloadInfo {
 *     status: 'DOWNLOAD_COMPLETED',
 *     error: null,
 *     downloadDirectory: 'User/PathForDownloadDirectory
 *   }
 * }
 *
 */

/**
 * @callback downloadResponseCallback
 * @param {?Error} error
 * @param {downloadOutputData} data
 *
 */


/**
 * @method __runCheckSum
 * @private
 *
 * @param {String} filePath The path to the file for which checksum needs to be done
 * @param {String} checksum The hash to which the checksum needs to be compared with.
 * @param {String} algorithm Them algorithm to be used.
 * @param {checksumCallback} callback The callback function where
 */
function runCheckSum(filePath, checksum, algorithm, cb) {
  getChecksumForFile(filePath, (checksumError, hash) => {
    // If any error, just bubble that up.
    if (checksumError) {
      cb(checksumError);
      return;
    }
    // Once the hash is received, then check for it's equality mismatch,
    // if any mismatch, give it as error.
    if (checksum !== hash) {
      const error = new Error('Checksum failed: Hermes~download - mismatch in the checksum provided and the file downloaded');
      cb(error);
      return;
    }
    cb(null);
  }, { algorithm });
}


/**
 * @method download
 * @description This will download the file
 * @param {downloadInputData} downloadInputData This holds the details on the module output
 * @param {downloadResponseCallback} callback The final status of the download will responded here
 * @param {Object={}} options The additional options to the module.
 * @param {String=} options.downloadDirectory The directory to which the app needs to be downloaded.
 * @throws {InvalidArgumentException}
 */
module.exports = function download(downloadInputData, callback) {
  // Bail out if callback is not available.
  if (!callback) {
    throw new Error('InvalidArgumentException: Hermes~download - callback is a required param');
  }

  // Bail out if the downloadInputData is not an object
  if (typeof callback !== 'function') {
    throw new Error('InvalidArgumentException: Hermes~download - callback should be of type function');
  }

  // Bail out if the downloadInputData is not an object
  if (typeof downloadInputData !== 'object' || Array.isArray(downloadInputData)) {
    callback(new Error('InvalidArgumentException: Hermes~download - downloadInputData should be of type object'));
  }

  const { eID, downloadURL, downloadChecksum, downloadDirectory, downloadChecksumAlgorithm = 'sha1' } = downloadInputData,
        downloadOutputData = Object.assign(
          {},
          downloadInputData,
          {
            downloadInfo: {
              status: DOWNLOAD_COMPLETED,
              err: null,
            },
          },
        );

  // Bail out if downloadInputData.eID is not not of type string.
  if (typeof downloadInputData.eID !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.eId should be of type string');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // Bail out if downloadInputData.eID is not available.
  if (!downloadInputData.eID.trim()) {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.eId should not be empty');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // Bail out if downloadInputData.downloadURL is not of type string.
  if (typeof downloadInputData.downloadURL !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should be of type string');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // Bail out if downloadInputData.downloadURL is not available.
  if (!downloadInputData.downloadURL.trim()) {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should not be empty');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // Bail out if downloadInputData.downloadURL is not of type string.
  if (typeof downloadInputData.downloadDirectory !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should be of type string');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // Bail out if downloadInputData.downloadDirectory is not available.
  if (!downloadInputData.downloadDirectory.trim()) {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should not be empty');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }

  // if checksum is provided it should be of type string
  if (downloadInputData.downloadChecksum && typeof downloadInputData.downloadChecksum !== 'string') {
    const err = new Error('InvalidArgumentException: Hermes~download - downloadInputData.downloadChecksum should be of type string');
    downloadOutputData.downloadInfo = {
      status: INVALID_ARGUMENT_ERROR,
      error: err,
    };
    callback(err, downloadOutputData);
    return;
  }
  /**
   *  app
   *    - Resources
   *      - app
   *        - node_modules
   *            - hermes
   *               - src
   *                  - download
   */
  const downloadPath = path.resolve(downloadDirectory, `${eID}.tar.gz`); // @todo user should be able to provide option for extension and extraction


  downloadFile(downloadURL, downloadPath, (err) => {
    // Just bubble up the error received from the downloader
    if (err) {
      downloadOutputData.downloadInfo = {
        status: DOWNLOAD_ERROR,
        error: err,
        downloadDirectory,
      };
      callback(err, downloadOutputData);
      return;
    }

    if (!downloadChecksum) {
      // Reaching here specifies, download completed and checksum is not needed.
      downloadOutputData.downloadInfo = {
        status: DOWNLOAD_COMPLETED,
        error: null,
        downloadDirectory,
      };
      callback(null, downloadOutputData);
      return;
    }

    runCheckSum(downloadPath, downloadChecksum, downloadChecksumAlgorithm, (checksumError) => {
      downloadOutputData.downloadInfo = {
        status: checksumError ? CHECKSUM_ERROR : DOWNLOAD_COMPLETED,
        error: checksumError,
        downloadDirectory,
      };
      callback(checksumError, downloadOutputData);
    });
  });
};
