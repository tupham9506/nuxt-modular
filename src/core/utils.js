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

/**
 * #1
 * Remove ~/ and @/ of path
 * @param  {Object|String} path [description]
 * @return {Object|String}      [description]
 */
function removeSpecialCharacterInPath(path) {
    const replaceRegex = /^(\~\/|\@\/)/;
    if (typeof path === 'object' && path.src) {
        path.src = path.src.replace(replaceRegex, '');
    }
    if(typeof path === 'string') {
        path = path.replace(replaceRegex, '');
    }
    return path;
}

export {
    getDirectories,
    isDirectory,
    isFile,
    sequence,
    removeSpecialCharacterInPath
};
