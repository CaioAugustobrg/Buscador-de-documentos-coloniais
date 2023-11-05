/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Request, Response } from 'express'
// import loadDatabase from './file'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

// import {} from '../database/'
interface TypedRequest<T> extends Request {
  body: T
}
const search = async (request: TypedRequest<{
  author?: string
  places?: string
  topic?: string
  themes?: string
  captaincy?: string
  title?: string
  names?: string
  yearI?: number
  yearF?: number
  // timePeriod?: {
  //   from?: number
  //   until?: number
  // }
  pubYear?: number
  source?: string
  ref?: string
}>, response: Response) => {
  const author = request.body.author
  const places = request.body.places
  const topic = request.body.topic
  const themes = request.body.themes
  const captaincy = request.body.captaincy
  const title = request.body.title
  const names = request.body.names
  const yearI = request.body.yearI
  const yearF = request.body.yearF
  // const timePeriod = request.body.timePeriod
  const pubYear = request.body.pubYear
  const source = request.body.source
  const ref = request.body.ref

  // async function getDataAboutBook(author: string, places: string) {
  // const buffer = await promises.readFile('../database/dados')
  // const database = buffer.toString()
  // try {
  //   const data =  fs.readFileSync('../database/dados')
  //   console.log(data)
  // } catch (err: any) {
  //   if (err.code === 'ENOENT') {
  //     console.error('The file does not exist.')
  //   } else {
  //     console.error('An error occurred while reading the file:', err)
  //   }
  // }
  // console.logbuffer)
  // const contentsArray = buffer.find((item: any) => item.author === author)
  // console.log(getAuthor)
  // }
  async function logFile () {
    try {
      const filePath = resolve('../../sentinela/server/src/database/dados.json')
      const contents = await readFile(filePath, { encoding: 'utf8' })
      const contentsArray = JSON.parse(contents)
      // const authorToSearch = autores // The name you want to search for

      // const getAuthor = contentsArray.filter((item: any) => {
      //   const authorNames = item.autores.split('; ')
      //   console.log(authorNames)
      //   // Check if any of the author names contain the search name (case-insensitive)
      //   return authorNames.some((authorName: any) =>
      //     authorName.toLowerCase().includes(autoresToSearch.toLowerCase())
      //   )
      // })
      // response.json(getAuthor)
      const filteredJson = contentsArray.filter((item: any) => {
        return (
          item.topic === topic &&
          item.places === places &&
          item.author === author &&
          item.themes === themes &&
          item.captaincy === captaincy &&
          item.title === title &&
          item.names === names &&
          item.yearI === yearI &&
          item.yearF === yearF &&
          item.pubYear === pubYear &&
          item.source === source &&
          item.ref === ref
        )
      })

      console.log(filteredJson)
      return contents
    } catch (error) {
      console.error(error)
    }
  }
  logFile()
}
export default search
