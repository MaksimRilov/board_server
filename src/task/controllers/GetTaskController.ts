import { Request, Response } from 'express';
import { BaseController } from '../../app';
import { IGetTaskController, IGetTaskService } from '../types';

export class GetTaskController extends BaseController implements IGetTaskController {
  constructor(private getTaskService: IGetTaskService) {
    super();
  }

  public getAllTasks = (req: Request, res: Response): void => {
    const result = this.getTaskService.getAllTasks();

    // another any logic

    this.sendSuccess(res, result);
  };

  public getTask = (req: Request, res: Response): void => {
    const { id } = req.params;

    const result = this.getTaskService.getTask(id);

    this.sendSuccess(res, result);
  };
}
