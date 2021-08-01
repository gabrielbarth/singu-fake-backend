import { IResultDTO } from "../../../../utils/result/IResultDTO";
import { ICreateServiceDTO } from "../../infra/dtos/ICreateServiceDTO";
import { IService } from "../../infra/schemas/Service";

interface ICreateServiceService {
    execute({} : ICreateServiceDTO) :  Promise<IResultDTO<IService>>;
}

export { ICreateServiceService };