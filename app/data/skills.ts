export type SkillLevel = "Beginner" | "Intermediate" | "Master";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  category: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: "Master" },
      { name: "Next.js", level: "Intermediate" },
      { name: "JavaScript", level: "Master" },
       { name: "CSS", level: "Master" },
       { name: "HTML", level: "Master" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Angular", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Master" },
      { name: "Bootstrap", level: "Master" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Master" },
      { name: "Express.js", level: "Master" },
       { name: "Nest.js", level: "Beginner" },
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Intermediate" },
      { name: "CodeIgniter", level: "Intermediate" },
      { name: "Java", level: "Beginner" },
      { name: "Python", level: "Beginner" },
      { name: "REST API", level: "Master" },
      { name: "GraphQL", level:"Beginner"}
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: "Master" },
      { name: "MySQL", level: "Master" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Sequelize", level: "Intermediate" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: "Master" },
      { name: "GitHub", level: "Master" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vite", level: "Master" },
      { name: "Postman", level: "Master" },
      { name: "VS Code", level: "Master" },
    ],
  },
];

export const levelConfig = {
  Beginner: {
    width: "w-1/3",
    text: "text-amber-700",
    bg: "bg-amber-400",
  },
  Intermediate: {
    width: "w-2/3",
    text: "text-blue-700",
    bg: "bg-blue-500",
  },
  Master: {
    width: "w-full",
    text: "text-teal-700",
    bg: "bg-teal-500",
  },
} satisfies Record<SkillLevel, Record<"width" | "text" | "bg", string>>;
