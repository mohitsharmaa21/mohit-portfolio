import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaRocket, FaUserTie, FaChevronLeft, FaChevronRight, FaTimes, FaSearchPlus, FaSyncAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb className="text-2xl text-cyan-400" />,
    title: "Ideation & Validation",
    subtitle: "Early Stage",
    desc: "Nurtured multiple conceptual ideas targeted at solving problems in security and predictive web platforms.",
    tag: "Phase 1",
    moments: [
      { label: "View Mentorship Moment", idx: 2 }
    ]
  },
  {
    icon: <FaRocket className="text-2xl text-yellow-400" />,
    title: "Double Incubation under E-Cell MUJ",
    subtitle: "Entrepreneurship Cell, MUJ",
    desc: "Qualified two distinct startup proposals for pre-incubation. Gained extensive training in product-market fit validation and pitch development.",
    tag: "Phase 2",
    moments: [
      { label: "View Pitch Day", idx: 0 },
      { label: "PIXELLYRICS Letter", idx: 1 },
      { label: "Elite Party Letter", idx: 3 }
    ]
  },
  {
    icon: <FaUserTie className="text-2xl text-purple-400" />,
    title: "AIC MUJ Pre-Incubation",
    subtitle: "Atal Incubation Centre, MUJ",
    desc: "Secured pre-incubation support at AIC MUJ. Received mentorship from industry practitioners and incubation leads to scale business frameworks.",
    tag: "Phase 3",
    moments: [
      { label: "View AIC Approval Letter", idx: 4 }
    ]
  },
];

const startupMoments = [
  {
    id: 1,
    title: "MUJ Pitch Day 2025",
    subtitle: "Presented startup PIXELLYRICS at MUJ Pitch Day, winning incubation support.",
    image: "/assets/startup/pitch_day.jpg",
    badge: "Pitch Day Showcase",
  },
  {
    id: 2,
    title: "Pre-Incubation: PIXELLYRICS",
    subtitle: "Congratulations sanction letter for PIXELLYRICS under E-Cell Manipal University Jaipur (2025).",
    image: "/assets/startup/pre_incubation_letter.jpg",
    badge: "E-Cell Approval",
  },
  {
    id: 3,
    title: "Mentorship Session",
    subtitle: "Pitching and validating business model metrics with Dr. Anand Pandey.",
    image: "/assets/startup/pitch_session.jpg",
    badge: "Ideation & Pitching",
  },
  {
    id: 4,
    title: "Pre-Incubation: The Elite Party",
    subtitle: "Official pre-incubation sanction letter for startup 'The Elite Party' at E-Cell (2026).",
    image: "/assets/startup/ecell_elite_party.jpg",
    badge: "E-Cell Approval",
  },
  {
    id: 5,
    title: "AIC MUJ Incubation: PIXELLYRICS",
    subtitle: "Atal Incubation Centre congratulations letter for startup 'Pixellyrics' under AIC-MUJ (2026).",
    image: "/assets/startup/aic_pixellyrics.jpg",
    badge: "AIC Incubation",
  },
];

const flipVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  }),
};

export default function StartupJourney() {
  const [cards, setCards] = useState([0, 1, 2, 3, 4]); // Stack position trackers (5 cards now)
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [direction, setDirection] = useState(1);

  const shuffleNext = () => {
    setCards((prev) => [...prev.slice(1), prev[0]]);
  };

  const showMoment = (idx) => {
    setCards((prev) => {
      const idxPos = prev.indexOf(idx);
      if (idxPos === -1) return prev;
      return [...prev.slice(idxPos), ...prev.slice(0, idxPos)];
    });
  };

  const handleLightboxNav = (newIdx, dir) => {
    setDirection(dir);
    setLightboxIdx(newIdx);
    showMoment(newIdx); // Sync background stack order
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight" && lightboxIdx !== null) {
        const nextIdx = (lightboxIdx + 1) % startupMoments.length;
        handleLightboxNav(nextIdx, 1);
      }
      if (e.key === "ArrowLeft" && lightboxIdx !== null) {
        const prevIdx = (lightboxIdx - 1 + startupMoments.length) % startupMoments.length;
        handleLightboxNav(prevIdx, -1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx]);

  return (
    <section
      id="startup-journey"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Cyber Grid background */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(168,85,247,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Shifting Cyber Gradient Clouds */}
        <div className="absolute top-1/3 left-10 w-[550px] h-[550px] rounded-full bg-indigo-500/22 blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-pink-500/22 blur-[90px] animate-pulse delay-500" />

        {/* Warp speed diagonal light streaks */}
        <div 
          className="absolute w-[220px] h-[2.5px] bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent"
          style={{
            top: "15%",
            left: "-10%",
            transform: "rotate(-35deg)",
            animation: "warp-streak 14s linear infinite",
          }}
        />
        <div 
          className="absolute w-[280px] h-[2.5px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
          style={{
            top: "65%",
            left: "-10%",
            transform: "rotate(-35deg)",
            animation: "warp-streak 18s linear infinite 4s",
          }}
        />
      </div>

      <style>{`
        @keyframes warp-streak {
          0% { left: -30%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Entrepreneurship Exposure
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-yellow-400 to-purple-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Startup Journey
          </motion.h2>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Timeline details */}
          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-white/10 ml-4 md:ml-24 space-y-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-8 md:pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Icon Marker */}
                  <div className="absolute -left-[21px] top-1.5 p-2 rounded-full bg-gray-950 border-2 border-cyan-400/40 text-white z-10 flex items-center justify-center">
                    {step.icon}
                  </div>

                  {/* Tag Label for timeline (visible on large screen) */}
                  <div className="hidden md:block absolute -left-[130px] top-2.5 text-right w-24 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    {step.tag}
                  </div>

                  {/* Glass Card */}
                  <motion.div
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400/30 transition-all duration-300 shadow-xl group"
                    whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(6,182,212,0.1)" }}
                  >
                    <span className="md:hidden text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      {step.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-purple-400 text-xs font-semibold mb-3">{step.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.desc}</p>
                    
                    {/* Dynamic Action Trigger to spin 3D Stack */}
                    <div className="flex flex-wrap gap-2.5 mt-4">
                      {step.moments.map((moment, mIdx) => (
                        <button
                          key={mIdx}
                          onClick={() => showMoment(moment.idx)}
                          className="px-3.5 py-1.5 rounded-lg border text-xs font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95 hover:brightness-110"
                          style={{
                            borderColor: idx === 0 ? "rgba(6,182,212,0.3)" : idx === 1 ? "rgba(234,179,8,0.3)" : "rgba(168,85,247,0.3)",
                            color: idx === 0 ? "#22d3ee" : idx === 1 ? "#fbbf24" : "#c084fc",
                            background: idx === 0 ? "rgba(6,182,212,0.05)" : idx === 1 ? "rgba(234,179,8,0.05)" : "rgba(168,85,247,0.05)",
                          }}
                        >
                          <FaSyncAlt size={9} className="group-hover:rotate-180 transition-transform duration-500" />
                          <span>{moment.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive 3D Shuffling Card Deck */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[460px] relative w-full pt-10 lg:pt-0">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {cards.map((cardIdx, position) => {
                const card = startupMoments[cardIdx];
                const isFront = position === 0;

                // Render only top 3 cards in visual stack for performance and clean aesthetic
                if (position > 2) return null;

                return (
                  <motion.div
                    key={card.id}
                    style={{
                      zIndex: 5 - position,
                    }}
                    animate={{
                      scale: 1 - position * 0.05,
                      y: position * 18,
                      rotate: position === 0 ? 0 : position === 1 ? 3 : -3,
                      opacity: 1 - position * 0.2,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                    }}
                    onClick={() => {
                      if (isFront) {
                        shuffleNext();
                      } else {
                        // Shift stack order so clicked card is front
                        showMoment(cardIdx);
                      }
                    }}
                    className="absolute w-[280px] sm:w-[310px] h-[370px] rounded-3xl border border-white/15 bg-[#080519]/70 backdrop-blur-xl shadow-2xl p-4 flex flex-col justify-between cursor-pointer overflow-hidden group select-none hover:border-cyan-500/20 transition-colors"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/5 mb-3 group-hover:border-cyan-500/10 transition-colors">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          width="310"
                          height="180"
                        />
                        {/* Zoom overlay on image */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxIdx(cardIdx);
                            }}
                            className="p-3 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 shadow-lg scale-90 group-hover:scale-100 transition-all cursor-pointer"
                          >
                            <FaSearchPlus size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Tag Badge */}
                      <span className="text-[9px] uppercase tracking-wider font-mono font-bold py-0.5 px-2 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20 w-fit block">
                        {card.badge}
                      </span>

                      {/* Details */}
                      <h4 className="text-base font-bold text-white mt-2 leading-tight group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-gray-400 text-[11px] mt-1 leading-relaxed line-clamp-2">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Footer Tip */}
                    <div className="flex justify-between items-center pt-3 border-t border-white/5 text-[10px] text-gray-500 font-mono">
                      <span>{isFront ? "Tap to shuffle" : "Bring to front"}</span>
                      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox for proof zoom with smooth 3D flip card flow */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-black flex flex-col"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIdx(null)}
                className="absolute top-4 right-4 z-[265] p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <FaTimes size={14} />
              </button>

              {/* Prev Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIdx = (lightboxIdx - 1 + startupMoments.length) % startupMoments.length;
                  handleLightboxNav(prevIdx, -1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-pointer"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Next Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIdx = (lightboxIdx + 1) % startupMoments.length;
                  handleLightboxNav(nextIdx, 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-pointer"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Zoom Image with 3D Flip/Slide Flow Animation */}
              <div 
                className="w-full flex items-center justify-center bg-black min-h-[350px] relative overflow-hidden py-8 px-12" 
                style={{ perspective: "1200px" }}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={lightboxIdx}
                    custom={direction}
                    variants={flipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={startupMoments[lightboxIdx].image}
                      alt={startupMoments[lightboxIdx].title}
                      className="max-h-[65vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Caption metadata */}
              <div className="p-6 bg-[#080519] border-t border-white/5 text-center z-10">
                <span className="text-xs uppercase font-mono font-bold text-cyan-400 tracking-wider">
                  {startupMoments[lightboxIdx].badge}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {startupMoments[lightboxIdx].title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto leading-relaxed">
                  {startupMoments[lightboxIdx].subtitle}
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
