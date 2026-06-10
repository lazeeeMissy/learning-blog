import Card from "@/components/card/card";
import style from "./home.module.scss";
import { menus } from "@/assets/menus";
import { useLocation, useNavigate } from "react-router-dom";
import Tag from "@/components/tag/tag";
import { missyInfo } from "@/assets/info";
import NameWave from "@/utils/name-wave/nameWave";
import { projectsInfo } from "@/assets/projects";
import ProjectCard from "@/components/projectCard/projectCard";

const HomePage = () => {
  const path = useLocation();
  const navigate = useNavigate();
  return (
    <div className={style.homeWrapper}>
      <section className={style.leftWrapper}>
        <Card className={style.avatar}>
          <img></img>
          <div>
            <h2>{missyInfo.alias}</h2>
            <Tag>📍 {missyInfo.location}</Tag>
          </div>
        </Card>
        <Card className={style.menusWrapper}>
          <div>
            <h3>Menus</h3>
          </div>
          <ul>
            {menus.map((menu) => (
              // improvement: 划到中间切menu
              <li
                onClick={() => navigate(menu.route)}
                className={
                  path.pathname === menu.route ||
                  path.pathname.startsWith(`${menu.route}/`)
                    ? style.active
                    : ""
                }
              >
                {menu.icon}{" "}
                <span style={{ marginLeft: "5px" }}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
      <section className={style.rightWrapper}>
        <Card className={style.cardWrapper}>
          <p>Welcome</p>
          <h1>
            Hi, I am <span> {NameWave(missyInfo.alias)}</span>
          </h1>
          <p>{missyInfo.brief}</p>
          <div className={style.tagsWrapper}>
            {missyInfo.links.map((link) => (
              <Tag className={style.tagItem}>{link.item}</Tag>
            ))}
          </div>
        </Card>
        <Card
          className={style.cardWrapper}
          title="About Me"
          tags={missyInfo.aboutMe.tags}
        >
          <p>{missyInfo.aboutMe.content}</p>
        </Card>
        <Card
          className={`${style.cardWrapper} ${style.projectsWrapper}`}
          title="Projects"
        >
          <div className={style.projects}>
            {projectsInfo.map((project, index) => (
              <ProjectCard
                title={project.title}
                clickable={true}
                tags={project.tags}
                src={project.coverUrl}
                key={project.title}
                className={`${style.cardWrapper} ${style.projectCard}`}
              >
                <div style={{ color: "#eee" }}>{project.briefDes}</div>
              </ProjectCard>
            ))}
          </div>
        </Card>
        <Card className={style.cardWrapper} title="Experience">
          <p>{missyInfo.aboutMe.content}</p>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
