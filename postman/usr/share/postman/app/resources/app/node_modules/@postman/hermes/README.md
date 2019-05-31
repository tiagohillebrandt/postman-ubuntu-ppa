# Hermes (Linux auto-updater)

It is been used in the Postman Electron app to implement the auto-update feature.

The basic functionalities of hermes is to

  - Download the update
  - Extract the app
  - Swap and re-opens the app


  ```javascript

    const hermes = require('postman-app/hermes');

  ```

Usage:

![Usage](/docs/images/usage.jpg)

# Methods

## Method: 'hermes.init(initInputData)'

  - `initInputData` Object
  - `initInputData.packageName` String

### Returns `initOutputData`

  - `initOutputData` Object
  - `initOutputData.packageName` String
  - `initOutputData.eID` String

  It generates the unique `eID` (execution ID), which needs to be used for further processing in the module.

## Method: 'hermes.download(downloadInputData)'

  - @extends `initOutputData`
  - `downloadInputData.downloadURL` String
  - `downloadInputData.downloadDirectory` String
  - `downloadInputData.downloadChecksum` [String] Optional
  - `downloadInputData.downloadChecksumAlgorithm` [String] Optional defaults to `sha1` if `downloadInputData.downloadChecksum` is provided

### Return `downloadOutputData`

  - @extends `downloadInputData`
  - `downloadOutputData.downloadInfo` Object
  - `downloadOutputData.downloadInfo.status` String Which will have values `CHECKSUM_ERROR, DOWNLOAD_COMPLETED, DOWNLOAD_ERROR, INVALID_ARGUMENT_ERROR`
  - `downloadOutputData.downloadInfo.error` [Error]

  It Downloads the file from the `downloadInputData.downloadURL` to the `downloadInputData.downloadDirectory` and provides the downloadInfo along with the downloadInputData as `downloadOutputData`. It does the checksum if the `downloadInputData.checksum` is provided.

## Method: 'hermes.extract(extractInputData)'

  - `extractInputData` alias `downloadOutputData`

### Return `extractOutputData`

  - @extends `extractInputData`
  - `extractOutputData.extractInfo` Object
  - `extractOutputData.extractInfo.status` String Which will have values `MKDIR_DIRECTORY_FAILED, 'INVALID_ARGUMENT_ERROR','EXTRACTION_FAILED', 'EXTRACTION_SUCCESSFUL'`
  - `extractOutputData.extractInfo.error` [Error]

  It extracts the `tar.gz` in parallel to the place the file has been downloaded `downloadInputData.downloadDirectory`.

## Method: 'hermes.swap(swapInputData)'

  - `swapInputData` alias `extractOutputData`

### Return `swapOutputData`

  - @extends `swapInputData`
  - `swapOutputData.swapInfo` Object
  - `swapOutputData.swapInfo.status` String Which will have values `MKDIR_DIRECTORY_FAILED, 'INVALID_ARGUMENT_ERROR','EXTRACTION_FAILED', 'EXTRACTION_SUCCESSFUL'`
  - `swapOutputData.swapInfo.error` [Error]

  It will do the following things
  - rename the old package `postman/app` to `postman/$eid-old`
  - rename the newly extracted package `postman/$eid` to `postman/app`
  - kill the parent process (old app) if it's still running
  - launch the new app

## Method: 'hermes.clear(clearInputData)'

  - `clearInputData.appName` String
  - `clearInputData.directory` String

### Return `clearOutputData`

  - @extends `clearInputData`
  - `clearOutputData.clearInfo.status` String Which will have values `'INVALID_ARGUMENT_ERROR', 'FILE_ACCESS_ERROR', 'CLEAR_COMPLETED'`
  - `clearOutputData.clearInfo.error` [Error]

  It will clear the previously downloaded files and folders in specified directory `clearInputData.directory` and clears only the files and folders which are specified in a pattern. Patterns starts with `appName-[0-9]*`, so every file or folder which starts with pattern gets deleted.

  Files that should come with the pattern:
  - `appName-xxxxxxxxxxx.tar.gz`
  - `appName-xxxxxxxxxxx-old`
