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
const errors_1 = require("../errors");
const status_codes_1 = require("../configs/status-codes");
exports.default = (err, req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (!err.status) {
        next(new errors_1.ServiceUnavailable(err.message));
    }
    const status = err.status || status_codes_1.BAD_REQUEST_CODE;
    const body = {};
    if (err.errors) {
        Object.keys(err.errors).forEach((key) => {
            body[key] = err.errors[key].msg;
        });
    }
    return res.status(status).json({
        message: body,
        status: 'error'
    });
});
//# sourceMappingURL=errorHandler.js.map