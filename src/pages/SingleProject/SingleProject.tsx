import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProjectQuery } from "../../queries/project.query";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SingleProject.css";
import LoadingComponent from "../../components/Loading/LoadingComponent";

const SingleProject = () => {
  const { id } = useParams();

  const { data: project, isLoading } = useGetSingleProjectQuery(id || "");

  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
  };

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) return <LoadingComponent />;

  if (isLoading) return <LoadingComponent />;
  return (
    <div className="single-project">
      <div className="project-details">
        <h1 className="project-title">{project?.title}</h1>
        <div className="project-images">
          <Carousel
            selectedItem={slideIndex}
            onChange={handleSlideChange}
            showThumbs={true}
            autoPlay={false}
            transitionTime={1500}
            infiniteLoop={true}
            showStatus={true}
            showArrows={false}
            swipeable={true}
          >
            {project?.photos.map((photo) => (
              <div key={photo} className="project-image">
                <img src={photo} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <p className="project-description">{project?.description}</p>
        <h4 style={{ color: "white" }} className="technologies-title">
          Technologies used for this project:
        </h4>
        <ul className="project-technologies">
          {project?.technologies.map((tech) => (
            <li key={tech._id}>{tech.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProject;
