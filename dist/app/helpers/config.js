"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.config();
}
const env = require("env-var");
exports.mongoUri = env.get('MONGODB_URI').asString();
exports.apiUrl = env.get('API_URL').asString();
exports.appUrl = env.get('APP_URL').asString();
exports.apiPort = env.get('PORT').asString();
exports.tokenSecret = env.get('TOKEN_SECRET').asString();
exports.corsOrigins = env.get('CORS_ORIGINS').asString();
//# sourceMappingURL=config.js.map