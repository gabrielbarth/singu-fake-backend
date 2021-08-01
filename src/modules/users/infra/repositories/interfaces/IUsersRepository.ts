import { IUser } from "../../schemas/User";
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(user: ICreateUserDTO) : Promise<IUser>;
  findByEmail(email: string) : Promise<IUser>;
  list() :  Promise<IUser[]>;
  delete(id: string) : Promise<boolean>;
}

export { IUsersRepository };