import { Service } from '../model/Service';
import { IServicesRepository } from '../repositories/interfaces/IServicesRepository';

class ListServiceService {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {

    this.servicesRepository = servicesRepository;
  }

  execute(): Service[] {
    const services = this.servicesRepository.list();
    return services;
  }

}

export { ListServiceService };