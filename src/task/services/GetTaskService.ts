import { IGetTaskService } from '../types';

export class GetTaskService implements IGetTaskService {
  public getTask = (): { message: string } => {
    return { message: 'TAAASK' };
  };
}
