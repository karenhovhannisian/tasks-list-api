"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = () => {
    const TaskSchema = new mongoose_1.Schema({
        createdAt: { type: Date, index: true },
        email: { type: String, required: true },
        status: { type: Number, default: 0, required: true },
        text: { type: String, required: true },
        updatedAt: Date,
        username: { type: String, required: true }
    });
    TaskSchema.pre('save', function (next) {
        const now = new Date();
        this.updatedAt = now;
        if (!this.createdAt) {
            this.createdAt = now;
        }
        next();
    });
    return mongoose_1.model('Task', TaskSchema);
};
//# sourceMappingURL=task.js.map