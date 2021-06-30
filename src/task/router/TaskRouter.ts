import { Application, Router } from 'express';
import { BaseClientRouter } from '../../app';
import { IRoute } from '../../commonTypes/clientRoute';
import { IClientRouter } from '../../commonTypes/clientRouter';

export class TaskRouter extends BaseClientRouter implements IClientRouter {
  constructor(protected router: Router, private app: Application, private baseUrl = '') {
    super();
  }

  public init = (endpoints: Array<IRoute>): void => {
    this.addEndpoints(endpoints);

    this.app.use(`${this.baseUrl}/task`, this.router);
  };
}
