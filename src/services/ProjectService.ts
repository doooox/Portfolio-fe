import { IProject } from "../types/project.type";
import { ENDPOINTS } from "../utils/static";
import { httpService } from "./HttpService";

class ProjectService {
  protected httpService = httpService;

  getAllProjects = async () => {
    return await this.httpService.request<IProject[]>({
      url: ENDPOINTS.PROJECTS,
      method: "GET",
    });
  };
  getSingleProject = async (id: string | number) => {
    return await this.httpService.request<IProject>({
      url: `${ENDPOINTS.PROJECTS}/${id}`,
      method: "GET",
    });
  };
}

export const projectService = new ProjectService();
