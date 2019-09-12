"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../configs/constants");
exports.default = {
    login: {
        parseFormData: true,
        validation: {
            password: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            },
            username: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            }
        }
    },
    logout: {
        authentication: true
    }
};
//# sourceMappingURL=schemas.js.map