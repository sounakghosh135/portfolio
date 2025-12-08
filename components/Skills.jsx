import React from 'react';
import { SKILL_CATEGORIES } from '../constants.js';
import Section from './Section.jsx';

const Skills = () => {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="A balanced mix of creative, analytical, and technical capabilities.">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.category} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-cyan-500/30 transition-colors shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;