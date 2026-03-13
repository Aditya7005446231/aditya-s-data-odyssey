import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech CSE",
    detail: "6th Semester • CGPA 7.6",
    period: "2022 – Present",
    description: "Specializing in Data Science, AI/ML, and Full-Stack Development. Active participant in hackathons and coding competitions.",
    icon: GraduationCap,
    color: "primary" as const,
  },
  {
    school: "Kendriya Vidyalaya",
    degree: "12th Standard — Science",
    detail: "81%",
    period: "2022",
    description: "Strong foundation in Physics, Chemistry, and Mathematics.",
    icon: School,
    color: "secondary" as const,
  },
  {
    school: "Abotani Vidya Niketan",
    degree: "10th Standard",
    detail: "84%",
    period: "2020",
    description: "Built academic discipline and curiosity in a nurturing environment in Arunachal Pradesh.",
    icon: BookOpen,
    color: "emerald" as const,
  },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", dot: "bg-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", border: "border-secondary/20", dot: "bg-secondary" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", border: "border-emerald/20", dot: "bg-emerald" },
};

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-tag-accent mb-4 inline-block">Education</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Academic <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          From the hills of Arunachal Pradesh to a leading tech university.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {education.map((edu, i) => {
          const colors = colorMap[edu.color];
          return (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`bento-card relative overflow-hidden group`}
            >
              {/* Decorative top gradient stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />
              
              <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-4`}>
                <edu.icon className={`w-6 h-6 ${colors.text}`} />
              </div>

              <span className={`text-xs font-semibold ${colors.text} mb-2 block`}>{edu.period}</span>
              <h3 className="font-heading font-bold text-lg mb-1">{edu.school}</h3>
              <p className="font-medium text-sm text-foreground/80 mb-1">{edu.degree}</p>
              <p className={`text-sm font-semibold ${colors.text} mb-3`}>{edu.detail}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationSection;
