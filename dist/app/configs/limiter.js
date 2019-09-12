"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limiter = {
    development: {
        delayMs: 0,
        max: 2500,
        windowsMs: 15 * 60 * 1000
    },
    production: {
        delayMs: 0,
        max: 100,
        windowsMs: 15 * 60 * 1000
    },
    test: {
        delayMs: 0,
        max: 100,
        windowsMs: 15 * 60 * 1000
    }
};
exports.default = limiter[process.env.NODE_ENV || 'development'];
//# sourceMappingURL=limiter.js.map