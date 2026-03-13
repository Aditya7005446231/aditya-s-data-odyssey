import { motion } from "framer-motion";
import { ExternalLink, Github, LayoutDashboard, Brain } from "lucide-react";

const projects = [
  {
    title: "PrompTool",
    subtitle: "Full-Stack Project Management Application",
    icon: LayoutDashboard,
    description:
      "A modern project management tool built with React and Express.js, designed to help teams organize projects, manage tasks, and collaborate efficiently.",
    features: [
      "Dashboard with real-time statistics & insights",
      "Kanban-style board for visual task management",
      "Team collaboration & member assignments",
      "Secure JWT-based authentication",
      "Customizable workspace settings",
    ],
    frontend: ["React 19", "Vite", "Tailwind CSS", "CoreUI", "Lucide React"],
    backend: ["Node.js", "Express.js", "MongoDB", "JWT", "CORS"],
    accent: "primary" as const,
  },
  {
    title: "Patient Experience Analytics (RAG)",
    subtitle: "Evidence-First RAG System",
    icon: Brain,
    description:
      "A Retrieval-Augmented Generation system that transforms free-text patient feedback into operational insights for hospital leadership using LangChain + Gemini + ChromaDB.",
    features: [
      "Persistent vector indexing from patient reviews",
      "Semantic retrieval with evidence citation",
      "Lightweight issue taxonomy (category & severity)",
      "Operational snapshot of top complaint themes",
      "Gradio UI with Q&A, Ops Snapshot & Index Management tabs",
    ],
    frontend: ["Gradio", "Python 3.10+"],
    backend: ["LangChain", "Gemini 2.0 Flash", "ChromaDB", "Gemini Embeddings"],
    accent: "secondary" as const,
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
        <span className="pill-tag-accent mb-4 inline-block">Projects</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Featured Work
        </h2>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="card-elevated p-8 md:p-10 group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${project.accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                <project.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-medium">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${project.accent === "primary" ? "bg-primary" : "bg-secondary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Tech Stack
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Frontend</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.frontend.map((t) => (
                        <span key={t} className="pill-tag text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Backend</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.backend.map((t) => (
                        <span key={t} className="pill-tag-accent text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-border/50">
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
