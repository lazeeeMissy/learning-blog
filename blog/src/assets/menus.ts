export type MenuItem = {
  icon: string;
  title: string;
  route: string;
  description: string;
};
export const menus: MenuItem[] = [
  {
    icon: "😊",
    title: "about me",
    route: "/",
    description: "portfolio",
  },
  {
    icon: "💻",
    title: "projects",
    route: "/projects",
    description: "my projects",
  },
  {
    icon: "📜",
    title: "blogs",
    route: "/blogs",
    description: "my blog",
  },
  {
    icon: "🛠️",
    title: "tools",
    route: "/tools",
    description: "my tools",
  },
];
