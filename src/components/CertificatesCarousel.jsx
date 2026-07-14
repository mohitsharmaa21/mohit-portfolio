import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../data/certificates";
import ParticleBackground from "./ParticlesBackground";

export default function CertificatesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsPerView = () => {
    if (windowWidth < 640) return 1;  // Mobile
    if (windowWidth < 1024) return 2; // Tablet
    return 4;                         // Desktop
  };

  const cpv = getCardsPerView();
  const total = certificates.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Generate visible list window supporting wrapping
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < cpv; i++) {
      indices.push((activeIndex + i) % total);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  // Escape key listener for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="certifications"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex flex-col items-center justify-center border-t border-white/5"
    >
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.08); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(40px) rotate(90deg); }
        }
      `}</style>

      {/* Twinkling star particle background */}
      <ParticleBackground />

      {/* Premium drifting color nebula clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Gold cloud */}
        <div 
          className="absolute -top-20 left-1/4 w-[480px] h-[480px] rounded-full mix-blend-screen opacity-45 blur-[110px]"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.5) 0%, rgba(217,119,6,0.15) 60%, transparent 100%)",
            animation: "float-slow 20s ease-in-out infinite",
          }}
        />
        {/* Rose Red cloud */}
        <div 
          className="absolute bottom-10 left-10 w-[520px] h-[520px] rounded-full mix-blend-screen opacity-40 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(225,29,72,0.45) 0%, rgba(225,29,72,0.12) 60%, transparent 100%)",
            animation: "float-medium 25s ease-in-out infinite",
          }}
        />
        {/* Purple/Teal cloud */}
        <div 
          className="absolute top-1/3 -right-20 w-[650px] h-[650px] rounded-full mix-blend-screen opacity-45 blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(6,182,212,0.15) 60%, transparent 100%)",
            animation: "float-slow 22s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold pb-3 tracking-tight">
            Premium <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Certificates</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Each certificate presented in an elegant envelope design — hover to reveal the certificate.
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative w-full flex items-center justify-center py-10 px-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:-left-6 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] cursor-pointer"
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={16} />
          </button>

          {/* Cards Row Viewport */}
          <div className="w-full overflow-visible py-4">
            <div 
              className="grid gap-6 transition-all duration-500"
              style={{ gridTemplateColumns: `repeat(${cpv}, minmax(0, 1fr))` }}
            >
              {visibleIndices.map((certIdx, i) => {
                const cert = certificates[certIdx];
                const isActive = i === 0; // First card is active/raised like reference
                
                return (
                  <EnvelopeCard 
                    key={cert.id} 
                    cert={cert} 
                    isActive={isActive} 
                    onOpenModal={setSelectedCert} 
                  />
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:-right-6 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.35)] cursor-pointer"
            aria-label="Next Slide"
          >
            <FaChevronRight size={16} />
          </button>

        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: activeIndex === i ? "28px" : "8px",
                background: activeIndex === i 
                  ? "linear-gradient(to right, #00f2fe, #a855f7)" 
                  : "rgba(255,255,255,0.2)",
                boxShadow: activeIndex === i ? "0 0 10px rgba(6,182,212,0.5)" : "none",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#080519]/95"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes size={14} aria-hidden="true" />
              </button>

              {/* Certificate Image Viewport */}
              <div className="w-full p-2 bg-black/40 flex items-center justify-center min-h-[250px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-white/5"
                  loading="lazy"
                  width="800"
                  height="600"
                  onError={(e) => {
                    // Fallback to stylized mock cert in modal if image missing
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Certificate Details Info footer */}
              <div className="p-6 sm:p-8 border-t border-white/5 bg-[#080519] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    {selectedCert.platform || selectedCert.issuer}
                  </p>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400 font-mono">
                    <span>Date: {selectedCert.date}</span>
                    <span>ID: {selectedCert.credentialId}</span>
                  </div>
                </div>

                {selectedCert.link && selectedCert.link !== "ADD_LINKEDIN_OR_CERTIFICATE_URL" && (
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer"
                  >
                    Verify Credential <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ──────────────── Envelope Certificate Card ──────────────── */
function EnvelopeCard({ cert, isActive, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[370px] overflow-visible group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 1. Certificate Paper inside Envelope (Slides UP on hover/active) */}
      <div
        className="absolute top-0 left-[7.5%] w-[85%] h-[250px] bg-[#f9f7f1] rounded-t-2xl shadow-[0_-5px_15px_rgba(0,0,0,0.3)] z-10 transition-transform duration-500 border border-gray-300/40 p-2 overflow-hidden flex flex-col justify-between"
        style={{
          transform: isHovered || isActive
            ? "translateY(-75px) rotate(-1.5deg) scale(1.02)"
            : "translateY(-20px) scale(0.98)",
        }}
      >
        {/* Mock Certificate border line overlay */}
        <div className="w-full h-full border border-amber-800/20 p-3 rounded-t-xl flex flex-col items-center justify-between relative bg-gradient-to-b from-[#fcfbfa] to-[#f4f1e6]">
          <div className="w-16 h-[2px] bg-amber-800/30 mt-1" />
          
          <div className="text-center flex flex-col items-center gap-1.5">
            <span className="text-[7px] tracking-[0.2em] font-serif text-amber-800 uppercase">Certificate of Achievement</span>
            
            {/* stamp */}
            <div className="w-7 h-7 rounded-full bg-red-800/80 shadow-md flex items-center justify-center text-[10px] text-amber-400 font-serif border border-amber-600/30">
              H
            </div>
            
            <span className="text-[6px] text-gray-500 font-mono italic">THIS IS PRESENTED TO</span>
            <span className="text-[8px] font-bold text-gray-800 uppercase tracking-wide">Mohit Sharma</span>
          </div>

          <div className="w-full flex justify-between px-2 pb-1 border-t border-amber-800/10 pt-1">
            <span className="text-[5px] text-gray-400 font-mono">Issuer: {cert.issuer}</span>
            <span className="text-[5px] text-gray-400 font-mono">Verified ID</span>
          </div>

          {/* Real image overlay */}
          {cert.image && (
            <img
              src={cert.image}
              alt={cert.title}
              className="absolute inset-0 w-full h-full object-cover rounded-t-xl z-20 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              width="240"
              height="250"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          )}
        </div>
      </div>

      {/* 2. Envelope Front Face (quadratic curve cap + body) */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] z-20 pointer-events-auto">
        
        {/* Envelope Top Curved Flap (matches base gradient colorStart) */}
        <svg 
          className="absolute -top-[23px] left-0 w-full h-6 filter drop-shadow-[0_-5px_5px_rgba(0,0,0,0.35)]" 
          viewBox="0 0 240 24" 
          preserveAspectRatio="none"
        >
          <path d="M 0,24 Q 120,-2 240,24 Z" fill={cert.colorStart} />
        </svg>

        {/* Envelope Body */}
        <div
          className="w-full h-full rounded-b-2xl border-x border-b p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300"
          style={{
            background: `linear-gradient(to bottom, ${cert.colorStart}dd, ${cert.colorEnd}f2)`,
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Subtle inside glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

          {/* Info Details */}
          <div className="flex flex-col gap-1.5 z-10">
            <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight tracking-wide min-h-[2.4em] line-clamp-2">
              {cert.title}
            </h4>
            
            <div className="flex items-center gap-1.5 text-[10px] text-white/80 font-medium">
              <span>{cert.issuer}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{cert.date}</span>
            </div>
          </div>

          {/* View Link Trigger */}
          <button
            onClick={() => onOpenModal(cert)}
            className="w-full py-2.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] cursor-pointer"
          >
            <span>View</span>
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </button>

        </div>
      </div>

    </div>
  );
}
