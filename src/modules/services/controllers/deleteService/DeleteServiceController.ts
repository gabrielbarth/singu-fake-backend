import { Request, Response } from 'express';

import { IDeleteServiceService } from '../../services/interfaces/IDeleteServiceService';

class DeleteServiceController {
  private deleteServiceService: IDeleteServiceService;

  constructor(createServiceService: IDeleteServiceService) {
    this.deleteServiceService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const all = await this.deleteServiceService.execute(id.toString());
    return response.json(all);
  }

}

export { DeleteServiceController };