"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    /**
       * Creates a new instance of the API error object. This is to be thrown when used with asyncErrorHandler.
       *
       * @param error.code The optional API code for sending back to the client (default: 500)
       * @param error.error The optional API error message, interchangeable with error.message (this takes lead).
       * @param error.message The optional API error message, interchangeable with error.error (ignored if error set.)
       * @param error.log If the error message should be logged and also logged down to disk.
       * @param error.logStack If the error stack should also be logged with the error message.
       */
    function ApiError(error) {
        var _a;
        var _this = _super.call(this, (Boolean(error.error)) || error.message) || this;
        _this.code = ((_a = error.code) !== null && _a !== void 0 ? _a : 0) || 500;
        _this.message = error.error || error.message || undefined;
        console.log(error);
        _this.logStack = error.logStack || false;
        _this.log = error.log || false;
        return _this;
    }
    ApiError.prototype.toString = function () {
        return this.logStack || process.env.NODE_ENV === 'development' ? this.stack : _super.prototype.toString.call(this);
    };
    return ApiError;
}(Error));
exports.default = ApiError;
