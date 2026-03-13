import { motion } from "framer-motion";
import { Briefcase, Trophy, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Tech CSE — Lovely Professional University",
    subtitle: "6th Semester • CGPA 7.6",
    period: "2022 – Present",
    description: "Focusing on Data Science, AI/ML, and Full-Stack Development.",
  },
  {
    type: "training",
    icon: Briefcase,
    title: "Advance Data Structures Training",
    subtitle: "Intensive program",
    period: "2024",
    description: "Deep dive into advanced algorithmic patterns and optimization techniques.",
  },
  {
    type: "hackathon",
    icon: Trophy,
    title: "Smart India Hackathon (SIH)",
    subtitle: "University Level Qualifier",
    period: "2024",
    description: "Qualified from university level for India's largest hackathon, competing with innovative solutions.",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "12th — Kendriya Vidyalaya",
    subtitle: "81%",
    period: "2022",
    description: "Strong foundation in Science and Mathematics.",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "10th — Abotani Vidya Niketan",
    subtitle: "84%",
    period: "2020",
    description: "Excelled academically in a nurturing environment in Arunachal Pradesh.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-tag-accent mb-4 inline-block">Journey</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Experience & Education
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="bento-card">
                  <span className="text-xs font-medium text-primary mb-2 inline-block">{item.period}</span>
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center z-10">
                <item.icon className="w-4 h-4 text-primary" />
              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
