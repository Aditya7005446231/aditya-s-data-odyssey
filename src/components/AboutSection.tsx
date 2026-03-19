import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/12 via-transparent to-secondary/12" />
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none bg-gradient-to-r from-primary/20 via-secondary/15 to-emerald/20 blur-2xl" />

      <div className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Image Column */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="bento-card p-3">
              <img
                src="/cv photo.jpg"
                alt="Aditya Raj Rai profile photo"
                className="w-full h-72 md:h-80 object-contain rounded-xl bg-muted/20"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Narrative Column */}
          <motion.div
            className="md:col-span-7 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pre-final year B.Tech CSE student at <strong className="text-foreground">Lovely Professional University</strong> with a focus on engineering practical products at the intersection of <strong className="text-foreground">Data Science</strong> and <strong className="text-foreground">Full-Stack Development</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in architecting <strong className="text-foreground">GenAI workflows</strong>, <strong className="text-foreground">Autonomous Agents</strong>, and scalable web systems. My approach is rooted in solid DSA fundamentals and a commitment to turning complex technical logic into reliable, production-grade solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bento-card h-full">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-1">From</h3>
              <p className="text-muted-foreground">Arunachal Pradesh, India</p>
          </div>
          <div className="bento-card h-full">
              <GraduationCap className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-1">Education</h3>
              <p className="text-muted-foreground">B.Tech CSE, LPU — 6th Sem, 7.6 CGPA</p>
          </div>
          <div className="bento-card h-full">
              <Target className="w-5 h-5 text-secondary mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-1">Focus</h3>
              <p className="text-muted-foreground">Data Science, GenAI, Full-Stack Systems</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
