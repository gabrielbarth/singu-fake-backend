interface IResultDTO<T> {
    status: boolean;
    data?: T;
    errors: string | [string] | [];
}

export { IResultDTO };