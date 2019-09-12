import { Router } from 'express';
import middlewares from '../../middlewares/index';
import schemas from './schemas';
import { TaskController } from './task.controller';

export default (router: Router): void => {
    router.post('/', ...middlewares(schemas, 'save'), TaskController.create);
    router.post('/edit/:id', ...middlewares(schemas, 'edit'), TaskController.update);
    router.get('/', TaskController.getAll);
    router.get('/:id', TaskController.getOne);
};
