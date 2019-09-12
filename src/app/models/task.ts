import { NextFunction } from 'express';
import { Model, model, Schema } from 'mongoose';
import { ITask } from '../../interfaces/models';

export default (): Model<ITask> => {
    const TaskSchema: Schema = new Schema<ITask>({
        createdAt: { type: Date, index: true },
        email: { type: String, required: true },
        status: { type: Number, enum: [ 0, 10 ], default: 0, required: true },
        text: { type: String, required: true },
        updatedAt: Date,
        username: { type: String, required: true }
    });

    TaskSchema.pre<ITask>('save', function(next: NextFunction): void {
        const now: Date = new Date();

        this.updatedAt = now;

        if (!this.createdAt) {
            this.createdAt = now;
        }

        next();
    });

    return model<ITask>('Task', TaskSchema);
};
