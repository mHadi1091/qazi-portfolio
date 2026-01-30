import React from 'react';
import { User, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { awards } from '../data/portfolioData';

const AboutMeSection = () => {
  const colorMap = {
    gold: 'from-yellow-500 to-orange-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500'
  };

  return (
    <section id="about-me" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/30">
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DevOps/SRE Engineer
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left - Personal Info */}
          <div className="glass-card-strong rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced DevOps/SRE Engineer with 3+ years of expertise in multi-cloud environments including AWS, Azure, GCP, RUNPOD, and Alibaba Cloud. Specialized in container orchestration, infrastructure automation, and CI/CD pipeline implementation.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Passionate about building scalable, reliable systems and mentoring junior engineers. Proven track record of implementing monitoring solutions, automating deployments, and maintaining high-availability infrastructure across diverse cloud platforms.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Mentoring 2 Junior DevOps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            <div className="text-center glass-card-strong p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Cloud Platforms</div>
            </div>
            <div className="text-center glass-card-strong p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-sm text-gray-400">Professional Certifications</div>
            </div>
            <div className="text-center glass-card-strong p-6 rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">97%</div>
              <div className="text-sm text-gray-400">Exam Success Rate</div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="space-y-8 mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h3>
            <p className="text-gray-400">Achievements and excellence in DevOps engineering</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, i) => {
              const Icon = award.icon;
              return (
                <div 
                  key={i}
                  className="glass-card-strong rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all text-center group cursor-pointer hover:scale-105"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${colorMap[award.color]} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="font-bold text-lg mb-2 leading-tight text-white">{award.title}</h4>
                  <p className="text-sm text-cyan-400 font-medium">{award.company}</p>
                  {award.location && (
                    <p className="text-xs text-gray-400 mt-1">{award.location}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;