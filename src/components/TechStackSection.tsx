import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface TechItem {
  name: string;
  color: string;
  bg: string;
  abbr: string;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'Canva',        color: 'border-cyan-400/30 text-cyan-300',     bg: '#0891b2',   abbr: 'Ca' },
  { name: 'Figma',        color: 'border-purple-400/30 text-purple-300', bg: '#a855f7',   abbr: 'F' },
  { name: 'Laravel',      color: 'border-red-400/30 text-red-300',       bg: '#ef4444',   abbr: 'Lv' },
  { name: 'PHP',          color: 'border-indigo-400/30 text-indigo-300', bg: '#6366f1',   abbr: 'P' },
  { name: 'JavaScript',   color: 'border-yellow-400/30 text-yellow-300', bg: '#ca8a04',   abbr: 'JS' },
  { name: 'MySQL',        color: 'border-sky-400/30 text-sky-300',       bg: '#0284c7',   abbr: 'SQL' },
  { name: 'HTML',         color: 'border-orange-400/30 text-orange-300', bg: '#ea580c',   abbr: 'H' },
  { name: 'CSS',          color: 'border-blue-400/30 text-blue-300',     bg: '#3b82f6',   abbr: 'C' },
  { name: 'Vue.js',       color: 'border-emerald-400/30 text-emerald-300', bg: '#10b981', abbr: 'V' },
  { name: 'Python',       color: 'border-teal-400/30 text-teal-300',     bg: '#0d9488',   abbr: 'Py' },
  { name: 'Git',          color: 'border-orange-400/30 text-orange-300', bg: '#f97316',   abbr: 'G' },
  { name: 'CapCut',       color: 'border-pink-400/30 text-pink-300',     bg: '#ec4899',   abbr: 'CC' },
];

const SPECIALTIES = [
  {
    title: 'Public Relations & Communication',
    desc: 'Communication & interpersonal skills, Stakeholder coordination, Internal communication, Relationship building',
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'from-purple-500/10 to-fuchsia-500/5',
    border: 'border-purple-500/20 group-hover:border-purple-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(167,139,250,0.2)]'
  },
  {
    title: 'Event & Organization',
    desc: 'Event planning, Timeline & rundown, Sponsorship & partnership, Panitia & vendor coordination',
    icon: (
      <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    color: 'from-sky-500/10 to-blue-500/5',
    border: 'border-sky-500/20 group-hover:border-sky-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]'
  },
  {
    title: 'Administrative & Reporting',
    desc: 'Penyusunan proposal & surat resmi, Anggaran RAB, Laporan Pertanggungjawaban (LPJ), Notulensi rapat',
    icon: (
      <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    color: 'from-indigo-500/10 to-violet-500/5',
    border: 'border-indigo-500/20 group-hover:border-indigo-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(129,140,248,0.2)]'
  },
  {
    title: 'Media & Web Development',
    desc: 'Laravel, PHP, JavaScript, Vue.js, Broadcast technical support & live streaming, Canva, CapCut, Figma',
    icon: (
      <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25zM14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25" />
      </svg>
    ),
    color: 'from-pink-500/10 to-rose-500/5',
    border: 'border-pink-500/20 group-hover:border-pink-400/50',
    glow: 'group-hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]'
  }
];

export const TechStackSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const SPEED = isMobile ? 1.2 : 3.0;
    const AMPLITUDE = isMobile ? 20 : 120;
    const FREQUENCY = isMobile ? 0.012 : 0.010;

    const SCREEN_RANGE = window.innerWidth + (isMobile ? 500 : 600);
    const MIN_GAP = isMobile ? 115 : 120;
    const CARD_GAP = Math.max(MIN_GAP, Math.ceil(SCREEN_RANGE / TECH_ITEMS.length));
    const TRAIN_LENGTH = TECH_ITEMS.length * CARD_GAP;

    let phase = 0;
    const prevSlopes = new Array(TECH_ITEMS.length).fill(0);
    const zIndexState = new Array(TECH_ITEMS.length).fill(10);

    const ticker = gsap.ticker.add(() => {
      phase = (phase + SPEED) % TRAIN_LENGTH;

      logoRefs.current.forEach((ref, i) => {
        if (!ref) return;

        const x = (isMobile ? -150 : -300) + ((phase + i * CARD_GAP) % TRAIN_LENGTH);
        // Slope down: start slightly higher (-20px) on left, drop completely below text (+60px) on right
        const yOffset = isMobile ? -20 + (x * 0.22) : 0;
        const y = Math.sin(x * FREQUENCY) * AMPLITUDE + yOffset;
        
        // Include baseline slope in rotation calculation
        const sineSlope = AMPLITUDE * FREQUENCY * Math.cos(x * FREQUENCY);
        const totalSlope = sineSlope + (isMobile ? 0.22 : 0);
        const rotation = Math.atan2(totalSlope * SPEED, SPEED) * (180 / Math.PI);

        if (prevSlopes[i] < 0 && sineSlope >= 0) {
          zIndexState[i] = 10;
        } else if (prevSlopes[i] > 0 && sineSlope <= 0) {
          zIndexState[i] = 30;
        }
        prevSlopes[i] = sineSlope;

        gsap.set(ref, { x, y, rotation, zIndex: zIndexState[i] });
      });
    });

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="relative w-full min-h-screen pt-0 pb-20 -mt-10 flex flex-col items-center justify-start overflow-hidden z-20 select-none"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Tech Stack Animation Container */}
      <div className="relative w-full max-w-7xl h-[280px] flex items-center justify-center shrink-0 mb-10 md:mb-20">
        {/* Single heading at z-20 */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-medium italic text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300/80 via-pink-300/70 to-indigo-300/80 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] select-none leading-none whitespace-nowrap"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            My Tech Stack
          </h1>
        </div>

        {/* Cards — z-index controlled per-card by GSAP */}
        <div className="absolute inset-0 overflow-visible pointer-events-none flex items-center">
          {TECH_ITEMS.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => { logoRefs.current[index] = el; }}
              className={`absolute left-0 flex items-center gap-1 md:gap-2.5 px-2 py-0.5 md:px-4 md:py-2 rounded-full bg-black/50 border backdrop-blur-md shadow-lg pointer-events-auto cursor-pointer hover:bg-white/10 transition-colors ${item.color}`}
            >
              {/* Colored icon dot */}
              <span
                className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: item.bg, fontSize: '7px' }}
              >
                {item.abbr.length > 1 ? item.abbr[0] : item.abbr}
              </span>
              <span className="font-semibold tracking-wide text-[10px] md:text-sm whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties Cards Container */}
      <div className="relative w-full max-w-5xl px-6 mt-0 z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SPECIALTIES.map((spec, index) => (
            <div
              key={index}
              className={`group relative p-4.5 md:p-6 rounded-2xl bg-gradient-to-br ${spec.color} bg-black/40 backdrop-blur-xl border ${spec.border} transition-all duration-300 hover:-translate-y-1 ${spec.glow} cursor-default overflow-hidden`}
            >
              <div className="relative z-10 flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(spec.icon, {
                    className: 'w-6 h-6 md:w-8 md:h-8 ' + (spec.icon.props.className || '')
                  })}
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 tracking-wide">{spec.title}</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{spec.desc}</p>
                </div>
              </div>
              
              {/* Card Hover Glow effect inside */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

