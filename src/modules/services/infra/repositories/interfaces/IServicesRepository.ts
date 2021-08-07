import { IService } from "../../schemas/Service";
import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';

interface IServicesRepository {
  create({ description, category, observation, imageUrl } : ICreateServiceDTO) : Promise<IService>;
  findByDescription(description: string) : Promise<IService>;
  listByCategory(category: string): Promise<IService[]>
  list() :  Promise<IService[]>;
  delete(id: string) : Promise<boolean>;
}

export { IServicesRepository };