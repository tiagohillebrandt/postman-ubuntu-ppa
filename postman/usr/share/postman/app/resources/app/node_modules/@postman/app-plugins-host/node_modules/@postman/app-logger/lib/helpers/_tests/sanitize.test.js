const { expect } = require('chai'),
    sanitize = require('../sanitize');

describe('Sanitize', () => {
    it('should return undefined for undefined', () => {
        expect(sanitize()).to.be.undefined;
    });

    it('should return string for string', () => {
        expect(sanitize('string')).to.eql('"string"');
    });

    it('should return object for object', () => {
        expect(sanitize({ foo: 'bar' })).to.eql('{"foo":"bar"}');
    });

    it('should return boolean for boolean', () => {
        expect(sanitize(true)).to.eql('true');
        expect(sanitize(false)).to.eql('false');
    });

    it('should return Object for Error Object', () => {
        let sanitizedError = sanitize(new Error('message')),
            parsedSanitizedError = JSON.parse(sanitizedError);

        expect(typeof sanitizedError).to.eql('string');
        expect(parsedSanitizedError.message).to.eql('message');
        expect(parsedSanitizedError.stack).to.not.Empty;
    });

    it('should not encode ~ in the message', () => {
        expect(sanitize(['module~message'])).to.be.eql('"module~message"');
    });
});
