import { useEffect, useState } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useGetAllProjectsQuery } from "../../queries/project.query";
import { useMutation } from "@tanstack/react-query";
import { projectService } from "../../services/ProjectService";
import useAuthGuard from "../../hooks/useAuthGuard";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/static";
import "./AdminPanel.css";

const AdminPanel = () => {
  useAuthGuard();
  const [showLoading, setShowLoading] = useState(true);
  const { data: projects, isLoading, refetch } = useGetAllProjectsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const deleteCarMutation = useMutation(projectService.deleteProject, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleDeleteProject = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this car?"
    );
    if (confirmDelete) {
      await deleteCarMutation.mutateAsync(id);
    }
  };

  if (showLoading) return <LoadingComponent />;

  if (isLoading) return <LoadingComponent />;

  return (
    <div className="container">
      <button className="button-link">
        <Link to={ROUTES.ADDPROJECT} className="link">
          Add New Project
        </Link>
      </button>
      <div className="project-list">
        {projects?.map((project) => (
          <div className="project-card" key={project._id}>
            <h1 onClick={() => navigate(`${ROUTES.PROJECT}/${project._id}`)}>
              {project.title}
            </h1>
            <div className="action-buttons">
              <button onClick={() => handleDeleteProject(project._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
