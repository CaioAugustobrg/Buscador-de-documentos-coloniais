import { ServerError } from '../errors/serverError';
export const badRequest = (error) => ({
    statusCode: 400,
    body: error.message
});
export const ok = (data) => ({
    statusCode: 200,
    body: data
});
export const serverError = (reason) => ({
    statusCode: 500,
    body: new ServerError(reason)
});
export const notFound = (error) => ({
    statusCode: 404,
    body: error.message
});
