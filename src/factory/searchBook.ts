import { SearchBookController } from '../controller/searchBookController'
import { SearchBookUseCase } from '../useCase/searchBook'
import { JsonBookRepository } from '../repositories/jsonBookRepository'

const jsonBookRepository = new JsonBookRepository()
const searchBookUseCase = new SearchBookUseCase(jsonBookRepository)
const searchBookController = new SearchBookController(searchBookUseCase)
export { searchBookUseCase, searchBookController }
