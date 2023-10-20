import { useQuery } from "@tanstack/react-query";
import { projectService } from "../services/ProjectService";
import { IProject } from "../types/project.type";
import { QUERY_KEYS } from "../utils/static";

export const useGetAllProjectsQuery = () => {
    return useQuery<IProject[]>([QUERY_KEYS.PROJECT], async () => await projectService.getAllProjects())
}

export const useGetSingleProjectQuery = (id: string | number) => {
    return useQuery<IProject>([QUERY_KEYS.SINGLEPROJECT], async () => await projectService.getSingleProject(id))
}