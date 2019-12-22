const files = require.context(
    '@/<%= options.dir %>',
    true,
    /\.(<%= extensions %>)$/u
);
const filenames = files.keys();

function getModule(filename) {
    const file = files(filename);
    let module = file.default || file;
    // #3 Default namespaced true if dont set
    if(!module.hasOwnProperty('namespaced')) {
      module.namespaced = true;
    }
    return module;
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
