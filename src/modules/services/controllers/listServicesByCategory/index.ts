import { ServicesRepository } from '../../infra/repositories/ServicesRepository';
import { ListServiceByCategoryService } from '../../services/ListServiceByCategoryService';
import { ListServiceByCategoryController } from './ListServiceByCategoryController';
 
const servicesRepository = ServicesRepository.getInstance();

const listServiceByCategoryService = new ListServiceByCategoryService(servicesRepository);

const listServiceByCategoryController = new ListServiceByCategoryController(listServiceByCategoryService);

export { listServiceByCategoryController, listServiceByCategoryService };