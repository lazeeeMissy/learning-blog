import { MdEmail } from "react-icons/md";

import Card from "@/components/card/card";
import style from "./home.module.scss";
import { menus } from "@/assets/menus";
import { useLocation, useNavigate } from "react-router-dom";
import Tag from "@/components/tag/tag";
import { missyInfo } from "@/assets/info";
import NameWave from "@/utils/name-wave/nameWave";
import { projectsInfo } from "@/assets/projects";
import ProjectCard from "@/components/projectCard/projectCard";
import unimelbLogo from "@/assets/unimelblogo.png";
import southwestLogo from "@/assets/southwestlogo.png";
import linkedinLogo from "@/assets/imgs/linkedin.png";
import github from "@/assets/imgs/github.png";
import githubBlue from "@/assets/imgs/githubblue.png";

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
        {/* education */}
        <Card className={style.menusWrapper}>
          <div>
            <h3>Education</h3>
          </div>
          <div className={style.educationWrapper}>
            <div className={style.uniTitle}>
              <img src={unimelbLogo} />
              <div>
                <p className={style.uniName}>The University of Melbourne</p>
              </div>
            </div>
            <div className={style.uniContent}>
              <div className={style.bar}></div>
              <div>
                <p className={style.year}>Melbourne, Australia</p>

                <p className={style.year}>Jul 2024 - Jun 2026</p>

                <p className={style.degree}>Master of Software Engineering</p>
              </div>
            </div>
          </div>
          <div className={style.educationWrapper}>
            <div className={style.uniTitle}>
              <img
                src={southwestLogo}
                style={{ height: "70px", backgroundColor: "white" }}
              />
              <div>
                <p className={style.uniName}>Southwest Jiaotong University</p>
              </div>
            </div>
            <div className={style.uniContent}>
              <div className={style.bar}></div>
              <div>
                <p className={style.year}>Chengdu, China</p>

                <p className={style.year}>Sep 2020 - Jun 2024</p>

                <p className={style.degree}>Bachelor of Software Engineering</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className={style.rightWrapper}>
        {/* welcome */}
        <Card className={style.cardWrapper}>
          <p>Welcome to my portfolio! </p>
          <h1>
            Hi, I am <span> {NameWave(missyInfo.alias)}</span>
          </h1>
          <p>Software Engineering Graduate</p>
          <p>{missyInfo.brief}</p>
          <div className={style.tagsWrapper}>
            <a
              href="https://www.linkedin.com/in/meilin-wu-884025323/"
              target="_blank"
            >
              <img
                src={linkedinLogo}
                alt="https://www.linkedin.com/in/meilin-wu-884025323/"
              />
            </a>
            <a href="https://github.com/lazeeeMissy" target="_blank">
              <img src={githubBlue} alt="https://github.com/lazeeeMissy" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=missywu1121@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={25} />
            </a>
          </div>
        </Card>
        <Card
          className={style.cardWrapper}
          title="About Me"
          tags={missyInfo.aboutMe.tags}
        >
          <p style={{ whiteSpace: "pre-line" }}>{missyInfo.aboutMe.content}</p>
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
