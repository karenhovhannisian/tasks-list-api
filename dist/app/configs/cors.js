"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const params_1 = require("./params");
const corsOptions = {
    development: {
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ],
        credentials: true,
        origin: /localhost:3000/
    },
    production: {
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ],
        credentials: true,
        origin: params_1.default.corsOrigins.split(',')
    }
};
exports.default = corsOptions[process.env.NODE_ENV || 'development'];
//# sourceMappingURL=cors.js.map