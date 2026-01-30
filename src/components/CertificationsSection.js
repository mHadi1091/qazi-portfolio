import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const CertificationsSection = () => {
  const colorMap = {
    orange: 'from-orange-500 to-red-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500'
  };

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-orange-500/30">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300 font-medium">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AWS Certified Professional
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            
            return (
              <div 
                key={i}
                className="glass-card-strong rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all text-center group cursor-pointer hover:scale-105 min-h-[280px] flex flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${colorMap[cert.color]} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="inline-block px-3 py-1 rounded-full glass-card text-xs font-medium mb-3 border border-white/10">
                    {cert.level}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 leading-tight min-h-[3.5rem] flex items-center">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">Certified {cert.year}</p>
                </div>
                
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;