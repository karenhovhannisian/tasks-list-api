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
const moment = require("moment");
const jwt = require("jsonwebtoken");
const params_1 = require("../configs/params");
const multiparty = require("multiparty");
class Utils {
    static signJWTToken(user) {
        const payload = { id: user._id, username: user.username, created_at: moment().toString() };
        const options = { expiresIn: '24h' };
        const token = jwt.sign(payload, params_1.default.tokenSecret, options);
        return { token };
    }
    static parseUploadForm(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new multiparty.Form();
            return new Promise((resolve, reject) => {
                form.parse(req, (err, fields) => __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(fields);
                    }
                }));
            });
        });
    }
    static verifyJWTToken(token, secret = params_1.default.tokenSecret) {
        try {
            return jwt.verify(token, secret);
        }
        catch (e) {
            return null;
        }
    }
}
exports.default = Utils;
//# sourceMappingURL=utils.js.map