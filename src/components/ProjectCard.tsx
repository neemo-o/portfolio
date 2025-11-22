import { Link } from "react-router-dom";
import React from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  description: string; // Full HTML or Markdown-like content
  coverImage: string;
  images: string[];
  techStack: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group cursor-pointer relative w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300 flex flex-col justify-between min-h-[200px]"
    >
      <div>
        <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-400 font-mono text-xs leading-relaxed mb-6">
          {project.excerpt}
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-auto">
        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">
          Categoria: {project.category}
        </span>
        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">
          Data de publicação: {project.date}
        </span>
      </div>
    </Link>
  );
};
