const extract = require('../../../src/extract'),
      { expect } = require('chai'),
      { exec } = require('child_process'),
      path = require('path'),
      fs = require('fs'),
      downloadDir = path.resolve(__dirname, '..', '..', 'tmp');

describe('Extract', () => {
  const eID = 'pack-1234',
        eIDWithSpace = 'pack 1-1234',
        extractionDirectory = path.resolve(__dirname, '..', '..', 'assets');

  before(() => {
    fs.mkdirSync(downloadDir);
  });

  beforeEach((done) => {
    exec(`rm -rf ${downloadDir}/*`, done);
  });

  after((done) => {
    exec(`rm -rf ${downloadDir} ${extractionDirectory}/${eID} & rm -rf ${downloadDir} ${extractionDirectory}/"${eIDWithSpace}"`, done);
  });

  it('should error out if callback is not passed', () => {
    const extractInputData = { eID };
    let err;

    try { extract(extractInputData); }
    catch (error) { err = error; }
    expect(err).to.exist.and.be.instanceof(Error).and.have.property('message', 'InvalidParamsException: Hermes~extract - callback should not be empty');
  });

  it('should error out if callback is not a function', () => {
    const extractInputData = {};
    let err;

    try { extract(extractInputData, {}); }
    catch (error) { err = error; }
    expect(err).to.exist.and.be.instanceof(Error).and.have.property('message', 'InvalidParamsException: Hermes~extract - callback should be of type function');
  });

  it('should error out if extractInputData is passed as null', () => {
    extract(null, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData should not be empty or false');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
    });
  });

  it('should error out if extractInputData is passed as false', () => {
    extract(false, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData should not be empty or false');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
    });
  });

  it('should error out if extractInputData is not a object', () => {
    extract('foo', (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData should be of type object');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
    });
  });

  it('should error out if extractInputData is invoked as an array', () => {
    extract(['foo', 'bar'], (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData should be of type object');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
    });
  });

  it('should error out if eID is not a property', (done) => {
    const extractInputData = { foo: 'bar' };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData).to.not.have.property('eID');
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.eId should not be empty');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if eID is not of type string', (done) => {
    const extractInputData = { eID: {} };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.eId should be of type string');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if packageName is not a property', (done) => {
    const extractInputData = { eID };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData).to.not.have.property('packageName');
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.packageName should not be empty');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if packageName is not of type string', (done) => {
    const extractInputData = { eID, packageName: { foo: 'bar' } };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.packageName should be of type string');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if invoked without property downloadInfo', (done) => {
    const extractInputData = { eID, packageName: 'Postman' };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo should not be empty');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if downloadInfo is not of type object', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: 'string' };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo should be of type object');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if downloadInfo is invoked as an array', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: ['foo', 'bar'] };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo should be of type object');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if invoked without downloadInfo.downloadDirectory', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: { foo: 'bar' } };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo.downloadDirectory should not be empty');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if downloadInfo.downloadDirectory is not of type string', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: { downloadDirectory: { foo: 'bar' } } };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo.downloadDirectory should be a string');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if invoked without downloadInfo.status', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: { downloadDirectory: 'Users/postman' } };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo.status should not be empty');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should error out if downloadInfo.status not equal to DOWNLOAD_COMPLETED', (done) => {
    const extractInputData = { eID, packageName: 'Postman', downloadInfo: { downloadDirectory: 'Users/postman', status: 'foo' } };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error.message).to.be.equal('InvalidParamsException: Hermes~extract - extractInputData.downloadInfo.status should be equal to DOWNLOAD_COMPLETED');
      expect(extractOutputData.extractInfo.status).to.be.equal('INVALID_ARGUMENT_ERROR');
      done();
    });
  });

  it('should fail if downloadDirectory is not a valid path', (done) => {
    const extractInputData = {
      eID,
      packageName: 'Postman',
      downloadInfo: {
        downloadDirectory: 'Users/foo/bar',
        status: 'DOWNLOAD_COMPLETED',
      },
    };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.status).to.be.equal('MKDIR_DIRECTORY_FAILED');
      done();
    });
  });

  it('should fail if extraction could not be carried for successfully', (done) => {
    const extractInputData = {
      eID,
      packageName: 'foo',
      downloadInfo: {
        downloadDirectory: extractionDirectory,
        status: 'DOWNLOAD_COMPLETED',
      },
    };

    extract(extractInputData, (err, extractOutputData) => {
      expect(err).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.error).to.be.instanceof(Error);
      expect(extractOutputData.extractInfo.status).to.be.equal('EXTRACTION_FAILED');
      // this is used to delete the folder made so does not bring a conflict in the next test
      exec(`rm -rf ${extractionDirectory}/${eID}`, done);
    });
  });

  it('should extract the package', (done) => {
    const extractInputData = {
      eID,
      packageName: 'Postman',
      downloadInfo: {
        downloadDirectory: extractionDirectory,
        status: 'DOWNLOAD_COMPLETED',
      },
    };

    extract(extractInputData, (err, extractOutputData) => {
      const extractDirectory = extractInputData.downloadInfo.downloadDirectory;
      expect(err).to.be.null;
      expect(extractOutputData.extractInfo.error).to.be.null;
      expect(extractOutputData.extractInfo.status).to.equal('EXTRACTION_SUCCESSFUL');
      expect(extractOutputData.extractInfo.extractDirectory).to.equal(extractDirectory);
      done();
    });
  });

  it('should extract the package with space', (done) => {
    const extractInputData = {
      eID: eIDWithSpace,
      packageName: 'Postman',
      downloadInfo: {
        downloadDirectory: extractionDirectory,
        status: 'DOWNLOAD_COMPLETED',
      },
    };

    extract(extractInputData, (err, extractOutputData) => {
      const extractDirectory = extractInputData.downloadInfo.downloadDirectory;
      expect(err).to.be.null;
      expect(extractOutputData.extractInfo.error).to.be.null;
      expect(extractOutputData.extractInfo.status).to.equal('EXTRACTION_SUCCESSFUL');
      expect(extractOutputData.extractInfo.extractDirectory).to.equal(extractDirectory);
      done();
    });
  });
});
