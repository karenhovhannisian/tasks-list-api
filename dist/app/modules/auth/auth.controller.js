"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../configs/constants");
const status_codes_1 = require("../../configs/status-codes");
const errors_1 = require("../../errors");
const utils_1 = require("../../helpers/utils");
const services_1 = require("../../services");
const response_1 = require("../../helpers/response");
class AuthController {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            try {
                const user = yield services_1.UserService.getByUsername(payload.username);
                if (!user || !user.comparePassword(payload.password)) {
                    throw new errors_1.BadRequest(constants_1.INVALID_USERNAME_OR_PASSWORD, {
                        password: constants_1.INVALID_USERNAME_OR_PASSWORD,
                        username: constants_1.INVALID_USERNAME_OR_PASSWORD
                    });
                }
                const tokenInfo = utils_1.default.signJWTToken(user);
                return res.status(status_codes_1.SUCCESS_CODE).json(response_1.successResponse({
                    token: tokenInfo.token
                }));
            }
            catch (err) {
                next(err);
            }
        });
    }
    static logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.logout();
                return res.status(status_codes_1.SUCCESS_CODE).json(response_1.successResponse({}));
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map