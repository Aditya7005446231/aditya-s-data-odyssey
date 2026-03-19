import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, FileDown, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="pill-tag-accent mb-4 inline-block">Contact</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="mailto:your@email.com" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">your@email.com</p>
                </div>
              </a>
              <a href="tel:+910000000000" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm">+91 XXXXX XXXXX</p>
                </div>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-sm">Connect with me</p>
                </div>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="font-medium text-sm">View my code</p>
                </div>
              </a>
            </div>

            <div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-heading font-semibold text-lg hover:scale-105 transition-transform duration-200"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bento-card relative">
            <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="How can I help you?" 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
