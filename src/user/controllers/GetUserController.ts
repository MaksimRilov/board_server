import { Request, Response } from 'express';
import { BaseController } from '../../app/BaseController';

export class GetUserController extends BaseController {
  public getUser = (req: Request, res: Response): void => {
    this.sendSuccess(res, { message: 'User' });
  };
}
