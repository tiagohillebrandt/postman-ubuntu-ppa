const { expect } = require('chai'),
    sinon = require('sinon'),
    _ = require('lodash'),
    AbstractCollector = require('../../AbstractCollector'),
    SentryCollector = require('../SentryCollector'),
    { ERROR, INFO } = require('../../../constants/level'),
    dummySentry = {
        captureException: _.noop
    };

describe('Winston/SentryCollector', () => {
    let sandbox = null;

    before(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('should create Collector instance with level as error', () => {
        let sentryCollector = new SentryCollector({ sentry: dummySentry });
        expect(sentryCollector.transports).to.be.an('array');
        expect(sentryCollector.transports).to.not.be.empty;
        expect(sentryCollector.transports[0].level).to.be.eql(ERROR);
    });

    it('should create Collector instance of type Abstract Collector', () => {
        let sentryCollector = new SentryCollector({ sentry: dummySentry });
        expect(sentryCollector instanceof AbstractCollector).to.be.true;
    });

    it('should call the sentry.captureException', () => {
        let SentryCollectorInstance = new SentryCollector({ sentry: dummySentry }),
            spy = sandbox.spy(dummySentry, 'captureException');
        SentryCollectorInstance.log(ERROR, {
            messages: ['error']
        });
        expect(spy.callCount).to.equal(1);
    });


    it('should not call the sentry.captureException when it is not error level', () => {
        let SentryCollectorInstance = new SentryCollector({ sentry: dummySentry }),
            spy = sandbox.spy(dummySentry, 'captureException');
        SentryCollectorInstance.log(INFO, {
            messages: ['info']
        });
        expect(spy.callCount).to.equal(0);
    });

});
