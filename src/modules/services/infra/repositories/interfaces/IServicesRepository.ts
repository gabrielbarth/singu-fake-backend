import { Service } from "../../model/Service";
import { ICreateServiceDTO } from '../../dtos/ICreateServiceDTO';

interface IServicesRepository {

  create({ description, category } : ICreateServiceDTO) : void;

  findByDescription(description: string): Service;

  list() : Service[];
}

export { IServicesRepository };