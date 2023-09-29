import fs from 'fs'
import winston from 'winston'
import { join } from 'path'
import { pathExists, canAcessPath } from './helpers'

const { colorize, combine, timestamp, printf, splat } = winston.format
const logDirectory = join(__dirname, 'logs')

let consoleLoggingOnly = false

if (
  !pathExists(logDirectory) &&
  canAcessPath(logDirectory, fs.constants.R_OK | fs.constants.W_OK)
) {
  fs.mkdirSync(logDirectory)
}

if (
  !canAcessPath(logDirectory, fs.constants.W_OK | fs.constants.R_OK) ||
  !canAcessPath(
    join(logDirectory, 'error.txt'),
    fs.constants.W_OK | fs.constants.R_OK
  )
) {
  consoleLoggingOnly = true
}

const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
  }
}

const myFormat = printf((info: any) => {
  let message = `${info.timestamp} ${info.level}`
  if (info instanceof Error) {
    message += `${info.stack}`
  } else if (info.message instanceof Object) {
    message += JSON.stringify(info.message)
  } else {
    message += info.message
  }

  return message
})

const logLevel = process.env.LOG_LEVEL ?? 'info'

const logger = winston.createLogger({
  levels: logLevels.levels,
  format: combine(timestamp(), splat(), myFormat),
  transports: [
    new winston.transports.Console({
      format: combine(timestamp(), colorize(), splat(), myFormat),
      level: logLevel
    })
  ]
})

if (!consoleLoggingOnly) {
  logger.add(
    new winston.transports.File({
      filename: './logs/all.log',
      level: process.env.LOG_LEVEL ?? 'info',
      maxsize: 2e6,
      maxFiles: 3
    })
  )
}

if (!consoleLoggingOnly) {
  logger.error(
    `Logger cannot read or write to directoy ${join(__dirname, 'logs')}.`
  )
  logger.error(
    'Logs will only be written to the console until the issue is resolved.'
  )
}

export default logger
