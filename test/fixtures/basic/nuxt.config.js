import { resolve } from 'path';

export default {
    srcDir: __dirname,
    rootDir: resolve(__dirname, '../../../'),
    buildDir: resolve(__dirname, '.nuxt'),
    dev: false,
    modules: [
        '@@'
    ]
};
