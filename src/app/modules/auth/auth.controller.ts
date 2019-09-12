import { NextFunction, Request, Response } from 'express';
import { IJWTPayload } from '../../../interfaces/globals';
import { IUser } from '../../../interfaces/models';
import { INVALID_USERNAME_OR_PASSWORD } from '../../configs/constants';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest } from '../../errors';
import Utils from '../../helpers/utils';
import { UserService } from '../../services';
import { successResponse } from '../../helpers/response';

export class AuthController {

    public static async login(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const payload: IUser = req.body;

        try {
            const user: IUser = await UserService.getByUsername(payload.username);

            if (!user || !user.comparePassword(payload.password)) {
                throw new BadRequest(INVALID_USERNAME_OR_PASSWORD, {
                    password: INVALID_USERNAME_OR_PASSWORD,
                    username: INVALID_USERNAME_OR_PASSWORD
                });
            }

            const tokenInfo: IJWTPayload = Utils.signJWTToken(user);

            return res.status(SUCCESS_CODE).json(successResponse({
                token: tokenInfo.token
            }));
        } catch (err) {
            next(err);
        }
    }

    public static async logout(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            req.logout();

            return res.status(SUCCESS_CODE).json(successResponse({}));
        } catch (e) {
            next(e);
        }
    }
}
