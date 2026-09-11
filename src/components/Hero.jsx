import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Mail, Cpu, Globe, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';


export default function Hero({ onOpenContact, onOpenResume }) {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    'Web Development Enthusiast',
    'AI & Computer Vision Innovator',
    'CSE Student @ Velammal Tech',
    'Full-Stack Developer Intern',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="gradient-text">Gethies B</span>
            </h1>

            {/* Dynamic Role Subheading */}
            <div className="h-10 flex items-center text-xl sm:text-2xl font-medium text-slate-300">
              <span className="text-cyan-400 font-mono mr-2">&gt;</span>
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-cyan-200 font-semibold"
              >
                {titles[textIndex]}
              </motion.span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Third-year Computer Science & Engineering student at{' '}
              <span className="text-cyan-300 font-medium">Velammal Institute of Technology</span> (Anna University). 
              Driven by a deep passion for building intelligent web applications, AI computer vision systems, and seamless full-stack solutions.
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-medium text-slate-200">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> React / Vite / Tailwind
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-medium text-slate-200">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Python / JavaScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 text-xs font-medium text-slate-200">
                <Award className="w-3.5 h-3.5 text-emerald-400" /> Anna Univ CGPA: 8.30
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/40 text-slate-200 hover:text-white font-semibold transition-all hover:border-cyan-400 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 border border-white/10 text-slate-400 hover:text-slate-200 font-medium text-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Connect:</span>
              <a
                href="https://github.com/gethies"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gethies-b-gethies-842543331/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:gathies006x@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:scale-110 transition-all"
                title="Email Gethies B"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right 3D Visual Profile Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Profile Card */}
              <div className="relative bg-[#0f172a] border border-cyan-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-square border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <img
                    src="/profile.jpg"
                    alt="Gethies B Profile"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback avatar if needed
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Cyber Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Gethies B</h4>
                      <p className="text-xs text-cyan-300">B.E. CSE (2024–2028)</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-bold tracking-wider uppercase border border-cyan-500/30">
                      Anna Univ
                    </span>
                  </div>
                </div>

                {/* Key Statistics Grid */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="block text-xl sm:text-2xl font-black text-cyan-400">8.30</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">CGPA</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="block text-xl sm:text-2xl font-black text-indigo-400">2</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Internships</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <span className="block text-xl sm:text-2xl font-black text-emerald-400">6+</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
