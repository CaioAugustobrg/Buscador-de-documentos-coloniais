"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.canAcessPath = exports.pathExists = void 0;
var fs_1 = __importDefault(require("fs"));
var pathExists = function (path) {
    return fs_1.default.existsSync(path);
};
exports.pathExists = pathExists;
var canAcessPath = function (path, mode) {
    try {
        fs_1.default.accessSync(path, mode);
        return true;
    }
    catch (error) {
        return error.code === 'ENOENT';
    }
};
exports.canAcessPath = canAcessPath;
