import { IResultDTO } from "../../../../utils/result/IResultDTO";
import { IUser } from "../../infra/schemas/User";

interface IListUserService {
    execute() :  Promise<IResultDTO<IUser[]>>;
}

export { IListUserService };