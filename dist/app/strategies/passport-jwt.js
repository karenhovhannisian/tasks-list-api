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
const mongoose_1 = require("mongoose");
const User = mongoose_1.model('User');
const constants_1 = require("../configs/constants");
const passport_jwt_1 = require("passport-jwt");
const errors_1 = require("../errors");
exports.default = (secret, passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => __awaiter(this, void 0, void 0, function* () {
        const user = yield User.findById(id);
        user ? done(null, user) : done(new errors_1.AuthError(constants_1.NOT_EXISTS('User')), null);
    }));
    const jwtOptions = {
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret
    };
    const strategy = new passport_jwt_1.Strategy(jwtOptions, (payload, next) => __awaiter(this, void 0, void 0, function* () {
        const user = yield User.findById(payload.id);
        if (user) {
            next(null, user);
        }
        else {
            next(new errors_1.AuthError(constants_1.NOT_EXISTS('User')), false);
        }
    }));
    passport.use('jwt', strategy);
};
//# sourceMappingURL=passport-jwt.js.map