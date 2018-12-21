const Glue = require('glue');
const manifest = require('./manifest');

/* we need to tell glue where to start any its relative paths */
const options = {
    relativeTo: __dirname + '/lib',
};

const startServer = async () => {
    try {
        const server = await Glue.compose(manifest, options);
        /*
            The static directory is just to show that inert works and that routes
            need to be loaded, but plugins don't
        */
        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: __dirname,
                },
            },
        });
        await server.start();
        console.log(`Server up and running at: ${server.info.uri}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();
