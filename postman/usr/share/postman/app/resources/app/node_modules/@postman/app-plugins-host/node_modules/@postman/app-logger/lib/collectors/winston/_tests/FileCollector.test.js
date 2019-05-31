const path = require('path'),
    fs = require('fs'),
    { expect } = require('chai'),
    AbstractCollector = require('../../AbstractCollector'),
    FileCollector = require('../FileCollector'),
    LOG_FILE_DIR = path.resolve(__dirname, '..', '..', '..', '..', 'test_logs'),
    LOG_FILE = path.resolve(LOG_FILE_DIR, 'winston.log'),
    resetLogFile = (done) => {
        setTimeout(() => {
            try {
                if (!fs.existsSync(LOG_FILE_DIR)) {
                    fs.mkdirSync(LOG_FILE_DIR);
                }

                fs.unlinkSync(LOG_FILE + 1);
                fs.unlinkSync(LOG_FILE + 2);
            }
            catch (e) {
                // Don't fail test case if unlink fails
            }
            finally {
                done();
            }
        }, 1000);
    };

describe('Winston/FileCollector', function () {
    before((done) => {
        resetLogFile(done);
    });

    afterEach((done) => {
        resetLogFile(done);
    });

    it('should throw error if the file option is not provided', () => {
        // eslint-disable-next-line no-new, max-len
        expect(() => { new FileCollector(); }).to.throw('InvalidParamsException: options.file should be a valid non empty string');
    });

    it('should throw error if the file option is empty', () => {
        // eslint-disable-next-line no-new, max-len
        expect(() => { new FileCollector({ file: '' }); }).to.throw('InvalidParamsException: options.file should be a valid non empty string');
    });

    it('should throw error if the file option is not of type string', () => {
        // eslint-disable-next-line no-new, max-len
        expect(() => { new FileCollector({ file: ['file'] }); }).to.throw('InvalidParamsException: options.file should be a valid non empty string');
    });

    it('should create Collector instance with winston file transport', () => {
        let fileCollector = new FileCollector({ file: LOG_FILE + 1 });
        expect(fileCollector.transports).to.be.an('array');
        expect(fileCollector.transports).to.not.be.empty;
    });

    it('should create Collector instance of type Abstract Collector', () => {
        let fileCollector = new FileCollector({ file: LOG_FILE + 2 });
        expect(fileCollector instanceof AbstractCollector).to.be.true;
    });
});
