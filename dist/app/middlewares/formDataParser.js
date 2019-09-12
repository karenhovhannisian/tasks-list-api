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
const utils_1 = require("../helpers/utils");
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const parsedForm = yield utils_1.default.parseUploadForm(req);
        if (Object.keys(parsedForm).length) {
            for (const i in parsedForm) {
                if (parsedForm.hasOwnProperty(i) && parsedForm[i].length) {
                    req.body[i] = parsedForm[i][0];
                }
            }
        }
        next();
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=formDataParser.js.map