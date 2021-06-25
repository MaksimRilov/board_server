import { Application, Router } from 'express';
import { IRoute } from './clientRoute';

export interface IClientRouter {
  init: (endpoints: Array<IRoute>) => void;
}

export interface IClientRouterConstructable {
  new (router: Router, app: Application, baseUrl?: string): IClientRouter;
}
