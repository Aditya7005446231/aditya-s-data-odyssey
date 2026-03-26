import { motion } from "framer-motion";
import { Briefcase, Megaphone, Trophy, Zap } from "lucide-react";

const journeyItems = [
  {
    title: "Freelance Social Media Manager",
    org: "Client Projects",
    period: "June 2025 - December 2025",
    type: "Experience",
    icon: Briefcase,
    color: "primary" as const,
    details: [
      "Handled content planning and growth strategy for social platforms",
      "Delivered measurable improvements in engagement and online presence",
    ],
  },
  {
    title: "Chief Marketing Officer",
    org: "Leadership Role",
    period: "2025 - Present",
    type: "Experience",
    icon: Megaphone,
    color: "emerald" as const,
    details: [
      "Led marketing strategy, outreach, and branding initiatives",
      "Managed campaigns to improve audience engagement and visibility",
    ],
  },
  {
    title: "SIH University-Level Qualifier",
    org: "Smart India Hackathon",
    period: "September 2025",
    type: "Achievement",
    icon: Trophy,
    color: "rose" as const,
    details: [
      "Qualified from university level for India's largest hackathon",
      "Built innovative solutions for real-world national challenges",
    ],
  },
  {
    title: "Advance Data Structures Training",
    org: "Intensive Program",
    period: "June 2025 - July 2025",
    type: "Training",
    icon: Zap,
    color: "amber" as const,
    details: [
      "Deep dive into advanced algorithmic patterns",
      "Optimization techniques for competitive programming",
      "Hands-on problem solving with complex data structures",
    ],
  }
];

const colorMap = {
  amber: { bg: "bg-amber/10", text: "text-amber", dot: "bg-amber", pillBg: "bg-amber/10", pillText: "text-amber" },
  rose: { bg: "bg-rose/10", text: "text-rose", dot: "bg-rose", pillBg: "bg-rose/10", pillText: "text-rose" },
  primary: { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary", pillBg: "bg-primary/10", pillText: "text-primary" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", dot: "bg-emerald", pillBg: "bg-emerald/10", pillText: "text-emerald" },
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
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
          Journey
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          <span className="gradient-text-warm">Journey Till Now</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl">
          A timeline of my experiences, training, and key milestones in tech and leadership.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {journeyItems.map((item, i) => {
          const colors = colorMap[item.color];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors.pillBg} ${colors.pillText} mb-2`}>
                    {item.type}
                  </span>
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.org} • {item.period}</p>
                </div>
              </div>

              <ul className="space-y-2 ml-1 mt-auto flex-grow">
                {item.details.map((d) => (
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
