export interface IUser {
  _id: string;
  email: string;
  password: string;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  login: (user: IUser) => void;
  logout: (user: IUser) => void;
}
