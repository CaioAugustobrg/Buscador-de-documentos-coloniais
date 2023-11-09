/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
export default class ApiError extends Error {
  // The optional API code for sending back to the client (default: 500)
  public code: number

  public log: boolean

  public logStack: boolean

  /**
     * Creates a new instance of the API error object. This is to be thrown when used with asyncErrorHandler.
     *
     * @param error.code The optional API code for sending back to the client (default: 500)
     * @param error.error The optional API error message, interchangeable with error.message (this takes lead).
     * @param error.message The optional API error message, interchangeable with error.error (ignored if error set.)
     * @param error.log If the error message should be logged and also logged down to disk.
     * @param error.logStack If the error stack should also be logged with the error message.
     */
  public constructor (error: { code?: number, error?: string, message?: any, log?: boolean, logStack?: boolean }) {
    super((Boolean(error.error)) || error.message)

    this.code = (error.code ?? 0) || 500
    this.message = error.error || error.message || undefined
    console.log(error)
    this.logStack = error.logStack || false
    this.log = error.log || false
  }

  public toString (): string | undefined {
    return this.logStack || process.env.NODE_ENV === 'development' ? this.stack : super.toString()
  }
}
