import { resolve } from 'path';

export default class Store {
    static run(modular) {
        const options = modular.options;

        if (!modular.isDirectory(options.dir.store)) {
            modular.logger.debug(`Modular \`${modular.name}\` no store directory`);

            return;
        }

        if (modular.getFiles(options.dir.store, options.extensions).length < 1) {
            modular.logger.debug(`Modular \`${modular.name}\` no store`);

            return;
        }

        if (!modular.moduleContainer.options.store) {
            modular.logger.warn(`Modular \`${modular.name}\` need store, but not found on the root project`);

            return;
        }

        modular.moduleContainer.addPlugin({
            src: resolve(__dirname, 'store.plugin.js'),
            fileName: `${modular.name}.store.js`,
            options: {
                dir: `${options.dir.modular}/${modular.name}/${options.dir.store}`,
                namespace: options.namespace || options.name
            }
        });
    }
}
