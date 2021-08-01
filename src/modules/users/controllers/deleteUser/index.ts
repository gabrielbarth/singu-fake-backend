import { UsersRepository } from '../../infra/repositories/UsersRepository';
import { DeleteUserService } from '../../services/DeleteUserService';
import { DeleteUserController } from './DeleteUserController';
 
const usersRepository = UsersRepository.getInstance();

const deleteUserService = new DeleteUserService(usersRepository);

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserController, deleteUserService };