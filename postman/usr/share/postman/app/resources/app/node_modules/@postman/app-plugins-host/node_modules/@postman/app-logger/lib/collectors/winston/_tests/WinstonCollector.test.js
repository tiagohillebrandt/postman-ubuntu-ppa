const { expect } = require('chai'),
    AbstractCollector = require('../../AbstractCollector'),
    WinstonCollector = require('../WinstonCollector');

describe('Winston/Collector', () => {

    it('should create Collector instance with winston console transport', () => {
        let consoleCollector = new WinstonCollector();
        expect(consoleCollector.transports).to.be.an('array');
        expect(consoleCollector.transports).to.not.be.empty;
    });

    it('should create Collector instance of type Abstract Collector', () => {
        let consoleCollector = new WinstonCollector();
        expect(consoleCollector instanceof AbstractCollector).to.be.true;
    });
});
