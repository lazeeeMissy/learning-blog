import type { HTMLAttributes, ReactNode } from "react";
import Tag from "../tag/tag";
import style from "./projectCard.module.scss";
import { useNavigate } from "react-router-dom";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  clickable?: boolean;
  title?: string;
  tags?: string[];
  src?: string;
  childrenStyle?: object;
};
export default function ProjectCard({
  children,
  className = "",
  clickable = false,
  title = "",
  tags = [],
  src = "",
  childrenStyle = {},
  ...props
}: CardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`${clickable ? "card card-clickable" : "card"} ${className}`}
      {...props}
    >
      <div>
        {src.trim() !== "" && (
          <img src={src} alt="preview" className={style.img} />
        )}
        {title.trim() !== "" && <h3>{title}</h3>}
      </div>
      <div style={childrenStyle}>{children}</div>
      {tags.length > 0 && (
        <div className={style.tagsWrapper}>
          {tags.map((tag) => (
            <Tag className={style.tagItem} key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      )}
      <div className={style.btnDetail}>-{">"} View Detail</div>
    </div>
  );
}
