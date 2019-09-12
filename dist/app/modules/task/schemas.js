"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../configs/constants");
exports.default = {
    edit: {
        authentication: true,
        parseFormData: true,
        validation: {
            status: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            },
            text: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            }
        }
    },
    save: {
        authentication: true,
        parseFormData: true,
        validation: {
            email: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body',
                isEmail: {
                    errorMessage: constants_1.INVALID('email')
                }
            },
            text: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            },
            username: {
                errorMessage: constants_1.REQUIRED_MESSAGE,
                in: 'body'
            },
        }
    },
    task: {
        authentication: true
    }
};
//# sourceMappingURL=schemas.js.map