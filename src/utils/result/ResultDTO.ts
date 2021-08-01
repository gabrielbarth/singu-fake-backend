import { IResultDTO } from './IResultDTO';

class ResultDTO {
    public data?: any;
    public status: boolean;
    public errors: string | [string] | [];

    constructor(
        data: any,
        errors: string | [string] | [],
        status: boolean) {
        this.data = data;
        this.errors = errors;
        this.status = status;
    }

    static Success(data: any): IResultDTO<any> {
        return new ResultDTO(data, [], true);
    }

    static Error(errors: string | []): IResultDTO<any> {
        if (typeof errors == 'string')
            return new ResultDTO(null, [errors], false);
        else
            return new ResultDTO(null, errors, false);
    }

}
export { ResultDTO };