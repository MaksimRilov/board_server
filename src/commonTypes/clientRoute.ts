import { NextFunction, Request, Response } from 'express';

export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type EndpointHandler = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export type LocalMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export interface IRoute {
  patch: string;
  method: Methods;
  handler: EndpointHandler;
  localMiddlewares?: LocalMiddleware[];
}
