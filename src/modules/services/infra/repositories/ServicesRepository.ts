import { ServiceModel, IService } from '../schemas/Service';
import { IServicesRepository } from './interfaces/IServicesRepository';
import { ICreateServiceDTO } from '../dtos/ICreateServiceDTO';

class ServicesRepository implements IServicesRepository {
  private static INSTANCE: ServicesRepository;

  public static getInstance(): ServicesRepository {
    if (!ServicesRepository.INSTANCE)
      ServicesRepository.INSTANCE = new ServicesRepository();

    return ServicesRepository.INSTANCE;
  }

  async create({ description, category, observation, imageUrl }: ICreateServiceDTO): Promise<IService> {
    const service = await ServiceModel.create({
      description,
      category,
      observation,
      imageUrl
    });

    return service;
  }

  async findByDescription(description: string): Promise<IService> {
    const service = await ServiceModel.findOne({ description });
    return service;
  }

  async list(): Promise<IService[]> {
    const services = await ServiceModel.find();
    return services;
  }

  async listByCategory(category: string): Promise<IService[]> {
    const services = await ServiceModel.find({ category });
    return services;
  }


  async delete(id: string): Promise<boolean> {
    const service = await ServiceModel.deleteOne({ _id: id });
    return service.deletedCount > 0;
  }

}

export { ServicesRepository };