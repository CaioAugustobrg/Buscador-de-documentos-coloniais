"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var RESET = '\x1b[0m';
var TEXT = '%s';
var resetAfterLog = function (color) { return "".concat(color).concat(TEXT).concat(RESET); };
exports.COLORS = {
    DEFAULT: resetAfterLog('\x1b[0m'),
    GREEN: resetAfterLog('\x1b[32m'),
    RED: resetAfterLog('\x1b[31m')
};
var log = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log.apply(console, __spreadArray([exports.COLORS.DEFAULT, msg], args, false));
};
var success = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log.apply(console, __spreadArray([exports.COLORS.GREEN, "\u2705 ".concat(msg)], args, false));
};
var error = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([exports.COLORS.RED, "\uD83D\uDEA8 ".concat(msg)], args, false));
};
exports.default = {
    log: log,
    success: success,
    error: error
};
