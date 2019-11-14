class AppStatus {
  constructor () {
    this._resolvePromise;

    // This promise gets resolved when appStatus.requesterBooted is called
    this._pendingPromise = new Promise((resolve, reject) => {
      this._resolvePromise = resolve;
    });
  }

  onRequesterBooted () {
    return this._pendingPromise;
  }

  requesterBooted () {
    this._resolvePromise && this._resolvePromise();
  }
}

module.exports = new AppStatus();
