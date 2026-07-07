import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { skillCategories, featuredSkills } from "../data/skills";

const BADGE_STYLES = {
  Hot:    { bg: "rgba(239,68,68,0.2)",   border: "rgba(239,68,68,0.5)",   text: "#f87171", label: "🔥 Hot"    },
  ML:     { bg: "rgba(168,85,247,0.2)",  border: "rgba(168,85,247,0.5)",  text: "#c084fc", label: "🤖 ML"     },
  MLOps:  { bg: "rgba(245,158,11,0.2)",  border: "rgba(245,158,11,0.5)",  text: "#fbbf24", label: "♾️ MLOps"  },
  Deploy: { bg: "rgba(245,158,11,0.2)",  border: "rgba(245,158,11,0.5)",  text: "#fbbf24", label: "🚀 Deploy" },
  Cloud:  { bg: "rgba(14,165,233,0.2)",  border: "rgba(14,165,233,0.5)",  text: "#38bdf8", label: "☁️ Cloud"  },
  Key:    { bg: "rgba(6,182,212,0.18)",  border: "rgba(6,182,212,0.5)",   text: "#22d3ee", label: "⭐ Key"    },
  Core:   { bg: "rgba(16,185,129,0.18)", border: "rgba(16,185,129,0.5)",  text: "#34d399", label: "✅ Core"   },
  Tool:   { bg: "rgba(148,163,184,0.15)",border: "rgba(148,163,184,0.4)", text: "#94a3b8", label: "🛠 Tool"   },
};

// All flat cards (for non-featured tabs)
const allCards = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({ ...s, category: cat.category, color: cat.color }))
);

const FEATURED_CARDS = featuredSkills;

const AUTO_SLIDE_FEATURED_MS = 1400; // faster for featured
const AUTO_SLIDE_MS          = 2000;

function useCardsPerView() {
  const [cpv, setCpv] = useState(5);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setCpv(2);
      else if (window.innerWidth < 768)  setCpv(3);
      else if (window.innerWidth < 1024) setCpv(4);
      else                               setCpv(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cpv;
}

export default function TechStackCarousel() {
  const cpv = useCardsPerView();

  // "Featured" is the default starting tab
  const categories = ["Featured", "All", ...skillCategories.map((c) => c.category)];
  const [activeCat,      setActiveCat]      = useState("Featured");
  const [filteredIndex,  setFilteredIndex]  = useState(0);
  const [direction,      setDirection]      = useState(1);
  const [paused,         setPaused]         = useState(false);
  const intervalRef = useRef(null);

  // Derive the visible card pool
  const cardPool = activeCat === "Featured"
    ? FEATURED_CARDS
    : activeCat === "All"
    ? allCards
    : allCards.filter((c) => c.category === activeCat);

  const filteredMax = Math.max(0, cardPool.length - cpv);

  // Reset index when category changes
  useEffect(() => { setFilteredIndex(0); setDirection(1); }, [activeCat]);

  const goNext = useCallback(() => {
    setDirection(1);
    setFilteredIndex((i) => (i >= filteredMax ? 0 : i + 1));
  }, [filteredMax]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setFilteredIndex((i) => (i <= 0 ? filteredMax : i - 1));
  }, [filteredMax]);

  // Auto-slide — faster on Featured tab
  useEffect(() => {
    if (paused || cardPool.length <= cpv) return;
    const ms = activeCat === "Featured" ? AUTO_SLIDE_FEATURED_MS : AUTO_SLIDE_MS;
    intervalRef.current = setInterval(goNext, ms);
    return () => clearInterval(intervalRef.current);
  }, [paused, goNext, cardPool.length, cpv, activeCat]);

  const visibleCards = cardPool.slice(filteredIndex, filteredIndex + cpv);

  // Scan-line overlay
  const scanKeyframes = `
    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes shimmer-badge {
      0%, 100% { opacity: 0.8; }
      50%       { opacity: 1;   }
    }
  `;

  return (
    <section
      id="skills"
      className="relative py-24 bg-black text-white overflow-hidden border-t border-white/5"
    >
      <style>{scanKeyframes}</style>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[130px] animate-pulse delay-700" />
        {/* Scan-line grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.15) 2px, rgba(0,255,255,0.15) 4px)" }}
        />
        <div
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          style={{ animation: "scanline 6s linear infinite" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Tech Playground
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-400 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            Data Science · Machine Learning · AI & Deployment Tools
          </motion.p>
        </div>

        {/* Category filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => {
            const catData = skillCategories.find((c) => c.category === cat);
            const isFeatured = cat === "Featured";
            const color = isFeatured ? "#f59e0b" : (catData?.color ?? "#06b6d4");
            const active = activeCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="relative px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 flex items-center gap-1.5"
                style={{
                  borderColor: active ? color : "rgba(255,255,255,0.1)",
                  color:       active ? color : "rgba(255,255,255,0.5)",
                  background:  active ? `${color}22`  : "transparent",
                  boxShadow:   active ? `0 0 14px ${color}44` : "none",
                  transform:   active ? "scale(1.05)" : "scale(1)",
                }}
              >
                {isFeatured && <FaStar className="text-[9px]" />}
                {cat}
                {isFeatured && active && (
                  <span
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400"
                    style={{ boxShadow: "0 0 6px #f59e0b", animation: "shimmer-badge 1.2s ease-in-out infinite" }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Active tab info banner */}
        <AnimatePresence mode="wait">
          {activeCat === "Featured" && (
            <motion.div
              key="featured-banner"
              className="mb-8 text-center"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border"
                style={{
                  background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(168,85,247,0.10))",
                  borderColor: "rgba(245,158,11,0.3)",
                  color: "#fbbf24",
                }}
              >
                <FaStar className="text-amber-400 text-[10px]" />
                Showcasing top skills — ML, MLOps & Deployment highlighted
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"
                  style={{ animation: "shimmer-badge 1s ease-in-out infinite" }}
                />
              </div>
            </motion.div>
          )}
          {activeCat === "MLOps & Deployment" && (
            <motion.div
              key="mlops-banner"
              className="mb-8 text-center"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold border"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  borderColor: "rgba(245,158,11,0.3)",
                  color: "#fbbf24",
                }}
              >
                🚀 Production deployment skills — Databricks · MLflow · Azure · REST APIs
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel viewport */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous skills"
            className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <FaChevronLeft size={13} />
          </button>

          {/* Cards row */}
          <div className="overflow-hidden px-1">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={filteredIndex + "-" + activeCat}
                className="grid gap-4"
                style={{ gridTemplateColumns: `repeat(${cpv}, minmax(0, 1fr))` }}
                initial={(dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 })}
                animate={{ opacity: 1, x: 0 }}
                exit={(dir)    => ({ opacity: 0, x: dir > 0 ? -80 : 80 })}
                custom={direction}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                {visibleCards.map((card, i) => (
                  <SkillCard
                    key={card.name + "-" + i}
                    card={card}
                    index={i}
                    isFeaturedTab={activeCat === "Featured"}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={goNext}
            aria-label="Next skills"
            className="absolute -right-4 sm:-right-7 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 text-white/70 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <FaChevronRight size={13} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 mx-auto max-w-xs h-[3px] rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #06b6d4, #a855f7)" }}
            animate={{ width: filteredMax > 0 ? `${((filteredIndex / filteredMax) * 100)}%` : "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: filteredMax + 1 }).slice(0, 12).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > filteredIndex ? 1 : -1); setFilteredIndex(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width:      filteredIndex === i ? "22px" : "7px",
                height:     "7px",
                background: filteredIndex === i
                  ? (activeCat === "Featured" ? "#f59e0b" : "#06b6d4")
                  : "rgba(255,255,255,0.18)",
                boxShadow: filteredIndex === i
                  ? `0 0 8px ${activeCat === "Featured" ? "#f59e0b" : "#06b6d4"}`
                  : "none",
              }}
            />
          ))}
        </div>

        {/* Card count */}
        <p className="text-center text-gray-600 text-xs mt-3">
          {filteredIndex * 1 + 1}–{Math.min(filteredIndex + cpv, cardPool.length)} of {cardPool.length} skills
        </p>
      </div>
    </section>
  );
}

/* ── Individual Skill Card ─────────────────────────────── */
function SkillCard({ card, index, isFeaturedTab }) {
  const [hovered, setHovered] = useState(false);
  const badgeInfo = card.badge ? BADGE_STYLES[card.badge] : null;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.055, duration: 0.38 }}
      className="relative group flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl overflow-hidden cursor-default select-none"
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))`
          : "rgba(255,255,255,0.04)",
        border: `1.5px solid ${hovered ? card.color + "77" : (isFeaturedTab && card.featured ? card.color + "33" : "rgba(255,255,255,0.07)")}`,
        backdropFilter: "blur(14px)",
        boxShadow: hovered
          ? `0 8px 32px ${card.color}44, 0 0 0 1px ${card.color}33, inset 0 0 24px ${card.color}0d`
          : isFeaturedTab
          ? `0 4px 20px ${card.color}18, inset 0 0 12px ${card.color}08`
          : "0 4px 15px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-7px)" : "translateY(0px)",
        transition: "all 0.32s cubic-bezier(0.34,1.56,0.64,1)",
        minHeight: "145px",
      }}
    >
      {/* Featured tab: pulsing top accent line */}
      {isFeaturedTab && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
            opacity: hovered ? 1 : 0.5,
            boxShadow: hovered ? `0 0 10px ${card.color}` : "none",
            transition: "all 0.3s ease",
          }}
        />
      )}

      {/* Shine sweep on hover */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
        style={{
          background: hovered
            ? "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.07) 50%, transparent 75%)"
            : "none",
          transition: "background 0.4s ease",
        }}
      />

      {/* Ambient glow orb */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: hovered
            ? `radial-gradient(circle at 50% 50%, ${card.color}28 0%, transparent 65%)`
            : "none",
          transition: "background 0.3s ease",
        }}
      />

      {/* Badge (top-right) */}
      {badgeInfo && (
        <div
          className="absolute top-2 right-2 flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full border"
          style={{
            background:   badgeInfo.bg,
            borderColor:  badgeInfo.border,
            color:        badgeInfo.text,
            animation:    isFeaturedTab ? "shimmer-badge 2s ease-in-out infinite" : "none",
          }}
        >
          {badgeInfo.label}
        </div>
      )}

      {/* Emoji icon */}
      <span
        className="text-3xl sm:text-4xl z-10 transition-transform duration-300"
        style={{ transform: hovered ? "scale(1.22) rotate(-6deg)" : "scale(1)" }}
      >
        {card.icon}
      </span>

      {/* Skill name */}
      <p
        className="z-10 text-xs sm:text-sm font-bold text-center leading-tight"
        style={{ color: hovered ? card.color : "rgba(255,255,255,0.88)" }}
      >
        {card.name}
      </p>

      {/* Category badge */}
      <span
        className="z-10 text-[8px] sm:text-[9px] font-semibold px-2 py-0.5 rounded-full border"
        style={{
          color: card.color,
          borderColor: card.color + "44",
          background:  card.color + "14",
        }}
      >
        {card.category}
      </span>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-500"
        style={{
          width:      hovered ? "75%" : isFeaturedTab ? "30%" : "0%",
          background: `linear-gradient(90deg, transparent, ${card.color}, transparent)`,
          boxShadow:  hovered ? `0 0 10px ${card.color}` : "none",
          opacity:    isFeaturedTab ? 0.6 : 1,
        }}
      />
    </motion.div>
  );
}
