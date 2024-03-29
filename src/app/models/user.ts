import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { NextFunction } from 'express';
import { Model, model, Schema } from 'mongoose';
import { IUser } from '../../interfaces/models';

export default (): Model<IUser> => {
    const UserSchema: Schema = new Schema<IUser>({
        createdAt: Date,
        password: { type: String },
        updatedAt: Date,
        username: { type: String, unique: true, index: true }
    });

    UserSchema.pre<IUser>('save', function(next: NextFunction): void {
        const now: Date = new Date();

        this.updatedAt = now;

        if (!this.createdAt) {
            this.createdAt = now;
        }

        next();
    });

    UserSchema.methods.comparePassword = function(pw: string): boolean {
        return this.password && compareSync(pw, this.password);
    };

    UserSchema.methods.generatePassword = (pw: string): string => {
        return hashSync(pw, genSaltSync(8));
    };

    return model<IUser>('User', UserSchema);
};
