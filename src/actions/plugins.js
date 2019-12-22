import { removeSpecialCharacterInPath } from '../core/utils';
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
            // #1 Replace special character before add plugin
            plugin = removeSpecialCharacterInPath(plugin);
            modular.moduleContainer.addPlugin(plugin);
        });
    }
}
