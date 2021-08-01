import { IResultDTO } from "../../../../utils/result/IResultDTO";

interface IDeleteUserService {
    execute(id: string) :   Promise<IResultDTO<boolean>>;
}

export { IDeleteUserService };