// import { Entity } from '../core/domain/Entity'

// export interface BookProps {
//   AnoF?: string
//   AnoI?: string
//   anoPub?: string
//   autores?: string
//   capitania?: string
//   datas?: string
//   fonte?: string
//   id_X?: string
//   link?: string
//   lugares?: string
//   nomes?: string
//   periodoA?: string // Define periodoA here
//   ref?: string
//   store_id?: string
//   temaPercent?: string
//   temas?: string
//   tematicas?: string
//   titulo?: string
// }

export class Book {
  public AnoF?: string
  public AnoI?: string
  public anoPub?: string
  public autores?: string
  public capitania?: string
  public datas?: {
    anoInicial: number
    anoFinal: number
  }

  public fonte?: string
  public id_X?: string
  public link?: string
  public lugares?: string
  public nomes?: string
  public periodoA?: string
  public ref?: string
  public store_id?: string
  public temaPercent?: string
  public temas?: string
  public tematicas?: string
  public titulo?: string
  public constructor (props: Book) {
    Object.assign(this, props)
    // super()
    // this.AnoF = props.
    // this.AnoI = props.AnoI
    // this.anoPub = props.anoPub
    // this.autores = props.autores
    // this.capitania = props.capitania
    // this.datas = props.datas
    // this.fonte = props.fonte
    // this.id_X = props.id_X
    // this.link = props.link
    // this.lugares = props.lugares
    // this.nomes = props.nomes
    // this.periodoA = props.periodoA
    // this.ref = props.ref
    // this.store_id = props.store_id
    // this.temaPercent = props.temaPercent
    // this.temas = props.temas
    // this.tematicas = props.
    // this.titulo = props.titulo
  }
}
