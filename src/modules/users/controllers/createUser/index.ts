import { UsersRepository } from '../../infra/repositories/UsersRepository';
import { CreateUserService } from '../../services/CreateUserService';
import { CreateUserController } from './CreateUserController';

const usersRepository = UsersRepository.getInstance();

const createUserService = new CreateUserService(usersRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService };