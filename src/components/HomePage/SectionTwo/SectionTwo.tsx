import { Link } from "react-router-dom";
import "./SectionTwo.css";
import { ButtonComponent } from "../../Button/ButtonComponent";

const SectionTwo = () => {
  return (
    <div className="section-two-container">
      <h1 className="title">About me</h1>
      <div className="bla">
        <div className="section-two-text-container">
          <h1>I am a Full Stack Web Developer</h1>
          <p>
            I am Dušan Topić, a passionate and aspiring web developer with a
            deep-rooted love for creating in the digital realm. My journey into
            the world of development began as a curiosity, but it has evolved
            into a genuine career pursuit. I am driven by a relentless desire to
            expand my knowledge and skills, to learn and create, and to
            contribute to the ever-evolving web development landscape.
          </p>
        </div>
      </div>
      <Link to="/about">
        <ButtonComponent name="About Me" />
      </Link>
    </div>
  );
};

export default SectionTwo;
