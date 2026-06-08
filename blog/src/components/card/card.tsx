import type { HTMLAttributes, ReactNode } from "react";
import Tag from "../tag/tag";
import style from "./card.module.scss";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  clickable?: boolean;
  title?: string;
  tags?: string[];
};
export default function Card({
  children,
  className = "",
  clickable = false,
  title = "",
  tags = [],
  ...props
}: CardProps) {
  return (
    <div
      className={`${clickable ? "card-clickable" : "card"} ${className}`}
      {...props}
    >
      {title.trim() !== "" && <h3>{title}</h3>}
      {children}
      {tags.length > 0 && (
        <div className={style.tagsWrapper}>
          {tags.map((tag) => (
            <Tag className={style.tagItem} key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
}
