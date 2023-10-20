import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/user.types";
import {
  clearItemFormStorage,
  getItemFormStorage,
  setItemToStorage,
} from "../utils/storage";
import { ROUTES } from "../utils/static";
import { userService } from "../services/UserService";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(getItemFormStorage("user"));
  const login = (user: IUser) => {
    setUser(user);
    setItemToStorage("user", JSON.stringify(user));
    setItemToStorage("token", JSON.stringify(user.token));
    navigate(ROUTES.ADDPROJECT);
  };

  const logout = async () => {
    await userService.logout();
    clearItemFormStorage("token");
    clearItemFormStorage("user");
    setUser(null);
    navigate(ROUTES.HOME);
  };

  return {
    user,
    setUser,
    login,
    logout,
  };
};

export default useUser;
