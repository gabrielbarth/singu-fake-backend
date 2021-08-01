import { Request, Response } from 'express';

import { IListServiceByCategoryService } from '../../services/interfaces/IListServiceByCategoryService';

class ListServiceByCategoryController {
  private listServiceByCategoryService: IListServiceByCategoryService;

  constructor(createServiceService: IListServiceByCategoryService) {
    this.listServiceByCategoryService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { category } = request.query;
    const services = await this.listServiceByCategoryService.execute(category.toString());
    return response.json(services);
  }

}

export { ListServiceByCategoryController };