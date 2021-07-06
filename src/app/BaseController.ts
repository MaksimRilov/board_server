import { Response } from 'express';

export abstract class BaseController {
  protected sendSuccess = <T>(res: Response, data: T): Response => {
    return res.status(200).json({ data });
  };

  protected sendError = <T>(res: Response, status = 500, data: T): Response => {
    return res.status(status).json({ data });
  };
}
