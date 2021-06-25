import { IRoute } from '../../commonTypes/clientRoute';
import { GetUserController } from '../controllers';

const getUserController = new GetUserController();

export const userGetEndpoints: Array<IRoute> = [{ patch: '', method: 'GET', handler: getUserController.getUser }];
