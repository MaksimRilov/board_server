import { taskRepository } from '../repositories';
import { GetTaskService } from './GetTaskService';

const getTaskService = new GetTaskService(taskRepository);

export { getTaskService };
