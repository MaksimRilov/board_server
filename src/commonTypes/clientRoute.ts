import { NextFunction, Request, Response } from 'express';

export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRoute {
  patch: string;
  method: Methods;
  handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
}
