module.exports = {
    /* configure the server here */
    server: {
        host: 'localhost',
        port: 3111,
        /*  like plugins, we don't have to use require(),
            we just give file paths, for node modules,
            use a sting value of the name
        */
        // cache: 'redis',
    },
    register: {
        /*
            plugins go in an array, and can be passed
            in any of the ways they could be with the
            server.register() method

            notice how we no longer have to use require,
            we just give a file path that goes
            off of our relativeTo option we gave
            to Glue in server.js
        */
        plugins: [
            'inert',
            // require('inert'), /* clunkier old way (technically still works) */
            {
                plugin: './my-plugin',
                // plugin: require('./lib/plugins/my-plugin'), /* clunkier old way (technically still works) */

                /* we still pass options to our plugins in the exact same way */
                options: {
                    msg: 'just showing that he options go through',
                },
            },
            // { plugin: './my-plugin' }, /* version with no options */
        ],

        /* registration options object */
        options: {
            once: true,
        },
    },
};
