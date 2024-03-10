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
import ApiError from '../utils/logs/apiError';
export class SearchBookUseCase {
    constructor(JsonBookRepository) {
        this.JsonBookRepository = JsonBookRepository;
    }
    handle(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = new Book(httpRequest);
            const findBook = yield this.JsonBookRepository.findBook(book);
            if (findBook === null) {
                throw new ApiError({
                    code: 404,
                    message: 'Nenhum artigo encontrado'
                });
            }
            return findBook;
        });
    }
}
