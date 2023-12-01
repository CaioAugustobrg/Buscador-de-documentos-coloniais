/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type BookRepository } from './bookRepository'
import { Book } from '../entities/book'
import { type BookDTO } from '../DTO/findBookDTO'

import { readFile } from 'fs/promises'
import { resolve } from 'path'

export class JsonBookRepository implements BookRepository {
  async findBook (props?: BookDTO): Promise<Book | null> {
    const filePath = resolve('../../sentinela/server/src/database/dados.json')
    const contents = await readFile(filePath, { encoding: 'utf8' })
    const contentsArray = JSON.parse(contents)
    const filteredJson = contentsArray.filter((item: BookDTO) => {
      return (

        (!props?.lugares || (item && item.lugares && item.lugares.toLowerCase().includes(props.lugares.toLocaleLowerCase()))) &&
    (!props?.autores || (item && item.autores && item.autores.toLowerCase().includes(props.autores.toLowerCase()))) &&
    (!props?.temas || (item && item.temas && item.temas.toLowerCase().includes(props.temas.toLowerCase()))) &&
    (!props?.capitania || (item && item.capitania && item.capitania.toLowerCase().includes(props.capitania.toLowerCase()))) &&
    (!props?.titulo || (item && item.titulo && item.titulo.toLowerCase().includes(props.titulo.toLowerCase()))) &&
    (!props?.nomes || (item && item.nomes && item.nomes.toLowerCase().includes(props.nomes.toLowerCase()))) &&
    (!props?.anoPub || (item && item.anoPub && item.anoPub.toLowerCase().includes(props.anoPub.toLowerCase()))) &&
    (!props?.tematicas || (item && item.tematicas && item.tematicas.toLowerCase().includes(props.tematicas.toLowerCase()))) &&
    (!props?.periodoA || (item && item.periodoA && item.periodoA.toLowerCase().includes(props.periodoA.toLowerCase())))

      )
    })
    if (filteredJson.length > 0) {
      const booksFiltered = filteredJson.map((bookData: BookDTO) => new Book(bookData))
      console.log(booksFiltered)
      return booksFiltered
    } else {
      return null
    }
  }
}
