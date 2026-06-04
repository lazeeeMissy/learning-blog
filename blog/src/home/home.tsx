import Card from "@/components/card";
import style from "./home.module.scss";
import { menus } from "@/assets/menus";
import { useNavigate } from "react-router-dom";
import Tag from "@/components/tag/tag";
import { missyInfo } from "@/assets/info";

const HomePage = () => {
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
              <li onClick={() => navigate(menu.route)}>
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
            Hi, I am <span> {missyInfo.alias}</span>
          </h1>
          <p>{missyInfo.brief}</p>
          <div className={style.tagsWrapper}>
            {missyInfo.links.map((link) => (
              <Tag className={style.tagItem}>{link.item}</Tag>
            ))}
          </div>
        </Card>
        <Card className={style.cardWrapper}>
          <h3>About Me</h3>
          <p>{missyInfo.aboutMe.content}</p>
          <div className={style.tagsWrapper}>
            {missyInfo.aboutMe.tags.map((tag) => (
              <Tag className={style.tagItem}>{tag}</Tag>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
