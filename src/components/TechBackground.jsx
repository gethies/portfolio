import React from 'react';

export default function TechBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090e]">
      {/* Radial Gradient Ambient Spotlights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute -bottom-40 left-1/4 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[160px]" />

      {/* Cyber Grid Lines Effect */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glowing Noise Glow Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07090e]/60 to-[#07090e]" />
    </div>
  );
}
