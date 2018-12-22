const regexFiles = /^\.\/(?!<%= ignorePrefix %>)[^.]+\.(<%= extensions %>)$/u;
const files = require.context('@/<%= options.dir %>', true, regexFiles);
const filenames = files.keys();

function getModule(filename) {
    const file = files(filename);

    return file.default || file;
}

export default ({ store }) => {
    for (const filename of filenames) {
        let name = filename.replace(/^\.\//u, '').replace(/\.(<%= extensions %>)$/u, '');

        if (name === 'index') {
            name = '';
        }

        store.registerModule('<%= options.namespace %>' + (name ? `/${name}` : ''), getModule(filename));
    }
};
