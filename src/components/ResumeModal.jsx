import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Printer, X, Check, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel w-full max-w-4xl rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl overflow-y-auto max-h-[90vh] text-left"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                CURRICULUM VITAE PREVIEW
              </span>
              <h3 className="text-2xl font-bold text-white">Gethies B — Professional Resume</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Container */}
          <div className="bg-[#0b0f19] p-6 sm:p-8 rounded-2xl border border-white/10 text-slate-200 space-y-6">
            {/* Top Contact Header */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-3xl font-extrabold text-white">Gethies B</h1>
              <p className="text-cyan-400 font-medium text-sm mt-1">
                Third-Year B.E. Computer Science & Engineering Student @ Velammal Institute of Technology (Anna University)
              </p>
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
                <span>📍 Chennai, Tamil Nadu</span>
                <span>📞 +91 90432 67322</span>
                <span>✉️ gathies006x@gmail.com</span>
                <span>🌐 github.com/gethies</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                <Code className="w-4 h-4" /> Executive Summary
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Motivated Computer Science student specializing in web engineering, full-stack JavaScript architectures, and computer vision AI models. 
                Proven hands-on experience through Full-Stack Development (IndiWebPros) and Cyber Security (Thiranex) internships. Certified in 7+ technical domains seeking impactful software engineering roles.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h5 className="font-bold text-white">Velammal Institute of Technology (Anna University)</h5>
                    <p className="text-slate-400">B.E. Computer Science & Engineering</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400">CGPA: 8.30</span>
                    <p className="text-slate-400 text-xs">2024 – 2028</p>
                  </div>
                </div>

                <div className="flex justify-between items-start text-xs sm:text-sm pt-2 border-t border-white/5">
                  <div>
                    <h5 className="font-bold text-white">RPC Higher Secondary School</h5>
                    <p className="text-slate-400">12th Standard: 80% · 10th Standard: 76%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Code className="w-4 h-4" /> Key Projects
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <h5 className="font-bold text-white">01. AI-Based Accident Detection System</h5>
                  <p className="text-slate-300 mt-1">
                    Python, YOLO, OpenCV, Computer Vision · Automated real-time video/image accident recognition triggering automated emergency alerts.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-white">02. AI Resume Analyzer</h5>
                  <p className="text-slate-300 mt-1">
                    HTML, CSS, JavaScript · Web ATS resume scanning application delivering candidate score evaluation and feedback.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Internships
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li><strong className="text-white">Full Stack Developer Intern</strong> — IndiWebPros</li>
                  <li><strong className="text-white">Cyber Security Intern</strong> — Thiranex</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Verified Credentials (7)
                </h4>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Full Stack Web Development (IndiWebPros)</li>
                  <li>Cyber Security (Thiranex)</li>
                  <li>Cloud Computing (NPTEL)</li>
                  <li>Python Fundamentals (Infosys Springboard)</li>
                  <li>Software Engineering & Agile (Infosys)</li>
                  <li>React & Node.js Architecture (Workshop)</li>
                  <li>AI & Computer Vision Masterclass (Symposium)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm cursor-pointer hover:opacity-90"
            >
              Close Resume
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
