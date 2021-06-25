import { Application } from 'express';
import { IClientRouter, IClientRouterConstructable } from '../commonTypes/clientRouter';
import { IServer, RouterCreator, ServerConstructor } from '../commonTypes/server';

export class Server implements IServer {
  constructor(private settings: ServerConstructor) {}

  private readonly baseUrl = '/api';

  public get router(): RouterCreator {
    return this.settings.router;
  }

  public get app(): Application {
    return this.settings.app;
  }

  public init = (port = 3030): void => {
    this.app.listen(port, () => console.log(`Server has successfully started working on the port ${port}`));
  };

  public addClientRouter = (ClientRouter: IClientRouterConstructable): IClientRouter =>
    new ClientRouter(this.router(), this.app, this.baseUrl);
}
