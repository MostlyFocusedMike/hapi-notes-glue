module.exports.plugin = {
    name: 'my-plugin',
    version: '1.0.0',
    register: async (server, options) => {
        server.route({
            method: 'GET',
            path: '/my-plugin',
            handler: (request, h) => {
                return { options };
            },
        });
    },
};
