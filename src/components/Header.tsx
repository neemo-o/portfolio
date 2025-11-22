import { Link, useLocation } from "react-router-dom";

const base = import.meta.env.BASE_URL
const home = base + "/"
const projects = base + "/projects"
export const Header: React.FC = () => {
  const loc = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8 flex justify-center items-center mix-blend-difference text-white">
      <nav className="flex gap-8 text-sm font-mono tracking-wider italic">
        <Link to={home}className={`${loc.pathname === home ? 'text-white font-bold' : 'text-neutral-400'} hover:text-white transition-colors`}
        >
          Home
        </Link>

         <Link to={projects} className={`${loc.pathname === projects ? 'text-white font-bold' : 'text-neutral-400'} hover:text-white transition-colors`}
        >
          Projetos
        </Link>

      </nav>
    </header>
  );
};
