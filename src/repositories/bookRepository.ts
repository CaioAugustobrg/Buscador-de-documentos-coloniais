import { type Book } from '../entities/book'
import { type BookDTO } from '../DTO/findBookDTO'
export interface BookRepository {
  findBook: (props?: BookDTO) => Promise<Book | null>
}
