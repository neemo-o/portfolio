import React, { useState, useEffect } from "react";
import bk from "../assets/background.jpg";
import Roles from "../components/Roles";

export const Home: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [test, setTest] = useState<number>();

  useEffect(() => {
    setMounted(true);
    const updateTest = () => {
      setTest(Math.floor(Date.now() / 1000));
    };
    const interval1 = setInterval(updateTest, 1000);
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    }
  }, []);

  return (
    <main>
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={bk}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]" />
        </div>

        {/* Content */}
        <div
          className={`z-10 flex flex-col items-center transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center gap-2 mb-4 mt-8 text-xs font-mono text-neutral-300 tracking-widest uppercsase">
            <div className="flex gap-4">
              <span>Alagoinhas</span>
              <span>|</span>
              <span>{time}</span>
            </div>
            <span className="">{test}</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-7xl font-semibold text-white tracking-tight mb-1 drop-shadow-2xl">
            Neemias
            <br />
            Vasconcelos
          </h1>

          <Roles />

          <div className="mt-14 max-w-md text-neutral-300 font-mono text-xs md:text-sm leading-relaxed px-6">
            <p>Bem-vindo!</p>
            <p className="mt-4">
              Construo sistemas completos com foco em performance e clareza.
            </p>
          </div>

          <div className="mt-10 z-10 flex flex-col gap-2 items-center text-xs font-mono text-neutral-300">
            <div className="flex gap-4 ">
              <a
                href="https://github.com/neemo-o"
                className="hover:text-white"
                target="_blank"
              >
                GitHub
              </a>
              <span>-</span>
              <a
                href="https://www.instagram.com/neemias.melo/"
                className="hover:text-white"
                target="_blank"
              >
                Instagram
              </a>
              <span>-</span>
              <a
                href="https://www.linkedin.com/in/neeemias/"
                className="hover:text-white"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
            <a
              href="mailto:neemiasvascon.dev@gmail.com"
              className="hover:text-white transition-colors"
            >
              neemiasvascon.dev@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
