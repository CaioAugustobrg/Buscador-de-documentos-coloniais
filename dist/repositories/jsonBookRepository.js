"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonBookRepository = void 0;
var book_1 = require("../entities/book");
var promises_1 = require("fs/promises");
var path_1 = require("path");
// import { resolve } from 'path'
var JsonBookRepository = /** @class */ (function () {
    function JsonBookRepository() {
    }
    JsonBookRepository.prototype.findBook = function (props) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var filePath, contents, contentsArray, yearsArray, anoFinal, year, filteredJson, booksFiltered;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filePath = (0, path_1.resolve)(__dirname, '/database/dados.json');
                        console.log('Caminho absoluto:', filePath);
                        return [4 /*yield*/, (0, promises_1.readFile)(filePath, { encoding: 'utf8' })];
                    case 1:
                        contents = _b.sent();
                        contentsArray = JSON.parse(contents);
                        console.log(props === null || props === void 0 ? void 0 : props.datas);
                        yearsArray = [];
                        if (props === null || props === void 0 ? void 0 : props.datas) {
                            anoFinal = props.datas.anoFinal;
                            for (year = props.datas.anoInicial; year <= anoFinal; year++) {
                                yearsArray.push(year);
                            }
                        }
                        console.log(yearsArray);
                        console.log((_a = props === null || props === void 0 ? void 0 : props.datas) === null || _a === void 0 ? void 0 : _a.anoFinal);
                        filteredJson = contentsArray.filter(function (item) {
                            var datas = item === null || item === void 0 ? void 0 : item.datas;
                            var datasWithoutSpecialChars = datas
                                ? datas.replace(/\[|\]|\-|'/g, '')
                                : '';
                            var datasArray = datasWithoutSpecialChars.split(',').map(Number);
                            console.log('ssss', datasArray);
                            // const yearsArrayWithoutBrackets = yearsArray ? yearsArray.replace(/\[|\]/g, '') : ''
                            return ((!(props === null || props === void 0 ? void 0 : props.lugares) || (item && item.lugares && item.lugares.toLowerCase().includes(props.lugares.toLocaleLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.autores) || (item && item.autores && item.autores.toLowerCase().includes(props.autores.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.temas) || (item && item.temas && item.temas.toLowerCase().includes(props.temas.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.capitania) || (item && item.capitania && item.capitania.toLowerCase().includes(props.capitania.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.titulo) || (item && item.titulo && item.titulo.toLowerCase().includes(props.titulo.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.nomes) || (item && item.nomes && item.nomes.toLowerCase().includes(props.nomes.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.anoPub) || (item && item.anoPub && item.anoPub.toLowerCase().includes(props.anoPub.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.tematicas) || (item && item.tematicas && item.tematicas.toLowerCase().includes(props.tematicas.toLowerCase()))) &&
                                (!(props === null || props === void 0 ? void 0 : props.periodoA) || (item && item.periodoA && item.periodoA.toLowerCase().includes(props.periodoA.toLowerCase()))) &&
                                (yearsArray.length === 0 || datasArray.some(function (year) { return yearsArray.includes(year); })));
                        });
                        if (filteredJson.length > 0) {
                            booksFiltered = filteredJson.map(function (bookData) { return new book_1.Book(bookData); });
                            console.log(booksFiltered);
                            return [2 /*return*/, booksFiltered];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return JsonBookRepository;
}());
exports.JsonBookRepository = JsonBookRepository;
