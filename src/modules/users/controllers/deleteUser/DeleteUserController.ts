import { Request, Response } from 'express';

import { IDeleteUserService } from '../../services/interfaces/IDeleteUserService';

class DeleteUserController {
  private deleteUserService: IDeleteUserService;

  constructor(createServiceService: IDeleteUserService) {
    this.deleteUserService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;
    const all = await this.deleteUserService.execute(id.toString());
    return response.json(all);
  }

}

export { DeleteUserController };