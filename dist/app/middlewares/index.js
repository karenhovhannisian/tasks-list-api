"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
const passport_1 = require("./passport");
const formDataParser_1 = require("./formDataParser");
const constants_1 = require("../configs/constants");
exports.default = (schemas, actionName) => {
    const middlewares = [];
    if (!schemas[actionName]) {
        return middlewares;
    }
    if (schemas[actionName].parseFormData) {
        middlewares.push(formDataParser_1.default);
    }
    if (schemas[actionName].authentication) {
        middlewares.push(passport_1.default(constants_1.JWT_AUTH));
    }
    if (schemas[actionName].validation) {
        middlewares.push(validator_1.default(schemas[actionName].validation));
    }
    return middlewares;
};
//# sourceMappingURL=index.js.map