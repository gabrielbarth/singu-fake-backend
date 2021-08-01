import { IUser } from '../infra/schemas/User';
import { IListUserService } from './interfaces/IListUserService';
import { IUsersRepository } from '../infra/repositories/interfaces/IUsersRepository';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

class ListUserService implements IListUserService {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(): Promise<IResultDTO<IUser[]>> {
    const users = await this.usersRepository.list();
    return ResultDTO.Success(users);
  }

}

export { ListUserService };