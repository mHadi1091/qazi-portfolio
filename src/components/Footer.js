import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Qazi - AWS Certified Cloud Architect
          </p>
          <p className="text-gray-500 text-sm">
            Built with React, Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;