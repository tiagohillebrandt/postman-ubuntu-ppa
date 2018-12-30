const AbstractUpdater = require('./AbstractUpdater');

class DarwinUpdater extends AbstractUpdater {
    constructor (updaterOptions) {
        super(updaterOptions);
    }

    /**
     * @method getFeedUrl
     * @param {Object} updateInfo
     */
    getFeedUrl (updateInfo) { // eslint-disable-line class-methods-use-this
        var argsArray = [
            `currentVersion=${updateInfo.version}`,
            `platform=${updateInfo.platform.toLowerCase()}`,
            `channel=${AbstractUpdater.getChannelForARS(updateInfo.channel)}`,
            updateInfo.additionalParamsString
        ];
        return `${updateInfo.updateServerDomain}update/status?${argsArray.join('&')}`;
    }
}

module.exports = DarwinUpdater;
