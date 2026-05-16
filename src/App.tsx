import { motion } from "motion/react";
import { Mail, Github, Linkedin, ExternalLink, Cpu, Brain, Layers, GitMerge, GraduationCap, Award, CheckCircle2, Trophy, Terminal } from "lucide-react";
import { cn } from "@/src/lib/utils";
import selfLandscapeUrl from "../images/Self_Landscape.jpeg";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stroke bg-void/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center relative">
      <div className="hidden md:flex items-center gap-8">
        {["About", "Experience", "Stack", "Education", "Projects"].map((item) => {
          const id = item === "Education" ? "credentials" : item.toLowerCase();
          return (
            <a 
              key={item} 
              href={`#${id}`} 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                }
              }}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="absolute right-6 hidden md:block">
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('contact');
            if (element) {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
            }
          }}
          className="btn-primary py-1.5 px-4 text-sm rounded cursor-pointer"
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden grid-bg min-h-[100vh] flex flex-col items-center justify-center text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-4"
    >
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
        Rishabh Singh
      </h1>
      
      <p className="text-xl md:text-2xl text-accent font-medium tracking-wide font-mono uppercase">
        AI Engineer | LLM Systems | Intelligent Automation
      </p>

    </motion.div>
  </section>
);

const Intro = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 border-t border-stroke scroll-mt-20">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* <div className="flex items-center gap-3">
        <Brain className="w-6 h-6 text-accent" />
        <h2 className="text-2xl font-semibold text-white">Backend-First AI Systems</h2>
      </div> */}
      <div className="space-y-4 text-text-muted leading-relaxed">
        <p>
          I’m an AI Engineer focused on building practical AI systems that solve real operational and data-driven problems. My work primarily involves designing and owning end-to-end AI/data pipelines, retrieval systems, workflow automation platforms, and production-oriented LLM applications.
        </p>
        <p>
          Beyond engineering systems, I enjoy working closely with clients, stakeholders, and teams to understand complex workflows, identify bottlenecks, and turn ambiguous problems into scalable technical solutions. I like bridging the gap between business needs and engineering execution — from brainstorming ideas and designing architectures to building reliable systems that can operate in real-world environments.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-[11px] font-mono uppercase tracking-widest text-text-muted">Areas of Interest</h4>
        <div className="flex flex-wrap gap-2">
          {["LLM Systems", "Agentic AI", "RAG", "Automation"].map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group overflow-hidden rounded-lg"
    >
       <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent blur opacity-25 group-hover:opacity-40 transition-opacity z-10" />
       <div className="relative h-full aspect-[3/4] md:aspect-auto bg-surface border border-stroke rounded-lg overflow-hidden">
            <img 
              src={selfLandscapeUrl} 
              alt="Rishabh Singh" 
              className="w-full h-full object-cover object-[80%_top] grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop";
              }}
            />
        </div>
    </motion.div>
  </section>
);

const Metrics = () => {
  const metrics = [
    {
      value: "250+",
      label: "Monthly requests automated"
    },
    {
      value: "30 → <7 Days",
      label: "Workflow turnaround optimization"
    },
    {
      value: "~60%",
      label: "Faster local LLM inference"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card p-8 flex flex-col items-center text-center space-y-4 border-accent/10 hover:border-accent/30 transition-all group"
          >
            <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-accent transition-colors">
              {m.value}
            </div>
            <div className="text-sm font-mono uppercase tracking-[0.1em] text-text-muted leading-relaxed max-w-[200px]">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Dassault Systèmes Global Services",
      location: "Pune, India",
      roles: [
        {
          title: "AI Engineer",
          date: "Jan 2025 — Present",
          description: "Leading a team of developers building AI-powered validation systems while owning architecture, system design, and delivery workflows end-to-end.",
          bullets: [
            {
              title: "Project Audit Automation",
              text: "Developed an internal audit workflow system connecting audit teams, project managers, and technical leads into a centralized review and approval pipeline. Automated data handling, validations, calculations, reminders, and audit-stage processing to reduce repeated meetings, manual coordination, correction cycles, and audit turnaround time while improving response visibility and process consistency."
            },
            {
              title: "Partner Onboarding/Offboarding Process modelling",
              text: "Architected BPMN-driven workflow automation systems handling 250+ monthly enterprise requests across globally distributed teams. Redesigned fragmented approval flows using parallel stage execution, business rules, API integrations, and automated escalation handling to reduce turnaround time from ~30 days to under a week while decreasing manual follow-ups by ~70–80% and improving workflow visibility."
            },
            {
              title: "AI for Compliance Validation\"\"",
              text: "Architected and owned an LLM-based compliance validation system for large enterprise documents using multi-stage AI/data pipelines for parsing, clause extraction, semantic mapping, structured rule generation, and contextual inconsistency detection. Built secure local inference workflows using self-hosted open-source LLMs (Gemma, Llama, GPT-OSS) served through Ollama and optimized inference performance using Flash Attention, batch tuning, and dynamic context-window handling for large-document processing."
            }
          ],
          stack: ["BPMN", "Process Automation", "Workflow Automation", "Data Processing", "API Workflows", "Python", "JavaScript", "API Integration", "Docling", "PyMuPDF", "Regex", "Ollama", "FastAPI", "Pydantic", "Docker", "AI Pipelines", "Self-Hosted LLMs"]
        }
      ]
    },
    {
      company: "BI Hub Solution",
      location: "Remote",
      roles: [
        {
          title: "GenAI Intern",
          date: "Dec 2024 — Jan 2025",
          bullets: [
            "Built AI-driven analytics and retrieval systems focused on anomaly detection, business insight extraction, and retrieval optimization across structured enterprise datasets.",
            "Improved RAG retrieval quality through metadata enrichment, hybrid retrieval pipelines, reranking workflows, and contextual query expansion strategies. Worked on ML workflows for anomaly detection and operational data analysis over large structured datasets."
          ],
          stack: ["Python", "RAG Pipelines", "ML Systems", "Semantic Retrieval"]
        }
      ]
    },
    {
      company: "A.I.M Labs",
      location: "Remote",
      roles: [
        {
          title: "AI Engineer / Project Lead",
          date: "May 2024 — Nov 2024",
          bullets: [
            "Developed AI-enabled IoT monitoring systems for livestock health analysis using sensor-driven time-series data and anomaly detection workflows.",
            "Built ML pipelines for identifying irregular behavioral patterns using movement, pulse, and temperature telemetry data to support operational livestock monitoring and reproductive efficiency analysis.",
            "Contributed to end-to-end data processing and predictive analysis workflows for real-world sensor environments."
          ],
          stack: ["Python", "Time-Series ML", "IoT Systems", "Anomaly Detection"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto space-y-16 scroll-mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-white flex items-center gap-3"
      >
        <Terminal className="w-6 h-6 text-accent" />
        Professional Experience
      </motion.h2>

      <div className="space-y-24">
        {experiences.map((exp, i) => (
          <div key={i} className="space-y-12">
            {exp.roles.map((role, ri) => (
              <motion.div 
                key={ri}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ri * 0.1 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 border-b border-stroke pb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {role.title}
                    </h3>
                    <p className="text-lg text-accent font-medium">{exp.company}</p>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest">{exp.location}</p>
                  </div>
                  <span className="text-sm font-mono text-text-muted bg-surface/50 px-4 py-1.5 rounded border border-stroke shrink-0">
                    {role.date}
                  </span>
                </div>

                {role.description && (
                  <p className="text-text-muted leading-relaxed max-w-4xl italic border-l-2 border-accent/20 pl-4">
                    {role.description}
                  </p>
                )}

                {role.bullets && !role.projects && (
                   <ul className="space-y-3 list-disc list-outside pl-5">
                     {role.bullets.map((bullet, bi) => (
                       <li key={bi} className="text-text-muted leading-relaxed pl-2 text-sm md:text-base">
                         {typeof bullet === "string" ? (
                           bullet
                         ) : (
                           <>
                             <strong className="font-semibold">{bullet.title}</strong>: {bullet.text}
                           </>
                         )}
                       </li>
                     ))}
                   </ul>
                )}

                {role.projects && (
                  <div className="space-y-12">
                    {role.projects.map((project, pi) => (
                      <div key={pi} className="space-y-4">
                        <h4 className="text-xl font-bold text-white flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {project.name}
                        </h4>
                        <ul className="space-y-3 list-disc list-outside pl-8">
                          {project.bullets.map((bullet, bi) => (
                            <li key={bi} className="text-text-muted leading-relaxed text-sm md:text-base">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pl-8">
                          {project.stack.map(s => (
                            <span key={s} className="tag bg-surface/50">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {role.stack && !role.projects && (
                  <div className="flex flex-wrap gap-2">
                    {role.stack.map(s => (
                      <span key={s} className="tag bg-surface/50">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const Stack = () => {
  const categories = [
    { title: "Applied AI", items: ["RAG & Vector Search", "Agentic AI", "Prompt Engineering", "FAISS", "ChromaDB", "Neo4j", "LangChain", "LangGraph", 
"LlamaIndex", "PEFT/LoRA", "OpenAI API", "Ollama", "LMStudio", "Google ADK", "n8n", "Context Window Management"] },
    { title: "Languages/Tools", items: ["Python", " SQL", "FastAPI", "Flask", "HTML", "CSS", "Streamlit"] },
    { title: "Data Science & Analytics", items: ["NumPy", "Pandas", "Regex (re)", "docling",  "Matplotlib", "Seaborn", "Plotly"] },
    { title: "ML / DL Framework", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "HuggingFace"] },
    { title: "DevOps & Cloud", items: ["Git", "Linux", "Docker", "AWS (EC2, S3)", "CI/CD"] }
  ];

  return (
    <section id="stack" className="py-24 px-6 max-w-7xl mx-auto space-y-12 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-3">
          <Cpu className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-semibold text-white">Infrastructure & Stack</h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="space-y-4"
          >
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted border-l-2 border-accent pl-3">
              {cat.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="tag bg-surface/50">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Credentials = () => (
  <section id="credentials" className="py-24 px-6 max-w-7xl mx-auto space-y-12 scroll-mt-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8 max-w-3xl"
    >
      <div className="flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-semibold text-white">Education</h2>
      </div>
      <div className="card p-8 space-y-6">
        <div className="flex justify-between items-start gap-4">
           <div>
              <h3 className="text-lg font-semibold text-white">G H Raisoni College of Engineering and Management</h3>
              <p className="text-accent font-medium">B. Tech in Artificial Intelligence</p>
           </div>
           <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest">2020-2024</span>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-text-muted">CGPA: 8.19</p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Email Evidence Retrieval",
      description: "GraphRAG-based evidence retrieval system designed to extract timelines, supporting facts, and incident-specific evidence from large collections of unstructured email conversations stored in PDF documents.",
      image: "https://www.collegenp.com/uploads/2025/09/learning-strategies.jpg",
      href: "https://github.com/RishabhSingh0907/Email-Evidence-Retrieval",
      stack: ["Python", "Neo4j", "GraphRAG", "OpenAI-Compatible APIs", "FastAPI"]
    },
    {
      title: "Agentic Candidate Recommendation",
      description: "Agent-based recommendation system capable of retrieving, ranking, validating, and generating candidate recommendations against project synergy using hybrid retrieval and evaluation workflows.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
      href: "https://github.com/RishabhSingh0907/Candidate-Recommendation-System",
      stack: ["Python", "LangChain", "LangGraph", "SQLite", "Ollama", "RAGAS"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto space-y-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <Layers className="w-6 h-6 text-accent" />
        <h2 className="text-3xl font-semibold text-white">
          Projects
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.a 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card group block"
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative aspect-video overflow-hidden">
               <img src={p.image} alt={p.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
            <div className="p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{p.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted">
                  {p.highlights ? "Highlights" : "Capabilities"}
                </h4>
                <p className="text-xs text-text-muted">
                  {(p.highlights || p.capabilities || []).join(", ")}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.map((s) => (
                  <span key={s} className="tag text-[10px] bg-void/50">{s}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center space-y-12 border-t border-stroke scroll-mt-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4 flex flex-col items-center"
    >
      <div className="flex items-center gap-3">
        <Mail className="w-6 h-6 text-accent" />
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Establish Connection</h2>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
    >
      <a href="mailto:rishabhsingh9702@gmail.com" className="group flex items-center gap-3 transition-colors">
        <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium text-text-muted group-hover:text-white">rishabhsingh9702@gmail.com</span>
      </a>
      <a href="https://github.com/RishabhSingh0907" className="group flex items-center gap-3 transition-colors">
        <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium text-text-muted group-hover:text-white">Github</span>
      </a>
      <a href="https://www.linkedin.com/in/rishabh-singh-87bb68261/" className="group flex items-center gap-3 transition-colors">
        <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium text-text-muted group-hover:text-white">Linkedin</span>
      </a>
    </motion.div>

    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="text-[11px] font-mono text-text-muted uppercase tracking-widest pt-12 text-center"
    >
      Building practical AI systems for real-world problems.
    </motion.p>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-stroke px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest">
        © 2026 Rishabh Singh
      </span>
      <div className="flex gap-6">
        {["About", "Experience", "Education", "Stack", "Projects"].map((item) => {
          const id = item === "Education" ? "credentials" : item.toLowerCase();
          return (
            <a 
              key={item} 
              href={`#${id}`} 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
                }
              }}
              className="text-[10px] font-mono text-text-muted uppercase tracking-widest hover:text-white transition-colors"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-void scroll-smooth">
      <Navbar />
      <Hero />
      <Metrics />
      <Intro />
      <Experience />
      <Stack />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
