import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Phone,
  FileDown,
  Code2,
  Camera,
  Bot,
  Database,
  Globe,
  CheckCircle2,
} from "lucide-react";

// ---------------------------
// Demo Data
// ---------------------------
const profile = {
  name: "Suryaprakash",
  title: "Python Automation & ETL",
  summary:
    "I build reliable automation, ETL pipelines, and data workflows for SAP, Salesforce, and enterprise systems. Strong focus on Robot Framework, python, playwright and clean, reproducible tooling.",
  location: "Ranimookanur [635303], Dharmapuri,TamilNadu, India",
  email: "suryaprakashr1005@gmail.com",
  phone: "+91 6383511559",
  links: {
    github: "https://github.com/Suryaprakashrajendran?tab=repositories",
    linkedin: "https://www.linkedin.com/in/suryaprakash-r-/?originalSubdomain=in",
    resume: "/files/suryaprakash_R.pdf",
  },
  skills: [
    "Python",
    "FastAPI",
    "Linux",
    "Windows",
    "AWS Cloud",
    "AWS S3",
    "Azure Blob Storage",
    "Selenium",
    "Robot Framework",
    "OpenCV",
    "Tesseract OCR",
    "PyMuPDF",
    "Pandas",
    "Manual Testing",
    "Automation Testing",
    "API Testing (Postman, Swagger)",
    "SDET Practices",
    "JMeter",
    "Load Testing",
    "Performance Testing",
    "ETL Pipelines",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Azure DevOps",
    "Azure Boards",
    "Docker",
    "CI/CD Pipelines",
    "MS Graph API",
    "MySQL",
    "Process Automation",
    "Debugging & Troubleshooting",
    "SDLC Knowledge",
    "SAP GUI",
    "SAP ODATA"
  ],
};

const projects = [

  {
    title: "Data-Visualizer",
    description: "A web-based chart visualization tool that allows users to paste JSON data or upload CSV/JSON files to generate dynamic charts using Chart.js. Supports multiple chart types such as Pie, Line, Bar, Radar, Doughnut, and Polar Area, with dynamic updates and input validation.",
    tags: ["Chart.js", "JavaScript", "CSV", "JSON", "Data Visualization"],
    icon: <Bot className="w-5 h-5" aria-hidden />,
    links: { demo: "https://suryaprakashrajendran.github.io/Data-Visualizer/", code: "https://github.com/Suryaprakashrajendran/Data-Visualizer" },
  },
  {
    title: "Security Scanner",
    description:
      "A comprehensive security assessment tool for authorized penetration testing and vulnerability analysis. It performs reconnaissance, port scanning, SSL/HTTP security checks, vulnerability scoring, and generates multiple report formats (JSON, HTML, PDF).",
    tags: [
      "Python",
      "Cybersecurity",
      "Penetration Testing",
      "Network Scanning",
      "SSL Analysis",
      "WHOIS",
      "DNS",
      "PDF Reports"
    ],
    icon: <Globe className="w-5 h-5" aria-hidden />,
    links: { demo: "https://github.com/Suryaprakashrajendran/Vulnerability-analyser/blob/main/README.md", code: "https://github.com/Suryaprakashrajendran/Vulnerability-analyser" },
  },
  {
    title: "Agentic AI Home Automation with ESP32",
    description:
      "A smart home automation system where Agentic AI agents control ESP32 devices to manage lights, fans, and appliances. Integrated with ChatGPT AI for intelligent decision-making and Ngrok for secure remote access, enabling real-time monitoring and control from anywhere.",
    tags: [
      "Python",
      "Agentic AI",
      "ChatGPT",
      "ESP32",
      "IoT",
      "Home Automation",
      "Multi-Agent Systems",
      "FastAPI",
      "MQTT",
      "Ngrok"
    ],
    icon: <Database className="w-5 h-5" aria-hidden />,
    links: { demo: "https://github.com/Suryaprakashrajendran/Micro-Python-ESP32-automation/blob/main/README.md", code: "https://github.com/Suryaprakashrajendran/Micro-Python-ESP32-automation" },
  },
];

const experience = [
  {
    org: "Business Core Solutions (formerly Basis Cloud Solutions)",
    role: "Process Automation Engineer",
    period: "2023 — Present",
    points: [
      "Developed and maintained ETL pipelines to extract, transform, and load data from SFTP servers into internal data stores.",
      "Automated SAP data handling processes for efficient data retrieval and processing using Symphony automation tools.",
      "Implemented GUI automation for Salesforce and browser-based workflows using Selenium and Playwright (JavaScript).",
      "Built pipelines to monitor response times and system performance.",
      "Stored and visualized processed data in Elasticsearch, with Grafana dashboards for real-time monitoring.",
      "Collaborated on projects requiring Python automation, API integration, and process optimization.",
      "Used Symphony to execute automated governance, monitoring, and intelligence actions across business workflows."
    ],
    projects: [
      {
        name: "Simac",
        role: "Automation Consultant",
        period: "2024 — Present",
        points: [
          "Built ETL pipelines to extract, transform, and load SAP data from SFTP servers into internal data stores using Python and Symphony.",
          "Automated SAP data processing workflows for efficient and reliable data handling with Symphony.",
          "Stored and visualized processed data in Elasticsearch and Grafana dashboards for real-time monitoring.",
          "Implemented error handling, logging, and retry mechanisms to ensure pipeline resilience.",
          "Leveraged Symphony for executing governance and intelligence actions across internal processes."
        ],
      },
      {
        name: "Heineken",
        role: "Support Role",
        period: "2024 — 2025",
        points: [
          "Built scalable image/PDF diff pipeline (OpenCV + OCR) for SAP GUI validations.",
          "Automated Excel/CSV transformations using Pandas, including ageing metrics and JSON exports.",
          "Hardened CI-ready scripts with logging, CLI options, and error handling on Windows.",
          "Implemented GUI/browser automation workflows using Robot Framework.",
          "Integrated Symphony for process automation, governance, and monitoring actions."
        ],
      },
      {
        name: "Vorwerk",
        role: "Support Role",
        period: "2023 — 2024",
        points: [
          "Implemented SAP GUI automation workflows using Robot Framework and Symphony.",
          "Used Symphony to automate internal processes, and intelligence workflows.",
          "Enhanced operational efficiency by streamlining repetitive tasks through Symphony automation."
        ],
      }
    ]
  }
];




// Technologies I actively work with for modern AI implementations
const aiTech = [
  "Experienced in working with modern LLM platforms including ChatGPT, Gemini, Claude, and Bolt Notebook LM.",
  "Hands-on knowledge of Agentic AI systems, including multi-agent orchestration and autonomous task execution workflows.",
  "Developed and tested AI-driven solutions using CrewAI, AutoGen, LangGraph, and LangChain for automating complex tasks.",
  "Built prototype AI agents capable of planning, reasoning, tool-calling, and multi-step problem solving.",
  "Implemented ReAct-based agents for structured reasoning and decision-making processes.",
  "Integrated AI assistants using OpenAI Assistants API for automation and retrieval-augmented workflows.",
  "Worked with Swarm / multi-agent architectures to improve task coordination and task parallelization.",
  "Utilized LLMs for data extraction, document summarization, RAG pipelines, and automation scenarios."
];



// ---------------------------
// Utils & Hooks
// ---------------------------
function useDarkMode() {
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [enabled]);
  return [enabled, setEnabled];
}

// Inject a tiny global style so anchor scrolling is offset correctly and smooth
function useAnchorGlobalStyle() {
  useEffect(() => {
    if (document.getElementById("anchor-offset-style")) return;
    const style = document.createElement("style");
    style.id = "anchor-offset-style";
    style.textContent = `
      :root { --header-h: 72px; }
      html { scroll-padding-top: var(--header-h); scroll-behavior: smooth; }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);
}

// Measure the sticky header and update --header-h on resize
function useAnchorsOffset() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.getElementById("site-header");
    const apply = () => {
      if (!header) return;
      root.style.setProperty("--header-h", `${header.offsetHeight}px`);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
}

// If page loads with a #hash, skip the initial hero animation to avoid shifting under header
function useHashOnLoad() {
  const [has, setHas] = useState(false);
  useEffect(() => {
    if (window.location.hash) setHas(true);
  }, []);
  return has;
}

// Framer variants
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function App() {
  const [dark, setDark] = useDarkMode();
  useAnchorGlobalStyle();
  useAnchorsOffset();
  const hasHash = useHashOnLoad();

  const initials = useMemo(
    () =>
      profile.name
        .split(" ")
        .map((p) => p[0])
        .slice(0, 2)
        .join("")
        .toUpperCase(),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 selection:bg-indigo-200 dark:selection:bg-indigo-700">
      {/* Header */}
      <header
        id="site-header"
        className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white grid place-items-center font-semibold shadow-md">
              {initials}
            </div>
            <div>
              <div className="font-semibold leading-tight">{profile.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{profile.title}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#ai" className="hover:text-indigo-600">AI</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Suryaprakashrajendran/Portfolio/blob/master/src/files/suryaprakash_R.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow"
            >
              <FileDown className="w-4 h-4" aria-hidden /> Resume
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="rounded-xl px-3 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={fade}
          initial={hasHash ? "show" : "hidden"}
          animate={hasHash ? undefined : "show"}
          className="grid md:grid-cols-[1.15fr_.85fr] gap-8 items-center"
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Building dependable <span className="text-indigo-600">automation</span> & ETL Flows
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
              >
                <Mail className="w-4 h-4" aria-hidden /> Contact
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="w-4 h-4" aria-hidden /> GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Linkedin className="w-4 h-4" aria-hidden /> LinkedIn
              </a>
            </div>
            <div className="mt-4 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-4">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden /> {profile.location}</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" aria-hidden /> {profile.phone}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500 to-sky-400 rounded-3xl blur opacity-30" />
            <div className="relative rounded-3xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300 text-sm">
                <Code2 className="w-4 h-4" aria-hidden /> Skills Stacks
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {profile.skills.slice(0, 8).map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" aria-hidden /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-[var(--header-h)]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-1 gap-8">
          <div>
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">I am an IT professional with 2.6 years of experience as a Process Automation Engineer, specializing in Python automation, ETL workflows, cloud storage, and end-to-end software testing. I have strong hands-on experience with Python, API development (Flask, FastAPI), and automation frameworks such as Selenium and Robot Framework. My expertise includes API testing (Postman, Swagger), performance and load testing (JMeter), and SDET methodologies to ensure high software quality.
            I have practical experience working with cloud platforms and storage systems including AWS S3 and Azure Blob Storage, where I automate data pipelines and integrate storage with ETL processes. I am also proficient in version control and DevOps workflows, working with tools such as GitHub, GitLab, Bitbucket, Jira, Azure DevOps, and Azure Boards for task management, CI/CD integration, and project tracking.
            With a strong foundation in both manual and automation testing, I focus on building scalable, efficient, and reliable automation solutions that improve system performance and process efficiency.</p>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-[var(--header-h)]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-2xl font-bold">Skills Stacks</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-sm rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      {/* =================== AI & OPTIMIZATION =================== */}
      <section id="ai" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-[var(--header-h)]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-2xl font-bold">AI & Optimization</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">
            Current technologies I use for modern AI implementations: model integration, retrieval, optimization, and productionization.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {aiTech.map((t) => (
              <li key={t} className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-[var(--header-h)]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-300 text-sm">
                  {p.icon}
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    <ExternalLink className="w-4 h-4" aria-hidden /> Live
                  </a>
                  <a href={p.links.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    <Github className="w-4 h-4" aria-hidden /> Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-4 py-12 scroll-mt-[var(--header-h)]"
      >
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-6 space-y-6">
            {experience.map((e) => (
              <div
                key={e.org}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm text-slate-500">{e.org}</div>
                  </div>
                  <div className="text-sm text-slate-500">{e.period}</div>
                </div>

                {/* Main Experience Points */}
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                {/* Nested Projects */}
                {e.projects && e.projects.length > 0 && (
                  <div className="mt-4">
                    <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-200">
                      Projects:
                    </h3>
                    {e.projects.map((p, idx) => (
                      <div key={idx} className="mt-2 pl-4 border-l-2 border-slate-300 dark:border-slate-600">
                        <div className="font-medium">{p.name} ({p.role})</div>
                        <div className="text-xs text-slate-500">{p.period}</div>
                        <ul className="mt-1 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                          {p.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 scroll-mt-[var(--header-h)]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800 hover:shadow"
            >
              <div className="text-sm text-slate-500">Email</div>
              <div className="mt-1 font-medium flex items-center gap-2"><Mail className="w-4 h-4" aria-hidden /> {profile.email}</div>
            </a>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800">
              <div className="text-sm text-slate-500">Location</div>
              <div className="mt-1 font-medium flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden /> {profile.location}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-800">
              <div className="text-sm text-slate-500">Phone</div>
              <div className="mt-1 font-medium flex items-center gap-2"><Phone className="w-4 h-4" aria-hidden /> {profile.phone}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <Github className="w-4 h-4 inline" aria-hidden /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
              <Linkedin className="w-4 h-4 inline" aria-hidden /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
