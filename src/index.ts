import express from 'express';
import { IServer } from './commonTypes/server';
import { Server } from './app';
import { taskGetEndpoints, TaskRouter } from './task';
import { userGetEndpoints, UserRouter } from './user';

const server: IServer = new Server({ router: express.Router, app: express() });
server.init(3030);

const taskRouter = server.addClientRouter(TaskRouter);
taskRouter.init(taskGetEndpoints);

const userRouter = server.addClientRouter(UserRouter);
userRouter.init(userGetEndpoints);
