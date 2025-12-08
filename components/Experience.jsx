import React from 'react';
import { EXPERIENCE } from '../constants.js';
import Section from './Section.jsx';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey and career highlights.">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8 border-l-2 border-slate-200 pl-8 relative ml-4 md:ml-0">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative group">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 bg-cyan-500 group-hover:scale-125 transition-transform"></span>
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-cyan-500/30 transition-all shadow-sm hover:shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    {job.role}
                  </h4>
                  <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-2 py-1 rounded flex items-center gap-1 w-fit mt-2 md:mt-0">
                    <Calendar size={12} /> {job.period}
                  </span>
                </div>
                <h5 className="text-cyan-600 font-medium mb-4 flex items-center gap-2">
                   <Briefcase size={14} /> {job.company}
                </h5>
                <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;