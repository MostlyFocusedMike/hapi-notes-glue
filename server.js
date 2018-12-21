const Glue = require('glue');
const Path = require('path');
const manifest = require('./manifest');

/* we need to tell glue where to start any its relative paths */
const glueOptions = {
    /*  Glue doesn't need us to write require() to load plugins,
        it just takes file path strings, and we set the start of
        those relative paths here with relativeTo
    */
    relativeTo: Path.join(__dirname, 'lib/plugins'),

    /*  glue can also take a pre register function which runs
        before any plugins get added to the server
    */
    preRegister: async (server) => {
        console.log("I'm the pre register function");
        console.log(`I have no plugins yet: ${JSON.stringify(server.registrations)}`);
    },
};

const startServer = async () => {
    try {
        /* just call Glue compose with the manfest and its options */
        const server = await Glue.compose(manifest, glueOptions);

        /*  The static directory is only to prove that inert loaded */
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
        console.log(`Look at all my plugins now: ${JSON.stringify(server.registrations)}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();
