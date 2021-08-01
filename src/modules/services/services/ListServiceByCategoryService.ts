import { IService } from '../infra/schemas/Service';
import { IListServiceByCategoryService } from './interfaces/IListServiceByCategoryService';
import { IServicesRepository } from '../infra/repositories/interfaces/IServicesRepository';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

class ListServiceByCategoryService implements IListServiceByCategoryService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(category: string): Promise<IResultDTO<IService[]>> {
    const services = await this.servicesRepository.listByCategory(category);
    return ResultDTO.Success(services);
  }

}

export { ListServiceByCategoryService };