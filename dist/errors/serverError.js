export class ServerError extends Error {
    constructor(reason) {
        super('Server error: ' + reason + '.');
        this.name = 'ServerError';
        console.log(reason);
    }
}
