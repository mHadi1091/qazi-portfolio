import React from 'react';
import {  Menu, X, CloudCog } from 'lucide-react';

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5">
      <div className="glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-3 py-2 bg-slate-900 rounded-lg border border-cyan-500/30">
                  <CloudCog className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Qazi <span className="text-white"> Faisal</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Certifications', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a 
                href="#contact"
                className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all font-medium text-sm shadow-lg shadow-cyan-500/20"
              >
                Hire Me
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/5">
          <div className="px-6 py-4 space-y-3">
            {['Home', 'About', 'Certifications', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;