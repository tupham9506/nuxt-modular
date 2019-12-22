import middleware from './middleware';

const files = require.context(
    '@/<%= options.dir %>',
    false,
    /\.(<%= extensions %>)$/u
);
const filenames = files.keys();

function getModule(filename) {
    const file = files(filename);

    return file.default || file;
}

for (const filename of filenames) {
    const name = filename.replace(/^\.\//u, '').replace(/\.(<%= extensions %>)$/u, '');

    middleware['<%= options.namespace ? options.namespace + "/" : "" %>' + name] = getModule(filename);
}
