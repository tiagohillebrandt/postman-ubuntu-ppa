const { exec } = require('child_process'),
      { expect } = require('chai'),
      path = require('path'),
      fs = require('fs'),
      clear = require('../../../src/clear'),

      TESTS_DIR = path.resolve(__dirname, '..', '..'),
      TEST_TEMP_DIR = path.resolve(TESTS_DIR, '.tmp'),
      TEST_ASSETS_DIR = path.resolve(TESTS_DIR, 'assets'),
      SAMPLE_APP_DIR = path.resolve(TEST_ASSETS_DIR, 'sample-application');

describe('Clear', () => {
  beforeEach((done) => {
    exec(`mkdir -p ${TEST_TEMP_DIR} && cp -R ${SAMPLE_APP_DIR}/* ${TEST_TEMP_DIR}/`, done);
  });

  afterEach((done) => {
    exec(`rm -rf ${TEST_TEMP_DIR}`, done);
  });

  it('should only delete the files and folders which are specified in patterns', (done) => {
    const afterClear = ['app', 'readme.md', 'sample'],
          clearInputData = {
            appName: 'sample',
            directory: TEST_TEMP_DIR,
            fileSystemModule: fs,
          };

    clear(clearInputData, (err) => {
      expect(err).to.be.null;
      expect(fs.readdirSync(TEST_TEMP_DIR)).to.eql(afterClear);
      done();
    });
  });
});
