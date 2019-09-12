import { IResponse } from '../../interfaces/globals';

export const successResponse: (data: any) => IResponse = (data: any): IResponse => {
    return { message: data, status: 'ok' };
};
