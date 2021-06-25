import { Request, Response } from 'express';
import { BaseController } from '../../app/BaseController';

export class GetTaskController extends BaseController {
  public getTask = (req: Request, res: Response): void => {
    this.sendSuccess(res, { message: 'TAASSSSK' });
  };
}
