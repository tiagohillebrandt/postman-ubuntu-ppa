const { fork } = require('child_process'), // eslint-disable-line security/detect-child-process
      { isProcessAlive } = require('./lib/helpers/process'),
      MAXIMUM_BOOT_COUNT = 10,
      SIGINT = 'SIGINT';

class PluginHost {
  constructor (options) {
    this.bootCounter = 0;
    this.host = null;
    this.hostHealthMonitor = null;
    this.options = options || {};
    this.bootHost = this.bootHost.bind(this);
    this.bootHost();
  }

  bootHost () {
    // Clean the old host events if available
    this.unsubscribeFromOldHost();

    // Bail if the host has terminated
    // Also, do not use logger when App is quitting, it causes App to not quit on Mac
    if (this.terminated) {
      return;
    }

    // Increment the counter
    this.incrementBootCounter();

    // Check whether the boot is needed
    if (!this._canBootHost()) {
      pm.logger.error(
        new Error('PluginHost~bootHost: Disabling boot since it has exceeded the maximum allowed boot count ' +
          this.bootCounter)
      );
      return;
    }

    // Now boot the host process
    this.host = fork(require.resolve('./lib/host'), { env: this._getHostEnvironment() });

    this.initiateHostHealthMonitor(this.host.pid);
    this.subscribeToHost();

    pm.logger.info(`PluginHost~bootHost: Booted - ${this.bootCounter}`);
  }

  incrementBootCounter () {
    this.bootCounter++;
  }

  subscribeToHost () {
    this.host.on('message', PluginHost.onHostMessage);
    this.hostErrorOrExit()
      .then(this.bootHost);
  }

  /**
   * @method multiplexErrorAndExit
   * @description It is to ensure that the error and exit hook handlers are not called twice.
   * @return {Promise}
   */
  hostErrorOrExit () {
    return new Promise((resolve) => {
      this.host.on('error', (/* err */) => {
        // Using pm.logger here causes App to not quit on Mac
        resolve();
      });
      this.host.on('exit', (/* code, signal */) => {
        // Using pm.logger here causes App to not quit on Mac
        resolve();
      });
    });
  }

  /**
   * @method unsubscribeFromOldHost
   * @description This is to ensure the old host is cleanedup properly
   */
  unsubscribeFromOldHost () {
    let host = this.host;

    if (!host || typeof host.off !== 'function') {
      return;
    }

    // This may be needed if the host is not exited properly
    this.host.off('message', PluginHost.onHostMessage);

    // Remove the old reference
    this.host = null;
  }

  /**
   * @method initiateHostHealthMonitor
   * @description It starts the setInterval to verify the child availability and re-boot if not available.
   * @param {Number} pid
   */
  initiateHostHealthMonitor (pid) {
    // To makesure the method sets only one monitor on the host even when called twice or thrice
    clearInterval(this.hostHealthMonitor);
    this.hostHealthMonitor = setInterval(() => {

      // Here we need to clear our healthCheck other wise it is a waste of resource
      if (!this._canBootHost()) {
        clearInterval(this.hostHealthMonitor);
        return;
      }

      if (!isProcessAlive(pid)) {
        pm.logger.error(new Error('PluginHost~initiateHostHealthMonitor: Health monitor found that host died'));
        this.bootHost();
      }
    }, 5000);
  }

  /**
   * @method terminate
   * @description It is used to kill the host gracefully, so that it won't be respawned by healthchecker
   */
  terminate () {
    // If host is still alive means kill it.
    if (this.host && !this.host.killed) {
      this.host.kill(SIGINT);
      this.terminated = true;
      this.host = null;
    }
  }

  static onHostMessage (message) {
    pm.logger.info('PluginHost~onHostMessage: Message from host', message);
  }

  /**
     * @private
     * @method _getHostEnvironment
     * @description returns the environment variables to be injected in the host process
     * @returns {Object}
     */
  _getHostEnvironment () {
    return this.options.env || {};
  }

  /**
     * @private
     * @method _canBootHost
     * @description It checks whether we can boot the host,
     * right now the host can be booted only if the count is less than bootCounter
     * @returns {Boolean}
     */
  _canBootHost () {
    return !this.terminated && (this.bootCounter < MAXIMUM_BOOT_COUNT);
  }
}

module.exports = PluginHost;
