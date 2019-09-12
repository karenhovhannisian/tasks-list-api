"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../helpers/config");
const params = {
    development: {
        apiPort: config_1.apiPort,
        apiUrl: config_1.apiUrl,
        appUrl: config_1.appUrl,
        corsOrigins: config_1.corsOrigins,
        tokenSecret: config_1.tokenSecret
    },
    production: {
        apiPort: config_1.apiPort,
        apiUrl: config_1.apiUrl,
        appUrl: config_1.appUrl,
        corsOrigins: config_1.corsOrigins,
        tokenSecret: config_1.tokenSecret
    }
};
exports.default = params[process.env.NODE_ENV || 'development'];
//# sourceMappingURL=params.js.map