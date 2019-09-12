import validator from './validator';
import passport from './passport';
import formDataParser from './formDataParser';
import { JWT_AUTH } from '../configs/constants';

export default (schemas: any, actionName: string): any => {
    const middlewares: any[] = [];

    if (!schemas[actionName]) {
        return middlewares;
    }

    if (schemas[actionName].parseFormData) {
        middlewares.push(formDataParser);
    }

    if (schemas[actionName].authentication) {
        middlewares.push(passport(JWT_AUTH));
    }

    if (schemas[actionName].validation) {
        middlewares.push(validator(schemas[actionName].validation));
    }

    return middlewares;
};
