const os = require('os'),
    path = require('path'),
    fs = require('fs'),
    { expect } = require('chai'),
    Originator = require('../AbstractOriginator'),
    Collector = require('../../collectors/AbstractCollector'),
    WinstonConsoleCollector = require('../../../').Collectors.Console,
    WinstonFileCollector = require('../../../').Collectors.File,
    LOG_FILE_DIR = path.resolve(__dirname, '..', '..', 'test_logs'),
    LOG_FILE = path.resolve(LOG_FILE_DIR, 'winston.log'),
    resetLogFile = (done) => {
        setTimeout(() => {
            try {
                if (!fs.existsSync(LOG_FILE_DIR)) {
                    fs.mkdirSync(LOG_FILE_DIR);
                }
                fs.unlinkSync(LOG_FILE + 1);
                fs.unlinkSync(LOG_FILE + 2);
                fs.unlinkSync(LOG_FILE + 3);
            }
            catch (e) {
                // Don't fail test case if unlink fails
            }
            finally {
                done();
            }
        }, 1000);

    },
    stdMocks = require('std-mocks');

describe('Originator', () => {
    before((done) => {
        global.Date.now = () => {
            return 123456;
        };
        resetLogFile(done);
    });

    afterEach((done) => {
        resetLogFile(done);
    });


    it('should thrown Invalid param exception on wrong options type', () => {
        // eslint-disable-next-line no-new,max-len
        expect(() => { new Originator('options'); }).to.throw('InvalidParamException: options should be of type Object');
    });

    it('should create originator instance with default level as info', () => {
        let originator = new Originator({ origin: 'foo' });

        expect(originator.error).to.not.empty;
        expect(originator.warn).to.not.empty;
        expect(originator.info).to.not.empty;
        expect(originator.level).to.equal('info');
    });

    it('should create originator instance level as error', () => {
        let originator = new Originator({ level: 'error', origin: 'foo' });

        expect(originator.level).to.equal('error');
    });

    it('should create originator instance level as warn', () => {
        let originator = new Originator({ level: 'warn', origin: 'foo' });

        expect(originator.level).to.equal('warn');
    });

    it('should create originator instance level as info', () => {
        let originator = new Originator({ level: 'info', origin: 'foo' });

        expect(originator.level).to.equal('info');
    });

    it('should create originator instance level as info when invalid level is provided', () => {
        let originator = new Originator({ level: 'invalid', origin: 'foo' });

        expect(originator.level).to.equal('info');
    });

    it('should log on calling error method', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['error { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'message\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.error('message');
        stdMocks.restore();

        output = stdMocks.flush();

        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling warn method', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['warn { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'message\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.warn('message');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling info method', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['info { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'message\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.info('message');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling error method with sessionId', () => {
        let originator = new Originator({ origin: 'foo', sessionId: 'newSession', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['error { sessionId: \'newSession\',\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'message\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.error('message');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling info method with empty message', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['info { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.info();
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling info method with 2 messages', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['info { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'first\', \'second\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.info('first', 'second');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should log on calling info method with 3 messages', () => {
        let originator = new Originator({ origin: 'foo', collectors: [new Collector()] }),
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = ['info { sessionId: 123456,\n  timestamp: 123456,\n  origin: \'foo\',\n  messages: [ \'first\', \'second\', \'third\' ] }\n']; // eslint-disable-line max-len

        stdMocks.use();
        originator.info('first', 'second', 'third');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should create originators with winston console collector', () => {
        let output = {},
            stdout = [],
            stderr = [],
            expectedStdout = [
                `123456 foo info "foo"${os.EOL}`,
                `123456 bar error "Foo Error"${os.EOL}`,
                `123456 foo warn {"foo":"bar"}${os.EOL}`
            ],
            collectors = [new WinstonConsoleCollector()],
            fooLogger = new Originator({ collectors, origin: 'foo' }),
            barLogger = new Originator({ collectors, origin: 'bar' });

        stdMocks.use();
        fooLogger.info('foo');
        barLogger.error('Foo Error');
        fooLogger.warn({ foo: 'bar' });
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(3);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should create originators with winston console collector and call with two arguments', () => {
        let output = {},
            stdout = [],
            stderr = [],
            expectedStdout = [
                `123456 foo info "foo","bar"${os.EOL}`
            ],
            collectors = [new WinstonConsoleCollector()],
            fooLogger = new Originator({ collectors, origin: 'foo' });

        stdMocks.use();
        fooLogger.info('foo', 'bar');
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(1);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);
    });

    it('should create originator with winston file collector', (done) => {
        let fileString = '',
            expectedFileOut = `[123456][123456][foo][info]["foo"]${os.EOL}[123456][123456][foo][warn][{"foo":"bar"}]${os.EOL}`, // eslint-disable-line max-len
            collectors = [new WinstonFileCollector({ file: LOG_FILE + 1 })],
            fooLogger = new Originator({ collectors, origin: 'foo' });

        fooLogger.info('foo');
        fooLogger.warn({ foo: 'bar' });

        // Reading file immediately will throw error
        setTimeout(() => {
            fileString = fs.readFileSync(LOG_FILE + 1, { encoding: 'utf-8' });
            try {
                expect(fileString).to.equal(expectedFileOut);
                done();
            }
            catch (e) {
                done(e);
            }
        }, 1000);
    });

    it('should create originator with winston file collector and call with two arguments', (done) => {
        let fileString = '',
            expectedFileOut = `[123456][123456][foo][info]["foo","bar"]${os.EOL}`,
            collectors = [new WinstonFileCollector({ file: LOG_FILE + 2 })],
            fooLogger = new Originator({ collectors, origin: 'foo' });

        fooLogger.info('foo', 'bar');

        // Reading file immediately will throw error
        setTimeout(() => {
            fileString = fs.readFileSync(LOG_FILE + 2, { encoding: 'utf-8' });
            try {
                expect(fileString).to.equal(expectedFileOut);
                done();
            }
            catch (e) {
                done(e);
            }
        }, 1000);
    });

    it('should create originator with winston file and winston console collector', (done) => {
        let fileString = '',
            output = {},
            stdout = [],
            stderr = [],
            expectedStdout = [
                `123456 foo info "foo"${os.EOL}`,
                `123456 foo warn {"foo":"bar"}${os.EOL}`
            ],
            expectedFileOut = `[123456][123456][foo][info]["foo"]${os.EOL}[123456][123456][foo][warn][{"foo":"bar"}]${os.EOL}`, // eslint-disable-line max-len
            collectors = [
                new WinstonConsoleCollector(),
                new WinstonFileCollector({ file: LOG_FILE + 3 })
            ],
            fooLogger = new Originator({ collectors: collectors, origin: 'foo' });

        stdMocks.use();
        fooLogger.info('foo');
        fooLogger.warn({ foo: 'bar' });
        stdMocks.restore();

        output = stdMocks.flush();
        stdout = output.stdout;
        stderr = output.stderr;

        expect(stdout).to.be.an('array');
        expect(stdout).to.have.lengthOf(2);
        expect(stdout).to.eql(expectedStdout);
        expect(stderr).to.be.an('array');
        expect(stderr).to.have.lengthOf(0);


        // Reading file immediately will throw error
        setTimeout(() => {
            fileString = fs.readFileSync(LOG_FILE + 3, { encoding: 'utf-8' });
            try {
                expect(fileString).to.equal(expectedFileOut);
                done();
            }
            catch (e) {
                done(e);
            }
        }, 1000);
    });
});
