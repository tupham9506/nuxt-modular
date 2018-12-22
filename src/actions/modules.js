export default class Modules {
    static run(modular) {
        if (!Array.isArray(modular.options.modules)) {
            return;
        }

        if (modular.options.modules.length < 1) {
            modular.logger.debug(`Modular \`${modular.name}\` no modules`);

            return;
        }

        modular.options.modules.forEach(m => {
            modular.moduleContainer.requireModule(m);
        });
    }
}
