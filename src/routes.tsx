import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/static";
import NavbarComponent from "./components/Navigation/NavbarComponent";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import SingleProject from "./pages/SingleProject/SingleProject";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<NavbarComponent />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.PROJECTS} element={<PortfolioPage />} />
        <Route path={ROUTES.SINGLEPROJECT} element={<SingleProject />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
