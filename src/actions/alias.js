export default class Alias {
    static run(modular) {
        if (!modular.options.namespace) {
            return;
        }

        modular.moduleContainer.extendBuild(config => {
            config.resolve.alias[modular.options.namespace] = modular.modularPath;
        });
    }
}
