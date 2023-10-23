import { IRoute } from "../types/routes.types";

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT: "/project",
  SINGLEPROJECT: "/project/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  ADDPROJECT: "/admin/add",
  ADMINPANEL: "/admin/panel",
  LOGIN: "/admin/login",
};

export const ENDPOINTS = {
  PROJECTS: "/projects",
  CREATEPROJECT: "/projects/create",
  DELETEPROJECT: "/projects/delete",
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
  TECH: "/tech",
};

export const QUERY_KEYS = {
  PROJECT: "project",
  SINGLEPROJECT: "singleProject",
  TECH: "technologies",
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
      isAdmin: false,
    },
  },
  {
    name: "single project",
    path: "/projects/:id",
    perms: {
      guest: true,
      isAdmin: false,
    },
  },
  {
    name: "about",
    path: "/about",
    perms: {
      guest: true,
      isAdmin: false,
    },
  },
  {
    name: "contact",
    path: "/contact",
    perms: {
      guest: true,
      isAdmin: false,
    },
  },
  {
    name: "login",
    path: "/admin/login",
    perms: {
      guest: true,
      isAdmin: false,
    },
  },
  {
    name: "add project",
    path: "/admin/add",
    perms: {
      guest: false,
      isAdmin: true,
    },
  },
  {
    name: "panel",
    path: "/admin/panel",
    perms: {
      guest: false,
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
