"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3030;
var host = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : '127.0.0.1';
app.use((0, cors_1.default)({
    credentials: true,
    origin: '*'
}));
app.get('/', function (request, response) {
    response.type('text/plain');
    response.send('Server is running');
});
app.use(index_1.default);
app.listen(port, function () {
    console.log("Server is running on http://".concat(host, ":").concat(port, "; press ctrl + c to terminate"));
});
