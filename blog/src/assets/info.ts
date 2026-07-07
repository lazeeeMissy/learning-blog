export type ExperienceItemType = {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
};

export type SelfInfoType = {
  alias: string;
  location: string;
  brief: string;
  links: {
    item: string;
    url: string;
  }[];
  aboutMe: { content: string; tags: string[] };
  experience: ExperienceItemType[];
};

export const missyInfo: SelfInfoType = {
  alias: "Missy",
  location: "Melbourne, AU",
  brief:
    "Here you'll find my projects, technical skills, and development journey. You can contact me via following links",
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
  experience: [
    {
      role: "Backend Intern",
      company: "Solid Software Pty Ltd.",
      location: "Melbourne, Victoria",
      period: "Dec 2025 - Feb 2026",
      achievements: [
        "Designed and implemented 20+ RESTful APIs, enabling users to create, manage, and interact within events and groups on the Koowe platform.",
        "Enhanced 4 existing Post-related APIs and identified a design limitation in the event invitation workflow by redesigning the API to support profile-based invitations, ensuring system correctness.",
        "Collaborated with one frontend developer and supervisor in an Agile environment, discussing API design, requirement clarification, and iterative feature refinement.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Swagger",
        "Docker",
        "MySQL",
        "Git",
      ],
    },
    {
      role: "Frontend Intern",
      company: "Beijing Sankuai Online Technology Co., Ltd. (Meituan)",
      location: "Beijing, CN",
      period: "May 2025 - Aug 2025",
      achievements: [
        "Expanded platform functionality by integrating two new internal business modules into the merchant-facing web system, improving feature accessibility for thousands of daily active users.",
        "Enhanced the internal monitoring platform by redesigning UI layouts and embedding external dashboards, increasing page usability and reducing navigation time by approximately 20%.",
        "Collaborated with cross-functional teams across product, backend, and design (~10 people per team) to deliver features on time and improve enterprise development workflows.",
      ],
      techStack: [
        "React",
        "Sass",
        "HTML",
        "TypeScript",
        "MobX",
        "CI/CD",
        "Git",
        "nginx",
      ],
    },
  ],
};
