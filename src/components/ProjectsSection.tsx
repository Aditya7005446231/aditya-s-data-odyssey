import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutDashboard, Brain } from "lucide-react";

const projects = [
  {
    title: "PrompTool",
    subtitle: "Project Management Platform",
    icon: LayoutDashboard,
    description:
      "A team-first workspace for planning, tracking, and shipping projects faster.",
    features: [
      "Real-time dashboard insights",
      "Kanban task management",
      "JWT authentication and roles",
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    accent: "primary" as const,
  },
  {
    title: "Patient Experience Analytics (RAG)",
    subtitle: "Evidence-First RAG System",
    icon: Brain,
    description:
      "RAG pipeline that turns patient feedback into clear operational insights with cited evidence.",
    features: [
      "Persistent vector indexing",
      "Evidence-backed semantic retrieval",
      "Ops snapshot for complaint trends",
    ],
    techStack: ["Python", "Gradio", "LangChain", "Gemini", "ChromaDB", "Embeddings"],
    accent: "secondary" as const,
  },
  {
    title: "Netflix Exploratory Analysis",
    subtitle: "Data Science Project",
    icon: LayoutDashboard,
    description:
      "Concise EDA on Netflix content to uncover genre, release-year, and region-wise trends.",
    features: [
      "Genre and release trend analysis",
      "Content distribution insights",
      "Clean visual storytelling",
    ],
    techStack: ["Python", "Pandas", "Matplotlib"],
    accent: "emerald" as const,

  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10">
          Featured Work
        </h2>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-elevated p-6 md:p-7 group"
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${
                  project.accent === "primary"
                    ? "bg-primary/10 text-primary"
                    : project.accent === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-emerald/10 text-emerald"
                }`}
              >
                <project.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-5 max-w-3xl leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Features */}
              <div>
                <h4 className="font-heading font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                          project.accent === "primary"
                            ? "bg-primary"
                            : project.accent === "secondary"
                              ? "bg-secondary"
                              : "bg-emerald"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-heading font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="pill-tag text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" /> View Code
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
