import { IRoute } from '../../commonTypes/clientRoute';
import { getTaskController } from '../controllers';

export const taskGetEndpoints: Array<IRoute> = [
  { patch: '', method: 'GET', handler: getTaskController.getAllTasks },
  { patch: '/:id', method: 'GET', handler: getTaskController.getTask },
];
