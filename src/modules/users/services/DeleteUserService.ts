import { IDeleteUserService } from './interfaces/IDeleteUserService';
import { IUsersRepository } from '../infra/repositories/interfaces/IUsersRepository';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

class DeleteUserService implements IDeleteUserService {
  private servicesRepository: IUsersRepository;

  constructor(servicesRepository: IUsersRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(id: string): Promise<IResultDTO<boolean>> {
    const user = await this.servicesRepository.delete(id);
    return ResultDTO.Success(user);
  }

}

export { DeleteUserService };