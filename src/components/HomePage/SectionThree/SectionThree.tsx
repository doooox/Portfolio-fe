import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../../../queries/project.query";
import Card from "../../Card/Card";
import "./SectionThree.css";
import { ROUTES } from "../../../utils/static";
import { ButtonComponent } from "../../Button/ButtonComponent";

const SectionThree = () => {
  const { data: projects } = useGetAllProjectsQuery();

  return (
    <div className="section-three-container">
      <h1>My Projects</h1>
      <div className="cards-container">
        {projects?.map(
          (project, index) => index < 3 && <Card project={project} />
        )}
      </div>
      <Link to={ROUTES.PROJECTS}>
        <ButtonComponent name="View All" />
      </Link>
    </div>
  );
};

export default SectionThree;
