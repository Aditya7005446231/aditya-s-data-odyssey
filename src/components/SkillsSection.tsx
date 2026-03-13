import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    accent: "primary" as const,
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React", "Node.js", "Express", "FastAPI", "Scikit-learn", "Flask"],
    accent: "secondary" as const,
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["MySQL", "Docker", "GitHub", "MongoDB", "ChromaDB", "Gradio"],
    accent: "primary" as const,
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Self-Motivated", "Team Player", "Adaptability", "Confident"],
    accent: "secondary" as const,
  },
];

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
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          My Toolbox
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bento-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.accent === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-xl">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
