"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const task_1 = require("./task");
exports.default = (router) => {
    const auth = new auth_1.default(router);
    const task = new task_1.default(router);
    const modules = [
        auth,
        task
    ];
    modules.forEach((module) => module.createEndpoints());
};
//# sourceMappingURL=index.js.map