import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "aditya.location", output: '"Arunachal Pradesh, India 🏔️"' },
  { cmd: "aditya.currentRole", output: '"B.Tech CSE Student @ LPU"' },
  { cmd: "aditya.skills.top(5)", output: '["Python", "React", "FastAPI", "LangChain", "Docker"]' },
  { cmd: "aditya.interests", output: '["Data Science", "Generative AI", "RAG Systems", "Full-Stack"]' },
  { cmd: "aditya.isAvailableForHire()", output: "true ✅" },
];

const InteractiveTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentTyped, setCurrentTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [started, setStarted] = useState(false);

  const currentCommand = commands[visibleLines];

  const startAnimation = useCallback(() => {
    if (started) return;
    setStarted(true);
  }, [started]);

  useEffect(() => {
    if (!started || visibleLines >= commands.length) return;

    const cmd = commands[visibleLines].cmd;

    if (typingIndex < cmd.length) {
      const timeout = setTimeout(() => {
        setCurrentTyped(cmd.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 40 + Math.random() * 30);
      return () => clearTimeout(timeout);
    }

    if (!showOutput) {
      const timeout = setTimeout(() => setShowOutput(true), 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setVisibleLines(visibleLines + 1);
      setTypingIndex(0);
      setCurrentTyped("");
      setShowOutput(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [started, visibleLines, typingIndex, showOutput]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onViewportEnter={startAnimation}
      className="section-container"
    >
      <div className="max-w-2xl mx-auto">
        <div className="terminal-window">
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-rose" />
            <div className="terminal-dot bg-amber" />
            <div className="terminal-dot bg-emerald" />
            <span className="text-xs ml-2" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
              aditya@portfolio ~ zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 space-y-3 min-h-[280px]">
            {/* Already completed lines */}
            {commands.slice(0, visibleLines).map((line, i) => (
              <div key={i}>
                <div className="flex items-center gap-2">
                  <span className="text-emerald text-xs">❯</span>
                  <span className="text-primary text-sm font-mono">{line.cmd}</span>
                </div>
                <div className="ml-5 text-sm font-mono" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
                  {line.output}
                </div>
              </div>
            ))}

            {/* Currently typing line */}
            {visibleLines < commands.length && (
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald text-xs">❯</span>
                  <span className="text-primary text-sm font-mono">
                    {currentTyped}
                    <span className="inline-block w-2 h-4 bg-primary/80 ml-0.5 animate-blink align-middle" />
                  </span>
                </div>
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="ml-5 text-sm font-mono"
                    style={{ color: "hsl(0 0% 100% / 0.7)" }}
                  >
                    {currentCommand?.output}
                  </motion.div>
                )}
              </div>
            )}

            {/* Completion message */}
            {visibleLines >= commands.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-2 border-t"
                style={{ borderColor: "hsl(0 0% 100% / 0.1)" }}
              >
                <span className="text-xs" style={{ color: "hsl(0 0% 100% / 0.3)" }}>
                  // Scroll down to learn more ↓
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveTerminal;
