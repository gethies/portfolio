import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, FileText, Check, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'accident-detection',
      number: '01',
      title: 'AI-Based Accident Detection System',
      tagline: 'Automated video & image vehicle accident detection using deep learning',
      description:
        'Developed an AI-powered accident detection system using Python and YOLO to identify road accidents from video/image inputs. The system improves emergency response times by detecting collisions automatically and triggering instant real-time alerts.',
      tech: ['Python', 'YOLO', 'Computer Vision', 'AI/ML'],
      category: 'Artificial Intelligence & Vision',
      highlights: [
        'Real-time video feed analysis using YOLO object detection',
        'Automatic emergency dispatch alert trigger simulation',
        'Collision confidence scoring & vehicle detection tracking',
        'OpenCV frame processing and timestamp emergency logging',
      ],
      icon: Cpu,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'resume-analyzer',
      number: '02',
      title: 'AI Resume Analyzer',
      tagline: 'Web application evaluating candidate resume content & ATS compatibility',
      description:
        'A web-based AI resume analyzer designed using HTML, CSS, and JavaScript that evaluates candidate resume content, calculates keyword compatibility scores, and provides structured feedback to strengthen job application profiles.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Full Stack & Web Engineering',
      highlights: [
        'Instant content scanning & keyword density evaluation',
        'Structured feedback generation for candidate profiles',
        'Clean, responsive dashboard UI built with pure web technologies',
        'Client-side fast parser with zero external server latency',
      ],
      icon: FileText,
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Software solutions and web engineering applications built by Gethies B.
          </p>
        </div>

        {/* Projects Cards Grid (Clean Professional Cards without Demo Popups/Buttons) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 rounded-3xl border border-white/10 group hover:border-cyan-500/40 flex flex-col justify-between relative overflow-hidden text-left"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl pointer-events-none group-hover:opacity-25 transition-opacity`} />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {project.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${project.gradient} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-[#0a0d14] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-medium text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
