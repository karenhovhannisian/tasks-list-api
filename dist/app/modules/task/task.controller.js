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
const status_codes_1 = require("../../configs/status-codes");
const services_1 = require("../../services");
const response_1 = require("../../helpers/response");
class TaskController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            try {
                const task = yield services_1.TaskService.create(payload);
                return res.status(status_codes_1.CREATED_CODE).json(response_1.successResponse(task));
            }
            catch (e) {
                next(e);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const payload = req.body;
            try {
                const task = yield services_1.TaskService.getById(id);
                payload.status = payload.status === 0 ? payload.status : 10;
                const updatedTask = yield services_1.TaskService.update(task._id, payload);
                return res.status(status_codes_1.CREATED_CODE).json(response_1.successResponse(updatedTask));
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const task = yield services_1.TaskService.getById(id);
                return res.status(status_codes_1.SUCCESS_CODE).json(response_1.successResponse(task));
            }
            catch (e) {
                next(e);
            }
        });
    }
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = req.query;
            try {
                const tasks = yield services_1.TaskService.getAll(query);
                return res.status(status_codes_1.SUCCESS_CODE).json(response_1.successResponse(tasks));
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map