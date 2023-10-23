import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/static";
import NavbarComponent from "./components/Navigation/NavbarComponent";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import SingleProject from "./pages/SingleProject/SingleProject";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<NavbarComponent />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PROJECTS} element={<PortfolioPage />} />
        <Route path={ROUTES.SINGLEPROJECT} element={<SingleProject />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.ADDPROJECT} element={<AddProjectPage />} />
        <Route path={ROUTES.ADMINPANEL} element={<AdminPanel />} />
      </Route>
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  );
};

export default AppRouter;
