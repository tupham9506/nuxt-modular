export default class Layouts {
    static run(modular) {
        const options = modular.options;

        if (!modular.isDirectory(options.dir.layouts)) {
            modular.logger.debug(`Modular \`${modular.name}\` no layouts directory`);

            return;
        }

        const files = {};

        modular.getFiles(options.dir.layouts, options.supportedExtensions).forEach(file => {
            const name = file
                .replace(new RegExp(`^${options.dir.layouts}/`, 'u'), '')
                .replace(new RegExp(`\\.(${options.supportedExtensions.join('|')})$`, 'u'), '');

            files[`${options.namespace ? `${options.namespace}/` : ''}${name}`] = modular.pathJoin(file);
        });

        if (files.length < 1) {
            modular.logger.debug(`Modular \`${modular.name}\` no layouts`);

            return;
        }

        Object.keys(files).forEach(key => {
            modular.moduleContainer.addLayout(files[key], key);
        });
    }
}
