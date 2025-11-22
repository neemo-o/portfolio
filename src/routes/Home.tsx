import React, { useState, useEffect } from "react";
import bk from "../assets/background.jpg";

export const Home: React.FC = () => {
  const [time, setTime] = useState<string>("9:14");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={bk}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]" />
        </div>

        {/* Content */}
        <div className={`z-10 flex flex-col items-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <div className="flex flex-col items-center gap-2 mb-4 text-xs font-mono text-neutral-300 tracking-widest uppercsase">
                <div className="flex gap-4">
                <span>Alagoinhas</span>
                <span>|</span>
                <span>{time}</span>
                </div>
                <span className="">{Math.floor(Date.now() / 1000)}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-semibold text-white tracking-tight mb-1 drop-shadow-2xl">
                Neemias<br />Vasconcelos
            </h1>

            <div className="mt-8 px-6 py-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-mono text-neutral-300 italic">Desenvolvedor Full-Stack</span>
            </div>

            <div className="mt-14 max-w-md text-neutral-300 font-mono text-xs md:text-sm leading-relaxed px-6">
                <p>Olá</p>
                <p className="mt-4">Sou um desenvolvedor full-stack</p>
            </div>

            
            <div className="mt-10 z-10 flex flex-col gap-2 items-center text-xs font-mono text-neutral-300">
                
                <div className="flex gap-4 ">
                    <a href="https://github.com/neemo-o" className="hover:text-white" target="_blank">GitHub</a>
                    <span>-</span>
                    <a href="https://github.com/neemo-o" className="hover:text-white" target="_blank">Instagram</a>
                    <span>-</span>
                    <a href="https://github.com/neemo-o" className="hover:text-white" target="_blank">Linkedin</a>
                </div>
                <a href="mailto:neemiasvascon.dev@gmail.com" className="hover:text-white transition-colors">neemiasvascon.dev@gmail.com</a>
            </div>
        </div>
      </section>
  );
};
