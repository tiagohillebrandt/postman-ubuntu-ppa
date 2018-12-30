const { expect } = require('chai'),
    AbstractCollector = require('../AbstractCollector');

describe('AbstractCollector', () => {
    it('should create collector instance with a transporter', () => {
        let collector = new AbstractCollector();

        expect(collector.transports).to.be.an('array');
        expect(collector.transports.length).to.be.equal(1);
    });

    it('should through error if the options are of type string', () => {

        // eslint-disable-next-line no-new,max-len
        expect(() => { new AbstractCollector('options'); }).to.throw('InvalidParamsException: options should be of type object if provided');
    });

    it('should through error if the options.transport are of type string', () => {

        // eslint-disable-next-line no-new,max-len
        expect(() => { new AbstractCollector({ transports: 'transports' }); }).to.throw('InvalidParamsException: options.transports should be of type array if provided');
    });

    it('should call the log function of the transport provided when log method is called', () => {
        let level = 'info',
            inputData = 'message',
            outputData = null,
            expectedData = { level, data: inputData },
            Collector = new AbstractCollector({
                transports: [{ log: (level, data) => { outputData = { level, data }; } }]
            });

        Collector.log(level, inputData);

        expect(outputData).to.be.eql(expectedData);
    });
});
