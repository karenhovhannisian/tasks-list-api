import { NextFunction, Request, Response } from 'express';
import Utils from '../helpers/utils';

export default async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const parsedForm: any = await Utils.parseUploadForm(req);
        if (Object.keys(parsedForm).length) {
            for (const i in parsedForm) {
                if (parsedForm.hasOwnProperty(i) && parsedForm[i].length) {
                    req.body[i] = parsedForm[i][0];
                }
            }
        }

        next();
    } catch (e) {
        next(e);
    }
};

