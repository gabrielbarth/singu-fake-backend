import { Router } from 'express';

import { createServiceController } from '../modules/services/controllers/createService';
import { listServiceController } from '../modules/services/controllers/listServices';
import { listServiceByCategoryController } from '../modules/services/controllers/listServicesByCategory';
import { deleteServiceController } from '../modules/services/controllers/deleteService';

const servicesRoutes = Router();

servicesRoutes.post("/", (request, response) => {
  return createServiceController.handle(request, response);
});

servicesRoutes.get("/", (request, response) => {
  return listServiceController.handle(request, response);
});

servicesRoutes.get("/category", (request, response) => {
  return listServiceByCategoryController.handle(request, response);
});

servicesRoutes.delete("/:id", (request, response) => {
  return deleteServiceController.handle(request, response);
});

export { servicesRoutes };