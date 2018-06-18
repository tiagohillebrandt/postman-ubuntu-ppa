const { expect } = require('chai'),
      { init } = require('../../../src'),
      mockDateNow = function mockDateNow() {
        // mock now = 1522229136510ms = 28th Mar 2018
        return 1522229136510;
      };

describe('init', () => {
  let originalDateNow = null;

  beforeEach(() => {
    originalDateNow = Date.now;
    Date.now = mockDateNow;
  });

  afterEach(() => {
    Date.now = originalDateNow;
  });

  it('should throw error if the update info is not provided', () => {
    let error = null;
    try {
      init();
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData should not be empty');
    }
  });

  it('should throw error if the update info is not of type object', () => {
    let error = null;
    try {
      init('initInputData');
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData should be of type object');
    }
  });

  it('should throw error if the update info is of type array', () => {
    let error = null;
    try {
      init(['initInputData']);
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData should be of type object');
    }
  });

  it('should throw error if the update info is empty object', () => {
    let error = null;
    try {
      init({});
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData.packageName should be of type string');
    }
  });


  it('should throw error if the initInputData.packageName is not of type string', () => {
    let error = null;
    try {
      init({ packageName: { name: 'name' } });
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData.packageName should be of type string');
    }
  });


  it('should throw error if the initInputData.packageName is empty', () => {
    let error = null;
    try {
      init({ packageName: '' });
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData.packageName should not be empty');
    }
  });

  it('should throw error if the initInputData.packageName is just spaces', () => {
    let error = null;
    try {
      init({ packageName: ' ' });
    }
    catch (e) {
      error = e;
    }
    finally {
      expect(error).to.be.instanceof(Error);
      expect(error.message).to.eql('InvalidArgumentException: Hermes~init - initInputData.packageName should not be empty');
    }
  });

  it('should generate packageName with timestamp', () => {
    const updateOutputData = init({ packageName: 'packName' });
    expect(updateOutputData).to.eql({ packageName: 'packName', eID: 'packName-1522229136510' });
  });
});
