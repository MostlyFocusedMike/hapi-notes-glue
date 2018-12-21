module.exports = {
    /* configure the server here */
    server: {
        host: 'localhost',
        port: 3111,
    },
    register: {
        /*
            plugins go in an array, and can be passed
            in any of the ways they could be with the
            server.register() method
        */
        plugins: [
            require('inert'),
            {
                plugin: require('./my-plugin.js'),
                options: {
                    msg: 'just showing that he options go through',
                },
            },
        ],
        /* registration options object */
        options: {
            once: true,
        },
    },
};
