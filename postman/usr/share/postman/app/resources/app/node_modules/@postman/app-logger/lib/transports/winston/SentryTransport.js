const Transport = require('winston-transport');

/**
 * Inherit from `winston-transport` so you can take advantage
 * of the base functionality and `.exceptions.handle()`.
 */
module.exports = class SentryTransport extends Transport {
    constructor (opts) {
        super(opts);
        this.sentry = opts.sentry;
    }

    /**
     * @description It sends messages to sentry.
     * @param {Object} info
     * @param {Function} callback
     */
    log (info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });

        let errorMessage = info.messages[0];

        if (!(errorMessage instanceof Error)) {
            errorMessage = new Error(errorMessage);
        }

        // Add additional params to extra context
        errorMessage.extra = info.messages.slice(1);

        // Sending to sentry as exception
        this.sentry.captureException(errorMessage);

        callback();
    }
};
