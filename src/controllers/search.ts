import type { Request, Response } from 'express'

interface TypedRequest<T> extends Request {
  body: T
}
const search = async (request: TypedRequest<{
  author: string
  places: string
  topic: string
  themes: string
  captaincy: string
  title: string
  names: string
  yearI: number
  yearF: number
  timePeriod: {
    from: number
    until: number
  }
  pubYear: number
  source: string
  ref: string
}>, response: Response) => {
  const {
    author,
    places,
    topic,
    themes,
    captaincy,
    title,
    names,
    yearI,
    yearF,
    timePeriod,
    pubYear,
    source,
    ref} = request.body
    

}
export default search
