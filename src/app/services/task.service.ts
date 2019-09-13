import { ITask } from '../../interfaces/models';

import { Schema, Model, model, QueryFindOneAndUpdateOptions } from 'mongoose';
const Task: Model<ITask> = model('Task');

import { NotFound } from '../errors';
import { NOT_EXISTS } from '../configs/constants';
import { ITaskAggregationResult, ITaskQueryParams, ITaskUpdate } from '../../interfaces/task';

export class TaskService {
    public static async create(task: ITask): Promise<ITask> {
        return await Task.create(task);
    }

    public static async getById(taskId: string | Schema.Types.ObjectId): Promise<ITask> {
        const task: ITask = await Task.findOne({ _id: taskId });

        if (!task) {
            throw new NotFound(NOT_EXISTS('Task'));
        }

        return task;
    }

    public static async getAll(options: ITaskQueryParams): Promise<ITaskAggregationResult[]> {
        const query: any = [];
        const size: number = Number(options.size) || 15;

        query.push({ $sort: { createdAt: -1 }});

        if (options.sort_field && options.sort_direction) {
            switch (options.sort_field) {
                case 'username':
                    if (options.sort_direction === 'asc') {
                        query.push({ $sort: { username: 1 } });
                    } else if (options.sort_direction === 'desc') {
                        query.push({ $sort: { username: -1 } });
                    }
                    break;
                case 'email':
                    if (options.sort_direction === 'asc') {
                        query.push({ $sort: { email: 1 } });
                    } else if (options.sort_direction === 'desc') {
                        query.push({ $sort: { email: -1 } });
                    }
                    break;
                case 'status':
                    if (options.sort_direction === 'asc') {
                        query.push({ $sort: { status: 1 } });
                    } else if (options.sort_direction === 'desc') {
                        query.push({ $sort: { status: -1 } });
                    }
                    break;
            }
        }

        query.push(
            { $group: {
                _id: null,
                tasks: { $push: '$$ROOT' },
                total_task_count: { $sum: 1 },
                } },
            { $project: { _id: 0 } },
        );

        if (options.page) {
            const skip: number = size * (Number(options.page) - 1);

            query.push(
                { $project: { tasks: { $slice: [ '$tasks', skip, size ] }, total_task_count: 1 } }
            );
        }

        return Task.aggregate(query);
    }

    public static async update(taskId: string | Schema.Types.ObjectId, attributes: ITaskUpdate): Promise<ITask> {
        const options: QueryFindOneAndUpdateOptions = { new: true };

        return Task.findByIdAndUpdate({ _id: taskId }, attributes, options);
    }
}
