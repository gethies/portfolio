import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Play, RotateCcw, Camera, MapPin, PhoneCall, AlertTriangle, Cpu, CheckCircle, Radio, Activity, Navigation } from 'lucide-react';

export default function IndianAccidentDetectionApp({ onClose }) {
  const [activeLocation, setActiveLocation] = useState('NH-44 Chennai-Bengaluru Highway (Toll Plaza)');
  const [isScanning, setIsScanning] = useState(false);
  const [accidentAlert, setAccidentAlert] = useState(false);
  const [dispatchLogs, setDispatchLogs] = useState([]);
  const [fps, setFps] = useState(30);

  const locations = [
    { id: 1, name: 'NH-44 Chennai-Bengaluru Highway (Toll Plaza)', coordinates: '12.8342° N, 79.7036° E', state: 'Tamil Nadu' },
    { id: 2, name: 'Kathipara Flyover Junction (Guindy, Chennai)', coordinates: '13.0067° N, 80.2021° E', state: 'Chennai Metro' },
    { id: 3, name: 'Anna Salai - Mount Road (Teynampet)', coordinates: '13.0418° N, 80.2464° E', state: 'Chennai Urban' },
    { id: 4, name: 'Chennai Outer Ring Road (Poonamallee Bypass)', coordinates: '13.0500° N, 80.0800° E', state: 'Tamil Nadu Express' },
  ];

  const handleStartAnalysis = () => {
    setIsScanning(true);
    setAccidentAlert(false);
    setDispatchLogs((prev) => [
      { id: Date.now(), time: new Date().toLocaleTimeString(), text: `[SYSTEM] Started YOLO AI video stream analysis on ${activeLocation}...`, type: 'info' }
    ]);
  };

  const handleSimulateAccident = () => {
    setIsScanning(true);
    setAccidentAlert(false);
    
    setTimeout(() => {
      setAccidentAlert(true);
      const timestamp = new Date().toLocaleTimeString();
      setDispatchLogs((prev) => [
        { id: Date.now() + 1, time: timestamp, text: `🚨 ACCIDENT DETECTED! Frame #842 - Vehicle Collision on ${activeLocation}`, type: 'alert' },
        { id: Date.now() + 2, time: timestamp, text: `🚑 108 Emergency Ambulance Hotline dispatched to GPS (${locations.find(l => l.name === activeLocation)?.coordinates})`, type: 'dispatch' },
        { id: Date.now() + 3, time: timestamp, text: `🚔 Tamil Nadu Highway Patrol Station notified. SMS alert broadcast sent to emergency response team.`, type: 'success' },
      ]);
    }, 1800);
  };

  const handleReset = () => {
    setIsScanning(false);
    setAccidentAlert(false);
    setDispatchLogs([]);
  };

  return (
    <div className="bg-[#070a11] text-slate-100 p-4 sm:p-6 rounded-3xl border border-cyan-500/40 shadow-2xl space-y-6 max-w-5xl mx-auto text-left">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-500 to-amber-500 p-0.5 shadow-lg shadow-red-500/20">
            <div className="w-full h-full bg-[#0a0d14] rounded-[14px] flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-red-500/20 border border-red-500/30 text-red-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                FEATURED LIVE PROJECT
              </span>
              <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                <Radio className="w-3 h-3 animate-pulse" /> LIVE STREAM ACTIVE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Indian Road AI Accident Detection Web System
            </h3>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
          >
            ✕ Back to Portfolio
          </button>
        )}
      </div>

      {/* Location Selector Tabs */}
      <div>
        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Select Indian Highway / City CCTV Camera Stream:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setActiveLocation(loc.name);
                setAccidentAlert(false);
              }}
              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                activeLocation === loc.name
                  ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <div className="font-semibold">{loc.name}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5 flex justify-between">
                <span>GPS: {loc.coordinates}</span>
                <span className="text-cyan-400">{loc.state}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Video Detection Monitor */}
      <div className="relative aspect-video w-full rounded-2xl bg-slate-950 border-2 border-slate-800 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
        {/* Video Overlay Canvas Graphics */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        {/* Top Camera Metadata */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
            <Camera className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-bold">{activeLocation}</span>
          </div>
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px]">
            <span className="text-emerald-400 font-bold">FPS: 30.0</span>
            <span className="text-slate-400">RESOLUTION: 1080p AI HD</span>
          </div>
        </div>

        {/* Center Canvas Simulation State */}
        <div className="relative z-10 flex items-center justify-center my-auto">
          {accidentAlert ? (
            /* Accident Detected Bounding Box Overlay */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-lg p-5 rounded-2xl bg-red-950/80 border-2 border-red-500 backdrop-blur-md text-center space-y-3 shadow-2xl relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white font-mono text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                CRITICAL WARNING - BOUNDING BOX #01 DETECTED
              </div>

              <div className="flex items-center justify-center gap-2 text-red-400 font-extrabold text-lg sm:text-xl">
                <AlertTriangle className="w-6 h-6 animate-bounce text-red-500" />
                <span>INDIAN ROAD COLLISION CONFIRMED</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-left bg-black/50 p-3 rounded-xl border border-red-500/30">
                <div>
                  <span className="text-slate-400 block text-[10px]">AI CONFIDENCE SCORE</span>
                  <span className="text-emerald-400 font-bold text-sm">97.8% (YOLO-v8)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">IMPACT SEVERITY</span>
                  <span className="text-red-400 font-bold text-sm">HIGH (STRUCTURAL IMPACT)</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">VEHICLE TYPE</span>
                  <span className="text-yellow-300 font-bold">Car / Heavy Commercial</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">TIMESTAMP</span>
                  <span className="text-cyan-300 font-bold">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-red-900/60 border border-red-400/50 flex items-center justify-between text-xs text-red-200 font-bold">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-emerald-400 animate-spin" />
                  108 Ambulance Hotline Alert Triggered
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  DISPATCH SENT
                </span>
              </div>
            </motion.div>
          ) : isScanning ? (
            <div className="text-center space-y-3 bg-black/60 p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-md">
              <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
              <p className="text-xs font-mono text-cyan-300 font-bold">
                Analyzing road frames with YOLO Neural Engine...
              </p>
              <p className="text-[11px] text-slate-400">Monitoring vehicle velocities and trajectory anomalies</p>
            </div>
          ) : (
            <div className="text-center space-y-3 bg-black/60 p-6 rounded-2xl border border-white/10 backdrop-blur-md max-w-sm">
              <Activity className="w-8 h-8 text-cyan-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">Live AI CCTV Stream Standby</h4>
              <p className="text-xs text-slate-400">
                Click below to start video frame analysis or simulate an Indian road accident detection event.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Bar Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={handleStartAnalysis}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Start AI Analysis
            </button>

            <button
              onClick={handleSimulateAccident}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Simulate Road Accident
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              title="Reset Video Engine"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Python / YOLO Detection Engine
          </div>
        </div>
      </div>

      {/* Real-time Emergency Dispatch Console Log */}
      <div className="bg-slate-950 p-4 rounded-2xl border border-white/10 space-y-2">
        <h4 className="text-xs font-mono font-bold uppercase text-cyan-400 flex items-center gap-1.5">
          <Navigation className="w-3.5 h-3.5" /> Automated Indian Emergency Hotline Log (108 Ambulance / Police)
        </h4>

        <div className="bg-black/90 p-3 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 max-h-36 overflow-y-auto">
          {dispatchLogs.length === 0 ? (
            <span className="text-slate-500 italic">[Console ready. Click "Simulate Road Accident" above to trigger automated dispatch alerts]</span>
          ) : (
            dispatchLogs.map((log) => (
              <div
                key={log.id}
                className={`flex items-start gap-2 ${
                  log.type === 'alert' ? 'text-red-400 font-bold' : log.type === 'dispatch' ? 'text-yellow-300' : 'text-emerald-400'
                }`}
              >
                <span className="text-slate-500 shrink-0">[{log.time}]</span>
                <span>{log.text}</span>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
