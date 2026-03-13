import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  { title: "Master Generative AI & Generative AI Tools (ChatGPT & more)", provider: "Udemy" },
  { title: "Build Generative AI Apps and Solutions with No-Code Tools", provider: "Udemy" },
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", provider: "Infosys" },
  { title: "Introduction to IoT", provider: "NPTEL" },
  { title: "Advance Data Structure", provider: "LPU" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-tag-accent mb-4 inline-block">Certifications</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          Continuous Learning
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bento-card flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm leading-snug mb-1">
                {cert.title}
              </h3>
              <span className="text-xs text-muted-foreground">{cert.provider}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
