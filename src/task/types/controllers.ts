import { Request, Response } from 'express';

export interface IGetTaskController {
  getAllTasks: (req: Request, res: Response) => void;
  getTask: (req: Request, res: Response) => void;
}
