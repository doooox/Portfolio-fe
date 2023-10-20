import { url } from "inspector";
import { ILogin, IUser } from "../types/user.types";
import { httpService } from "./HttpService";
import { ENDPOINTS } from "../utils/static";
import { getItemFormStorage } from "../utils/storage";

class UserService {
  protected httpService = httpService;

  loginUser = async (data: ILogin) => {
    return await this.httpService.request<IUser>({
      url: ENDPOINTS.LOGIN,
      method: "POST",
      data,
    });
  };

  logout = async () => {
    const token = getItemFormStorage("token");

    return await this.httpService.request({
      url: ENDPOINTS.LOGOUT,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export const userService = new UserService();
