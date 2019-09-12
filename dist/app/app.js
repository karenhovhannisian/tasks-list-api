"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const RateLimit = require("express-rate-limit");
const expressValidator = require("express-validator");
const helmet = require("helmet");
const logger = require("morgan");
const passport = require("passport");
const cors_1 = require("./configs/cors");
const limiter_1 = require("./configs/limiter");
const params_1 = require("./configs/params");
const errorHandler_1 = require("./middlewares/errorHandler");
const modules_1 = require("./modules");
const passport_jwt_1 = require("./strategies/passport-jwt");
const validators_1 = require("./validators");
class Application {
    constructor() {
        this.app = express();
        this.initApp();
    }
    initApp() {
        this.createLimiter();
        this.configApp();
        this.configPassport();
        this.setParams();
        this.setRouter();
        this.setErrorHandler();
        this.enableModules();
    }
    configApp() {
        if (this.app.get('env') !== 'production') {
            this.app.use(logger('dev'));
        }
        this.app.use(cors(cors_1.default))
            .use(expressValidator({
            customValidators: {
                isValidDate: validators_1.isValidDate
            }
        }))
            .use(body_parser_1.json({ limit: 52428800 }))
            .use(body_parser_1.urlencoded({ extended: true, parameterLimit: 52428800, limit: 52428800 }))
            .use(cookieParser())
            .use(this.limiter)
            .use(helmet());
    }
    configPassport() {
        passport_jwt_1.default(params_1.default.tokenSecret, passport);
        this.app.use(passport.initialize())
            .use(passport.session());
    }
    createLimiter() {
        this.limiter = new RateLimit(limiter_1.default);
    }
    setParams() {
        this.app.set('json spaces', 4);
    }
    setRouter() {
        this.router = express.Router();
        this.app.use(`/api`, this.router);
    }
    setErrorHandler() {
        this.app.use(errorHandler_1.default);
    }
    enableModules() {
        modules_1.default(this.router);
    }
}
exports.default = () => new Application().app;
//# sourceMappingURL=app.js.map