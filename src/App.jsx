import React, { useState } from 'react';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutEducation from './components/AboutEducation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceCertifications from './components/ExperienceCertifications';
import ContactFooter from './components/ContactFooter';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Unique Non-3D Tech Ambient Background */}
      <TechBackground />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        <Navbar onOpenContact={scrollToContact} />
        
        <main>
          <Hero
            onOpenContact={scrollToContact}
            onOpenResume={() => setResumeOpen(true)}
          />
          <AboutEducation />
          <Skills />
          <Projects />
          <ExperienceCertifications />
        </main>

        <ContactFooter />
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
