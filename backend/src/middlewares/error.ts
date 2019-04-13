import { NextFunction, Request, Response } from 'express'
import { HttpException } from '../exceptions/http'

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500
    const message = error.message || 'Internal Server Error'
    res.status(status).send({ status, message })
}

export default errorMiddleware
