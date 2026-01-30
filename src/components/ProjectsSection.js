import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    yellow: 'from-yellow-500 to-orange-500',
    purple: 'from-purple-500 to-pink-500',
    indigo: 'from-indigo-500 to-blue-500',
    green: 'from-green-500 to-teal-500',
    violet: 'from-violet-500 to-purple-500'
  };

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cloud Infrastructure Projects
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            
            return (
              <div 
                key={i}
                className="glass-card-strong rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all group cursor-pointer hover:scale-[1.02]"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorMap[project.color]} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-bold text-xl mb-3 leading-tight">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-lg glass-card text-xs border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/btn text-sm font-semibold">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;