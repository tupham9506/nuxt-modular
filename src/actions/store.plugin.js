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

        // #4 Store module
        let storePath = ['<%= options.namespace %>'];
        if(name) {
          storePath.push(name);
        }

        store.registerModule(storePath, getModule(filename));
    }
};
