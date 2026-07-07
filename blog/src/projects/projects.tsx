import { useNavigate } from "react-router-dom";
import Tag from "@/components/tag/tag";
import { projectsInfo } from "@/assets/projects";
import style from "./projects.module.scss";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <main className={style.pageWrapper}>
      <header className={style.hero}>
        <p className={style.eyebrow}>Portfolio</p>
        <h1>Projects</h1>
        <p>
          These are my recent software projects across full-stack, frontend, and backend development.
        </p>
      </header>

      <section className={style.grid}>
        {projectsInfo.map((project) => (
          <article className={style.projectCard} key={project.title} onClick={() =>
            navigate(`/projects/${project.title.replace(/\s+/g, "")}`)
          }>
              <img
                src={project.coverUrl}
                alt={`${project.title} cover`}
                className={style.cover}
              />
            <div className={style.cardBody}>
              <div className={style.titleRow}>
                <h3>{project.title}</h3>
                <p className={style.time}>{project.time}</p>
              </div>
              <p className={style.brief}>{project.briefDes}</p>
              <div className={style.metaRow}>
                <span>Responsibilities</span>
                {project.responsibilities.map((item) => (
                  <Tag key={`${project.title}-${item}`}>{item}</Tag>
                ))}
              </div>
              <div className={style.metaRow}>
                <span>Tech Stack</span>
                {project.tags.map((tag) => (
                  <Tag key={`${project.title}-${tag}`}>{tag}</Tag>
                ))}
              </div>
              <div className={style.actions}>
                <button
                  onClick={() =>
                    navigate(`/projects/${project.title.replace(/\s+/g, "")}`)
                  }
                >
                  View Detail
                </button>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
