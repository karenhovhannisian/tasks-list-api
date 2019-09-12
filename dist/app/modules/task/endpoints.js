"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../middlewares/index");
const schemas_1 = require("./schemas");
const task_controller_1 = require("./task.controller");
exports.default = (router) => {
    router.post('/', ...index_1.default(schemas_1.default, 'save'), task_controller_1.TaskController.create);
    router.post('/edit/:id', ...index_1.default(schemas_1.default, 'edit'), task_controller_1.TaskController.update);
    router.get('/', ...index_1.default(schemas_1.default, 'task'), task_controller_1.TaskController.getAll);
    router.get('/:id', ...index_1.default(schemas_1.default, 'task'), task_controller_1.TaskController.getOne);
};
//# sourceMappingURL=endpoints.js.map