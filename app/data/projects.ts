export type Project = {
  title: string;
  description: string;
  url?: string;
  technologies: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    title: "Aalizah Technologies Website",
    description:
      "A company website for Aalizah Technologies with service sections, brand content, and clear inquiry paths.",
    url: "https://www.aalizahtechnologies.com/",
    technologies: [
      "Next.js",
      "React.js",
      "Responsive UI",
      "SEO",
      "Web Performance",
    ],
    features: [
      "Company service showcase",
      "Responsive page layouts",
      "Business inquiry flow",
      "Brand-focused web presence",
      "Performance-conscious implementation",
    ],
  },
  {
    title: "Aalizah Vision",
    description:
      "A dedicated website for Aalizah Vision with clean content sections and a polished browsing experience.",
    url: "https://www.aalizahvision.com/",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Responsive Design",
      "UI Components",
    ],
    features: [
      "Brand-focused landing experience",
      "Service and content presentation",
      "Mobile-friendly interface",
      "Reusable UI sections",
      "Accessible external navigation",
    ],
  },
  {
    title: "Aalizah Events",
    description:
      "An events website for presenting services, highlighting offerings, and guiding visitors toward inquiries.",
    url: "https://www.aalizahevents.com/",
    technologies: [
      "Next.js",
      "React.js",
      "Responsive UI",
      "Web Design",
      "SEO",
    ],
    features: [
      "Event service showcase",
      "Visitor-friendly content flow",
      "Contact and inquiry direction",
      "Responsive design across devices",
      "Modern presentation pages",
    ],
  },
  {
    title: "Service Onboarding & Marketing Platform",
    description:
      "A service marketplace for customers, workers, and admins to manage bookings and home-service workflows.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "REST APIs",
      "Notifications",
    ],
    features: [
      "Customer service booking and job tracking",
      "Worker job acceptance and status management",
      "Admin management dashboard",
      "Real-time Socket.io communication",
      "Real-time booking and job updates",
      "Push and in-app notifications",
      "Service onboarding and management",
    ],
  },
  {
    title: "Multi-Vendor E-Commerce Platform",
    description:
      "An e-commerce platform where sellers manage products and customers browse, use carts, and place orders.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "REST APIs",
      "HTML",
      "CSS",
    ],
    features: [
      "Multi-vendor product management",
      "Customer product browsing",
      "Cart and order management",
      "Responsive UI",
      "Reusable React components",
      "API integration",
    ],
  },
  {
    title: "ERP Management System",
    description:
      "An ERP application for business operations with role-based modules, workflows, and API integrations.",
    technologies: [
      "PHP",
      "CodeIgniter 3",
      "Laravel",
      "MySQL",
      "JavaScript",
      "jQuery",
      "AJAX",
      "REST APIs",
    ],
    features: [
      "Role-based access control",
      "Custom ERP modules",
      "Database-driven workflows",
      "API integration",
      "Form validation",
      "Business process management",
    ],
  },
  {
    title: "Fertilizer Recommendation using Machine Learning",
    description:
      "A machine learning project that recommends fertilizers from soil and environmental parameters.",
    technologies: [
      "Python",
      "Machine Learning",
      "MySQL",
      "Data Analysis",
    ],
    features: [
      "Soil parameter analysis",
      "Environmental data processing",
      "Fertilizer recommendation",
      "Predictive model development",
    ],
  },
  {
    title: "Project Automation System",
    description:
      "A web app that streamlines internal workflows, tracks milestones, and automates task assignment.",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "AJAX",
    ],
    features: [
      "Automated task workflow assignment",
      "Project milestone and progress tracking",
      "User role and permission management",
      "Dynamic dashboard with real-time updates",
      "Form validation and database management",
    ],
  },
];
