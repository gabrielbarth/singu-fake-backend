import { IServicesRepository } from '../infra/repositories/interfaces/IServicesRepository';

interface IRequest {
  description: string;
  category: string;
}

class CreateServiceService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {

    this.servicesRepository = servicesRepository;
  }

  execute({ description, category }: IRequest): void {
    const serviceAlreadyExists = this.servicesRepository.findByDescription(description);

    if (serviceAlreadyExists)
      throw new Error("Service already exists!");

    this.servicesRepository.create({
      description,
      category
    });
  }
}

export { CreateServiceService };