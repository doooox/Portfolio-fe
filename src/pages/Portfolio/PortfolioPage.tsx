import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useGetAllProjectsQuery } from "../../queries/project.query";
import "./PortfolioPage.css";
import LoadingComponent from "../../components/Loading/LoadingComponent";

const PortfolioPage = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { data: projects, isLoading } = useGetAllProjectsQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) return <LoadingComponent />;

  if (isLoading) return <LoadingComponent />;

  return (
    <div className="portfiolio-container">
      <div className="portfiolio">
        {projects?.map((project) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
