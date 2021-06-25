import { Response } from 'express';

export abstract class BaseController {
  protected sendSuccess = (res: Response, data: Record<string, unknown>): Response => {
    return res.status(200).json({ data });
  };
}
