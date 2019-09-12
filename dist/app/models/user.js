"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const mongoose_1 = require("mongoose");
exports.default = () => {
    const UserSchema = new mongoose_1.Schema({
        createdAt: Date,
        password: { type: String },
        updatedAt: Date,
        username: { type: String, unique: true, index: true }
    });
    UserSchema.pre('save', function (next) {
        const now = new Date();
        this.updatedAt = now;
        if (!this.createdAt) {
            this.createdAt = now;
        }
        next();
    });
    UserSchema.methods.comparePassword = function (pw) {
        return this.password && bcryptjs_1.compareSync(pw, this.password);
    };
    UserSchema.methods.generatePassword = (pw) => {
        return bcryptjs_1.hashSync(pw, bcryptjs_1.genSaltSync(8));
    };
    return mongoose_1.model('User', UserSchema);
};
//# sourceMappingURL=user.js.map