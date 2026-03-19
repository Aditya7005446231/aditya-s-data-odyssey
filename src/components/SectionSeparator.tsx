import { motion } from "framer-motion";

const SectionSeparator = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 flex items-center justify-center opacity-40">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent relative">
        <motion.div 
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{ left: "50%", opacity: [0, 1, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
        />
      </div>
    </div>
  );
};

export default SectionSeparator;
