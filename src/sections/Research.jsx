import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaGlobeAmericas, FaSpinner, FaTimes, FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

const publications = [
  {
    id: 1,
    icon: <FaBookOpen className="text-3xl text-cyan-400" />,
    displayTitle: "Review Paper Presentation & Publication",
    paperTitle: "MACHINE LEARNING IN SMART CITIES: APPLICATIONS, CHALLENGES AND FUTURE OPPORTUNITIES",
    conference: "ICRACS 2026 – 3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision, and Smart Systems",
    location: "Poornima Institute of Engineering and Technology(PIET), Jaipur, Rajasthan, India",
    date: "April 17 – 18, 2026",
    status: "Presented & publishing soon",
    glow: "cyan",
    abstract: "The rapid pace of urbanization has increased interest in creating Smart Cities as a means of addressing sustainability and improving infrastructure efficiency, and urban service delivery. With the increasing dominance of data-driven intelligence through Machine Learning (ML) in Smart City applications including transportation, energy management, public safety, health care, environmental sensing, and citizen participation this review presents an analytical synthesis of a number of ML enabled smart cities by providing information about the major applications, challenges, and research directions. Some of the primary challenges associated with these new ML-enabled Smart Cities include privacy of data, AI algorithmic bias, lack of explainable algorithms, the scalability of the algorithms, time constraints on real-time performance, interoperability, and governance issues. Additionally, this article also discusses future opportunities for using federated learning, edge artificial intelligence, explainable artificial intelligence, digital twins etc. and compares various ML-related techniques and emerging urban domains to identify gaps in the research and discovery pathways to build trustworthy, resilient, sustainable Smart City systems.",
    previewLink: "ADD_PAPER_PREVIEW_URL",
  },
  {
    id: 2,
    icon: <FaGlobeAmericas className="text-3xl text-purple-400" />,
    displayTitle: "International Conference Paper on Digital Twin",
    paperTitle: "Reimagining Reality: A Focused Review on Evolution, Enablers, and Future Trajectories of Digital Twin Intelligence",
    conference: "ASCI 2025 – International Conference on Applied Scientific Computational Intelligence using Digital Twins. Focusing on emerging technologies & applications in 'DIGITAL TWIN' systems.",
    location: "International Conference At Manipal university jaipur.",
    date: "December 16 – 17, 2025",
    status: "Presented & publishing soon",
    glow: "purple",
    abstract: "Digital Twin (DT) technology has become an important tool for creating real time digital versions of physical systems, helping industries monitor and improve their operations. This review explains what a Digital Twin is, how it evolved from basic digital models to fully connected bidirectional systems and how core technologies like IoT, Cloud Computing, AI and XR enable its functioning. The chapter also highlights how AI makes Digital Twins smarter by supporting prediction, fault detection and better decision making. Key challenges such as handling large data, system integration issues and security risks are discussed. Finally, the review explores how Digital Twins can reshape the future by improving efficiency, supporting automation and enabling more intelligent and adaptive systems across various sectors.",
    previewLink: "ADD_PAPER_PREVIEW_URL",
  },
  {
    id: 3,
    icon: <FaSpinner className="text-3xl text-emerald-400 animate-spin-slow" />,
    displayTitle: "ML & DL for Fake News Detection",
    paperTitle: "Detecting Digital Deception: A Machine Learning and Deep Learning Approach to Fake News Classification",
    conference: "A comprehensive study involving advanced data preprocessing, feature engineering, model training, and performance evaluation",
    location: "Targeting Q1/Q2 Scopus Indexed Journal",
    date: "Ongoing Project & Writing Phase",
    status: "In Progress",
    glow: "emerald",
    abstract: "The rapid dissemination of online information has made the detection of digital deception a critical social challenge. This project develops a comparative research evaluating machine learning and deep learning methodologies for identifying deceptive textual patterns. Contrasts NLP tokenization, TF-IDF vectorization, and word embeddings (Word2Vec) with classic machine classifiers (logistic regression, random forests) and recurrent neural networks (LSTMs). Provides performance benchmarks to optimize detection accuracy.",
    previewLink: "ADD_PAPER_PREVIEW_URL",
  }
];

const icracsImages = [
  {
    url: "/assets/achievements/paper_muj_dome.jpg",
    title: "Paper Certificate Showcase",
    desc: "Mohit Sharma holding the paper presentation certificate in front of MUJ dome.",
    badge: "ICRACS 2026"
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
  }
];

const dtImages = [
  {
    url: "/assets/achievements/dt_stage_presentation.jpg",
    title: "ASCI 2025 Award Stage",
    desc: "Mohit Sharma receiving the presentation certificate on stage from HOD Dr. Shilpa Sharma and program chairs at MUJ.",
    badge: "ASCI 2025"
  },
  {
    url: "/assets/achievements/dt_dome.jpg",
    title: "Certificate Showcase",
    desc: "Mohit Sharma holding the paper presentation certificate in front of Manipal University Jaipur main dome.",
    badge: "ASCI 2025"
  },
  {
    url: "/assets/achievements/dt_group_stage.jpg",
    title: "Presenters & Dignitaries Group Photo",
    desc: "ASCI-2025 International Conference group photo on stage with organizers and participants.",
    badge: "Conference Group"
  },
  {
    url: "/assets/achievements/dt_certificate.jpg",
    title: "Certificate of Participation",
    desc: "Official Certificate of Participation for paper titled 'Reimagining Reality' at ASCI-2025.",
    badge: "Certificate"
  }
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

function getGlowGradient(glow) {
  if (glow === "cyan") {
    return "conic-gradient(from 0deg, #06b6d4, #00f2fe, #06b6d4, #0052d4, #06b6d4)";
  }
  if (glow === "purple") {
    return "conic-gradient(from 0deg, #a855f7, #f43f5e, #a855f7, #6366f1, #a855f7)";
  }
  return "conic-gradient(from 0deg, #10b981, #34d399, #10b981, #059669, #10b981)";
}

export default function Research() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null); // 'icracs', 'digital_twin', or null
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentGalleryImages = activeGallery === "icracs" ? icracsImages : activeGallery === "digital_twin" ? dtImages : [];

  const handleNav = (newIdx, dir) => {
    setDirection(dir);
    setActiveImgIdx(newIdx);
  };

  // 3-Second Auto-Flip Effect
  useEffect(() => {
    if (!activeGallery || currentGalleryImages.length === 0) return;
    const timer = setTimeout(() => {
      handleNav((activeImgIdx + 1) % currentGalleryImages.length, 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeGallery, activeImgIdx, currentGalleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeGallery || currentGalleryImages.length === 0) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveGallery(null);
      if (e.key === "ArrowRight") {
        handleNav((activeImgIdx + 1) % currentGalleryImages.length, 1);
      }
      if (e.key === "ArrowLeft") {
        handleNav((activeImgIdx - 1 + currentGalleryImages.length) % currentGalleryImages.length, -1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery, activeImgIdx, currentGalleryImages.length]);

  return (
    <section
      id="research"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      <style>{`
        .premium-gold-btn {
          position: relative;
          border: 1.5px solid rgba(217, 119, 6, 0.65);
          background: linear-gradient(135deg, #0d0801 0%, #000000 100%);
          color: #fbbf24;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.72rem;
          overflow: hidden;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.15);
        }
        .premium-gold-btn:hover {
          color: #ffffff;
          border-color: #fbbf24;
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.55);
          transform: scale(1.02);
        }
        .premium-gold-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(251, 191, 36, 0.35) 30%,
            rgba(251, 191, 36, 0.55) 50%,
            rgba(251, 191, 36, 0.35) 70%,
            transparent
          );
          transform: skewX(-20deg);
          animation: gold-shine 3.2s infinite linear;
        }
        @keyframes gold-shine {
          0% { left: -150%; }
          32% { left: 150%; }
          100% { left: 150%; }
        }
      `}</style>

      {/* Background radial overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_30%,rgba(6,182,212,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_80%_70%,rgba(168,85,247,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Academic Contribution
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 drop-shadow pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Research Publications
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {publications.map((pub, i) => {
            const glowColor =
              pub.glow === "cyan"
                ? "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                : pub.glow === "purple"
                ? "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                : "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]";

            const badgeColor =
              pub.status === "Presented & publishing soon"
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";

            return (
              <motion.article
                key={i}
                className={`relative flex flex-col justify-between p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-lg transition-all duration-500 group ${glowColor}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-[290px] overflow-hidden flex flex-col justify-start mb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {pub.icon}
                    </div>
                    <span className={`text-[10px] font-semibold px-3 py-1 rounded-full ${badgeColor}`}>
                      {pub.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {pub.displayTitle}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {pub.conference}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Button Control Panel */}
                  <div className="mt-6 flex flex-col gap-3">
                    {/* Presentation Glimpse Button (1st button for Cards 1 and 2) */}
                    {(pub.displayTitle === "Review Paper Presentation & Publication" || 
                      pub.displayTitle === "International Conference Paper on Digital Twin") && (
                      <button
                        onClick={() => {
                          setActiveGallery(pub.id === 1 ? "icracs" : "digital_twin");
                          setActiveImgIdx(0);
                        }}
                        className="premium-gold-btn w-full py-2.5 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                      >
                        <FaEye size={12} className="text-amber-400 relative z-10 animate-pulse" />
                        <span className="relative z-10">Presentation Glimpse</span>
                      </button>
                    )}

                    {/* Combined Title & Abstract Button (2nd button) */}
                    <button
                      onClick={() => setSelectedPaper(pub)}
                      className={`w-full py-2.5 rounded-md border text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                        pub.glow === "cyan"
                          ? "border-cyan-500/20 bg-black/40 text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                          : pub.glow === "purple"
                          ? "border-purple-500/20 bg-black/40 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                          : "border-emerald-500/20 bg-black/40 text-gray-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/10 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                      }`}
                    >
                      Title & Abstract
                    </button>
 
                    {/* Paper Preview Link (3rd button) */}
                    {pub.previewLink && (
                      <button
                        onClick={() => {
                          if (pub.previewLink === "ADD_PAPER_PREVIEW_URL") {
                            alert("Paper preview link will be added here once published!");
                          } else {
                            window.open(pub.previewLink, "_blank", "noopener,noreferrer");
                          }
                        }}
                        className={`w-full py-2.5 rounded-md border text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                          pub.glow === "cyan"
                            ? "border-cyan-400/40 bg-cyan-500/5 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/15 hover:shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                            : pub.glow === "purple"
                            ? "border-purple-400/40 bg-purple-500/5 text-purple-400 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-500/15 hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                            : "border-emerald-400/40 bg-emerald-500/5 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/15 hover:shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                        }`}
                      >
                        <span>Paper Preview</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 mt-6 text-xs text-gray-400 flex flex-col gap-1">
                    <div className="flex justify-between gap-4">
                      <span>Venue:</span>
                      <span className="text-white font-medium text-right">{pub.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="text-white font-medium text-right">{pub.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Description Modal Popup */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPaper(null)}
          >
            <motion.div
              className={`relative w-full max-w-2xl overflow-hidden rounded-2xl border p-6 md:p-8 shadow-2xl`}
              style={{ 
                background: "rgba(10, 8, 5, 0.98)",
                borderColor: selectedPaper.glow === "cyan" ? "rgba(6,182,212,0.3)" : selectedPaper.glow === "purple" ? "rgba(168,85,247,0.3)" : "rgba(16,185,129,0.3)",
                boxShadow: selectedPaper.glow === "cyan" ? "0 0 40px rgba(6,182,212,0.15)" : selectedPaper.glow === "purple" ? "0 0 40px rgba(168,85,247,0.15)" : "0 0 40px rgba(16,185,129,0.15)"
              }}
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPaper(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
                <span>✨ Paper Details</span>
              </div>

              {/* 1. Paper Title */}
              <div className="mb-6">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Official Title</p>
                <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight uppercase">
                  {selectedPaper.paperTitle}
                </h3>
              </div>

              {/* 2. Abstract / Description */}
              <div className="border-t border-white/10 pt-4 mb-6">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Abstract / Topic Description</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedPaper.abstract}
                </p>
              </div>

              <div className="flex gap-4 text-xs text-gray-400 border-t border-white/10 pt-4">
                <div className="flex-1 bg-white/5 p-3 rounded-md border border-white/8">
                  <span className="block text-[10px] text-gray-500 uppercase font-semibold mb-1">Venue</span>
                  <span className="text-white font-medium">{selectedPaper.location}</span>
                </div>
                <div className="flex-1 bg-white/5 p-3 rounded-md border border-white/8">
                  <span className="block text-[10px] text-gray-500 uppercase font-semibold mb-1">Date</span>
                  <span className="text-white font-medium">{selectedPaper.date}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen presentation preview slideshow with Y-axis 3D flips */}
      <AnimatePresence>
        {activeGallery !== null && currentGalleryImages.length > 0 && (
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
                  const prevIdx = (activeImgIdx - 1 + currentGalleryImages.length) % currentGalleryImages.length;
                  handleNav(prevIdx, -1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-pointer"
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Next Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIdx = (activeImgIdx + 1) % currentGalleryImages.length;
                  handleNav(nextIdx, 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[260] p-4 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-pointer"
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
                      src={currentGalleryImages[activeImgIdx]?.url}
                      alt={currentGalleryImages[activeImgIdx]?.title}
                      className="max-h-[65vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption details & Pagination Dots */}
              <div className="p-6 bg-[#080519] border-t border-white/5 text-center z-10 flex flex-col items-center gap-3">
                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {currentGalleryImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => handleNav(dotIdx, dotIdx > activeImgIdx ? 1 : -1)}
                      className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        width: activeImgIdx === dotIdx ? "18px" : "6px",
                        background: activeImgIdx === dotIdx ? "#06b6d4" : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-cyan-400 tracking-wider">
                    {currentGalleryImages[activeImgIdx]?.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {currentGalleryImages[activeImgIdx]?.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 max-w-xl mx-auto leading-relaxed">
                    {currentGalleryImages[activeImgIdx]?.desc}
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
