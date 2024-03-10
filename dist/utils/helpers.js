import fs from 'fs';
const pathExists = (path) => {
    return fs.existsSync(path);
};
const canAcessPath = (path, mode) => {
    try {
        fs.accessSync(path, mode);
        return true;
    }
    catch (error) {
        return error.code === 'ENOENT';
    }
};
export { pathExists, canAcessPath };
