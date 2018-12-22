import fs from 'fs';
import { sequence } from '@nuxt/common';

function getDirectories(path, exclude = []) {
    return fs.readdirSync(path).filter(file => !exclude.includes(file) && isDirectory(`${path}/${file}`));
}

function isDirectory(path) {
    try {
        const stat = fs.statSync(path);

        return stat.isDirectory();
    } catch (error) {}

    return false;
}

function isFile(path) {
    try {
        const stat = fs.statSync(path);

        return stat.isFile();
    } catch (error) {}

    return false;
}

export {
    getDirectories,
    isDirectory,
    isFile,
    sequence
};
