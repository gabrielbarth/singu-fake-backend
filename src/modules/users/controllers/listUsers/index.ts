import { UsersRepository } from '../../infra/repositories/UsersRepository';
import { ListUserService } from '../../services/ListUserService';
import { ListUserController } from './ListUserController';
 
const usersRepository = UsersRepository.getInstance();

const listUserService = new ListUserService(usersRepository);

const listUserController = new ListUserController(listUserService);

export { listUserController, listUserService };