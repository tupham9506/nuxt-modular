import ModularContainer from './core/modular-container';

export default async function(moduleOptions) {
    await (new ModularContainer(this, moduleOptions)).ready();
}

module.exports.meta = require('../package.json');
