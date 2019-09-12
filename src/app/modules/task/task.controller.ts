import { NextFunction, Request, Response } from 'express';
import { ITask } from '../../../interfaces/models';
import { IParams } from '../../../interfaces/globals';
import { CREATED_CODE, SUCCESS_CODE } from '../../configs/status-codes';
import { TaskService } from '../../services';
import { successResponse } from '../../helpers/response';
import { ITaskAggregationResult, ITaskQueryParams, ITaskUpdate } from '../../../interfaces/task';

export class TaskController {

    public static async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const payload: ITask = req.body;
        try {
            const task: ITask = await TaskService.create(payload);

            return res.status(CREATED_CODE).json(successResponse(task));
        } catch (e) {
            next(e);
        }
    }

    public static async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { id }: IParams = req.params;
        const payload: ITaskUpdate = req.body;
        try {
            const task: ITask = await TaskService.getById(id);

            const updatedTask: ITask = await TaskService.update(task._id, payload);

            return res.status(CREATED_CODE).json(successResponse(updatedTask));
        } catch (e) {
            next(e);
        }
    }

    public static async getOne(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { id }: IParams = req.params;
        try {
            const task: ITask = await TaskService.getById(id);

            return res.status(SUCCESS_CODE).json(successResponse(task));
        } catch (e) {
            next(e);
        }
    }

    public static async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const query: ITaskQueryParams = req.query;
        try {
            const tasks: ITaskAggregationResult[] = await TaskService.getAll(query);

            return res.status(SUCCESS_CODE).json(successResponse(tasks));
        } catch (e) {
            next(e);
        }
    }
}
