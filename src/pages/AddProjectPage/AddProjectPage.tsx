import { useForm } from "react-hook-form";
import useAuthGuard from "../../hooks/useAuthGuard";
import { useGetTechQuery } from "../../queries/tech.query";
import "./AddProjectPage.css";
import { ButtonComponent } from "../../components/Button/ButtonComponent";
import { IProjectDraft } from "../../types/project.type";
import { useMutation } from "@tanstack/react-query";
import { projectService } from "../../services/ProjectService";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/static";

const AddProjectPage = () => {
  useAuthGuard();
  const { data: tech } = useGetTechQuery();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProjectDraft>();

  const { mutate } = useMutation(projectService.addProject, {
    onSuccess: () => {
      reset();
      navigation(ROUTES.ADMINPANEL);
    },
  });

  const onSubmit = async (data: IProjectDraft) => {
    try {
      const formData = new FormData();

      const title = data.title;
      const description = data.description;
      const photos = [];
      const technologies: any[] = [];

      if (data.technologies && data.technologies.length > 0) {
        data.technologies.forEach((tech) => {
          technologies.push(tech.toString());
        });
      }

      if (data.photos && data.photos.length > 0) {
        for (let i = 0; i < data.photos.length; i++) {
          photos.push(data.photos[i]);
        }
      }
      formData.append("title", title);
      formData.append("description", description);

      technologies.forEach((tech) => {
        formData.append("technologies[]", tech);
      });
      photos.forEach((photo) => {
        formData.append("photos[]", photo);
      });

      const projectDraft: IProjectDraft = {
        title: data.title,
        description: data.description,
        technologies: technologies,
        photos: photos,
      };

      mutate(projectDraft);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-project-container">
      <button className="button-link">
        <Link to={ROUTES.ADMINPANEL} className="link">
          Admin Panel
        </Link>
      </button>
      <div>
        <h1>Add Project</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
            })}
          />
          {errors.title && (
            <span className="error">{errors.title?.message}</span>
          )}
          <textarea
            rows={10}
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <span className="error">{errors.description?.message}</span>
          )}
          <input
            type="file"
            multiple
            {...register("photos", {
              required: "Photos are required",
            })}
          />
          {errors.photos && (
            <span className="error">{errors.photos?.message}</span>
          )}
          <div className="technologies-container">
            <p className="technologies-title">Select Technologies:</p>
            {tech?.map((t) => (
              <div key={t._id}>
                <label>
                  <input
                    className="tech-select"
                    type="checkbox"
                    {...register("technologies", {
                      required: "Technologies are required!",
                    })}
                    value={t._id}
                  />
                  <span className="select-name"> {t.name}</span>
                </label>
              </div>
            ))}
          </div>
          {errors.technologies && (
            <span className="error">{errors.technologies?.message}</span>
          )}
          <ButtonComponent name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProjectPage;
