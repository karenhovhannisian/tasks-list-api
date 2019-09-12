import { IUser } from '../../interfaces/models';

import { Model, model } from 'mongoose';
const User: Model<IUser> = model('User');

export class UserService {

    public static async getByUsername(username: string): Promise<IUser> {
        return User.findOne({ username });
    }

    public static async create(user: IUser): Promise<IUser> {
        const newUser: IUser = new User(user);

        newUser.password = newUser.generatePassword(user.password);

        return await User.create(newUser);
    }
}
