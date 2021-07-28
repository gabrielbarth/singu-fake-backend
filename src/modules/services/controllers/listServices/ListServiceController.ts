import { Request, Response } from 'express';

import { ListServiceService } from '../../services/ListServiceService';

class ListServiceController {
  private listServiceService: ListServiceService;

  constructor(createServiceService: ListServiceService) {

    this.listServiceService = createServiceService;
  }
  
  handle(request: Request, response: Response): Response {
    const all = this.listServiceService.execute();
    return response.json(all);
  }

}

export { ListServiceController };