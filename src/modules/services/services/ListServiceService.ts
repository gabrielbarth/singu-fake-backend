import { IService } from '../infra/schemas/Service';
import { IListServiceService } from './interfaces/IListServiceService';
import { IServicesRepository } from '../infra/repositories/interfaces/IServicesRepository';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

class ListServiceService implements IListServiceService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(): Promise<IResultDTO<IService[]>> {
    const services = await this.servicesRepository.list();
    return ResultDTO.Success(services);
  }

}

export { ListServiceService };