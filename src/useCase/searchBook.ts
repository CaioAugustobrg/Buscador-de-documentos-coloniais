import { type HttpRequest, type HttpResponse } from '../ports/http'
import { badRequest, notFound, ok } from '../helpers/httpHelpers'
import { MissingParamError } from '../errors/missingParamError'
import { type BookDTO } from '../DTO/findBookDTO'

import { Book } from '../entities/book'
import { type JsonBookRepository } from '../repositories/jsonBookRepository'

interface TypedRequest<T> extends HttpRequest {
  body: T
}
export class SearchBookUseCase {
  constructor (
    private readonly JsonBookRepository: JsonBookRepository
  ) {
  }

  async handle (HttpRequest: TypedRequest<BookDTO>): Promise<HttpResponse> {
    let gotBodyProperty
    for (const bodyPropeties in HttpRequest?.body) {
      if (bodyPropeties !== '') {
        gotBodyProperty = +1
      }
    }
    if (gotBodyProperty === 0) {
      return badRequest(new MissingParamError('At least one field'))
    }
    const findBook = await this.JsonBookRepository.findBook(HttpRequest.body)
    if (findBook === null) {
      const erro = new Error('No books found')
      return notFound(erro)
    }
    const foundBook = new Book(findBook)
    return ok(foundBook)
  }
}
