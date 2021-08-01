import { Request, Response } from 'express';

import { IListServiceService } from '../../services/interfaces/IListServiceService';

class ListServiceController {
  private listServiceService: IListServiceService;

  constructor(createServiceService: IListServiceService) {
    this.listServiceService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listServiceService.execute();
    return response.json(all);
  }

}

export { ListServiceController };