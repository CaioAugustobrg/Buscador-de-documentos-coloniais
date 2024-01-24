import { type BookDTO } from '../DTO/findBookDTO'
import { type JsonBookRepository } from '../repositories/jsonBookRepository'
import { Book } from '../entities/book'
import ApiError from '../utils/logs/apiError'

export class SearchBookUseCase {
  constructor (
    private readonly JsonBookRepository: JsonBookRepository
  ) { }

  async handle (httpRequest: BookDTO): Promise<Book | null> {
    const book = new Book(httpRequest)
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
