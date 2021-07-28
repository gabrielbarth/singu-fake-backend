import { Request, Response } from 'express';

import { CreateServiceService } from '../../services/CreateServiceService';

class CreateServiceController {
  private createServiceService: CreateServiceService;

  constructor(createServiceService: CreateServiceService) {

    this.createServiceService = createServiceService;
  }
  
  handle(request: Request, response: Response): Response {
    const { description, category } = request.body;

    this.createServiceService.execute({ description, category })

    return response.status(201).send();
  }

}

export { CreateServiceController };