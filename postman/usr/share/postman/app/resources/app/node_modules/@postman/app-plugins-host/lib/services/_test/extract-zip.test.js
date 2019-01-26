const path = require('path'),
      glob = require('glob'),
      _ = require('lodash'),
      shell = require('shelljs'),
      expect = require('chai').expect,
      extract = require('../extract-zip');

describe('extract-zip', function () {
  let sampleZipsDir = path.resolve(__dirname, 'data', 'sample-zips'),
      unzipDir = path.resolve(__dirname, 'data', 'unzip'),
      unzippedContents = path.resolve(unzipDir, '**'),
      getRelativePath = path.relative.bind(path, unzipDir),
      getRelativeContents = (paths) => {
        return _.map(paths, getRelativePath).slice(1);
      };

  beforeEach(function () {
    shell.rm('-rf', unzipDir);
    shell.mkdir('-p', unzipDir);
  });

  after(function () {
    shell.rm('-rf', unzipDir);
  });

  /**
   * zipped-file
   *    directory
   *      file-1.txt
   *      file-2.txt
   */
  it('should unzip a file containing a single directory which has multiple text files', (done) => {
    let source = path.resolve(sampleZipsDir, 'sample-1.zip'),
        expectedContents = [
          'directory',
          path.join('directory', 'file-1.txt'),
          path.join('directory', 'file-2.txt')
        ],
        contents;

    extract(source, { dir: unzipDir }, (err) => {
      contents = getRelativeContents(glob.sync(unzippedContents));

      try {
        expect(err).to.be.not.ok;
        expect(contents).to.eql(expectedContents);

        done();
      }
      catch (error) {
        done(error);
      }
    });
  });

  /**
   * zipped-file
   *    directory
   *      file.txt
   *      sub-directory-1
   *        file-1.txt
   *        sub-directory-1-1
   *          file-1-1.txt
   *      sub-directory-2
   *        file-2.txt
   */
  it('should unzip a file containing a single directory which has multiple text files and subdirectories', (done) => {
    let source = path.resolve(sampleZipsDir, 'sample-2.zip'),
        expectedContents = [
          'directory',
          path.join('directory', 'file.txt'),
          path.join('directory', 'sub-directory-1'),
          path.join('directory', 'sub-directory-1', 'file-1.txt'),
          path.join('directory', 'sub-directory-1', 'sub-directory-1-1'),
          path.join('directory', 'sub-directory-1', 'sub-directory-1-1', 'file-1-1.txt'),
          path.join('directory', 'sub-directory-2'),
          path.join('directory', 'sub-directory-2', 'file-2.txt')
        ],
        contents;

    extract(source, { dir: unzipDir }, (err) => {
      contents = getRelativeContents(glob.sync(unzippedContents));

      try {
        expect(err).to.be.not.ok;
        expect(contents).to.eql(expectedContents);

        done();
      }
      catch (error) {
        done(error);
      }
    });
  });

  /**
   * zipped-file
   *    directory
   *      file.txt
   *      symlink (should be omitted)
   */
  it('should unzip a file containing a single directory which has symlinks', (done) => {
    let source = path.resolve(sampleZipsDir, 'sample-3.zip'),
        expectedContents = [
          'directory',
          path.join('directory', 'file.txt')
        ],
        contents;

    extract(source, { dir: unzipDir }, (err) => {
      contents = getRelativeContents(glob.sync(unzippedContents));

      try {
        expect(err).to.be.not.ok;
        expect(contents).to.eql(expectedContents);

        done();
      }
      catch (error) {
        done(error);
      }
    });
  });

  /**
   * zipped-file
   *  directory
   *    sub-directory-1
   *      file-1.txt
   *    sub-directory-2
   *      file-2.txt
   */
  it('should unzip a file containing multiple directories', (done) => {
    let source = path.resolve(sampleZipsDir, 'sample-4.zip'),
        expectedContents = [
          'directory',
          path.join('directory', 'sub-directory-1'),
          path.join('directory', 'sub-directory-1', 'file-1.txt'),
          path.join('directory', 'sub-directory-2'),
          path.join('directory', 'sub-directory-2', 'file-2.txt')
        ],
        contents;

    extract(source, { dir: unzipDir }, (err) => {
      contents = getRelativeContents(glob.sync(unzippedContents));

      try {
        expect(err).to.be.not.ok;
        expect(contents).to.eql(expectedContents);

        done();
      }
      catch (error) {
        done(error);
      }
    });
  });
});
