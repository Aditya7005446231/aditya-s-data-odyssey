import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotDeployed = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grid for aesthetics */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 10%, transparent 100%)"
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 flex flex-col items-center text-center space-y-8 max-w-2xl"
      >
        <span className="pill-tag-accent">Deployment in Progress</span>
        
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Whoops! It's not live yet.
        </h1>
        
        <p className="text-muted-foreground text-lg">
          I'm still brewing this project, tweaking the servers, or just too broke to pay for hosting it right now. In the meantime, enjoy this meme:
        </p>

        {/* User can replace this image src with their meme */}
        <div className="card-elevated p-2 overflow-hidden max-w-md w-full mx-auto rotating-border">
          <img 
            src="/meme.jpg" 
            alt="Not deployed meme" 
            className="w-full h-auto rounded-xl shadow-lg border border-border/50 bg-muted object-cover min-h-[300px]"
            onError={(e) => {
              // Fallback text if image isn't provided yet
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'min-h-[300px]');
              if (e.currentTarget.parentElement) {
                 e.currentTarget.parentElement.innerHTML = '<p class="text-muted-foreground font-mono text-sm">(Replace /public/meme.jpg with your image)</p>';
              }
            }}
          />
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Take Me Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotDeployed;
