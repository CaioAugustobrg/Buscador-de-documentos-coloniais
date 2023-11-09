// import { type HttpRequest } from '../ports/http'
import { type SearchBookUseCase } from '../useCase/searchBook'
// import { type BookProps } from '../entities/book'
import { type Request, type Response } from 'express'
// import { type BookDTO } from '../DTO/findBookDTO'
// import { type BookProps } from '../entities/book'
// interface TypedRequest<T> extends HttpRequest {
//   body: T
// }
export class SearchBookController {
  constructor (
    private readonly searchBookUseCase: SearchBookUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const searchThoseBooks = await this.searchBookUseCase.handle(request.body)
    return response.status(200).json(searchThoseBooks)
  }
}
