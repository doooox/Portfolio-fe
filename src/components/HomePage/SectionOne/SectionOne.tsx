import { Link } from "react-router-dom";
import "./SectionOne.css";
import { ROUTES } from "../../../utils/static";
import image from "../../../assets/Images/HomePageImage.png";
import { ButtonComponent } from "../../Button/ButtonComponent";

const SectionOne = () => {
  return (
    <div className="section-one-conteiner">
      <div className="section-one-text">
        <h3>I AM DUSAN TOPIC</h3>
        <h1>Full Stack Web Developer</h1>
        <Link to={ROUTES.CONTACT}>
          <ButtonComponent name="Contact Me" />
        </Link>
      </div>
      <div className="section-one-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SectionOne;
