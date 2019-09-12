import { Schema } from 'mongoose';

export interface IError {
    status?: number;
    message?: any;
    errors: any;
}

export interface IResponse {
    status: string;
    message: any;
}

export interface IJWTSignPayload {
    id: Schema.Types.ObjectId;
    username: string;
    created_at: string;
}

export interface IJWTPayload {
    token: string;
}

export interface IParams {
    id: string;
}
