import React from 'react';
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-green-500/30">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300 font-medium">Get In Touch</span>
            </div> */}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a cloud infrastructure project in mind? Let's discuss how we can work together.
          </p>
        </div>

        <div className="glass-card-strong rounded-2xl p-8 md:p-12 border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all text-white placeholder-gray-500"
                placeholder="Cloud infrastructure project"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-lg glass-card border border-white/10 focus:border-cyan-500/50 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Tell me about your cloud project requirements..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-cyan-500/25"
            >
              Send Message
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-6">
            {[
              { icon: Mail, href: 'mailto:qazi@example.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/faisal-israr-qazi-666a46207/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/fqazi-gencloud', label: 'GitHub' }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card p-4 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;