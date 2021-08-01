import { Request, Response } from 'express';

import { ICreateUserService } from '../../services/interfaces/ICreateUserService';

class CreateUserController {
  private createUserService: ICreateUserService;

  constructor(createServiceService: ICreateUserService) {
    this.createUserService = createServiceService;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      name,
      email,
      password,
      address,
      bornDate,
    } = request.body;

    const user = await this.createUserService.execute({
      name,
      email,
      password,
      address,
      bornDate,
    });

    return response.status(201).json(user);
  }

}

export { CreateUserController };