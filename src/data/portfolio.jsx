const portfolio = {
  name: "Chad Alan Lambert",
  initials: "CAL",
  greeting: "👋 Hi, I'm",
  tagline: (
    <>
      Junior Full Stack Developer crafting clean, performant web applications with
      Python, React, JavaScript, MySQL, and HTML & CSS. That have a passion for building things that matter.
    </>
  ),
  resume: {
    embedUrl: "https://1drv.ms/w/c/7e9106f170216468/IQSmOeybFLpjR6Dy05BizWx7AefEB3MlPUr0jJQSMVIomB8",
    downloadUrl: "https://1drv.ms/w/c/7e9106f170216468/IQSmOeybFLpjR6Dy05BizWx7AefEB3MlPUr0jJQSMVIomB8?download=1",
    openUrl: "https://1drv.ms/w/c/7e9106f170216468/IQSmOeybFLpjR6Dy05BizWx7AefEB3MlPUr0jJQSMVIomB8",
  },
  about: {
    heading: ["Building the web,", "one commit at a time"],
    paragraphs: [
      "I'm a Junior Full Stack Developer with a strong foundation in Python and modern JavaScript. I love turning complex problems into simple, elegant solutions — whether it's a REST API built with FastAPI or a dynamic frontend in React.",
      "After diving deep into Python for backend development and data processing, I expanded into full stack engineering to own projects end-to-end. I'm currently seeking opportunities where I can contribute, learn from experienced engineers, and grow into a well-rounded developer.",
    ],
    stats: [
      { num: "10+", label: "Projects Built" },
      { num: "3", label: "Freelance Clients" },
      { num: "2+", label: "Years Coding" },
      { num: "∞", label: "Curiosity" },
    ],
  },
  skills: [
    {
      icon: "🐍",
      title: "Backend & Python",
      tags: [
        "Python", "Next.js", "C#"
      ]
    },
    {
      icon: "🎨",
      title: "Frontend",
      tags: [
        "JavaScript", "React", "HTML5",
        "CSS3", "Tailwind CSS", "React Query",``
      ],
    },
    {
      icon: "🗄️",
      title: "Databases & DevOps",
      tags: [
        "MySQL", "MongoDB", "Git",
      ],
    },
    {
      icon: "🧪",
      title: "Currently Exploring",
      tags: [
        "WebSockets", "Some Cyber Security", "System Design",
        "AI / LLMs",
      ],
    },
  ],
  projects: [
    {
      icon: "📊",
      title: "Metrics API",
      description:
        "A developer analytics dashboard that aggregates activity, review stats, and deployment frequency into clean visualizations.",
      tech: ["FastAPI", "PostgreSQL", "React", "D3.js", "Docker"],
      links: [
        { label: "🔗 Live Demo", href: "#" },
        { label: "📂 Source", href: "#" },
      ],
    },
    {
      icon: "🛒",
      title: "Marketplace Backend",
      description:
        "RESTful backend for a peer-to-peer marketplace with user auth, product listings, search, and an offer/counter-offer negotiation system.",
      tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
      links: [{ label: "📂 Source", href: "#" }],
    },
    {
      icon: "✅",
      title: "TaskFlow",
      description:
        "A Kanban-style project management app with real-time collaboration, drag-and-drop, and automated workflow triggers.",
      tech: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Socket.io"],
      links: [
        { label: "🔗 Live Demo", href: "#" },
        { label: "📂 Source", href: "#" },
      ],
    },
    {
      icon: "🤖",
      title: "CLI Code Scaffolder",
      description:
        "A Python CLI tool that generates project boilerplate from templates — project structure, configs, Dockerfiles, and CI pipelines in seconds.",
      tech: ["Python", "Click", "Jinja2", "Docker"],
      links: [{ label: "📂 Source", href: "#" }],
    },
    {
      icon: "🌤️",
      title: "WeatherVue",
      description:
        "A Progressive Web App that displays hyperlocal weather with hourly and 7-day forecasts, location search, and offline support.",
      tech: ["React", "Service Workers", "OpenWeather API", "CSS Modules"],
      links: [
        { label: "🔗 Live Demo", href: "#" },
        { label: "📂 Source", href: "#" },
      ],
    },
  ],
  contact: {
    heading: "Let's Work Together",
    description:
      "I'm currently looking for junior full stack or backend roles. If you're hiring, have a project in mind, or just want to chat — reach out.",
    links: [
      { icon: "📧", label: "chadalambert6@gmail.com", href: "mailto:chadalambert6@gmail.com" },
      { icon: "💻", label: "GitHub", href: "https://github.com/chadlambert" },
      { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/chad-a-lambert-it/" },
    ],
  },
  footer: "© 2026 Chad Alan Lambert. Built with React.",
  buttons: {
    primary: { label: "View My Work", href: "#projects" },
    outline: { label: "Get in Touch", href: "#contact" },
  },
};

export default portfolio;