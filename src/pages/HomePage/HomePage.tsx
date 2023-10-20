import "./HomePage.css";
import SectionOne from "../../components/HomePage/SectionOne/SectionOne";
import SectionTwo from "../../components/HomePage/SectionTwo/SectionTwo";
import SectionThree from "../../components/HomePage/SectionThree/SectionThree";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="section-one">
        <SectionOne />
      </div>
      <div className="section-two">
        <SectionTwo />
      </div>
      <div className="section-three">
        <SectionThree />
      </div>
    </div>
  );
};

export default HomePage;
