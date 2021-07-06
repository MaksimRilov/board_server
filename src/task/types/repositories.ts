import { BaseTask } from './models';

export interface ITaskRepository {
  getAllTasks: () => BaseTask[];
  getTask: (id: string) => BaseTask | null;
}
