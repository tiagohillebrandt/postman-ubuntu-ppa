const { expect } = require('chai'),
    { ERROR, WARN, INFO } = require('../../constants/level'),
    { isValidLevel } = require('../validate');

describe('Validate - isValidLevel', () => {
    it('should return false for undefined', () => {
        expect(isValidLevel()).to.be.false;
    });

    it('should return false for random string', () => {
        expect(isValidLevel('random string')).to.be.false;
    });

    it('should return true for error', () => {
        expect(isValidLevel(ERROR)).to.be.true;
    });

    it('should return true for warn', () => {
        expect(isValidLevel(WARN)).to.be.true;
    });

    it('should return false for info ', () => {
        expect(isValidLevel(INFO)).to.be.true;
    });
});
