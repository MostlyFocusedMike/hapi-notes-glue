const myPlugin = {
    name: 'my-plugin',
    version: '1.0.0',
    register: async (server, options) => {
        /* options comes from the options object passed into server.register() */
        server.route({
            method: 'GET',
            path: '/my-plugin',
            handler: (request, h) => {
                return { options };
            },
        });
    },
};

module.exports.plugin = myPlugin;
