import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    id?: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    generatePassword: (pw: string) => string;
    comparePassword: (pw: string) => boolean;
}

export interface ITask extends Document {
    _id: Schema.Types.ObjectId;
    text: string;
    username: string;
    email: string;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
