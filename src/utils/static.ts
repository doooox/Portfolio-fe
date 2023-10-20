export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT: "/project",
  SINGLEPROJECT: "/project/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
};

export const ENDPOINTS = {
  PROJECTS: "/projects",
};

export const QUERY_KEYS = {
  PROJECT: "project",
  SINGLEPROJECT: "singleProject",
};

export const DEFAULT_QUERY_OPTIONS = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
  },
};
