import { Router } from 'express';
import { IRoute, LocalMiddleware } from '../commonTypes/clientRoute';

export abstract class BaseClientRouter {
  protected abstract readonly router: Router;

  private addLocalMiddleware = (patch: string, localMiddlewares: LocalMiddleware[]) => {
    localMiddlewares.forEach((mw) => this.router.use(patch, mw));
  };

  protected addEndpoints = (endpoints: Array<IRoute>): void => {
    endpoints.forEach((endpoint) => {
      if (endpoint.localMiddlewares) {
        const { patch, localMiddlewares } = endpoint;
        this.addLocalMiddleware(patch, localMiddlewares);
      }

      switch (endpoint.method) {
        case 'GET': {
          this.router.get(endpoint.patch, endpoint.handler);
          break;
        }
        case 'POST': {
          this.router.post(endpoint.patch, endpoint.handler);
          break;
        }
        case 'PUT': {
          this.router.put(endpoint.patch, endpoint.handler);
          break;
        }
        case 'DELETE': {
          this.router.delete(endpoint.patch, endpoint.handler);
          break;
        }
        default:
          console.log('not a valid method');
          break;
      }
    });
  };
}
