
import React, { useState, useEffect, useRef } from 'react';
import { ENGINEERS } from './constants';
import { Engineer } from './types';

// --- Decorative Elements ---

const RavenTicker: React.FC = () => {
  const messages = [
    "NEW SUSTAINABILITY STANDARDS IMPLEMENTED FOR URBAN INFRASTRUCTURE",
    "BREAKTHROUGH IN COMPOSITE MATERIAL DURABILITY REPORTED BY RESEARCH WING",
    "REGIONAL POWER GRID UPGRADE COMPLETED AHEAD OF SCHEDULE",
    "ANNUAL ENGINEERING EXCELLENCE AWARDS NOMINATIONS NOW OPEN",
    "NEW SAFETY PROTOCOLS MANDATED FOR HIGH-RISE CONSTRUCTION PROJECTS",
    "STRUCTURAL INTEGRITY AUDIT OF HISTORIC MONUMENTS UNDERWAY",
    "ADVANCEMENTS IN GEOSPATIAL MAPPING TECHNOLOGY ENHANCE SURVEY PRECISION"
  ];

  return (
    <div className="bg-[#8a6d3b]/10 border-y border-[#8a6d3b]/20 py-3 overflow-hidden whitespace-nowrap relative z-20">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12">
        {[...messages, ...messages].map((msg, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="w-2 h-2 bg-red-800 rounded-full"></span>
            <span className="font-regal text-[10px] uppercase tracking-[0.4em] text-[#8a6d3b]">{msg}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const StatBar: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="mb-4">
    <div className="flex justify-between text-[8px] font-regal text-[#8a6d3b] mb-1 uppercase tracking-widest">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-0.5 w-full bg-stone-900 overflow-hidden">
      <div 
        className="h-full bg-[#8a6d3b] transition-all duration-1000" 
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeEngineer = ENGINEERS.find(e => e.id === activeId);

  return (
    <div className="min-h-screen bg-citadel relative pb-32 text-stone-300 selection:bg-amber-900 selection:text-white">
      {/* Decorative Compass Overlay */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] opacity-[0.02] pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="48" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.1" strokeDasharray="1,2" />
          <path d="M50 2 L50 98 M2 50 L98 50 M15 15 L85 85 M15 85 L85 15" strokeWidth="0.05" />
          <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Header & Status Bar */}
      <div className="bg-black/80 backdrop-blur-md border-b border-[#8a6d3b]/30 z-[100] sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between text-[9px] font-regal tracking-[0.3em] text-[#8a6d3b]/60">
          <div className="flex gap-8">
            <span className="hidden sm:inline">PROJECT PORTFOLIO: $1.2B</span>
            <span className="hidden sm:inline">ISO CERTIFICATION: 9001:2015</span>
          </div>
          <div className="flex gap-8">
            <span className="animate-pulse">SYSTEM STATUS: OPERATIONAL</span>
            <span>EST. 2040</span>
          </div>
        </div>
        
        <header className="px-6 py-6 border-t border-[#8a6d3b]/10 flex justify-between items-center">
          <div className="flex items-center gap-6 cursor-pointer" onClick={() => setActiveId(null)}>
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-[#8a6d3b] rotate-45"></div>
              <span className="text-[#8a6d3b] font-regal text-2xl font-black">C</span>
            </div>
            <div>
              <h1 className="font-regal text-2xl font-black tracking-[0.2em] text-[#8a6d3b]">THE CITADEL</h1>
              <p className="font-regal text-[9px] uppercase tracking-[0.4em] text-stone-500">Engineers of Eternal Legacies</p>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-10 font-regal text-[10px] uppercase tracking-[0.3em] text-stone-400">
            <a href="#hall" className="hover:text-[#8a6d3b] transition-colors">Hall of Engineers</a>
            <a href="#library" className="hover:text-[#8a6d3b] transition-colors">The Library</a>
            <a href="#map" className="hover:text-[#8a6d3b] transition-colors">Global Network</a>
          </nav>
        </header>
      </div>

      <RavenTicker />

      <main className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        {/* Hero Section */}
        <section className="mb-40 text-center space-y-12">
           <div className="flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#8a6d3b]"></div>
              <span className="font-regal text-[10px] uppercase tracking-[0.8em] text-[#8a6d3b]">Corporate Portal</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#8a6d3b]"></div>
            </div>
            
            <h2 className="font-regal text-7xl md:text-9xl text-stone-100 leading-none font-black tracking-tighter">
              GATEWAY TO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8a6d3b] to-[#4a371c]">GRAND ENGINEERS</span>
            </h2>
            
            <p className="font-classic text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto leading-relaxed italic opacity-80">
              Explore the professional profiles of our lead engineers. Select a specialist to review their expertise and project history.
            </p>
        </section>

        {/* The Hall of Engineers - Grid Layout */}
        <section id="hall" className="mb-40 scroll-mt-32">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-center md:items-end border-b border-[#8a6d3b]/20 pb-6 gap-4">
             <div className="text-center md:text-left">
                <h3 className="font-regal text-xl text-[#8a6d3b] uppercase tracking-[0.4em]">Hall of Engineers</h3>
                <p className="font-classic italic text-stone-500 text-sm mt-2">Select a sigil for a summary, tap again for the full portal.</p>
             </div>
             <div className="font-regal text-[9px] text-[#8a6d3b] opacity-40 uppercase tracking-[0.3em]">Engineering Council Array: Linear Alignment</div>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 px-6">
            {ENGINEERS.map((eng) => (
              <div 
                key={eng.id}
                onClick={() => setActiveId(activeId === eng.id ? null : eng.id)}
                className={`relative group cursor-pointer transition-all duration-700 w-[160px] md:w-[200px] ${activeId === eng.id ? 'z-50' : 'z-10'}`}
              >
                {/* Shield Card */}
                <div className={`shield-card aspect-[3/4.5] bg-stone-950 border border-[#8a6d3b]/30 overflow-hidden shadow-2xl relative transition-all duration-500 ${activeId === eng.id ? 'ring-2 ring-[#8a6d3b] ring-offset-8 ring-offset-black scale-105' : 'hover:scale-102'}`}>
                  <img 
                    src={eng.image} 
                    className={`w-full h-full object-cover transition-all duration-1000 ${activeId === eng.id ? 'brightness-100 scale-110' : 'grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90'}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-12 left-0 w-full text-center px-3">
                    <h4 className="font-regal text-base text-stone-100 uppercase font-bold tracking-widest">{eng.name}</h4>
                    <p className="font-regal text-[8px] text-[#8a6d3b] uppercase tracking-widest mt-1 opacity-80">{eng.specialty}</p>
                  </div>

                  {/* Quick View Overlay (if active) */}
                  {activeId === eng.id && (
                    <div className="absolute inset-0 bg-black/95 p-4 md:p-5 animate-in fade-in zoom-in-95 duration-500 flex flex-col justify-between">
                       <div className="space-y-3 md:space-y-4">
                          <h5 className="font-regal text-[9px] text-[#8a6d3b] uppercase tracking-widest border-b border-[#8a6d3b]/20 pb-1">{eng.title} Resume</h5>
                          <p className="font-classic text-[10px] md:text-[11px] italic text-stone-400 leading-relaxed line-clamp-4">{eng.bio}</p>
                          <div className="space-y-2 pt-1">
                            {eng.stats.map(s => <StatBar key={s.label} label={s.label} value={s.value} />)}
                          </div>
                       </div>
                       
                       <a 
                        href={eng.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative w-full py-2 md:py-2.5 border border-[#8a6d3b] hover:bg-[#8a6d3b] transition-all flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_15px_rgba(138,109,59,0.2)]"
                        onClick={(e) => e.stopPropagation()}
                       >
                          <span className="font-regal text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#8a6d3b] group-hover/btn:text-black z-10 font-bold">Open Full Portal</span>
                          <div className="absolute inset-0 bg-[#8a6d3b] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                       </a>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* The Grand Library (Visual Blueprint Gallery) */}
        <section id="library" className="mb-40 scroll-mt-32">
          <div className="text-center space-y-6 mb-20">
            <div className="flex items-center justify-center gap-4">
               <div className="h-px w-12 bg-[#8a6d3b]/30"></div>
               <h3 className="font-regal text-3xl text-stone-100 tracking-[0.3em]">THE GRAND LIBRARY</h3>
               <div className="h-px w-12 bg-[#8a6d3b]/30"></div>
            </div>
            <p className="font-classic text-stone-500 italic max-w-2xl mx-auto">A curated archive of technical blueprints and architectural designs from our most significant engineering projects.</p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x px-4">
            {ENGINEERS.map((eng) => (
              <div key={eng.id} className="min-w-[400px] md:min-w-[600px] aspect-video snap-center bg-stone-900 border border-stone-800 relative group overflow-hidden shadow-2xl">
                <img src={eng.blueprint} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 border-[20px] border-black/40 pointer-events-none"></div>
                {/* Blueprint grid overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')] opacity-10 pointer-events-none"></div>
                
                <div className="absolute bottom-10 left-10 parchment-panel p-6 border border-[#8a6d3b]/30 shadow-xl">
                  <p className="font-regal text-[10px] text-[#8a6d3b] tracking-widest uppercase mb-1">Technical Archive #{eng.id}</p>
                  <p className="font-classic text-sm text-stone-300 italic">Design by {eng.name}</p>
                  <div className="mt-4 h-0.5 w-12 bg-[#8a6d3b] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map (Static Visualization) */}
        <section id="map" className="mb-40 scroll-mt-32 relative">
          <div className="parchment-panel p-12 md:p-20 border-2 border-[#8a6d3b]/40 relative overflow-hidden text-center min-h-[600px] flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.5)]">
             {/* Abstract Map Background SVG Overlay */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
                  <path d="M10 20 Q 30 10 50 30 T 90 20" strokeWidth="0.5" />
                  <path d="M20 50 Q 50 80 80 50" strokeWidth="0.5" />
                  <path d="M5 5 L95 95 M5 95 L95 5" strokeWidth="0.05" strokeDasharray="1,2" />
                  <circle cx="50" cy="50" r="30" strokeWidth="0.2" />
                  <circle cx="20" cy="30" r="2" fill="currentColor" />
                  <circle cx="80" cy="70" r="2" fill="currentColor" />
                  <circle cx="50" cy="50" r="1.5" fill="#8a6d3b" />
                </svg>
             </div>
             
             <div className="relative z-10 space-y-10">
               <span className="font-regal text-[11px] text-[#8a6d3b] tracking-[1em] uppercase">Network Coverage</span>
               <h3 className="font-regal text-6xl text-stone-100 font-black tracking-tighter">ENGINEER NETWORK MAP</h3>
               <div className="h-px w-48 bg-[#8a6d3b] mx-auto"></div>
               <p className="font-classic text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto italic leading-relaxed">
                 Our engineering network provides comprehensive coverage across all regions, ensuring technical excellence and infrastructure stability through unified standards.
               </p>
               
               <div className="pt-16 grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
                  <div className="space-y-3 group">
                    <p className="font-regal text-4xl text-stone-200 group-hover:text-[#8a6d3b] transition-colors">22</p>
                    <p className="font-regal text-[9px] text-[#8a6d3b] uppercase tracking-[0.3em]">Active Fortresses</p>
                    <div className="h-0.5 w-4 bg-[#8a6d3b]/20 mx-auto group-hover:w-8 transition-all"></div>
                  </div>
                  <div className="space-y-3 group">
                    <p className="font-regal text-4xl text-stone-200 group-hover:text-[#8a6d3b] transition-colors">14</p>
                    <p className="font-regal text-[9px] text-[#8a6d3b] uppercase tracking-[0.3em]">Maester Hubs</p>
                    <div className="h-0.5 w-4 bg-[#8a6d3b]/20 mx-auto group-hover:w-8 transition-all"></div>
                  </div>
                  <div className="space-y-3 group">
                    <p className="font-regal text-4xl text-stone-200 group-hover:text-[#8a6d3b] transition-colors">300+</p>
                    <p className="font-regal text-[9px] text-[#8a6d3b] uppercase tracking-[0.3em]">Trained Ravens</p>
                    <div className="h-0.5 w-4 bg-[#8a6d3b]/20 mx-auto group-hover:w-8 transition-all"></div>
                  </div>
                  <div className="space-y-3 group">
                    <p className="font-regal text-4xl text-stone-200 group-hover:text-[#8a6d3b] transition-colors">5</p>
                    <p className="font-regal text-[9px] text-[#8a6d3b] uppercase tracking-[0.3em]">Certified Engineers</p>
                    <div className="h-0.5 w-4 bg-[#8a6d3b]/20 mx-auto group-hover:w-8 transition-all"></div>
                  </div>
               </div>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="parchment-panel border-t border-[#8a6d3b]/20 py-32 bg-stone-950 relative overflow-hidden">
        {/* Background Crest */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.03] translate-x-20 translate-y-20 pointer-events-none">
           <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" /></svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-10">
            <h4 className="font-regal text-[#8a6d3b] text-4xl font-black tracking-widest">THE CITADEL</h4>
            <p className="font-classic text-stone-500 text-xl italic leading-relaxed max-w-md">
              A comprehensive portal dedicated to the preservation and advancement of engineering excellence. We document the technical legacies that form the foundation of our modern infrastructure.
            </p>

          </div>
          
          <div className="grid grid-cols-2 gap-12 font-regal text-[10px] uppercase tracking-[0.4em] text-stone-500">
             <div className="space-y-8">
                <p className="text-[#8a6d3b] text-[12px] mb-4 border-b border-[#8a6d3b]/10 pb-2">Navigation</p>
                <a href="#hall" className="block hover:text-amber-500 transition-colors">Hall of Engineers</a>
                <a href="#library" className="block hover:text-amber-500 transition-colors">The Grand Library</a>
                <a href="#map" className="block hover:text-amber-500 transition-colors">Global Network Map</a>
             </div>
             <div className="space-y-8">
                <p className="text-[#8a6d3b] text-[12px] mb-4 border-b border-[#8a6d3b]/10 pb-2">Archives</p>
                <p className="text-stone-700">Established 2040</p>
                <p className="text-stone-700">Global Division</p>
                <p className="text-stone-700">Technical Standards</p>
                <p className="text-stone-700">Compliance Registry</p>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-40 pt-10 border-t border-stone-900 text-center">
           <p className="font-regal text-[9px] text-stone-800 tracking-[0.8em] uppercase">© 2040 — THE CITADEL ENGINEERING ARCHIVES — GLOBAL INFRASTRUCTURE PARTNERS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
