export interface UserI {
  _id: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  isAdmin?: boolean;
  toObject?: void;
}

export interface Error {
  message: string,
  status?:string,
}