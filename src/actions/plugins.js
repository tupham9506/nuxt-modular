export default class Plugins {
    static run(modular) {
        if (!Array.isArray(modular.options.plugins)) {
            return;
        }

        if (modular.options.plugins.length < 1) {
            modular.logger.debug(`Modular \`${modular.name}\` no plugins`);

            return;
        }

        modular.options.plugins.forEach(plugin => {
            modular.moduleContainer.addPlugin(plugin);
        });
    }
}
