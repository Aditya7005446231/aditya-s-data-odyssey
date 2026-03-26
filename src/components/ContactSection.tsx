import { useRef, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, FileDown, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    // ==========================================
    // EMAILJS CODE GOES HERE
    // ==========================================
    
    emailjs.sendForm(
      'service_u2t05kd', 
      'template_1jcwzbt', 
      formRef.current, 
      'NE_XeeWqjufTCDErf'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        formRef.current?.reset();
    }, (error) => {
        console.log(error.text);
        alert("Oops! Something went wrong. Please try again.");
    })
    .finally(() => {
        setIsSubmitting(false);
    });
    
  };

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
                  <p className="font-medium text-sm">adityarai77053@gmail.com</p>
                </div>
              </a>
              <a href="tel:+910000000000" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium text-sm">+91 70054 46231</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/aditya-rai-31a250289/" target="_blank" rel="noopener noreferrer" className="bento-card flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-sm">Connect with me</p>
                </div>
              </a>
              <a href="https://github.com/Aditya7005446231" target="_blank" rel="noopener noreferrer" className="bento-card flex items-center gap-4 group">
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
                href="/ADITYA_CV.pdf"
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
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" // <--- Important for EmailJS template
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" // <--- Important for EmailJS template
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="john@example.com" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message" 
                  name="message" // <--- Important for EmailJS template
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50 text-sm" 
                  placeholder="How can I help you?" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:pointer-events-none"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
