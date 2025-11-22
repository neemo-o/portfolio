import { useState, useEffect } from "react";
import { PROJECTS } from "../constants.ts";
import { Search } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard.tsx";
import { motion, AnimatePresence } from "framer-motion";
import bk from "../assets/background.jpg";


function Projects() {
  const [time, setTime] = useState("");
  const [test, setTest] = useState<number>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const updateTest = () => {
      setTest(Math.floor(Date.now() / 1000));
    };
    const testInterval = setInterval(updateTest, 1000);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(testInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const filtered = PROJECTS.filter((p) =>
    [p.title, p.excerpt, p.category]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-32 px-6 md:px-12 lg:px-24 pb-12"
    >

      <div className="absolute inset-0 z-0">
          <img
            src={bk}
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]" />
      </div>

      <motion.div className="flex flex-col items-center mb-8">
        <div className="flex gap-4 text-neutral-300 font-mono">
          <span>Alagoinhas</span>
          <span>|</span>
          <span>{time}</span>
        </div>
        <span className="text-neutral-400">{test}</span>
      </motion.div>

      <motion.div className="max-w-xl mx-auto mb-16">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Pesquise"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pr-10 px-4 py-2 rounded-md border border-white/30 bg-transparent text-neutral-200"
          />
          <Search className="absolute right-4 w-4 h-4 text-neutral-500" />
        </div>
      </motion.div>

      <AnimatePresence mode="popLayout">
  <motion.div
    key={query}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
        },
      },
    }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {filtered.map((project) => (
      <motion.div
        key={project.id}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ProjectCard project={project} />
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>
    </motion.main>
  );
}

export default Projects;
