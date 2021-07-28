import { ServicesRepository } from '../../infra/repositories/ServicesRepository';
import { ListServiceService } from '../../services/ListServiceService';
import { ListServiceController } from './ListServiceController';
 
const servicesRepository = ServicesRepository.getInstance();

const listServiceService = new ListServiceService(servicesRepository);

const listServiceController = new ListServiceController(listServiceService);

export { listServiceController, listServiceService };