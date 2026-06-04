import type { HTMLAttributes, ReactNode } from "react";
import style from "./tag.module.scss";
type TagProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Tag({ children, className = "" }: TagProps) {
  return <div className={`${style.tag} ${className}`}>{children}</div>;
}
