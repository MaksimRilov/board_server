import { Request, Response } from 'express';
import { BaseController } from '../../app';
import { IGetTaskService } from '../types';

export class GetTaskController extends BaseController {
  constructor(private getTaskService: IGetTaskService) {
    super();
  }

  public getTask = (req: Request, res: Response): void => {
    const result = this.getTaskService.getTask();

    this.sendSuccess(res, result);
  };
}
