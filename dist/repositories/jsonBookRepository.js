var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Book } from '../entities/book';
import axios from 'axios';
// import { resolve } from 'path'
export class JsonBookRepository {
    findBook(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://caioaugustobrg.github.io/database/dados.json';
            const response = yield axios.get(url);
            const contentsArray = response.data;
            const yearsArray = [];
            if (props === null || props === void 0 ? void 0 : props.datas) {
                const { anoFinal } = props.datas;
                for (let year = props.datas.anoInicial; year <= anoFinal; year++) {
                    yearsArray.push(year);
                }
            }
            const filteredJson = contentsArray.filter((item) => {
                const datas = item === null || item === void 0 ? void 0 : item.datas;
                const datasWithoutSpecialChars = datas
                    ? datas.replace(/\[|\]|\-|'/g, '')
                    : '';
                const datasArray = datasWithoutSpecialChars.split(',').map(Number);
                return ((!(props === null || props === void 0 ? void 0 : props.lugares) || (item && item.lugares && item.lugares.toLowerCase().includes(props.lugares.toLocaleLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.autores) || (item && item.autores && item.autores.toLowerCase().includes(props.autores.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.temas) || (item && item.temas && item.temas.toLowerCase().includes(props.temas.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.capitania) || (item && item.capitania && item.capitania.toLowerCase().includes(props.capitania.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.titulo) || (item && item.titulo && item.titulo.toLowerCase().includes(props.titulo.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.nomes) || (item && item.nomes && item.nomes.toLowerCase().includes(props.nomes.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.anoPub) || (item && item.anoPub && item.anoPub.toLowerCase().includes(props.anoPub.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.tematicas) || (item && item.tematicas && item.tematicas.toLowerCase().includes(props.tematicas.toLowerCase()))) &&
                    (!(props === null || props === void 0 ? void 0 : props.periodoA) || (item && item.periodoA && item.periodoA.toLowerCase().includes(props.periodoA.toLowerCase()))) &&
                    (yearsArray.length === 0 || datasArray.some((year) => yearsArray.includes(year))));
            });
            if (filteredJson.length > 0) {
                const booksFiltered = filteredJson.map((bookData) => new Book(bookData));
                return booksFiltered;
            }
            else {
                return null;
            }
        });
    }
}
