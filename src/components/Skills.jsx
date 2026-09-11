import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Wrench, Users, Search, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Languages');
  const [searchQuery, setSearchQuery] = useState('');

  const skillsData = [
    // Programming Languages
    { name: 'Python', category: 'Languages', level: 'Advanced', icon: Code, color: 'from-blue-500 to-cyan-400', exp: '85%' },
    { name: 'JavaScript', category: 'Languages', level: 'Intermediate', icon: Code, color: 'from-yellow-400 to-amber-500', exp: '80%' },
    { name: 'HTML5', category: 'Languages', level: 'Advanced', icon: Code, color: 'from-orange-500 to-red-500', exp: '90%' },
    { name: 'CSS3', category: 'Languages', level: 'Advanced', icon: Code, color: 'from-blue-400 to-indigo-500', exp: '85%' },
    
    // Web Tech
    { name: 'React', category: 'Web Tech', level: 'Intermediate', icon: Globe, color: 'from-cyan-400 to-blue-500', exp: '80%' },
    { name: 'Vite', category: 'Web Tech', level: 'Intermediate', icon: Globe, color: 'from-purple-500 to-indigo-500', exp: '85%' },
    { name: 'Tailwind CSS', category: 'Web Tech', level: 'Intermediate', icon: Globe, color: 'from-teal-400 to-cyan-500', exp: '85%' },
    
    // Tools & Platform
    { name: 'GitHub', category: 'Tools', level: 'Proficient', icon: Wrench, color: 'from-slate-400 to-slate-200', exp: '85%' },
    { name: 'VS Code', category: 'Tools', level: 'Proficient', icon: Wrench, color: 'from-sky-500 to-blue-600', exp: '90%' },

    // Soft Skills
    { name: 'Problem Solving', category: 'Soft Skills', level: 'Core', icon: Users, color: 'from-pink-500 to-rose-500', exp: '90%' },
    { name: 'Team Collaboration', category: 'Soft Skills', level: 'Core', icon: Users, color: 'from-violet-500 to-purple-500', exp: '90%' },
    { name: 'Adaptability', category: 'Soft Skills', level: 'Core', icon: Users, color: 'from-cyan-400 to-teal-400', exp: '85%' },
    { name: 'Attention to Detail', category: 'Soft Skills', level: 'Core', icon: Users, color: 'from-amber-400 to-emerald-400', exp: '90%' },
  ];

  const categories = ['Languages', 'Web Tech', 'Tools', 'Soft Skills'];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCat = skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#080b11]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Categorized technical competencies, web development tools, and core professional soft skills.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="glass-card p-5 rounded-2xl border border-white/10 group hover:border-cyan-500/40 relative overflow-hidden text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 shadow-md`}>
                        <div className="w-full h-full bg-[#0d121f] rounded-[10px] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-slate-400 font-medium">{skill.category}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-cyan-300 uppercase">
                      {skill.level}
                    </span>
                  </div>

                  {/* Level meter */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>Proficiency</span>
                      <span className="text-cyan-400 font-mono font-bold">{skill.exp}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-1.5 rounded-full transition-all duration-1000`}
                        style={{ width: skill.exp }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
