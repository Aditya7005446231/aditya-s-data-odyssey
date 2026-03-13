import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    color: "primary" as const,
    span: "md:col-span-1",
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Node.js", "Express", "FastAPI", "Scikit-learn", "Flask"],
    color: "secondary" as const,
    span: "md:col-span-1",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["MySQL", "Docker", "GitHub", "MongoDB", "ChromaDB", "Gradio"],
    color: "emerald" as const,
    span: "md:col-span-1",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Self-Motivated", "Team Player", "Adaptability", "Confident"],
    color: "amber" as const,
    span: "md:col-span-1",
  },
];

const colorStyles = {
  primary: { bg: "bg-primary/10", text: "text-primary", pill: "bg-primary/8 text-primary border border-primary/15" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", pill: "bg-secondary/8 text-secondary border border-secondary/15" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", pill: "bg-emerald/8 text-emerald border border-emerald/15" },
  amber: { bg: "bg-amber/10", text: "text-amber", pill: "bg-amber/8 text-amber border border-amber/15" },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-tag-accent mb-4 inline-block">Skills</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          My <span className="gradient-text-cool">Toolbox</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          Technologies and skills I use to bring ideas to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => {
          const colors = colorStyles[cat.color];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.bg}`}>
                  <cat.icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="font-heading font-semibold text-xl">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${colors.pill}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
