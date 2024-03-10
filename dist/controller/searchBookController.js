var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { type BookDTO } from '../DTO/findBookDTO'
// import { type BookProps } from '../entities/book'
// interface TypedRequest<T> extends HttpRequest {
//   body: T
// }
export class SearchBookController {
    constructor(searchBookUseCase) {
        this.searchBookUseCase = searchBookUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const httpRequest = {
                    body: request.body
                };
                const searchThoseBooks = yield this.searchBookUseCase.handle(httpRequest.body);
                return response.status(200).json({ searchThoseBooks });
            }
            catch (error) {
                return response.status(500).json({ error: error.message || 'Erro interno do servidor' });
            }
        });
    }
}
