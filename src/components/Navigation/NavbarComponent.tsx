import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../../utils/static";
import "./NavbarComponent.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Footer from "../Footer/Footer";
import { useState } from "react";

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="site-header">
        <h1>Dusan Topic</h1>
        <ul>
          <li className="social-network-linkedin">
            <Link
              to={"https://rs.linkedin.com/in/dusan-topic-b668431ba"}
              target="_blank"
            >
              <FiLinkedin className="linkedin" />
            </Link>
          </li>
          <li className="social-network-git">
            <Link
              to={"https://github.com/doooox?tab=repositories"}
              target="_blank"
            >
              <FiGithub className="git" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="site-navigation">
        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          <div className={`bar ${menuOpen ? "active" : ""}`}></div>
        </div>
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to={ROUTES.HOME}
                className="link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ABOUT}
                className="link"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.PROJECTS}
                className="link"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.CONTACT}
                className="link"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigation-children">
        <Outlet />
      </div>
      <div
        style={{
          borderTop: "1px solid white",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "80%",
          margin: "auto",
        }}
      >
        <Footer />
      </div>
    </nav>
  );
};

export default NavbarComponent;
