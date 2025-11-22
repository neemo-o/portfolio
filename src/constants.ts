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

import iImage from "./assets/i1.png";
import iImage2 from "./assets/i2.png";
import iImage3 from "./assets/i3.png";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "InsecTD - Tower Defense",
    category: "Desenvolvimento / Jogos",
    date: "25/09/2025",
    excerpt:
      "Game de estratégia onde o objetivo é defender sua casa de ondas de insetos invasores. Feito em dupla com meu amigo Ramon",
    coverImage: iImage,
    images: [iImage2, iImage3],
    techStack: ["Java 8+", "Java Swing", "Maven", "OOP"], // Adicionei Maven e OOP que são relevantes
    description: `
  <div class="space-y-6 text-gray-300">
    <p class="text-base leading-relaxed">
      <strong class="text-white">InsecTD</strong> é um jogo de estratégia do gênero <em>Tower Defense</em> desenvolvido inteiramente em <strong class="text-white">Java</strong>. O projeto aplica conceitos avançados de Programação Orientada a Objetos para criar um sistema de combate em tempo real, onde o jogador deve gerenciar recursos e posicionar defesas estratégicas.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
        <h4 class="font-bold text-white mb-2 flex items-center gap-2">
          🏰 Sistema de Defesa
        </h4>
        <ul class="text-sm space-y-1">
          <li><strong class="text-gray-200">Badogada:</strong> Torre de ataque básico.</li>
          <li><strong class="text-gray-200">Chinelada:</strong> Dano em área versátil.</li>
          <li><strong class="text-gray-200">Eletrupicada:</strong> Alta velocidade de disparo.</li>
        </ul>
      </div>

      <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
        <h4 class="font-bold text-white mb-2 flex items-center gap-2">
          🐜 Inimigos & IA
        </h4>
        <ul class="text-sm space-y-1">
          <li>4 classes de inimigos com atributos únicos.</li>
          <li>Sistema de 10 ondas com dificuldade progressiva.</li>
          <li>Pathfinding automático até a base.</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-800 pt-4">
      <h3 class="text-lg font-bold text-white mb-3">🛠️ Engenharia de Software</h3>
      <ul class="list-disc list-inside space-y-2 text-sm">
        <li>Uso extensivo de <strong class="text-gray-200">Polimorfismo</strong> para abstração de entidades.</li>
        <li>Renderização gráfica customizada utilizando <code class="bg-gray-900 px-2 py-0.5 rounded text-gray-200">Graphics2D</code>.</li>
        <li>Sistema de colisão e cálculo de alcance (Range) em tempo real.</li>
        <li>Gerenciamento de estado de jogo e economia interna.</li>
      </ul>
    </div>
  </div>
`,
    link: "https://github.com/neemo-o/insecTD",
  },
];
