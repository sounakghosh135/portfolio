import React from 'react';
import Section from './Section.jsx';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants.js';

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Open for internships and full-time opportunities.">
      <div className="grid md:grid-cols-5 gap-12 bg-gradient-to-br from-white to-slate-100 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
        
        {/* Contact Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's Connect</h3>
            <p className="text-slate-600">
              Have a project in mind or looking for a performance marketer with design chops? I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-slate-700 hover:text-cyan-600 transition-colors p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-500/30 shadow-sm">
              <div className="bg-indigo-50 p-3 rounded-full text-indigo-600">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold">Email</span>
                <span className="font-medium break-all">{CONTACT_INFO.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-slate-700 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="bg-cyan-50 p-3 rounded-full text-cyan-600">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold">Phone</span>
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="bg-purple-50 p-3 rounded-full text-purple-600">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold">Location</span>
                <span className="font-medium">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
          
          <a 
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-lg font-bold transition-colors shadow-sm"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Form Visual (Non-functional for demo) */}
        <div className="md:col-span-3">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! This is a demo form."); }}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600">Name</label>
                        <input type="text" className="w-full bg-white border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg p-3 text-slate-900 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600">Email</label>
                        <input type="email" className="w-full bg-white border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg p-3 text-slate-900 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Subject</label>
                    <input type="text" className="w-full bg-white border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg p-3 text-slate-900 outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Message</label>
                    <textarea rows={5} className="w-full bg-white border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg p-3 text-slate-900 outline-none transition-all" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-4 rounded-lg flex justify-center items-center gap-2 transition-all shadow-lg shadow-indigo-600/20">
                    Send Message <Send size={18} />
                </button>
            </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;