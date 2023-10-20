export interface IRoute {
  name: string;
  path: string;
  perms: {
    guest: boolean;
    isAdmin: boolean;
  };
}
