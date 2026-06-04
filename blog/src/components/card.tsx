import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  clickable?: boolean;
};
export default function Card({
  children,
  className = "",
  clickable = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`${clickable ? "card-clickable" : "card"} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
