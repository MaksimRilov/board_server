import { BaseTask, IGetTaskService, ITaskRepository } from '../types';

export class GetTaskService implements IGetTaskService {
  constructor(private taskRepository: ITaskRepository) {}

  public getAllTasks = (): BaseTask[] => {
    return this.taskRepository.getAllTasks();
  };

  public getTask = (id: string): BaseTask | null => {
    return this.taskRepository.getTask(id);
  };
}
