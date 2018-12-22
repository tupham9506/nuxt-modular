import { join, resolve } from 'path';
import glob from 'glob';

import { isFile, isDirectory } from './utils';
import Actions from '../actions';

export default class Modular {
    constructor(name, { logger, moduleContainer, nuxt, options, modularDir }) {
        this.name = name;
        this.logger = logger;
        this.moduleContainer = moduleContainer;
        this.nuxt = nuxt;

        this.options = {
            ...options,
            ...options.modular ? options.modular[name] : {}
        };

        this.modularDir = modularDir;
        this.modularPath = join(modularDir, name);
    }

    async ready() {
        this.options = {
            ...this.options,
            ...this.loadConfigFile()
        };

        this.options.namespace = this.options.namespace === undefined ? this.name : String(this.options.namespace);
        this.options.prefix = this.options.prefix === undefined ? this.name : String(this.options.prefix);

        if (this.options.enabled === false) {
            this.logger.debug(`Modular \`${this.name}\` disabled`);

            return;
        }

        if (typeof this.options.extend === 'function') {
            this.options.extend.call(null, this);

            delete this.options.extend;
        }

        await this.nuxt.callHook(`modular:${this.name}:before`, this);

        Actions.run(this);

        await this.nuxt.callHook(`modular:${this.name}:done`, this);

        this.logger.success(`Modular \`${this.name}\` initialized`);
    }

    loadConfigFile() {
        const configFile = this.pathJoin(this.options.configFile);

        if (!isFile(configFile)) {
            return {};
        }

        this.logger.debug(`Modular load \`${this.name}\` with config file \`${configFile}\``);

        return this.nuxt.resolver.requireModule(configFile);
    }

    getFiles(path, ext = []) {
        return glob.sync(`${path}/**/*.{${ext.join(',')}}`, {
            cwd: this.modularPath,
            ignore: this.options.ignore
        });
    }

    isDirectory(path) {
        return isDirectory(this.pathJoin(path));
    }

    pathJoin(path) {
        return join(this.modularPath, path);
    }

    pathResolve(path) {
        return resolve(this.modularPath, path);
    }
}
