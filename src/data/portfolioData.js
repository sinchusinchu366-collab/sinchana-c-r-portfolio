// ============================================================
// portfolioData.js — Single source of truth for all content.
// Import from this file in every component; never hard-code
// personal text directly inside a component.
// ============================================================

// ── Personal identity ────────────────────────────────────────
export const personalInfo = {
  name: "Sinchana C R",
  firstName: "Sinchana",
  brandName: "Sinchana C R",       // shown in preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bangalore, India",
  phone: "+91 8431635352",
  emails: {
    primary: "sinchusinchu366@gmail.com",
    secondary: "",
  },
  summary:
    "BCA graduate (8.9 CGPA) with Java Full Stack internship experience, skilled in Java, MySQL, HTML, CSS.",
  resumeUrl: "/Resume.pdf",        // place Resume.pdf inside /public
};

// ── TAP Academy credit (used in footer — do not rename this export) ──
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

// ── Social / external links ───────────────────────────────────
export const socialLinks = {
  github: "https://github.com/sinchusinchu366-collab",
  linkedin:
    "https://www.linkedin.com/in/sinchana-ravi-9a26a0375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "", // not provided
};

// ── Hero section ──────────────────────────────────────────────
export const heroContent = {
  greeting: "Hi, I'm Sinchana C R",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Building reliable full-stack applications with Java, MySQL and clean HTML/CSS — ready to contribute and grow.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sinchusinchu366@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

// ── About section ─────────────────────────────────────────────
export const aboutContent = {
  heading: "Hello!",
  // HTML allowed here — rendered with dangerouslySetInnerHTML (your own trusted text only).
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sinchana C R</span>,
  a Java Full Stack Developer based in Bangalore, India. I hold a BCA degree with an 8.9 CGPA and have hands-on
  experience building full-stack applications — including Foodify, a food delivery app with user authentication,
  a shopping cart and a MySQL database. I am currently sharpening my skills through the placement training program
  at TAP Academy, deepening my expertise in Java, web development and real-world software practices.`,
  techStack: ["Java", "JavaScript", "MySQL", "HTML", "CSS", "Git"],
};

// ── Skills / Process section ──────────────────────────────────
export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured approach — from understanding the problem to delivering a working, tested application.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understand the problem requirements, gather user needs, and plan the feature set before writing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Sketch the UI layout, plan the database schema, and decide on the tech stack to keep development smooth.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Build the frontend and backend together — Java logic, HTML/CSS views, and MySQL queries — testing as I go.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Push the code to GitHub, verify all features work end-to-end, and share the project link with stakeholders.",
    },
  ],
  endText: "Ready to ship!",
};

// ── Technical skills ──────────────────────────────────────────
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "JDBC" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

// ── Leadership / activities ───────────────────────────────────
// Not provided — empty list; add entries here when available.
export const leadershipList = [];

// ── Internships / experience ──────────────────────────────────
export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Java Full Stack Development Intern",
    duration: "Jun 2026 – Dec 2026",
    location: "Bengaluru",
    skills: [
      "Built responsive web apps",
      "Integrated frontend with backend",
      "Version control with Git/GitHub",
    ],
    tech: ["Java", "HTML", "CSS", "MySQL", "Git"],
  },
  {
    organization: "InternPe",
    role: "Web Development Intern",
    duration: "Internship",
    location: "",
    skills: [
      "Developed responsive web pages",
      "Debugged issues and improved performance",
    ],
    tech: ["HTML", "CSS", "Java", "SQL", "Git"],
  },
];

// ── Soft skills ───────────────────────────────────────────────
export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "I actively communicate with teammates, share progress early, and help unblock others to keep projects moving.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "I break complex bugs into smaller pieces, reproduce them in isolation, and iterate until I find a clean fix.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "I analyse requirements and data before coding, choosing the right approach rather than jumping to the first solution.",
  },
  {
    name: "Time Management",
    icon: "⏰",
    desc: "I prioritise tasks by impact, set realistic deadlines for myself, and consistently deliver work on schedule.",
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: "foodify",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Foodify — Food Delivery App",
    description:
      "A full-stack food delivery application featuring user authentication, restaurant listing, shopping cart, and order management backed by a MySQL database.",
    techTags: ["Java", "SQL", "MySQL", "HTML", "CSS"],
    links: {
      github: "https://github.com/sinchusinchu366-collab/foodify",
      demo: "", // demo coming soon
    },
    isFlagship: true,
    // no video field — link not provided
  },
  {
    id: "portfolio",
    number: "02",
    badge: null,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built to showcase my skills, internship experience and projects to potential employers.",
    techTags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "", // GitHub repo link not provided
      demo: "https://tap-academy-portfolio-playbook.vercel.app/#t1-profile",
    },
    isFlagship: false,
    // no video field — link not provided
  },
];

// ── Certificates (used by optional Certificates component) ────
export const certificates = {
  featured: [
    { name: "Java Full Stack Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl:
    "https://www.linkedin.com/in/sinchana-ravi-9a26a0375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
};

// ── Education ─────────────────────────────────────────────────
export const education = {
  degree: "BCA (Bachelor of Computer Applications)",
  institution: "BGS First Grade College",
  cgpa: "8.9 CGPA",
  graduation: "2026",
  years: "2023 – 2026",
  twelfth: "",
  tenth: "",
};

// ── Footer ────────────────────────────────────────────────────
export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · MySQL · HTML · CSS · Git",
    "Open to Opportunities",
  ],
  credential: "BCA Graduate",
  copyright: `© ${new Date().getFullYear()} Sinchana C R | Built with React`,
};

// ── EmailJS — values loaded from .env.local ───────────────────
// Create a file called .env.local in the project root and add:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
