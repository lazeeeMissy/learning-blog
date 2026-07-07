import { useNavigate } from "react-router-dom";
import Card from "@/components/card/card";
import { projectsInfo } from "@/assets/projects";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <Card title="Projects">
      <ul>
        {projectsInfo.map((project) => (
          <li
            key={project.title}
            onClick={() =>
              navigate(`/projects/${project.title.replace(" ", "")}`)
            }
          >
            {project.title}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProjectsPage;
