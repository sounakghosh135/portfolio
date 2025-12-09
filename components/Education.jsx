import React from 'react';
import { EDUCATION, VOLUNTEERING } from '../constants.js';
import Section from './Section.jsx';
import { Award, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <Section id="education" title="Education & Community" subtitle="My academic background and volunteering contributions.">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-600" /> Education
            </h3>
            <div className="space-y-4">
          {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 text-lg">{edu.degree}</h4>
                                <p className="text-slate-600 text-xs mt-1">{edu.institution}</p>
                            </div>
                            <div className="sm:text-right">
                                <span className="block text-cyan-600 font-medium text-lg">{edu.year}</span>
                                {edu.score && <span className="text-xs text-slate-500 font-mono mt-1 block">Score: {edu.score}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Volunteering Column */}
        <div>
             <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Award className="text-cyan-600" /> Volunteering
            </h3>
            <div className="grid gap-4">
                {VOLUNTEERING.map((vol, idx) => (
                    <div key={idx} className="p-5 rounded-lg border border-slate-200 bg-white hover:border-indigo-500/30 transition-colors group shadow-sm">
                         <div className="flex justify-between items-start mb-2">
                             <h4 className="font-bold text-indigo-600 text-sm group-hover:text-indigo-700 transition-colors">{vol.role}</h4>
                         </div>
                         <h5 className="text-slate-700 font-medium text-xs uppercase tracking-wide mb-2">{vol.organization}</h5>
                         <p className="text-slate-600 text-sm leading-relaxed">{vol.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;