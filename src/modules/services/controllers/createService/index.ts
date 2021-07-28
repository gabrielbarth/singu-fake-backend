import { ServicesRepository } from '../../infra/repositories/ServicesRepository';
import { CreateServiceService } from '../../services/CreateServiceService';
import { CreateServiceController } from './CreateServiceController';

const servicesRepository = ServicesRepository.getInstance();

const createServiceService = new CreateServiceService(servicesRepository);

const createServiceController = new CreateServiceController(createServiceService);

export { createServiceController, createServiceService };