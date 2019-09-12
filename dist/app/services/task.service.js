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
const Task = mongoose_1.model('Task');
const errors_1 = require("../errors");
const constants_1 = require("../configs/constants");
class TaskService {
    static create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Task.create(task);
        });
    }
    static getById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield Task.findOne({ _id: taskId });
            if (!task) {
                throw new errors_1.NotFound(constants_1.NOT_EXISTS('Task'));
            }
            return task;
        });
    }
    static getAll(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = [];
            const size = Number(options.size) || 15;
            query.push({ $sort: { createdAt: -1 } });
            if (options.sort_field && options.sort_direction) {
                switch (options.sort_field) {
                    case 'username':
                        if (options.sort_direction === 'asc') {
                            query.push({ $sort: { username: 1 } });
                        }
                        else if (options.sort_direction === 'desc') {
                            query.push({ $sort: { username: -1 } });
                        }
                        break;
                    case 'email':
                        if (options.sort_direction === 'asc') {
                            query.push({ $sort: { email: 1 } });
                        }
                        else if (options.sort_direction === 'desc') {
                            query.push({ $sort: { email: -1 } });
                        }
                        break;
                    case 'status':
                        if (options.sort_direction === 'asc') {
                            query.push({ $sort: { status: 1 } });
                        }
                        else if (options.sort_direction === 'desc') {
                            query.push({ $sort: { status: -1 } });
                        }
                        break;
                }
            }
            query.push({ $group: {
                    _id: null,
                    tasks: { $push: '$$ROOT' },
                    total_task_count: { $sum: 1 },
                } }, { $project: { _id: 0 } });
            if (options.page) {
                const skip = size * (Number(options.page) - 1);
                query.push({ $project: { deals: { $slice: ['$tasks', skip, size] }, total_task_count: 1 } });
            }
            return Task.aggregate(query);
        });
    }
    static update(taskId, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = { new: true };
            return Task.findByIdAndUpdate({ _id: taskId }, attributes, options);
        });
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map