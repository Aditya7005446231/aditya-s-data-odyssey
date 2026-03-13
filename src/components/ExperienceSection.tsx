import { motion } from "framer-motion";
import { Briefcase, Trophy, Zap } from "lucide-react";

const experiences = [
  {
    title: "Advance Data Structures Training",
    org: "Intensive Program",
    period: "2024",
    type: "Training",
    icon: Zap,
    color: "amber" as const,
    details: [
      "Deep dive into advanced algorithmic patterns",
      "Optimization techniques for competitive programming",
      "Hands-on problem solving with complex data structures",
    ],
  },
  {
    title: "Smart India Hackathon (SIH)",
    org: "University Level Qualifier",
    period: "2024",
    type: "Hackathon",
    icon: Trophy,
    color: "rose" as const,
    details: [
      "Qualified from university level for India's largest hackathon",
      "Competed with innovative solutions to national-level problems",
      "Collaborated in cross-functional teams under time pressure",
    ],
  },
];

const colorMap = {
  amber: { bg: "bg-amber/10", text: "text-amber", dot: "bg-amber", pillBg: "bg-amber/10", pillText: "text-amber" },
  rose: { bg: "bg-rose/10", text: "text-rose", dot: "bg-rose", pillBg: "bg-rose/10", pillText: "text-rose" },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-amber/10 text-amber mb-4">
          Experience
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Training & <span className="gradient-text-warm">Hackathons</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          Building skills through intensive programs and competitive challenges.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => {
          const colors = colorMap[exp.color];
          return (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bento-card relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />

              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0`}>
                  <exp.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors.pillBg} ${colors.pillText} mb-2`}>
                    {exp.type}
                  </span>
                  <h3 className="font-heading font-bold text-lg">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">{exp.org} • {exp.period}</p>
                </div>
              </div>

              <ul className="space-y-2 ml-1">
                {exp.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
