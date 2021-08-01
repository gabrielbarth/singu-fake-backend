import { Request, Response } from 'express';

import { IListUserService } from '../../services/interfaces/IListUserService';

class ListUserController {
  private listUserService: IListUserService;

  constructor(createServiceService: IListUserService) {
    this.listUserService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listUserService.execute();
    return response.json(all);
  }

}

export { ListUserController };