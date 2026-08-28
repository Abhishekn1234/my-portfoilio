export type Experience = {
  role: string;
  company: string;
  period: string;
  type?: string;
  description: string[];
};

export const workExperience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Cashigo IT Private Limited, Perinthalmanna",
    period: "Nov 2025 - Present",
    description: [
      "Developing and maintaining responsive full-stack web applications using MERN stack technologies.",
      "Collaborating with cross-functional teams to design, implement, and optimize scalable web solutions.",
      "Enhancing performance, debugging issues, and ensuring smooth UI/UX experiences.",
      "Using React.js, Node.js, Express.js, and MongoDB to deliver data-driven solutions.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Concepts 360 Plus",
    period: "Feb 2025 - Jul 2025",
    description: [
      "Built and optimized ERP applications using PHP, CodeIgniter 3, MySQL, and JavaScript.",
      "Developed role-based access control and custom modules to improve operations.",
      "Collaborated on API integrations and backend performance tuning.",
      "Strengthened MVC architecture and enterprise resource planning knowledge.",
    ],
  },
  {
    role: "React Developer",
    company: "Pokak Technologies Pvt. Ltd",
    period: "Jan 2024 - Feb 2025",
    description: [
      "Developed responsive front-end interfaces for e-commerce and enterprise platforms.",
      "Converted design mockups into reusable React.js components.",
      "Improved application performance through debugging and API optimization.",
      "Worked with UI/UX teams to deliver smooth user experiences.",
    ],
  },
];

export const internshipsAndFreelance: Experience[] = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Cosysta",
    period: "Jul 2025 - Nov 2025",
    type: "Freelance",
    description: [
      "Developed responsive full-stack applications using MERN stack technologies.",
      "Collaborated with teams to design, build, and optimize scalable web solutions.",
      "Debugged issues, improved performance, and refined UI/UX flows.",
      "Used React.js, Node.js, and PhpMyAdmin to deliver data-driven solutions.",
    ],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Softroniics, Palakkad",
    period: "Jul 2023 - Jan 2024",
    type: "Internship",
    description: [
      "Gained hands-on experience in full-stack development during a 6-month internship.",
      "Contributed to front-end and back-end development with React.js, Node.js, Express.js, and MongoDB.",
      "Participated in code reviews and agile sprints to improve project delivery.",
      "Built functional prototypes and integrated database solutions for client projects.",
    ],
  },
];
