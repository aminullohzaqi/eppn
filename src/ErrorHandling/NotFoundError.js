/* eslint-disable indent */
class NotFoundError extends Error {
    constructor (message) {
        super(message)
        this.name = 'ValidationError'
    }
}

module.exports = NotFoundError
