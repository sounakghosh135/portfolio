import React from 'react';
import { PROJECTS } from '../constants.js';
import Section from './Section.jsx';
import { ExternalLink, Layers } from 'lucide-react';

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A collection of my work in UI/UX Design and Web Strategy.">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-cyan-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200 shadow-sm">
                  {project.category}
               </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>
              
              <ul className="space-y-2 mb-6">
                {project.description.map((line, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        {line}
                    </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                 {project.techStack.map(tech => (
                     <span key={tech} className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                         {tech}
                     </span>
                 ))}
              </div>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-500 border-b border-transparent hover:border-cyan-600 transition-all pb-0.5"
                >
                  {project.linkText || 'View Project'} <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;