import { resolve } from 'path';

export default class Middleware {
    static run(modular) {
        const options = modular.options;

        if (!modular.isDirectory(options.dir.middleware)) {
            modular.logger.debug(`Modular \`${modular.name}\` no middleware directory`);

            return;
        }

        if (modular.getFiles(options.dir.middleware, options.extensions).length < 1) {
            modular.logger.debug(`Modular \`${modular.name}\` no middlewares`);

            return;
        }

        modular.moduleContainer.addPlugin({
            src: resolve(__dirname, 'middleware.plugin.js'),
            fileName: `${modular.name}.middleware.js`,
            options: {
                dir: `${options.dir.modular}/${modular.name}/${options.dir.middleware}`,
                namespace: options.namespace
            }
        });
    }
}
