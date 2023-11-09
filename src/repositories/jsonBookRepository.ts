/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type BookRepository } from './bookRepository'
import { type Book } from '../entities/book'
import { type BookDTO } from '../DTO/findBookDTO'

import { readFile } from 'fs/promises'
import { resolve } from 'path'

export class JsonBookRepository implements BookRepository {
  async findBook (props?: BookDTO): Promise<Book | null> {
    const filePath = resolve('../../sentinela/server/src/database/dados.json')
    const contents = await readFile(filePath, { encoding: 'utf8' })
    const contentsArray = JSON.parse(contents)
    const filteredJson = contentsArray.filter((item: any) => {
      return (
        (!props?.lugares || (item?.lugares && item.lugares.includes(props.lugares))) &&
        (!props?.autores || (item?.autores && item.autores.includes(props.autores))) &&
        (!props?.temas || (item?.temas && item.temas.includes(props.temas))) &&
        (!props?.capitania || (item?.capitania && item.capitania.includes(props.capitania))) &&
        (!props?.titulo || (item?.titulo && item.titulo.includes(props.titulo))) &&
        (!props?.nomes || (item?.nomes && item.nomes.includes(props.nomes)))
        // Add conditions for other properties as needed
      )
    })
    if (filteredJson) {
      return filteredJson as Book
    } else {
      return null
    }
  }
}
