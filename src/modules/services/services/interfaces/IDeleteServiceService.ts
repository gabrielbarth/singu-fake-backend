import { IResultDTO } from "../../../../utils/result/IResultDTO";

interface IDeleteServiceService {
    execute(id: string) :  Promise<IResultDTO<boolean>>;
}

export { IDeleteServiceService };