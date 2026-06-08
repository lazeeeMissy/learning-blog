export type ProjectItemType = {
  title: string;
  coverUrl: string;
  tags: string[];
  link?: string;
  description: string;
  time: string;
  briefDes: string;
};

export const projectsInfo: ProjectItemType[] = [
  {
    title: "NetEase Music",
    coverUrl: "",
    tags: ["HTML", "React", "TypeScript", "CSS"],
    link: "https://github.com/lazeeeMissy/NetEase-rebuild",
    description:
      "This is a re-build project from scratch by HTML, CSS, TypeScript, you can find the original website",
    time: "Last update time: May",
    briefDes:
      "This is a re-build project from scratch by HTML, CSS, TypeScript",
  },
  {
    title: "White Board",
    coverUrl: "",
    tags: ["Java", "Socket"],
    link: "https://github.com/lazeeeMissy/swen90015-s2",
    description:
      "This is a course assignment to create a whiteboard and handle concurrency",
    time: "Last update time: May",
    briefDes: "my course assignment",
  },
  {
    title: "Learning Blog",
    coverUrl: "",
    tags: ["React", "TypeScript"],
    link: "https://github.com/lazeeeMissy/learning-blog",
    description: "Just this project",
    time: "Last update time: June",
    briefDes: "this project",
  },
];
