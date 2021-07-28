import { Router } from 'express';

import { createServiceController } from '../modules/services/controllers/createService';
import { listServiceController } from '../modules/services/controllers/listServices';

const servicesRoutes = Router();

servicesRoutes.post("/", (request, response) => {
  return createServiceController.handle(request, response);
});

servicesRoutes.get("/", (request, response) => {
  return listServiceController.handle(request, response);
});


export { servicesRoutes };