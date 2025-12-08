import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <NavBar />
      <main>
        <Hero />
        <div className="bg-slate-50 relative">
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-slate-50">
        <p>&copy; {new Date().getFullYear()} Sounak Kumar Ghosh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;