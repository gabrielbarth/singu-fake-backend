import { ServicesRepository } from '../../infra/repositories/ServicesRepository';
import { DeleteServiceService } from '../../services/DeleteServiceService';
import { DeleteServiceController } from './DeleteServiceController';
 
const servicesRepository = ServicesRepository.getInstance();

const deleteServiceService = new DeleteServiceService(servicesRepository);

const deleteServiceController = new DeleteServiceController(deleteServiceService);

export { deleteServiceController, deleteServiceService };