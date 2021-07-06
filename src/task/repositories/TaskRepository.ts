import { BaseTask, ITaskRepository } from '../types';

const tasks = [
  { id: 'id1', name: 'Задача 1', description: 'Описание 1' },
  { id: 'id2', name: 'Задача 2', description: 'Описание 2' },
  { id: 'id3', name: 'Задача 3', description: 'Описание 3' },
  { id: 'id4', name: 'Задача 4', description: 'Описание 4' },
];

export class TaskRepository implements ITaskRepository {
  public getAllTasks = (): BaseTask[] => {
    return tasks;
  };

  public getTask = (id: string): BaseTask | null => {
    return tasks.find((task) => task.id === id) || null;
  };
}
