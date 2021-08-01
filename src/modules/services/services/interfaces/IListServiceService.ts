import { IResultDTO } from "../../../../utils/result/IResultDTO";
import { IService } from "../../infra/schemas/Service";

interface IListServiceService {
    execute() :  Promise<IResultDTO<IService[]>>;
}

export { IListServiceService };