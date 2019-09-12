"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = require("passport");
exports.default = (rule) => passport_1.authenticate(rule, { session: false });
//# sourceMappingURL=passport.js.map