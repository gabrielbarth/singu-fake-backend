import { IService } from '../infra/schemas/Service';
import { IServicesRepository } from '../infra/repositories/interfaces/IServicesRepository';
import { ICreateServiceService } from './interfaces/ICreateServiceService';

import { ResultDTO } from '../../../utils/result/ResultDTO';
import { IResultDTO } from '../../../utils/result/IResultDTO';

interface IRequest {
  description: string;
  category: string;
  observation: string;
  imageUrl: string;
}

class CreateServiceService implements ICreateServiceService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute({ description, category, observation, imageUrl }: IRequest): Promise<IResultDTO<IService>> {
    const serviceAlreadyExists = await this.servicesRepository.findByDescription(description);

    if (serviceAlreadyExists)
      return ResultDTO.Error("Service already exists!");

    const newService = await this.servicesRepository.create({
      description,
      category,
      observation,
      imageUrl
    });

    return ResultDTO.Success(newService);
  }
}

export { CreateServiceService };