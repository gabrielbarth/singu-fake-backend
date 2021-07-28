import { Service } from '../model/Service';
import { IServicesRepository } from './interfaces/IServicesRepository';
import { ICreateServiceDTO } from '../dtos/ICreateServiceDTO';

class ServicesRepository implements IServicesRepository {
  private services: Service[];

  private static INSTANCE: ServicesRepository;

  private constructor() {
    this.services = [];
  }

  public static getInstance(): ServicesRepository {

    if (!ServicesRepository.INSTANCE)
      ServicesRepository.INSTANCE = new ServicesRepository();

    return ServicesRepository.INSTANCE;
  }

  create({ description, category }: ICreateServiceDTO): void {

    const service = new Service();

    Object.assign(service, {
      description,
      category
    });

    this.services.push(service);
  }

  list(): Service[] {
    return this.services;
  }

  findByDescription(description: string): Service {
    const service = this.services.find(service => service.description == description);
    return service;
  }

}

export { ServicesRepository };