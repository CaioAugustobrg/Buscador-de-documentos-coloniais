import fs from 'fs'

type pathExistsT = (path: string) => boolean
type acessPathT = (path: string, mode: number) => boolean

const pathExists: pathExistsT = (path: string) => {
  return fs.existsSync(path)
}

const canAcessPath: acessPathT = (path: string, mode?: number) => {
  try {
    fs.accessSync(path, mode)
    return true
  } catch (error: any) {
    return error.code === 'ENOENT'
  }
}

export { pathExists, canAcessPath }
