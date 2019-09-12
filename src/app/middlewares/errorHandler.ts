import { ServiceUnavailable } from '../errors';
import { BAD_REQUEST_CODE } from '../configs/status-codes';
import { Request, Response, NextFunction } from 'express';
import { IError } from '../../interfaces/globals';

export default async (err: IError, req: Request, res: Response, next: NextFunction): Promise<Response> => {
    if (!err.status) {
        next(new ServiceUnavailable(err.message));
    }

    const status: number = err.status || BAD_REQUEST_CODE;
    const body: any = {};

    if (err.errors) {
        Object.keys(err.errors).forEach((key: string) => {
            body[key] = err.errors[key].msg;
        });
    }

    return res.status(status).json({
        message: body,
        status: 'error'
    });
};
