import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Trophy, ShieldCheck, Cloud, Code2, Users, CheckCircle2, Layers } from 'lucide-react';

export default function ExperienceCertifications() {
  const internships = [
    {
      role: 'Full Stack Developer Intern',
      company: 'IndiWebPros',
      period: 'Full Stack Web Engineering',
      description:
        'Engineered responsive web applications, created dynamic React component systems, integrated frontend layouts with REST APIs, and optimized client-side application performance.',
      icon: Code2,
      color: 'from-indigo-500 to-purple-600',
    },
    {
      role: 'Cyber Security Intern',
      company: 'Thiranex',
      period: 'Cyber Security & Network Defense',
      description:
        'Gained hands-on practical exposure in cybersecurity fundamentals, vulnerability assessment, threat mitigation, network protection principles, and secure coding practices.',
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const certifications = [
    {
      id: 'cert-01',
      title: 'Full Stack Web Development',
      issuer: 'IndiWebPros',
      category: 'Web Engineering & React',
      issueDate: '2024',
      credentialId: 'IWP-FS-89204',
      description: 'Comprehensive certification covering full-stack web application development, responsive design systems, state management, and modern API integration.',
      icon: Code2,
      badgeColor: 'border-indigo-500 text-indigo-400 bg-indigo-500/10',
    },
    {
      id: 'cert-02',
      title: 'Cyber Security Certification',
      issuer: 'Thiranex',
      category: 'Security & Threat Defense',
      issueDate: '2024',
      credentialId: 'THX-SEC-44102',
      description: 'Validated expertise in cybersecurity analysis, network protocol auditing, system vulnerability patching, and secure development standards.',
      icon: ShieldCheck,
      badgeColor: 'border-cyan-500 text-cyan-400 bg-cyan-500/10',
    },
    {
      id: 'cert-03',
      title: 'Cloud Computing',
      issuer: 'NPTEL (IIT Course)',
      category: 'Cloud Infrastructure',
      issueDate: '2024',
      credentialId: 'NPTEL-CC-90182',
      description: 'Nationally recognized NPTEL course certification covering cloud architecture design, virtual machines, cloud service models, and scalability.',
      icon: Cloud,
      badgeColor: 'border-sky-500 text-sky-400 bg-sky-500/10',
    },
    {
      id: 'cert-04',
      title: 'Programming Fundamentals Using Python',
      issuer: 'Infosys Springboard',
      category: 'Core Programming & Data Structures',
      issueDate: '2024',
      credentialId: 'INF-PY-11029',
      description: 'Certified mastery in Python core concepts, object-oriented programming principles, data structure manipulation, and algorithmic efficiency.',
      icon: Code2,
      badgeColor: 'border-amber-500 text-amber-400 bg-amber-500/10',
    },
    {
      id: 'cert-05',
      title: 'Software Engineering & Agile Software Development',
      issuer: 'Infosys Springboard',
      category: 'Agile & Software Architecture',
      issueDate: '2024',
      credentialId: 'INF-SE-30219',
      description: 'Comprehensive credentials in modern agile development methodologies, sprint planning, software engineering workflows, and Git collaboration.',
      icon: Layers,
      badgeColor: 'border-purple-500 text-purple-400 bg-purple-500/10',
    },
    {
      id: 'cert-06',
      title: 'React & Node.js Hands-on Architecture',
      issuer: 'Hands-on CS Workshop',
      category: 'Full-Stack JavaScript',
      issueDate: '2024',
      credentialId: 'WKS-RN-77182',
      description: 'Hands-on practical workshop completion certificate demonstrating full-stack JavaScript application building with React and Node.js.',
      icon: Award,
      badgeColor: 'border-emerald-500 text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'cert-07',
      title: 'AI & Computer Vision Masterclass',
      issuer: 'CS Technical Symposium',
      category: 'Artificial Intelligence & Vision',
      issueDate: '2024',
      credentialId: 'SYM-AI-55190',
      description: 'Awarded for active participation and project demonstration in computer vision models, video stream analysis, and deep learning implementations.',
      icon: Trophy,
      badgeColor: 'border-rose-500 text-rose-400 bg-rose-500/10',
    },
  ];

  const achievements = [
    {
      title: 'Technical & Non-Technical Symposiums',
      description:
        'Actively participated in multiple college technical and non-technical symposiums and CS workshops, demonstrating continuous learning, technical presentations, and active community participation.',
      icon: Trophy,
    },
    {
      title: 'React & Node.js Workshop Certification',
      description:
        'Attended a hands-on workshop on React and Node.js and received a formal certificate of completion, strengthening practical skills in modern web application engineering.',
      icon: Users,
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-[#080b11]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internships & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Practical experience gained through industry internships alongside 7 verified professional certifications.
          </p>
        </div>

        {/* Internships Row */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <span>Industry Internships</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-[#0d121f] rounded-[14px] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-cyan-300" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-sm font-semibold text-cyan-400">{item.company}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Grid */}
        <div id="certifications" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Professional Certifications & Badges (7)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${cert.badgeColor}`}>
                        VERIFIED
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-base mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400 mb-2">{cert.issuer}</p>
                    <p className="text-[11px] text-slate-400 line-clamp-3">{cert.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[10px]">ID: {cert.credentialId}</span>
                    <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Valid
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-emerald-400" />
            <span>Key Achievements & Workshops</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl border border-emerald-500/20 group hover:border-emerald-400/50 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
