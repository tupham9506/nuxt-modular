import { join } from 'path';
import consola from 'consola';

import defaults from './defaults';
import Modular from './modular';
import { getDirectories, isDirectory, isFile, sequence } from './utils';

export default class ModularContainer {
    constructor(moduleContainer, moduleOptions) {
        this.logger = consola.withScope('modular');
        this.moduleContainer = moduleContainer;
        this.nuxt = moduleContainer.nuxt;

        this.options = {
            ...defaults(moduleContainer.options),
            ...moduleContainer.options.modular,
            ...moduleOptions
        };

        this.modularDir = join(
            this.moduleContainer.options.srcDir,
            this.options.dir.modular
        );
    }

    async ready() {
        if (!this.validate()) {
            return;
        }

        this.logger.info('Modular initializing');

        this.options = {
            ...this.options,
            ...this.loadConfigFile()
        };

        if (typeof this.options.extend === 'function') {
            this.options.extend.call(null, this);

            delete this.options.extend;
        }

        await this.nuxt.callHook('modular:before', this, this.modular);

        await sequence(this.modular, this.loadModular.bind(this));

        await this.nuxt.callHook('modular:done', this);
    }

    validate() {
        if (!isDirectory(this.modularDir)) {
            this.logger.warn(`Modular directory \`${this.modularDir}\` not found`);

            return false;
        }

        this.modular = getDirectories(this.modularDir, this.options.exclude);

        if (!this.modular.length) {
            this.logger.warn(`Modular directory \`${this.modularDir}\` does not contain directories`);

            return false;
        }

        return true;
    }

    loadConfigFile() {
        const configFile = join(this.modularDir, this.options.configFile);

        if (!isFile(configFile)) {
            return {};
        }

        this.logger.debug(`Modular load config file \`${configFile}\`.`);

        return this.nuxt.resolver.requireModule(configFile);
    }

    async loadModular(name) {
        await (new Modular(name, this)).ready();
    }
}
