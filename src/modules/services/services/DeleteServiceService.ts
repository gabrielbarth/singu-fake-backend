import { IDeleteServiceService } from './interfaces/IDeleteServiceService';
import { IServicesRepository } from '../infra/repositories/interfaces/IServicesRepository';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

class DeleteServiceService implements IDeleteServiceService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(id: string): Promise<IResultDTO<boolean>> {
    const services = await this.servicesRepository.delete(id);
    return ResultDTO.Success(services);
  }

}

export { DeleteServiceService };