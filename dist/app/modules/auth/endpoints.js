"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../middlewares/index");
const auth_controller_1 = require("./auth.controller");
const schemas_1 = require("./schemas");
exports.default = (router) => {
    router.post('/login', ...index_1.default(schemas_1.default, 'login'), auth_controller_1.AuthController.login);
    router.get('/logout', ...index_1.default(schemas_1.default, 'auth'), auth_controller_1.AuthController.logout);
};
//# sourceMappingURL=endpoints.js.map