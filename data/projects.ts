export type ProjectStatus = "Live" | "In development" | "Repository";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  outcome: string;
  proofPoints: string[];
  role: string;
  status: ProjectStatus;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    tagline: "A full-stack storefront spanning product discovery, cart, checkout, auth, and admin workflows.",
    outcome:
      "Built with a React and TypeScript frontend, an Express and Node.js API, and MongoDB persistence, with the frontend and backend deployed as separate services.",
    proofPoints: [
      "React and TypeScript frontend with an Express and Node.js API",
      "MongoDB persistence, JWT auth, cart/session handling, and protected admin routes",
      "Stripe checkout, request validation, core-path tests, and separate frontend/backend deployments",
    ],
    role: "Full-stack design & development",
    status: "Live",
    image: "/projects/ecommerce.png",
    imageAlt: "E-Commerce Platform storefront interface",
    technologies: ["React", "TypeScript", "Express", "Node.js", "MongoDB", "Stripe", "JWT"],
    repositoryUrl: "https://github.com/ChrisDirksDev/Ecommerce",
    liveUrl: "https://ecommerce-psi-nine-66.vercel.app/",
    featured: true,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    tagline: "An exploratory retail analytics and data-visualization project.",
    outcome:
      "Organizes a large retail dataset into a deployed dashboard demo with filters, KPI views, charts, anomaly signals, and a 30-day revenue forecast.",
    proofPoints: [
      "Reusable React component structure for dashboard states, filters, and KPI views",
      "Charts and forecasting views connected to an Express API and MongoDB-backed retail data",
      "AI-assisted development process, with implementation and outputs reviewed and refined by hand",
    ],
    role: "Exploratory product design & development",
    status: "Live",
    image: "/projects/analytics-dashboard.png",
    imageAlt: "Retail Analytics dashboard showing audited revenue metrics and forecasting controls",
    technologies: ["React", "TypeScript", "Python", "Express", "MongoDB", "Machine Learning"],
    repositoryUrl: "https://github.com/ChrisDirksDev/Analytics-Dashboard",
    liveUrl: "https://analytics-dashboard-jade-ten.vercel.app/",
    featured: true,
  },
  {
    slug: "agent-portfolio",
    title: "Developer Portfolio",
    tagline: "A responsive portfolio system for presenting selected work with clarity and personality.",
    outcome:
      "Built to give hiring teams a clear, fast path through selected work while preserving a distinctive visual point of view.",
    proofPoints: [
      "Editorial design system and responsive layout built with Next.js, React, and TypeScript",
      "Reusable project presentation, accessible navigation, and reduced-motion support",
      "Cohesive personal branding, optimized image delivery, metadata, and Vercel deployment",
    ],
    role: "Creative direction & full-stack development",
    status: "Live",
    image: "/projects/portfolio.png",
    imageAlt: "Chris Dirks portfolio homepage with editorial typography and dark visual design",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    repositoryUrl: "https://github.com/ChrisDirksDev/AgentPortfolio",
    liveUrl: "https://agent-portfolio-self.vercel.app",
    featured: true,
  },
  {
    slug: "weather-forecast",
    title: "Weather Forecast",
    tagline: "Detailed local conditions without the visual clutter.",
    outcome:
      "Organizes current conditions and a seven-day outlook into a fast, location-aware interface designed for everyday decisions.",
    proofPoints: [],
    role: "Product design & frontend development",
    status: "Repository",
    technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
    repositoryUrl: "https://github.com/ChrisDirksDev/Weather-Forecast",
    featured: false,
  },
  {
    slug: "task-management-system",
    title: "Task Management System",
    tagline: "Shared project planning across boards, timelines, and teams.",
    outcome:
      "Explores a unified workspace for collaborative planning, progress tracking, and time management.",
    proofPoints: [],
    role: "Full-stack development",
    status: "Repository",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    repositoryUrl: "https://github.com/ChrisDirksDev/Task-Manager",
    featured: false,
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    tagline: "A focused home for workouts, nutrition, and progress.",
    outcome:
      "Combines activity logging and progress visualization to make personal fitness patterns easier to understand.",
    proofPoints: [],
    role: "Full-stack development",
    status: "Repository",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    repositoryUrl: "https://github.com/ChrisDirksDev/Fitness-Tracker",
    featured: false,
  },
  {
    slug: "code-snippet-manager",
    title: "Code Snippet Manager",
    tagline: "A searchable personal library for reusable code.",
    outcome:
      "Makes frequently used snippets easier to organize, tag, find, and share with syntax-aware editing.",
    proofPoints: [],
    role: "Full-stack development",
    status: "Repository",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Monaco"],
    repositoryUrl: "https://github.com/ChrisDirksDev/CodeSnippetManager",
    featured: false,
  },
];
