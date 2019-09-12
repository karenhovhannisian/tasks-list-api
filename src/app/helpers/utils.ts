import * as moment from 'moment';
import * as jwt from 'jsonwebtoken';
import params from '../configs/params';
import { IJWTSignPayload, IJWTPayload } from '../../interfaces/globals';
import {ITask, IUser} from '../../interfaces/models';
import { Request } from 'express';
import * as multiparty from 'multiparty';

export default class Utils {
    public static signJWTToken(user: IUser): IJWTPayload {
        const payload: IJWTSignPayload = { id: user._id, username: user.username, created_at: moment().toString() };
        const options: jwt.SignOptions = { expiresIn: '24h' };

        const token: any = jwt.sign(payload, params.tokenSecret, options);

        return { token };
    }

    public static async parseUploadForm(req: Request): Promise<any> {
        const form: multiparty = new multiparty.Form();

        return new Promise<ITask>((resolve: any, reject: any) => {
            form.parse(req, async (err: Error, fields: ITask) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(fields);
                }
            });
        });
    }

    public static verifyJWTToken(token: string, secret: string = params.tokenSecret): any {
        try {
            return jwt.verify(token, secret);
        } catch (e) {
            return null;
        }
    }
}
