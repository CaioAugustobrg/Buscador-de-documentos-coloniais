// import { MissingParamError } from '../errors/missingParamError'
import { type BookDTO } from '../DTO/findBookDTO'
// import { Book } from '../entities/book'
import { type JsonBookRepository } from '../repositories/jsonBookRepository'
import { Book } from '../entities/book'
import ApiError from '../utils/logs/apiError'

// interface TypedRequest<T> extends HttpRequest {
//   body: T
// }
export class SearchBookUseCase {
  constructor (
    private readonly JsonBookRepository: JsonBookRepository
  ) { }

  async handle (httpRequest: BookDTO): Promise<any> {
    console.log('usecase', httpRequest)
    // let gotBodyProperty
    // for (const bodyPropeties in HttpRequest.body) {
    //   if (bodyPropeties !== '') {
    //     gotBodyProperty = +1
    //   }
    // }
    // if (gotBodyProperty === 0) {
    //   return badRequest(new MissingParamError('At least one field'))
    // }
    // const {
    //   AnoF,
    //   AnoI,
    //   anoPub,
    //   autores,
    //   capitania,
    //   datas,
    //   fonte,
    //   id_X,
    //   link,
    //   lugares,
    //   nomes,
    //   periodoA,
    //   ref,
    //   store_id,
    //   temaPercent,
    //   temas,
    //   tematicas,
    //   titulo
    // } = httpRequest.body
    const book = new Book(httpRequest)
    console.log('usecase', book)
    const findBook = await this.JsonBookRepository.findBook(book)
    if (findBook === null) {
      throw new ApiError({
        code: 404,
        message: 'Nenhum artigo encontrado'
      })
    }
    return findBook
  }
}
