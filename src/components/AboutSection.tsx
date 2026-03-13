import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="pill-tag-accent mb-4 inline-block">About Me</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
          The Story So Far
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Narrative Column */}
        <motion.div
          className="md:col-span-3 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Growing up in the misty hills of <strong className="text-foreground">Arunachal Pradesh</strong>, I was 
            always drawn to understanding how things work — from the patterns in nature around me 
            to the logic behind the machines I tinkered with. That curiosity led me from the classrooms 
            of <strong className="text-foreground">Abotani Vidya Niketan</strong> where I scored 84% in my 10th boards, 
            through <strong className="text-foreground">Kendriya Vidyalaya</strong> where I secured 81% in 12th, and 
            eventually to <strong className="text-foreground">Lovely Professional University</strong>, where I'm currently 
            in my 6th semester pursuing B.Tech in Computer Science with a CGPA of 7.6.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            At LPU, I discovered my passion for <strong className="text-foreground">Data Science</strong> and 
            <strong className="text-foreground"> Full-Stack Development</strong>. I stopped seeing code as just syntax 
            and started seeing it as a tool for building things that matter — from RAG-based analytics engines 
            that transform patient feedback into actionable insights, to project management platforms that 
            help teams ship faster.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Today, I'm deeply focused on the intersection of <strong className="text-foreground">Generative AI</strong> and 
            scalable web systems. I believe the best software isn't just functional — it tells a story, 
            solves a pain point, and makes someone's day a little better.
          </p>
        </motion.div>

        {/* Info Cards Column */}
        <motion.div
          className="md:col-span-2 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bento-card">
            <MapPin className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-lg mb-1">From</h3>
            <p className="text-muted-foreground">Arunachal Pradesh, India</p>
          </div>
          <div className="bento-card">
            <GraduationCap className="w-5 h-5 text-primary mb-3" />
            <h3 className="font-heading font-semibold text-lg mb-1">Education</h3>
            <p className="text-muted-foreground">B.Tech CSE, LPU — 6th Sem, 7.6 CGPA</p>
          </div>
          <div className="bento-card">
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
