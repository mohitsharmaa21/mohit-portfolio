import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaMedal, FaPercent, FaLightbulb, FaRocket, FaFileAlt, FaChevronLeft, FaChevronRight, FaTimes, FaEye } from "react-icons/fa";

const hackathonImages = [
  {
    url: "/assets/achievements/hackathon_ximi_stage.jpg",
    title: "Hackathon Winning Stage",
    desc: "First prize award ceremony with dignitaries at XIMI.",
    badge: "Ceremony"
  },
  {
    url: "/assets/achievements/hackathon_team_stage.jpg",
    title: "Winning Team on Stage",
    desc: "Members of the winning hackathon team presenting certificates.",
    badge: "Team"
  },
  {
    url: "/assets/achievements/hackathon_trophy_cert.png",
    title: "Metaverse 2.0 Winner Trophy",
    desc: "Trophy and Winner certificate presented to Mohit Sharma.",
    badge: "Winner Trophy"
  },
  {
    url: "/assets/achievements/hackathon_lab_group.jpg",
    title: "Metaverse Hackathon Participants",
    desc: "Coordinating and pitching with fellow participants at the venue.",
    badge: "Participants"
  },
  {
    url: "/assets/achievements/hackathon_certificate.jpg",
    title: "Official Certificate of Participation",
    desc: "Sanctioned Winner certificate signed by XIMI Directors.",
    badge: "Certificate"
  }
];

const innovationImages = [
  {
    url: "/assets/achievements/innovation_iq_prize.jpg",
    title: "Second Prize Award Ceremony",
    desc: "Securing the award from HOD Dr. Shilpa Sharma and E-Cell Director Dr. Geeta Gandhi.",
    badge: "Award Ceremony"
  },
  {
    url: "/assets/achievements/innovation_iq_certificate.jpg",
    title: "Second Prize Certificate",
    desc: "Official IInd prize award certificate jointly signed by organizers.",
    badge: "Certificate"
  },
  {
    url: "/assets/achievements/innovation_iq_board.jpg",
    title: "Innovative IQ Banner",
    desc: "Innovative IQ showcase team photo at Manipal University Jaipur.",
    badge: "Showcase"
  }
];

const ntceImages = [
  {
    url: "/assets/achievements/ntce_certificate.jpg",
    title: "NTCE Certificate of Merit",
    desc: "National Think Wonders Competitive Exam (NTCE 2025) Merit Certificate.",
    badge: "Merit Certificate"
  }
];

const paperImages = [
  {
    url: "/assets/achievements/paper_muj_dome.jpg",
    title: "Paper Presentation at Manipal University Jaipur",
    desc: "Mohit Sharma holding the paper presentation certificate in front of MUJ dome.",
    badge: "MUJ Certificate"
  },
  {
    url: "/assets/achievements/paper_piet_podium.jpg",
    title: "Keynote Presentation at PIET",
    desc: "Presenting the research paper at Poornima Institute of Engineering and Technology.",
    badge: "Keynote Speech"
  },
  {
    url: "/assets/achievements/paper_piet_hall.jpg",
    title: "Conference Committee Session",
    desc: "Pitching research findings in front of the international committee panel at PIET.",
    badge: "Committee Review"
  },
  {
    url: "/assets/achievements/paper_icracs_certificate.jpg",
    title: "ICRACS Certificate of Appreciation",
    desc: "Official Certificate of Appreciation for paper presentation at 3rd ICRACS-2026.",
    badge: "Certificate"
  },
  {
    url: "/assets/achievements/paper_muj_stage.jpg",
    title: "Stage Presentation at MUJ",
    desc: "Awarded certificate at the International Conference on Applied Scientific Computational Intelligence using Digital Twins.",
    badge: "Presentation Award"
  }
];

const aicImages = [
  {
    url: "/assets/achievements/aic_incubation_letter.jpg",
    title: "AIC Pre-Incubation Sanction Letter",
    desc: "Official sanction letter for startup 'Pixellyrics' from AIC MUJ Incubation Foundation.",
    badge: "AIC Sanction Letter"
  }
];

const ecellImages = [
  {
    url: "/assets/achievements/ecell_pitch_day.jpg",
    title: "MUJ Pitch Day Showcase",
    desc: "First prize and pre-incubation showcase at MUJ Pitch Day.",
    badge: "Pitch Day"
  },
  {
    url: "/assets/achievements/ecell_pixellyrics_letter.jpg",
    title: "PIXELLYRICS Pre-Incubation Letter",
    desc: "Official pre-incubation sanction letter for PIXELLYRICS from Directorate of E-Cell.",
    badge: "Sanction Letter"
  },
  {
    url: "/assets/achievements/ecell_pitch_session.jpg",
    title: "Pitching Session with Directors",
    desc: "Presenting startup metrics to E-Cell Panel and Judges.",
    badge: "Mentorship"
  },
  {
    url: "/assets/achievements/ecell_elite_party_letter.jpg",
    title: "The Elite Party Sanction Letter",
    desc: "Sanction letter for 'The Elite Party' from Directorate of E-Cell.",
    badge: "Sanction Letter"
  }
];

const achievementsList = [
  {
    icon: <FaTrophy className="text-3xl text-yellow-400" />,
    title: "Hackathon Winner",
    event: "Hackathon Competition, Xavier Institute of Management & Informatics (XIMI)",
    location: "(XIMI),Jaipur, India",
    date: "2026",
    desc: "First prize winner in a highly competitive regional tech hackathon.",
    glow: "rgba(234, 179, 8, 0.15)",
  },
  {
    icon: <FaMedal className="text-3xl text-cyan-400" />,
    title: "2nd Prize Innovation Award",
    event: "Innovative IQ, Inter-Departmental Innovation Event",
    location: "Manipal University Jaipur,india",
    date: "April 2026",
    desc: "Co-organized by E-Cell, AIC & Bureau of Indian Standards.",
    glow: "rgba(6, 182, 212, 0.15)",
  },
  {
    icon: <FaPercent className="text-3xl text-purple-400" />,
    title: "94.68 Percentile in NTCE",
    event: "National Think Wonders Competitive Exam (NTCE)",
    location: "National Level",
    date: "2025",
    desc: "Earned Certificate of Merit for ranking in the top percentiles nationwide.",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: <FaFileAlt className="text-3xl text-emerald-400" />,
    title: "Academic Papers Published",
    event: "International Conferences",
    location: "PIET Jaipur & Manipal university jaipur",
    date: "2025 - 2026",
    desc: "Authored and presented multiple research papers in AI, Digital Twin, and Smart Cities in Machine Learning.",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: <FaRocket className="text-3xl text-blue-400" />,
    title: "Double E-Cell Incubation",
    event: "Entrepreneurship Cell (E-Cell MUJ)",
    location: "MUJ E-Cell, Jaipur",
    date: "2025 - 2026",
    desc: "Successfully qualified two distinct startup concepts for early validation and acceleration.",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: <FaLightbulb className="text-3xl text-pink-400" />,
    title: "Startup Pre-Incubation (AIC)",
    event: "Atal Incubation Centre (AIC-MUJ)",
    location: "MUJ Atal Incubation Center, jaipur",
    date: "2026",
    desc: "Pre-incubated a novel startup idea targeting real-world application domains.",
    glow: "rgba(244, 114, 182, 0.15)",
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

export default function Achievements() {
  const [activeGallery, setActiveGallery] = useState(null); // 'hackathon' | 'innovation' | null
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentImages = activeGallery === "hackathon" ? hackathonImages : activeGallery === "innovation" ? innovationImages : activeGallery === "ntce" ? ntceImages : activeGallery === "paper" ? paperImages : activeGallery === "aic" ? aicImages : activeGallery === "ecell" ? ecellImages : [];

  const handleNav = (newIdx, dir) => {
    setDirection(dir);
    setActiveImgIdx(newIdx);
  };

  // 3-Second Auto-Flip Effect
  useEffect(() => {
    if (!activeGallery || currentImages.length === 0) return;
    
    const timer = setTimeout(() => {
      handleNav((activeImgIdx + 1) % currentImages.length, 1);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [activeGallery, activeImgIdx, currentImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeGallery || currentImages.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveGallery(null);
      if (e.key === "ArrowRight") {
        handleNav((activeImgIdx + 1) % currentImages.length, 1);
      }
      if (e.key === "ArrowLeft") {
        handleNav((activeImgIdx - 1 + currentImages.length) % currentImages.length, -1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery, activeImgIdx, currentImages.length]);

  return (
    <section
      id="achievements"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-amber-500/22 blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-red-600/22 blur-[90px] animate-pulse delay-1000" />
        
        {/* Spinning Gold Halo Ring 1 */}
        <div 
          className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full border border-amber-500/35 opacity-80"
          style={{
            animation: "supernova-spin 25s linear infinite",
            transformOrigin: "center center",
          }}
        />
        {/* Spinning Red Halo Ring 2 */}
        <div 
          className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full border border-dashed border-red-500/20 opacity-80"
          style={{
            animation: "supernova-spin-reverse 35s linear infinite",
            transformOrigin: "center center",
          }}
        />

        {/* Rising light pillars */}
        <div 
          className="absolute bottom-0 left-1/4 w-[2px] h-[70vh] bg-gradient-to-t from-amber-500/40 via-amber-500/10 to-transparent"
          style={{ animation: "pulse 6s ease-in-out infinite" }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-[2px] h-[55vh] bg-gradient-to-t from-red-500/35 via-red-500/10 to-transparent"
          style={{ animation: "pulse 8s ease-in-out infinite 2s" }}
        />
      </div>

      <style>{`
        @keyframes supernova-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes supernova-spin-reverse {
          0% { transform: rotate(360deg) scale(1.05); }
          50% { transform: rotate(180deg) scale(0.95); }
          100% { transform: rotate(0deg) scale(1.05); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Milestones Reached
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Achievements & Awards
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((ach, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group flex flex-col justify-between"
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `0 8px 30px ${ach.glow}`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
            >
              {/* Glow Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 90% 10%, ${ach.glow}, transparent 50%)`,
                }}
              />

              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {ach.icon}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {ach.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-purple-400 font-semibold mb-3 leading-tight">{ach.event}</p>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {ach.desc}
                  </p>
                </div>

                <div>
                  {/* Preview Glimpse Button for Hackathon, Innovation, NTCE, Academic Papers, E-Cell, and AIC cards */}
                  {(ach.title === "Hackathon Winner" || 
                    ach.title === "2nd Prize Innovation Award" || 
                    ach.title === "94.68 Percentile in NTCE" ||
                    ach.title === "Academic Papers Published" ||
                    ach.title === "Double E-Cell Incubation" ||
                    ach.title === "Startup Pre-Incubation (AIC)") && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveGallery(
                          ach.title === "Hackathon Winner" ? "hackathon" : 
                          ach.title === "2nd Prize Innovation Award" ? "innovation" : 
                          ach.title === "94.68 Percentile in NTCE" ? "ntce" : 
                          ach.title === "Academic Papers Published" ? "paper" : 
                          ach.title === "Double E-Cell Incubation" ? "ecell" :
                          "aic"
                        );
                        setActiveImgIdx(0);
                      }}
                      className="mt-2 w-full py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/35 hover:bg-yellow-500/20 text-yellow-400 text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer shadow-md mb-3"
                    >
                      <FaEye size={12} />
                      <span>Preview Glimpse</span>
                    </button>
                  )}

                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-gray-400 flex justify-between">
                    <span>Location:</span>
                    <span className="text-white">{ach.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen slideshow lightbox with 3D Y-axis flips */}
      <AnimatePresence>
        {activeGallery !== null && currentImages.length > 0 && (
          <motion.div
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGallery(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#080519]/95 flex flex-col"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveGallery(null)}
                className="absolute top-4 right-4 z-[265] p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <FaTimes size={14} />
              </button>

              {/* Prev Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIdx = (activeImgIdx - 1 + currentImages.length) % currentImages.length;
                  handleNav(prevIdx, -1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-yellow-400/50 hover:text-yellow-400 transition-all cursor-pointer"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Next Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIdx = (activeImgIdx + 1) % currentImages.length;
                  handleNav(nextIdx, 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-yellow-400/50 hover:text-yellow-400 transition-all cursor-pointer"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Image Viewport with 3D Flip Transitions */}
              <div 
                className="w-full flex items-center justify-center bg-black min-h-[350px] relative overflow-hidden py-8 px-12" 
                style={{ perspective: "1200px" }}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeImgIdx}
                    custom={direction}
                    variants={flipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={currentImages[activeImgIdx].url}
                      alt={currentImages[activeImgIdx].title}
                      className="max-h-[65vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption details & Pagination Dots */}
              <div className="p-6 bg-[#080519] border-t border-white/5 text-center z-10 flex flex-col items-center gap-3">
                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {currentImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleNav(dotIdx, dotIdx > activeImgIdx ? 1 : -1)}
                      className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        width: activeImgIdx === dotIdx ? "18px" : "6px",
                        background: activeImgIdx === dotIdx ? "#fbbf24" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-yellow-400 tracking-wider">
                    {currentImages[activeImgIdx].badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {currentImages[activeImgIdx].title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 max-w-xl mx-auto leading-relaxed">
                    {currentImages[activeImgIdx].desc}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
