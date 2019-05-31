const { exec, spawn } = require('child_process'),
      { expect } = require('chai'),
      path = require('path'),
      fs = require('fs'),

      { getRequesterForUrl, getChecksumForFile, downloadFile, extract, removeOnly } = require('../../../src/util'),
      checksums = require('../../assets/checksums'),

      httpPort = 9100,
      httpBaseUrl = `http://localhost:${httpPort}`,
      TESTS_DIR = path.resolve(__dirname, '..', '..'),
      TEST_TEMP_DIR = path.resolve(TESTS_DIR, '.tmp'),
      TEST_ASSETS_DIR = path.resolve(TESTS_DIR, 'assets'),
      SAMPLE_APP_DIR = path.resolve(TEST_ASSETS_DIR, 'sample-application');

it.skipOnBitbucket = process.env.BITBUCKET_BUILD_NUMBER ? it.skip : it;

describe('Utils', () => {
  describe('getRequesterForUrl', () => {
    it('should return null on empty input', () => {
      expect(getRequesterForUrl()).to.be.equal(null);
      expect(getRequesterForUrl('')).to.be.equal(null);
    });

    it('should return null on non-supported input', () => {
      expect(getRequesterForUrl('ftp://foo')).to.be.equal(null);
    });

    it('should work for http urls', () => {
      expect(getRequesterForUrl('http://foo')).to.be.eql(require('http'));
    });

    it('should work for https urls', () => {
      expect(getRequesterForUrl('https://foo')).to.be.eql(require('https'));
    });
  });

  describe('getChecksumForFile', () => {
    const sampleFileName = 'sample.tar.gz',
          nonReadableFile = 'non-readable-file',
          sampleFilePath = path.resolve(__dirname, '..', '..', 'assets', sampleFileName),
          tmpPath = path.resolve('/tmp'),
          nonReadableFilePath = path.resolve(tmpPath, nonReadableFile);

    before(() => {
      fs.writeFileSync(nonReadableFilePath, 'some data', { mode: 0 });
    });

    after(() => {
      fs.unlinkSync(nonReadableFilePath);
    });

    it('should be able to calculate sha1 checksum', (done) => {
      getChecksumForFile(sampleFilePath, (err, hash) => {
        expect(hash).to.be.equal(checksums[sampleFileName]);
        done();
      });
    });

    it('should bail on no input', (done) => {
      let err = null;
      try {
        getChecksumForFile();
      }
      catch (e) {
        err = e;
      }
      finally {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('InvalidArgumentException: Hermes~util~checksum required parameter \'callback\'');
        done();
      }
    });

    it('should give error on empty input', (done) => {
      getChecksumForFile('', (err) => {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal('InvalidArgumentException: Hermes~util~checksum \'filePath\' cannot be empty');
        done();
      });
    });

    it('should give error when input is a directory', (done) => {
      getChecksumForFile(__dirname, (err) => {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.equal(`InvalidArgumentException: Hermes~util~checksum File not found '${__dirname}'`);
        done();
      });
    });

    it.skipOnBitbucket('should give error when read permission is not present on the input file', (done) => {
      getChecksumForFile(nonReadableFilePath, (err) => {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.eql(`EACCES: permission denied, open '${nonReadableFilePath}'`);
        // Message can't be asserted as it will be different for different shell.
        done();
      });
    });

    it('should give error when input is invalid file path', (done) => {
      const invalidPath = '/invalid/path/';
      getChecksumForFile(invalidPath, (err) => {
        expect(err).to.be.an.instanceOf(Error);
        expect(err.message).to.eql(`InvalidArgumentException: Hermes~util~checksum File not found '${invalidPath}'`);
        // Message can't be asserted as it will be different for different shell.
        done();
      });
    });
  });

  describe('Download', () => {
    before((done) => {
      let doneCalled = false;

      !fs.existsSync(TEST_TEMP_DIR) && fs.mkdirSync(TEST_TEMP_DIR);
      this.httpServerProcess = spawn('./node_modules/.bin/http-server', ['.', '-p', httpPort]);
      this.httpServerProcess.stdout.on('data', () => {
        !doneCalled && (doneCalled = true) && done();
      });
      this.httpServerProcess.stdout.on('error', (err) => {
        !doneCalled && (doneCalled = true) && done(err);
      });
    });

    beforeEach((done) => {
      exec(`rm -rf ${TEST_TEMP_DIR}/*`, done);
    });

    after((done) => {
      this.httpServerProcess.kill();
      exec(`rm -rf ${TEST_TEMP_DIR}`, done);
    });

    it('should bail out when callback function is not provided', () => {
      expect(downloadFile).to.throw(Error, 'InvalidArgumentException: Hermes~util~download required parameter \'callback\' must be a function');
    });

    it('should bail out when URL is not string', (done) => {
      downloadFile(null, '/foo/bar', (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download required parameter \'url\' must be a string');
        done();
      });
    });

    it('should bail out when URL is empty string', (done) => {
      downloadFile('', '/foo/bar', (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download \'url\' cannot be empty');
        done();
      });
    });

    it('should bail out when URL does not start with valid protocol', (done) => {
      downloadFile('192.168.1.0:8080/sample', '/foo/bar', (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download Invalid protocol information in URL, only https and http are supported');
        done();
      });
    });

    it('should bail out when URL is not valid', (done) => {
      downloadFile('http://this-is-invalid.com:1234/sample.tar.gz', '/foo/bar', (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('getaddrinfo ENOTFOUND this-is-invalid.com this-is-invalid.com:1234');
        done();
      });
    });

    it('should bail out when destination is not string', (done) => {
      downloadFile('http://sample', null, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download required parameter \'destination\' must be a string');
        done();
      });
    });

    it('should bail out when destination is empty string', (done) => {
      downloadFile('http://sample', '', (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.equal('InvalidArgumentException: Hermes~util~download \'destination\' cannot be empty');
        done();
      });
    });

    it('should return error when the destination is not valid', (done) => {
      const sampleTarFileName = 'sample.tar.gz',
            downloadUrl = `${httpBaseUrl}/tests/assets/${sampleTarFileName}`,
            downloadPath = '/some/invalid/directory';

      downloadFile(downloadUrl, downloadPath, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.eql('ENOENT: no such file or directory, open \'/some/invalid/directory\'');
        done();
      });
    });

    // @todo write test for https also. For that need to support self signed certs
    it('should throw error when file is not found [http]', (done) => {
      const fileName = 'sample.tar.gz',
            downloadUrl = `${httpBaseUrl}/${fileName}`,
            downloadPath = path.resolve(TEST_TEMP_DIR, fileName);

      downloadFile(downloadUrl, downloadPath, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.be.eql('InvalidResponseException: Hermes~util~download Expected to get status 200 but received 404');
        done();
      });
    });

    it('should be able to download a file [http]', (done) => {
      const sampleTarFileName = 'sample.tar.gz',
            downloadUrl = `${httpBaseUrl}/tests/assets/${sampleTarFileName}`,
            downloadPath = path.resolve(TEST_TEMP_DIR, sampleTarFileName);

      downloadFile(downloadUrl, downloadPath, (err) => {
        expect(err).not.to.be.ok;
        exec(`shasum ${downloadPath}`, (error, checksum) => {
          expect(error).not.to.be.ok;
          expect(checksum.split(' ')[0]).to.be.eql(checksums[sampleTarFileName]);
          done();
        });
      });
    });
  });

  describe('Extract', () => {
    const fileName = 'sample',
          compressedFileName = 'sample.tar.gz',
          compressedFilePath = path.resolve(__dirname, '..', '..', 'assets', compressedFileName);

    before(() => {
      fs.mkdirSync(TEST_TEMP_DIR);
    });

    beforeEach((done) => {
      exec(`rm -rf ${TEST_TEMP_DIR}/*`, done);
    });

    after((done) => {
      exec(`rm -rf ${TEST_TEMP_DIR}`, done);
    });

    it('should be able to extract a gZipped tar file', (done) => {
      // Initially there should not be any file
      expect(fs.readdirSync(TEST_TEMP_DIR)).to.be.eql([]);

      // after extracting, now there should be exactly one file
      extract(compressedFilePath, TEST_TEMP_DIR)
        .then(() => {
          try {
            expect(fs.readdirSync(TEST_TEMP_DIR)).to.be.eql([fileName]);
            done();
          }
          catch (err) {
            done(err);
          }
        })
        .catch((err) => {
          done(err);
        });
    });

    it('should error out when file path is not valid', (done) => {
      const invalidDir = '/some/invalid/directory';
      // Initially there should not be any file
      expect(fs.readdirSync(TEST_TEMP_DIR)).to.be.eql([]);

      extract(compressedFilePath, invalidDir)
        .then(() => {
          done(new Error('should not have resolved'));
        })
        .catch((err) => {
          try {
            expect(err).to.be.an.instanceOf(Error);
            done();
          }
          catch (error) {
            done(error);
          }
        });
    });
  });

  describe('RemoveOnly', () => {
    beforeEach((done) => {
      exec(`mkdir -p ${TEST_TEMP_DIR} && cp -R ${SAMPLE_APP_DIR}/* ${TEST_TEMP_DIR}/`, done);
    });

    afterEach((done) => {
      exec(`rm -rf ${TEST_TEMP_DIR}`, done);
    });

    it('should throw error when callback is not provided', () => {
      const errMesg = 'InvalidArgumentException: Hermes~util~removeOnly required parameter \'callback\' must be a function';
      expect(removeOnly).to.throw(Error, errMesg);
    });

    it('should return error when rootDirectory is not provided', (done) => {
      const errMesg = 'InvalidArgumentException: Hermes~util~removeOnly required parameter \'rootDirectory\' must be a string';
      removeOnly({ rootDirectory: null, patterns: null }, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.equal(errMesg);
        done();
      });
    });

    it('should return error when patterns are not provided', (done) => {
      const errMesg = 'InvalidArgumentException: Hermes~util~removeOnly required parameter \'patterns\'';
      removeOnly({ rootDirectory: '/dev/null', patterns: null }, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.equal(errMesg);
        done();
      });
    });

    it('should return error when filesystem module is invalid', (done) => {
      const errMesg = 'InvalidArgumentException: Hermes~util~removeOnly required parameter \'fileSystemModule\' must be an object';
      removeOnly({ rootDirectory: '/dev/null', patterns: 'sample-[0-9]*', fileSystemModule: 'fs' }, (err) => {
        expect(err).to.be.an.instanceof(Error);
        expect(err.message).to.equal(errMesg);
        done();
      });
    });


    it('should only delete the files and folders which are specified in patterns', (done) => {
      const afterClear = ['app', 'readme.md', 'sample'],
            removePattern = 'sample-[0-9]*';

      removeOnly({ rootDirectory: TEST_TEMP_DIR, patterns: removePattern, fileSystemModule: require('fs') }, (err) => {
        expect(err).to.be.null;
        expect(fs.readdirSync(TEST_TEMP_DIR)).to.eql(afterClear);
        done();
      });
    });
  });
});
