"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.serverError = exports.ok = exports.badRequest = void 0;
var serverError_1 = require("../errors/serverError");
var badRequest = function (error) { return ({
    statusCode: 400,
    body: error.message
}); };
exports.badRequest = badRequest;
var ok = function (data) { return ({
    statusCode: 200,
    body: data
}); };
exports.ok = ok;
var serverError = function (reason) { return ({
    statusCode: 500,
    body: new serverError_1.ServerError(reason)
}); };
exports.serverError = serverError;
var notFound = function (error) { return ({
    statusCode: 404,
    body: error.message
}); };
exports.notFound = notFound;
