export type SelfInfoType = {
  alias: string;
  location: string;
  brief: string;
  links: {
    item: string;
    url: string;
  }[];
  aboutMe: { content: string; tags: string[] };
};

export const missyInfo: SelfInfoType = {
  alias: "Missy",
  location: "Melbourne, AU",
  brief: "I build this web to practice... You can find me from following links",
  links: [
    {
      item: "LinkedIn",
      url: "https://www.linkedin.com/in/meilin-wu-884025323/",
    },
    {
      item: "GitHub",
      url: "https://github.com/lazeeeMissy",
    },
    {
      item: "Gmail",
      url: "missywu1121@gmail.com",
    },
  ],
  aboutMe: {
    content:
      "I'm Missy, a Software Engineering graduate from the University of Melbourne who is actively seeking full-time opportunities as a Software Engineer. \n I enjoy building software that solves real-world problems and have experience across both frontend and backend development. Previously worked on merchant-facing systems at Meituan and backend services at Solid Software, with hands-on experience across React, TypeScript, Java, Spring Boot, REST APIs, SQL, and distributed systems. \n I enjoy turning ideas into working products and continuously improving my technical skills through hands-on development. ",
    tags: ["HTML", "CSS", "TypeScript", "React", "Next.js"],
  },
};
