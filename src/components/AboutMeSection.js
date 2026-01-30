import React from 'react';
import { User, MapPin, Calendar, Coffee } from 'lucide-react';

const AboutMeSection = () => {
  return (
    <section id="about-me" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/30">
            <User className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get to Know Me
            </span>
          </h2>
        </div>

        <div className="glass-card-strong rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - Personal Info */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Location</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-lg border border-white/10">
                  <Coffee className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Coffee Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="space-y-6">
              <div className="text-center glass-card p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center glass-card p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-sm text-gray-400">AWS Certifications</div>
              </div>
              <div className="text-center glass-card p-6 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;