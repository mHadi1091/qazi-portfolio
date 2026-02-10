import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Qazi Faisal - DevOps/SRE Engineer
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Developed by</span>
            <a 
              href="https://github.com/mHadi1091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>mHadi1091</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;