export const navLinks = [
  { id: "home", label: "home", href: "#home" },
  { id: "about", label: "about", href: "#about" },
  { id: "skills", label: "skills", href: "#skills" },
  { id: "projects", label: "projects", href: "#projects" },
  { id: "contact", label: "contact", href: "#contact" },
];

export const hero = {
  name: "Dimitrios Karamatskos",
  role: "Senior Full-Stack Engineer — Vue, Nuxt, TypeScript & .NET",
  description:
    "Building and modernizing web applications, from Vue and Nuxt frontends to .NET and Node.js APIs, while helping shape the products behind them.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const about = {
  title: "about",
  body: "I started my coding journey on Android apps and have since moved on to web applications. Leading teams and mentoring other developers has become a big part of how I work. What I care about is giving users a proper story and experience, backed by software that holds up: accessible interfaces, solid testing and clean architecture. I enjoy working where frontend, backend and product meet. Based in Greece.",
  techStack: [
    {
      label: "Frontend",
      value: "Vue 3 · Nuxt 3 · React · TypeScript · Tailwind CSS",
    },
    { label: "Backend", value: "C# · .NET · Node.js · Express.js" },
    { label: "Data", value: "SQL · MariaDB · MongoDB · GraphQL" },
    { label: "Testing", value: "Playwright · E2E · QA" },
    { label: "Tools", value: "Git · Azure DevOps · Vite" },
  ],
};

export const skills = [
  {
    number: "01",
    slug: "accessibility",
    title: "Accessible by default",
    description:
      "Strong focus on WCAG accessibility and SOLID principles, keeping interfaces usable for everyone and codebases easy to maintain.",
    tags: ["WCAG", "SOLID", "code reviews"],
  },
  {
    number: "02",
    slug: "leadership",
    title: "Leading and mentoring",
    description:
      "Experience leading teams of 3+ developers and mentoring juniors through code reviews and clear conventions, cutting new-hire ramp-up by 40%.",
    tags: ["team lead", "mentoring", "onboarding"],
  },
  {
    number: "03",
    slug: "quality",
    title: "Tested end to end",
    description:
      "Automated end-to-end testing wired into the delivery pipeline, speeding up QA cycles by 35% and making releases more reliable.",
    tags: ["E2E testing", "CI/CD", "release quality"],
  },
  {
    number: "04",
    slug: "architecture",
    title: "Modernizing legacy code",
    description:
      "Experience modernizing legacy code and bringing it up to current standards, including a major framework migration that cut bug reports and warnings by 50%.",
    tags: ["migrations", "refactoring", "tech debt"],
  },
  {
    number: "05",
    slug: "full-stack",
    title: "From database to UI",
    description:
      "End-to-end ownership of features: RESTful APIs and backend services with .NET, MariaDB and SQL for a platform serving approximately 200K users, alongside Node.js and GraphQL.",
    tags: [".NET", "Node.js", "SQL", "GraphQL"],
  },
  {
    number: "06",
    slug: "product",
    title: "Product input and decisions",
    description:
      "Close collaboration with product, design and support: turning requirements and Figma designs into features, contributing to product decisions and presenting technical direction to senior leadership.",
    tags: ["product", "figma to code", "stakeholders"],
  },
];

export const projects = [
  {
    stack: "Vue 3 · TypeScript · Vite",
    name: "Citadel Records",
    description: "A demo app built on the public Rick and Morty API.",
    demoHref: "https://rick-and-morty-citadel-records.vercel.app",
    repoHref: "https://github.com/wickerxd/rick-and-morty-citadel-records",
  },
  {
    stack: "React 19 · TypeScript · MUI",
    name: "SitePulse Dashboard",
    description:
      "Safety dashboard for construction teams covering PPE compliance, incidents and site risk, with light and dark modes. Built on mock data.",
    demoHref: "https://react-sitepulse-dashboard.vercel.app",
    repoHref: "https://github.com/wickerxd/react-sitepulse-dashboard",
  },
  {
    stack: "Vue 3 · Vitest · Playwright",
    name: "Rick and Morty Hero Task",
    description:
      "A Rick and Morty app with unit tests in Vitest and end-to-end tests in Playwright.",
    demoHref: "https://rick-and-morty-hero-task.vercel.app",
    repoHref: "https://github.com/wickerxd/rick-and-morty-hero-task",
  },
  {
    stack: "React 19 · TanStack v5 · Tailwind v4",
    name: "Pokedex, Pokemon explorer",
    description:
      "A responsive Pokédex built with React and TypeScript, using the PokéAPI to explore over 1,300 Pokémon, wrapped in a retro-inspired interface.",
    demoHref: "https://pokedex-react-pi.vercel.app",
    repoHref: "https://github.com/wickerxd/pokedex-react",
  },
  {
    kind: "more",
    stack: "next",
    name: "More to come",
    description:
      "New projects are on the way. Everything else lives on GitHub.",
    href: "https://github.com/wickerxd",
    linkLabel: "github.com/wickerxd",
  },
];

export const contact = {
  title: "contact",
  heading: "Let's talk.",
  body: "Got a project, a role, or just a question? I'd love to hear from you. For any business enquiries, contact me via email or LinkedIn.",
  email: "wdkaramatskos@gmail.com",
  location: "Greece",
  github: "https://github.com/wickerxd?tab=repositories",
  linkedin: "https://www.linkedin.com/in/dimitris-karamatskos-125614205/",
};
