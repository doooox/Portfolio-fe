import { createContext } from "react";
import { IUser, IUserContext } from "../types/user.types";

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: (_user: IUser) => Function,
  login: (_user: IUser) => Function,
  logout: () => Function,
});
