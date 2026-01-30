import React from 'react';
import { Sparkles, ChevronRight, Download, Cloud, Server, Container, FileCode, Terminal } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">Multi-Cloud Certified Professional</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Qazi Faisal
                  </span>
                  <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-400/30 to-blue-400/30" />
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                DevOps/SRE Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Specialized in multi-cloud infrastructure automation, container orchestration, and CI/CD pipelines. 
              Expert in AWS, Azure, GCP, and modern DevOps practices with 3+ years of experience.
            </p>

            {/* Cloud Service Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Cloud, text: 'AWS', color: 'orange' },
                { icon: Cloud, text: 'Azure', color: 'blue' },
                { icon: Cloud, text: 'GCP', color: 'green' },
                { icon: Container, text: 'Docker', color: 'cyan' },
                { icon: FileCode, text: 'Terraform', color: 'purple' }
              ].map((service, i) => (
                <div 
                  key={service.text}
                  className="group glass-card px-4 py-2 rounded-lg border border-white/10 hover:border-cyan-500/40 transition-all hover:scale-105"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <service.icon className={`w-4 h-4 text-${service.color}-400 group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-300">{service.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all font-medium shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card border border-white/20 hover:border-cyan-500/40 transition-all font-medium backdrop-blur-xl hover:bg-white/10"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 animate-fade-in-delayed">
            <div className="relative">
              {/* Glassmorphic Card */}
              <div className="glass-card-strong rounded-2xl p-4 border border-white/20">
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
                  {/* Image placeholder - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-center space-y-6 p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                        <span className="text-5xl font-bold text-white">Q</span>
                      </div>
                      <div className="space-y-3">
                        <p className="text-gray-400 text-sm font-medium">Replace this div with your image:</p>
                        <div className="glass-card p-4 rounded-lg">
                          <code className="text-xs text-cyan-400 block">
                            {'<img'}
                          </code>
                          <code className="text-xs text-cyan-400 block">
                            {'  src="/qazi.jpg"'}
                          </code>
                          <code className="text-xs text-cyan-400 block">
                            {'  alt="Qazi"'}
                          </code>
                          <code className="text-xs text-cyan-400 block">
                            {'  className="w-full h-full object-cover"'}
                          </code>
                          <code className="text-xs text-cyan-400 block">
                            {'/>'}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                 {/* Floating AWS Badge */}
                <div className="absolute -top-4 -right-4 z-10">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                    <div className="relative px-4 py-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl border-2 border-white/20 flex items-center gap-2 shadow-xl animate-bounce-slow">
                      <Cloud className="w-5 h-5 text-white" />
                      <span className="text-sm font-bold text-white">AWS</span>
                    </div>
                  </div>
                </div>


                {/* Status Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="glass-card-strong px-6 py-3 rounded-full border border-green-500/30 flex items-center gap-2 shadow-xl">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;