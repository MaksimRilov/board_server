import { Application, Router, RouterOptions } from 'express';
import { IClientRouter, IClientRouterConstructable } from './clientRouter';

export type RouterCreator = (options?: RouterOptions | undefined) => Router;

export type ServerConstructor = {
  app: Application;
  router: RouterCreator;
};

export interface IServer {
  app: Application;
  router: RouterCreator;
  init: (port?: number) => void;
  addClientRouter: (ClientRouter: IClientRouterConstructable) => IClientRouter;
}
