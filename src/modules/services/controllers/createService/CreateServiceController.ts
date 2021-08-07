import { Request, Response } from 'express';

import { ICreateServiceService } from '../../services/interfaces/ICreateServiceService';

class CreateServiceController {
  private createServiceService: ICreateServiceService;

  constructor(createServiceService: ICreateServiceService) {
    this.createServiceService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { description, category, observation, imageUrl } = request.body;

    const service = await this.createServiceService.execute({
      description,
      category,
      observation,
      imageUrl
    });

    return response.status(201).json(service);
  }

}

export { CreateServiceController };