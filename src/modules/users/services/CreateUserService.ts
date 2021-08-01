import { IUser } from '../infra/schemas/User';
import { IUsersRepository } from '../infra/repositories/interfaces/IUsersRepository';
import { ICreateUserService } from './interfaces/ICreateUserService';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

interface IRequest {
  name: string;
  email: string;
  address: string;
  password: string;
  bornDate: Date;
}

class CreateUserService implements ICreateUserService {
  private usersRepository: IUsersRepository;

  constructor(servicesRepository: IUsersRepository) {
    this.usersRepository = servicesRepository;
  }

  async execute(user: IRequest): Promise<IResultDTO<IUser>> {
    const userAlreadyExists = await this.usersRepository.findByEmail(user.email);

    if (userAlreadyExists)
      return ResultDTO.Error("User already exists!");

    const newUser = await this.usersRepository.create(user);

    return ResultDTO.Success(newUser);
  }
}

export { CreateUserService };