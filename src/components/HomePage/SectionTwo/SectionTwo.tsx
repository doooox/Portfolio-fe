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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            officiis quo voluptate amet voluptas totam veniam, quae ad iusto
            sequi omnis nesciunt! Doloremque et dignissimos cum asperiores
            nostrum cupiditate id nisi quibusdam quis impedit, error eligendi
            provident iste quaerat, harum eius reprehenderit dicta nulla totam
            libero iure nam itaque! Architecto?
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
