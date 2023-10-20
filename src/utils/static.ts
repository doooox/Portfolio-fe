import { IRoute } from "../types/routes.types";

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT: "/project",
  SINGLEPROJECT: "/project/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  ADDPROJECT: "/admin/add",
  LOGIN: "/admin/login",
};

export const ENDPOINTS = {
  PROJECTS: "/projects",
  CREATEPROJECT: "/projects/create",
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
};

export const QUERY_KEYS = {
  PROJECT: "project",
  SINGLEPROJECT: "singleProject",
};

export const NAVIGATION_ROUTES: IRoute[] = [
  {
    name: "home",
    path: "/",
    perms: {
      guest: true,
      isAdmin: false,
    },
  },
  {
    name: "projects",
    path: "/projects",
    perms: {
      guest: true,
      isAdmin: true,
    },
  },
  {
    name: "single project",
    path: "/projects/:id",
    perms: {
      guest: true,
      isAdmin: true,
    },
  },
  {
    name: "about",
    path: "/about",
    perms: {
      guest: true,
      isAdmin: true,
    },
  },
  {
    name: "contact",
    path: "/contact",
    perms: {
      guest: true,
      isAdmin: true,
    },
  },
];

export type StorageKeys = "user" | "token";

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
