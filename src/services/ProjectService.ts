import { IProject, IProjectDraft } from "../types/project.type";
import { ENDPOINTS } from "../utils/static";
import { getItemFormStorage } from "../utils/storage";
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

  addProject = async (data: IProjectDraft) => {
    const token = getItemFormStorage("token");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    if (data.technologies) {
      data.technologies.forEach((tech) => {
        formData.append("technologies", tech.toString());
      });
    }

    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos[i]);
      }
    }

    return await this.httpService.request({
      url: ENDPOINTS.CREATEPROJECT,
      method: "POST",
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  };

  deleteProject = async (id: string) => {
    const token = getItemFormStorage("token");

    return await this.httpService.request({
      url: `${ENDPOINTS.DELETEPROJECT}/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export const projectService = new ProjectService();
