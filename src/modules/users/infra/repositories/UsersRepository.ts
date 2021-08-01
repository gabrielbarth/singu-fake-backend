import { UserModel, IUser } from '../schemas/User';
import { IUsersRepository } from './interfaces/IUsersRepository';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE)
      UsersRepository.INSTANCE = new UsersRepository();

    return UsersRepository.INSTANCE;
  }

  async create(user: ICreateUserDTO): Promise<IUser> {
    const newUser = await UserModel.create(user);
    return newUser;
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await UserModel.findOne({ email });
    return user;
  }

  async list(): Promise<IUser[]> {
    const users = await UserModel.find();
    return users;
  }

  async delete(id: string): Promise<boolean>{
    const user = await UserModel.deleteOne({ _id: id });
    return user.deletedCount > 0;
  }

}

export { UsersRepository };