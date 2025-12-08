import React from 'react';

const Section = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 scroll-mt-24 max-w-[1440px] mx-auto ${className}`}>
      <div>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 inline-block mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 bg-indigo-500/30 mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;