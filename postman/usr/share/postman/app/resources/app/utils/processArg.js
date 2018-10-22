module.exports = {
  /**
   * @method getPath
   * @description It returns the
   * @returns String
   */
  getValue: (argName) => {
    let value = '';
    process.argv.slice(1).forEach((arg) => {
      if (arg.startsWith(`--${argName}=`)) {
        let argArr = arg.split('=');
        if (argArr[1] !== '') {
          value = argArr.slice(1).join('=');
        }
        return false;
      }
    });
    return value;
  }
};
