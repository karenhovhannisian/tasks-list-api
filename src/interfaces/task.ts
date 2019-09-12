import {ITask} from './models';

export interface ITaskUpdate {
    text: string;
    status: number;
}

export interface ITaskQueryParams {
    sort_field?: string;
    sort_direction?: string;
    page: string;
    size: string;
}

export interface ITaskAggregationResult {
    tasks: ITask[];
    total_task_count: number;
}
