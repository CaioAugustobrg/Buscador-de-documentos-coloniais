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
  autores?: string
  lugares?: string
  // topic?: string
  temas?: string
  capitania?: string
  titulo?: string
  nomes?: string
  // yearI?: number
  // yearF?: number
  // timePeriod?: {
  //   from?: number
  //   until?: number
  // }
  // pubYear?: number
  // source?: string
  // ref?: string
}>, response: Response) => {
  const autores = request.body.autores
  const lugares = request.body.lugares
  // const topic = request.body.topic
  const temas = request.body.temas
  const capitania = request.body.capitania
  const titulo = request.body.titulo
  const nomes = request.body.nomes
  // const yearI = request.body.yearI
  // const yearF = request.body.yearF
  // const timePeriod = request.body.timePeriod
  // const pubYear = request.body.pubYear
  // const source = request.body.source
  // const ref = request.body.ref

  // async function getDataAboutBook(autores: string, lugares: string) {
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
  // const contentsArray = buffer.find((item: any) => item.autores === autores)
  // console.log(autores)
  // }
  async function logFile () {
    try {
      const filePath = resolve('../../sentinela/server/src/database/dados.json')
      const contents = await readFile(filePath, { encoding: 'utf8' })
      const contentsArray = JSON.parse(contents)
      // const autoresToSearch = autores // The name you want to search for

      // const autores = contentsArray.filter((item: any) => {
      //   const nomes = item.autores.split('; ')
      //   console.log(nomes)
      //   // Check if any of the autores nomes contain the search name (case-insensitive)
      //   return nomes.some((autoresName: any) =>
      //     autoresName.toLowerCase().includes(autoresToSearch.toLowerCase())
      //   )
      // })
      // response.json(autores)
      const filteredJson = contentsArray.filter((item: any) => {
        return (
          // item.topic === topic &&
          (!lugares ? true : item.lugares?.toLowerCase().includes(lugares.toLowerCase())) &&
          (!autores ? true : item.autores?.toLowerCase().includes(autores.toLowerCase())) &&
          (!temas ? true : item.temas?.toLowerCase().includes(temas.toLowerCase())) &&
          (!capitania ? true : item.capitania?.toLowerCase().includes(capitania.toLowerCase())) &&
          (!titulo ? true : item.titulo?.toLowerCase().includes(titulo.toLowerCase())) &&
          (!nomes ? true : item.nomes?.toLowerCase().includes(nomes.toLowerCase()))
        // (!yearI ? true : item.yearI === yearI) &&
        // (!yearF ? true : item.yearF === yearF) &&
        // (!pubYear ? true : item.pubYear === pubYear) &&
        // (!source ? true : item.source?.toLowerCase().includes(source.toLowerCase())) &&
          // (!ref ? true : item.ref?.toLowerCase().includes(ref.toLowerCase()))
        )
      })

      console.log(filteredJson)
      response.status(200).json({ filteredJson })
      return contents
    } catch (error) {
      console.error(error)
    }
  }
  logFile()
}
export default search
