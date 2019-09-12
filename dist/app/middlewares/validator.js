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
exports.default = (schema = null) => {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        if (schema) {
            req.check(schema);
        }
        let result;
        try {
            result = yield req.getValidationResult();
        }
        catch (error) {
            return next(new errors_1.ServiceUnavailable(error.message));
        }
        console.log(result);
        if (result && !result.isEmpty()) {
            return next(new errors_1.ValidationError(result.mapped()));
        }
        next();
    });
};
//# sourceMappingURL=validator.js.map