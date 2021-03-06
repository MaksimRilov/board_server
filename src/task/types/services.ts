import { BaseTask } from './models';

export interface IGetTaskService {
  getAllTasks: () => BaseTask[];
  getTask: (id: string) => BaseTask | null;
}
