import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Award, CheckCircle2, User, Sparkles } from 'lucide-react';

export default function AboutEducation() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me & <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Engineering student dedicated to mastering computer science principles, web engineering, and AI vision systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card p-8 rounded-3xl flex flex-col justify-between border border-cyan-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                I'm <strong className="text-white">Gethies B</strong>, a third-year Computer Science & Engineering student at{' '}
                <span className="text-cyan-300 font-semibold">Velammal Institute of Technology</span>, affiliated with Anna University. 
                I hold a passionate drive for modern web development, intelligent software systems, and artificial intelligence applications.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                My goal is to solve real-world problems through clean code, user-centric interfaces, and machine learning models like YOLO and Computer Vision.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Problem Solver</h5>
                    <p className="text-xs text-slate-400">Analytical & Structured</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Team Collaborator</h5>
                    <p className="text-xs text-slate-400">Adaptable & Driven</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Institution</span>
              <span className="text-sm font-bold text-cyan-300">Velammal Institute of Tech</span>
            </div>
          </motion.div>

          {/* Education Timeline Cards */}
          <motion.div
            id="education"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* College Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/20 relative overflow-hidden group hover:border-indigo-400/50 transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      Velammal Institute of Technology
                    </h4>
                    <p className="text-sm text-indigo-300 font-medium">Anna University Affiliated</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                  2024 – 2028
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300 font-medium">B.E. Computer Science & Engineering</span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    CGPA: 8.30
                  </span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-2 rounded-full w-[83%]" />
                </div>
                <p className="text-xs text-slate-400">
                  Focusing on Core Data Structures, Web Technologies, Database Systems & AI/Machine Learning.
                </p>
              </div>
            </div>

            {/* School Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden group hover:border-cyan-400/50 transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      RPC Higher Secondary School
                    </h4>
                    <p className="text-sm text-slate-400 font-medium">State Board Schooling</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                  Secondary Education
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                  <span className="text-xs text-slate-400 block font-medium">12th Standard</span>
                  <span className="text-lg font-bold text-cyan-300">80%</span>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                    <div className="bg-cyan-400 h-1.5 rounded-full w-[80%]" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10">
                  <span className="text-xs text-slate-400 block font-medium">10th Standard</span>
                  <span className="text-lg font-bold text-cyan-300">76%</span>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                    <div className="bg-cyan-400 h-1.5 rounded-full w-[76%]" />
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
