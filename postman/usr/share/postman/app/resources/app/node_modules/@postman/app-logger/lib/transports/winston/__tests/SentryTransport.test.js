const { expect } = require('chai'),
    sinon = require('sinon'),
    _ = require('lodash'),
    SentryTransport = require('../SentryTransport'),
    dummySentry = {
        captureException: _.noop
    };

describe('Winston/SentryTransport', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });


    it('should create Sentry instance with the sentry provided', () => {
        let sentryTransport = new SentryTransport({ sentry: dummySentry });
        expect(sentryTransport.log).to.be.a('function');
    });

    describe('SentryTransport.log', () => {
        it('should call the sentry.captureException with the info.messages[0] of error type', () => {
            let sentryTransport = new SentryTransport({ sentry: dummySentry }),
                spy = sandbox.spy(dummySentry, 'captureException'),
                error = new Error('test'),
                info = { messages: [error] };

            sentryTransport.log(info, _.noop);
            expect(spy.calledWith(error));
        });

        it('should call the sentry.captureException with the info.messages[0] of string type by converting to error type', () => { // eslint-disable-line max-len
            let sentryTransport = new SentryTransport({ sentry: dummySentry }),
                spy = sandbox.spy(dummySentry, 'captureException'),
                info = { messages: ['test'] };

            sentryTransport.log(info, _.noop);
            expect(spy.args[0][0]).to.be.a('error');
        });

        it('should call the sentry.captureException with the info.messages[0] and attaches following values to extra property', () => { // eslint-disable-line max-len
            let sentryTransport = new SentryTransport({ sentry: dummySentry }),
                spy = sandbox.spy(dummySentry, 'captureException'),
                error = new Error('test'),
                extraData = 'extra data',
                info = { messages: [error, extraData] };

            sentryTransport.log(info, _.noop);
            expect(spy.args[0][0]).to.be.a('error');
            expect(spy.args[0][0].extra).to.be.a('array');
            expect(spy.args[0][0].extra).to.be.eql([extraData]);
        });
    });
});
