"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const endpoints_1 = require("./endpoints");
class TaskModule {
    constructor(apiRouter) {
        this.apiRouter = apiRouter;
        this.router = express_1.Router();
    }
    createEndpoints() {
        this.assignRouter();
        this.assignEndpoints();
    }
    assignRouter() {
        this.apiRouter.use('/tasks', this.router);
    }
    assignEndpoints() {
        endpoints_1.default(this.router);
    }
}
exports.default = TaskModule;
//# sourceMappingURL=index.js.map