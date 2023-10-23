import { ITech } from "../types/project.type";
import { ENDPOINTS } from "../utils/static";
import { httpService } from "./HttpService";

class TechService {
  protected httpService = httpService;

  getTech = async () => {
    return this.httpService.request<ITech[]>({
      url: ENDPOINTS.TECH,
      method: "GET",
    });
  };
}

export const techService = new TechService();
