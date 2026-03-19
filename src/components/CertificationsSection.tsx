import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "react-day-picker";

const certifications = [
  { title: "Master Generative AI & Generative AI Tools (ChatGPT & more)", provider: "Udemy", color: "secondary" as const, link: "https://drive.google.com/file/d/1xIoUaUtTx8ESr34jJgat93d5DOu5FGZ5/view?usp=drive_link" },
  { title: "Build Generative AI Apps and Solutions with No-Code Tools", provider: "Udemy", color: "primary" as const, link: "https://drive.google.com/file/d/1JOTSYlpBJQIurONVV4JRy8JaXBJinIJB/view?usp=drive_link"},
  { title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM", provider: "Infosys", color: "emerald" as const, link: "https://drive.google.com/file/d/1PfN20j1vIjf4PQdx1_rXUzVdp8ItCEZi/view?usp=drive_link"},
  { title: "Introduction to IoT", provider: "NPTEL", color: "amber" as const, link: "https://drive.google.com/file/d/1Xdd6M_llyjlRlSB_nM2B1H4d0YtL2YIT/view?usp=drive_link"},
  { title: "Advance Data Structure", provider: "LPU", color: "primary" as const, link: "https://drive.google.com/file/d/1Q5kFMnxZLovgBKupf4J-8sTXQqRWBB1p/view?usp=drive_link"},
  { title: "Bits & Bytes", provider:"Coursera", color: "secondary" as const, link: "https://drive.google.com/file/d/1NsyavCQ8Gc4faR-sWUm_YTL6u858xFeH/view?usp=drive_link"},
];


const colorStyles = {
  primary: { bg: "bg-primary/10", text: "text-primary", stripe: "bg-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary", stripe: "bg-secondary" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald", stripe: "bg-emerald" },
  amber: { bg: "bg-amber/10", text: "text-amber", stripe: "bg-amber" },
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--emerald))]">
            Certifications
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-xl leading-relaxed">
          Always leveling up through courses and certifications.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => {
          const colors = colorStyles[cert.color];
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bento-card relative overflow-hidden flex items-start gap-4"
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.stripe}`} />
              <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                <Award className={`w-5 h-5 ${colors.text}`} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm leading-snug mb-1.5">
                  {cert.title}
                </h3>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-xs font-medium ${colors.text} hover:underline transition-colors`}>
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                  {cert.provider}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;
