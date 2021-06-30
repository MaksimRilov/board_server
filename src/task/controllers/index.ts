import { getTaskService } from '../services';
import { GetTaskController } from './GetTaskController';

const getTaskController = new GetTaskController(getTaskService);

export { getTaskController };
