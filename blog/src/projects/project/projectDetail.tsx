import { useNavigate, useParams } from "react-router-dom";
import backIcon from "@/assets/icons/backArrow.png";
import style from "./projectDetail.module.scss";
import { projectsInfo } from "@/assets/projects";
import Tag from "@/components/tag/tag";

export default function ProjectDetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const project = projectsInfo.find(
    (val) => val.title.replace(" ", "") === params.projectTitle,
  );
  return (
    <div className={style.contentWrapper}>
      <div className={style.header}>
        <section className={style.back} onClick={() => navigate(-1)}>
          <img src={backIcon} className={style.backIcon} />
          <p>Back</p>
        </section>
        <h1>{params.projectTitle}</h1>
      </div>
      <div className={style.tags}>
        {project && project.tags.map((tag) => <Tag>{tag}</Tag>)}
      </div>
      <div className={style.briefView}>
        <div className={style.leftWrapper}>
          <h3>Descrption</h3>
          <section>{project?.description}</section>
          <section>
            {project?.demoUrl && <a href={project.demoUrl}>Live Demo</a>}
            <a href={project?.link}>View Repository</a>
          </section>
        </div>
        <div className={style.rightWrapper}>
          <p>img holder...</p>
        </div>
      </div>
      <div className={style.detailWrapper}>
        <div className={style.highlights}>
          <h3>⚡️ Technical Highlights </h3>
          <ul>
            {project?.hightLights.map((item) => (
              <li>{item.brief}</li>
            ))}
          </ul>
        </div>
        <div className={style.future}>
          <h3>🚀 Future Roadmap </h3>
          <ul>
            {project?.futureRoadmap.map((item) => (
              <li>{item.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
