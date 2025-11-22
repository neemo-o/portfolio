import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants.ts"; // ajuste o caminho

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-32 px-6 text-center text-neutral-400">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <article className="animate-fade-in min-h-screen bg-[#050505] pt-32 px-6 md:px-12 lg:px-24 pb-24">
      <button
        onClick={() => navigate(-1)}
        className="group flex items-center gap-3 text-neutral-500 hover:text-white transition-colors mb-16 font-mono text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Voltar
      </button>

      <header className="max-w-5xl mx-auto mb-24">
        <div className="flex flex-col gap-4 mb-8">
          <span className="font-mono text-emerald-500 text-xs uppercase tracking-widest">
            {project.category}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-[1.1]">
            {project.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-6 py-6 border-y border-white/10 font-mono text-xs text-neutral-400">
          <div className="flex gap-2">
            <span className="text-neutral-600">Data:</span>
            <span>{project.date}</span>
          </div>

          <div className="flex gap-2">
            <span className="text-neutral-600">Stack:</span>
            <span>{project.techStack.join(", ")}</span>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ml-auto flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
            >
              Live Project <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto mb-24">
        <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-12 text-neutral-300 font-light leading-loose text-lg">
        <div
          className="[&>p]:mb-6 [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-normal [&>h3]:mt-12 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </div>

      {project.images.length > 0 && (
        <div className="max-w-6xl mx-auto mt-32 space-y-12">
          {project.images.map((img, index) => (
            <div key={index} className="bg-neutral-900 border border-white/5 p-2">
              <img
                src={img}
                alt={`Project detail ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
