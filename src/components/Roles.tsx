import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Roles() {
  const roles = ["Desenvolvedor back-end", "Desenvolvedor front-end", "Desenvolvedor de jogos", "Engenheiro de Software"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % roles.length);
    }, 2500); // muda a cada 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 px-6 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center gap-3">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.35 }}
          className="text-sm font-mono text-neutral-300 italic"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
