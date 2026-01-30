import React from 'react';
import { Cpu, Terminal, Settings } from 'lucide-react';
import { skills } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cloud Infrastructure Expert
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Card */}
          <div className="glass-card-strong rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { period: '2022 - Present', title: 'Senior Cloud Architect', desc: 'Leading enterprise cloud migration strategies', color: 'cyan' },
                { period: '2020 - 2022', title: 'DevOps Engineer', desc: 'Implemented automated CI/CD pipelines', color: 'blue' },
                { period: '2018 - 2020', title: 'Cloud Engineer', desc: 'Built and maintained AWS infrastructure', color: 'purple' }
              ].map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-white/10 hover:border-cyan-500/50 transition-colors group">
                  <div className={`absolute left-0 top-2 w-2 h-2 -translate-x-[5px] bg-${exp.color}-500 rounded-full group-hover:scale-150 transition-transform`} />
                  <p className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                    <span>{exp.period}</span>
                  </p>
                  <p className="font-bold text-lg mb-1 text-white">{exp.title}</p>
                  <p className="text-gray-400">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Card */}
          <div className="glass-card-strong rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-500/30">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {skills.map((skill, i) => (
                <div 
                  key={skill.name}
                  className="glass-card p-3 rounded-lg border border-white/10 hover:border-cyan-500/40 transition-all text-center group hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-2">
                    <skill.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-gray-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;