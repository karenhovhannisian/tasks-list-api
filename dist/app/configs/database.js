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
const mongoose = require("mongoose");
const config_1 = require("../helpers/config");
const models_1 = require("../models");
(() => __awaiter(this, void 0, void 0, function* () {
    (() => __awaiter(this, void 0, void 0, function* () {
        const timeout = 30 * 1000;
        const options = {
            connectTimeoutMS: timeout,
            keepAlive: true,
            reconnectInterval: 500,
            reconnectTries: Number.MAX_VALUE,
            useCreateIndex: true,
            useNewUrlParser: true
        };
        return yield mongoose.connect(config_1.mongoUri, options);
    }))();
    if (process.env.NODE_ENV === 'development') {
        mongoose.set('debug', true);
    }
    models_1.default();
    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection: error - ' + err);
    });
    mongoose.connection.on('connected', () => {
        console.info('Mongoose connection: connected');
    });
    mongoose.connection.on('open', () => {
        console.info('Mongoose connection: open');
    });
    mongoose.connection.on('reconnected', () => {
        console.info('Mongoose connection: reconnected');
    });
    mongoose.connection.on('disconnected', () => {
        console.warn('Mongoose connection: disconnected');
    });
    process.on('SIGINT', () => {
        mongoose.disconnect(() => {
            process.exit(0);
        });
    });
    process.on('SIGINT', () => {
        mongoose.disconnect(() => {
            process.exit(0);
        });
    });
    return mongoose;
}))();
//# sourceMappingURL=database.js.map