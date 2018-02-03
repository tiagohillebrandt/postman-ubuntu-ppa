(function (win, um) {
    var VirtualConsole,
        bus = um.bus;

    VirtualConsole = function (id) {
        this.log = bus.send.bind(bus, 'console', id, 'log');
        this.info = bus.send.bind(bus, 'console', id, 'info');
        this.warn = bus.send.bind(bus, 'console', id, 'warn');
        this.error = bus.send.bind(bus, 'console', id, 'error');
    };

    um.Console = VirtualConsole;

}(this, this.__um));
