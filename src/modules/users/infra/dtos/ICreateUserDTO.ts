interface ICreateUserDTO {
  name: string;
  email: string;
  address: string;
  password: string;
  bornDate: Date;
}

export { ICreateUserDTO };