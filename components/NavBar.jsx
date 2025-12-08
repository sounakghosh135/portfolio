import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_ITEMS } from '../constants.js';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use solid background if scrolled OR if mobile menu is open
  const navBackgroundClass = scrolled || isOpen
    ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/50 py-3' 
    : 'bg-transparent py-5';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <Hexagon className="w-8 h-8 text-cyan-600 group-hover:rotate-180 transition-transform duration-500" strokeWidth={2} />
          <span className="font-bold text-xl tracking-tight text-slate-900">SOUNAK<span className="text-cyan-600">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-600 hover:text-cyan-600 font-medium text-sm uppercase tracking-wider transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600 hover:text-slate-900 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 md:hidden flex flex-col items-center py-6 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="py-3 text-slate-600 hover:text-cyan-600 font-medium w-full text-center hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;