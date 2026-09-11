import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Sparkles, Check, Copy, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gathies006x@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="relative z-10 pt-24 pb-12 border-t border-white/10 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Information Cards Grid */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Open to <span className="gradient-text">Internship Opportunities</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            I'm currently seeking internship roles in web development, software engineering, or related fields. 
            Feel free to reach out directly through any of the channels below!
          </p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Phone Card */}
            <a
              href="tel:+919043267322"
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Phone / WhatsApp</span>
                <span className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  +91 90432 67322
                </span>
              </div>
            </a>

            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 hover:border-indigo-500/50 transition-all group flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Email Address</span>
                <a
                  href="mailto:gathies006x@gmail.com"
                  className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors truncate block"
                >
                  gathies006x@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/gethies-b-gethies-842543331/"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-cyan-400/50 transition-all group flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Official LinkedIn</span>
                <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  linkedin.com/in/gethies-b
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/gethies"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl glass-card border border-white/10 hover:border-slate-400/50 transition-all group flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">GitHub Repository</span>
                <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  github.com/gethies
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-card border border-white/10 sm:col-span-2 lg:col-span-2 flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-medium">Institution & Location</span>
                <span className="text-base font-bold text-white">
                  Velammal Institute of Technology, Anna University · Chennai, Tamil Nadu
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
