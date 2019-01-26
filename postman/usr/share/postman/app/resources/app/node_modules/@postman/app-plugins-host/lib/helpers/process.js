module.exports = {
  /**
     * @method isAlive
     * @description It is used to detect whether a process is alive
     * @param {number} pid
     * @throws InvalidParamException
     * @returns {Boolean}
     */
  isProcessAlive (pid) {
    let isAlive = true;

    if (typeof pid !== 'number' || isNaN(pid)) {
      throw new Error('InvalidParamException - process id should be of type number');
    }

    try {
      // https://nodejs.org/api/process.html#process_process_kill_pid_signal
      // As a special case, a signal of 0 can be used to test for the existence of a process.
      // throws an exception if the parent process doesn't exist anymore.
      process.kill(pid, 0);
    }
    catch (e) {
      isAlive = false;
    }
    return isAlive;
  }
}
;
