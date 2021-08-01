import { ICreateUserDTO } from "../../infra/dtos/ICreateUserDTO";
import { IResultDTO } from "../../../../utils/result/IResultDTO";
import { IUser } from "../../infra/schemas/User";

interface ICreateUserService {
    execute({}: ICreateUserDTO) :  Promise<IResultDTO<IUser>>;
}

export { ICreateUserService };