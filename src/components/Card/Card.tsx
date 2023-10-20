import "./Card.css";
import { IProject } from "../../types/project.type";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/static";
import { ButtonComponent } from "../Button/ButtonComponent";

interface Props {
  project: IProject;
}

const Card = ({ project }: Props) => {
  return (
    <div className="card-container">
      <div className="card-content">
        {project.photos && project.photos.length > 0 && (
          <img src={project.photos[0]} alt="" loading="lazy" />
        )}
        <h2>{project.title}</h2>
        <Link to={`${ROUTES.PROJECT}/${project._id}`}>
          <ButtonComponent name="View" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
