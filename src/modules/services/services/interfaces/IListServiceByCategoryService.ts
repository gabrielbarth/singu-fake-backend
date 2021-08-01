import { IResultDTO } from "../../../../utils/result/IResultDTO";
import { IService } from "../../infra/schemas/Service";

interface IListServiceByCategoryService {
    execute(category: string) :  Promise<IResultDTO<IService[]>>;
}

export { IListServiceByCategoryService };