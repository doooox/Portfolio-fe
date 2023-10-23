import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION_ROUTES, ROUTES } from "../utils/static";

const useAuthGuard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const perms = NAVIGATION_ROUTES.find(
    (route) => route.path === location.pathname
  );
  useEffect(() => {
    if (!perms) return;
    // if (!user && perms.perms.isAdmin) {
    //   navigate(ROUTES.LOGIN);
    //   return;
    // }
    // if (user && perms.perms.guest) {
    //   navigate(-1);
    // }
  }, []);
};

export default useAuthGuard;
