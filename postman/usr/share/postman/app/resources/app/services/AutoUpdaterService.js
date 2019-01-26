var _ = require('lodash');

const LINUX = 'LINUX',
      LINUX_SNAP = 'LINUX_SNAP',
      PLATFORM = process.platform,
      SNAP = process.env.SNAP;

let _getInstallationType = function () {
  let installationType;

    switch (PLATFORM) {
      case 'linux':
        if (SNAP) {
          installationType = LINUX_SNAP;
        } else {
          installationType = LINUX;
        }
        break;
      case 'windows':
      case 'darwin':
        installationType = _.toUpper(PLATFORM);
        break;
    }

    return installationType;
},

isAppUpdateEnabled = function () {
  return _getInstallationType() !== LINUX_SNAP;
};

module.exports = {
  isAppUpdateEnabled
};
