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
      url: "null",
    },
    {
      item: "GitHub",
      url: "null",
    },
    {
      item: "Email",
      url: "null",
    },
  ],
  aboutMe: {
    content: "holding....",
    tags: ["HTML", "CSS", "TypeScript", "React", "Next.js"],
  },
};
