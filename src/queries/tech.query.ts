import { useQuery } from "@tanstack/react-query";
import { ITech } from "../types/project.type";
import { QUERY_KEYS } from "../utils/static";
import { techService } from "../services/TescService";

export const useGetTechQuery = () => {
  return useQuery<ITech[]>(
    [QUERY_KEYS.TECH],
    async () => await techService.getTech()
  );
};
