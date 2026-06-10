import { useNavigate, useParams } from "react-router-dom";
import style from "./projects.module.scss";
import { projectsInfo } from "@/assets/projects";
const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        {projectsInfo.map((project) => (
          <li
            onClick={() =>
              navigate(`/projects/${project.title.replace(" ", "")}`)
            }
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
