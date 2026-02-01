import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants.js';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center relative z-10">
        <div className="space-y-8 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full border border-cyan-600/20 bg-cyan-50 text-cyan-700 text-sm font-semibold tracking-wide">
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
               Sounak
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            Performance Marketing | Growth & Marketing Analytics <br/>
            <span className="text-slate-500 text-lg">Product & Business Strategy</span>
          </p>
          
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Combining performance marketing, analytics, and UI/UX to create conversion-focused digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="https://drive.google.com/drive/folders/1S27CPOPmdDZP3GCT-0Gns2mmaM4vBAQm?usp=sharing"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-cyan-600/20"
            >
              View Resume <ArrowRight size={18} />
            </a>
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-300 hover:border-slate-500 text-slate-600 hover:text-slate-900 rounded-lg transition-all flex items-center gap-2 bg-white/50"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;