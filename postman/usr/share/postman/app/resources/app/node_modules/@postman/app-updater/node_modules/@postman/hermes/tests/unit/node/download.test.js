const path = require('path'),
      { expect } = require('chai'),
      { exec, spawn } = require('child_process'),

      download = require('../../../src/download'),
      checksums = require('../../assets/checksums'),

      httpPort = 9001,
      EID = 'eID',
      downloadPath = path.resolve(__dirname, '..', '..', '..', '..'),
      downloadFile = path.resolve(downloadPath, `${EID}.tar.gz`);

describe('Download', () => {
  before((done) => {
    let doneCalled = false;

    this.httpServerProcess = spawn('./node_modules/.bin/http-server', ['.', '-p', httpPort]);
    this.httpServerProcess.stdout.on('data', () => {
      !doneCalled && (doneCalled = true) && done();
    });
    this.httpServerProcess.stdout.on('error', (err) => {
      !doneCalled && (doneCalled = true) && done(err);
    });
  });

  beforeEach((done) => {
    exec(`rm -rf ${downloadFile}`, done);
  });

  after((done) => {
    this.httpServerProcess.kill();
    exec(`rm -rf ${downloadFile}`, done);
  });

  it('Should throw error when params is not provided', () => {
    expect(download).to.throw(Error, 'InvalidArgumentException: Hermes~download - callback is a required param');
  });

  it('Should throw error when callback is not provided', () => {
    let error = null;
    try {
      download({});
      expect.fail();
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~download - callback is a required param');
    }
  });

  it('Should throw error when callback is not a function', () => {
    let error = null;
    try {
      download({}, 'callback');
      expect.fail();
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~download - callback should be of type function');
    }
  });

  it('Should throw error when downloadInputData is not an object', (done) => {
    download('downloadInfo', (error) => {
      expect(error).to.be.instanceOf(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~download - downloadInputData should be of type object');
      done();
    });
  });

  it('Should throw error when downloadInputData.eID is empty', (done) => {
    const downloadInputData = { eID: '' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.eID is just spaces', (done) => {
    const downloadInputData = { eID: ' ' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.eID is not of type string', (done) => {
    const downloadInputData = { eID: ['eID'] };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should be of type string');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.eId should be of type string');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadURL is empty', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: '' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadURL is just spaces', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: ' ' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadURL is not of type string', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: ['downloadURL'] };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should be of type string');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadURL should be of type string');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadDirectory is empty', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: 'url', downloadDirectory: '' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadDirectory is just spaces', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: 'url', downloadDirectory: ' ' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should not be empty');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should not be empty');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadDirectory is not of type string', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: 'url', downloadDirectory: ['path'] };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should be of type string');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadDirectory should be of type string');
      done();
    });
  });

  it('Should throw error when downloadInputData.downloadChecksum is not of type string', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: 'downloadURL', downloadDirectory: 'some/path', downloadChecksum: ['checksum'] };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadChecksum should be of type string');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'INVALID_ARGUMENT_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~download - downloadInputData.downloadChecksum should be of type string');
      done();
    });
  });

  it('should bail out when downloadUrl does not have supported protocol', (done) => {
    const downloadInputData = { eID: 'eID', downloadURL: 'ftp://', downloadDirectory: 'some/path' };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download Invalid protocol information in URL, only https and http are supported');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'DOWNLOAD_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('downloadDirectory');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('InvalidArgumentException: Hermes~util~download Invalid protocol information in URL, only https and http are supported');
      done();
    });
  });

  it('Should download a package and throw error if checksum failed', (done) => {
    const downloadInputData = {
      eID: 'eID',
      downloadURL: `http://localhost:${httpPort}/tests/assets/sample.tar.gz`,
      downloadDirectory: downloadPath,
      downloadChecksum: 'random',
    };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.an.instanceof(Error);
      expect(err.message).to.be.equal('Checksum failed: Hermes~download - mismatch in the checksum provided and the file downloaded');
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadChecksum', downloadInputData.downloadChecksum);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'CHECKSUM_ERROR');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('downloadDirectory');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.instanceOf(Error);
      expect(updateDownloadedInfo.downloadInfo.error.message).to.be.equal('Checksum failed: Hermes~download - mismatch in the checksum provided and the file downloaded');
      done();
    }, { downloadDirectory: downloadPath });
  });

  it('Should download a package and does checksum', (done) => {
    const downloadInputData = {
      eID: 'eID',
      downloadURL: `http://localhost:${httpPort}/tests/assets/sample.tar.gz`,
      downloadDirectory: downloadPath,
      downloadChecksum: checksums['sample.tar.gz'],
    };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.equal(null);
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadChecksum', downloadInputData.downloadChecksum);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'DOWNLOAD_COMPLETED');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('downloadDirectory');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.equal(null);
      done();
    }, { downloadDirectory: downloadPath });
  });

  it('Should download a package alone', (done) => {
    const downloadInputData = {
      eID: 'eID',
      downloadURL: `http://localhost:${httpPort}/tests/assets/sample.tar.gz`,
      downloadDirectory: downloadPath,
    };
    download(downloadInputData, (err, updateDownloadedInfo) => {
      expect(err).to.be.equal(null);
      expect(updateDownloadedInfo).to.have.property('eID', downloadInputData.eID);
      expect(updateDownloadedInfo).to.have.property('downloadURL', downloadInputData.downloadURL);
      expect(updateDownloadedInfo).to.have.property('downloadInfo');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('status', 'DOWNLOAD_COMPLETED');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('downloadDirectory');
      expect(updateDownloadedInfo.downloadInfo).to.have.property('error');
      expect(updateDownloadedInfo.downloadInfo.error).to.be.equal(null);
      done();
    });
  });
});
