import { motion } from "framer-motion";
import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Refined and Visible Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)"
        }}
      />
      
      {/* Colorful floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="pill-tag-accent mb-6 inline-block">
            ✦ Welcome to My Data Odyssey ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Aditya Raj Rai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bridging the gap between raw data and human experience. Turning 
  <span className="text-secondary font-medium"> complex datasets</span> into 
  <span className="text-primary font-medium"> intelligent agents</span> and 
  production-ready solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-border bg-card text-foreground font-medium hover:border-primary/50 hover:scale-105 transition-all duration-200"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: "https://github.com/Aditya7005446231", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-rai-31a250289//", label: "LinkedIn" },
            { icon: Mail, href: "mailto:your@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
