import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaFileLines } from "react-icons/fa6";
import { SiKaggle, SiOrcid } from "react-icons/si";

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/mohitsharmaa21",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.4)",
    bg: "rgba(226,232,240,0.08)",
  },
  {
    Icon: SiKaggle,
    label: "Kaggle",
    href: "https://www.kaggle.com/mohitsharma7231",
    color: "#20beff",
    glow: "rgba(32,190,255,0.45)",
    bg: "rgba(32,190,255,0.08)",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-sharma2005",
    color: "#0ea5e9",
    glow: "rgba(14,165,233,0.45)",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    Icon: SiOrcid,
    label: "ORCID",
    href: "https://orcid.org/0009-0007-3823-0898",
    color: "#a3e635",
    glow: "rgba(163,230,53,0.45)",
    bg: "rgba(163,230,53,0.08)",
  },
  {
    Icon: FaFileLines,
    label: "Resume",
    href: "https://drive.google.com/file/d/1xR7dOvLYjWXLquoOi4FGBPBq2HekyZ7a/view?usp=drive_link",
    color: "#c084fc",
    glow: "rgba(192,132,252,0.45)",
    bg: "rgba(192,132,252,0.08)",
  },
];

const Footer = () => {
  const [istTime, setIstTime] = useState("");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setIstTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - startTime) / 1000);
      setElapsedSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatElapsed = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    const pad = (num) => String(num).padStart(2, "0");
    if (hrs > 0) {
      return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
    }
    return `${pad(mins)}m ${pad(secs)}s`;
  };

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/5">

      {/* ── Animated green + blue background glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Strong left green blob */}
        <div
          className="absolute -left-32 bottom-0 w-[550px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16,185,129,0.55) 0%, rgba(5,150,105,0.3) 40%, transparent 75%)",
            filter: "blur(70px)",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        {/* Strong right blue/teal blob */}
        <div
          className="absolute -right-32 bottom-0 w-[600px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(6,182,212,0.5) 0%, rgba(14,116,144,0.3) 40%, transparent 75%)",
            filter: "blur(70px)",
            animation: "pulse 4s ease-in-out 1.5s infinite",
          }}
        />
        {/* Centre merge glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[250px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(6,182,212,0.2) 0%, rgba(16,185,129,0.15) 50%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
        {/* Subtle top fade so dark merges back to black smoothly */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #000 0%, transparent 40%, transparent 100%)" }}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 px-6 py-14 md:py-20 flex flex-col items-center text-center gap-7"
      >
        {/* Name */}
        <div className="w-full">
          <h1
            className="font-extrabold leading-none text-white select-none"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 6.5rem)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
              textShadow: "0 0 60px rgba(16,185,129,0.2), 0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Mohit Sharma
          </h1>
        </div>

        {/* Accent underline — green to cyan */}
        <div
          className="h-[3px] w-28 md:w-40 rounded-full"
          style={{ background: "linear-gradient(90deg, #10b981, #06b6d4, #3b82f6)" }}
        />

        {/* ── Premium social icon buttons ── */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {socials.map(({ Icon, label, href, color, glow, bg }) => (
            <motion.a
              key={label}
              href={href}
              onClick={(e) => {
                if (label === "Resume") {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-resume"));
                }
              }}
              aria-label={label}
              target={label === "Resume" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="relative flex flex-col items-center gap-1.5 group"
              whileHover="hover"
              initial="rest"
            >
              {/* Button circle */}
              <motion.div
                variants={{
                  rest: { scale: 1, y: 0, boxShadow: `0 0 0px ${glow}` },
                  hover: {
                    scale: 1.15,
                    y: -5,
                    boxShadow: `0 0 22px ${glow}, 0 0 40px ${glow}`,
                    transition: { type: "spring", stiffness: 320, damping: 16 },
                  },
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-colors duration-300"
                style={{
                  background: bg,
                  borderColor: `${color}33`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Shine sweep */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none overflow-hidden"
                  style={{ background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.08) 50%, transparent 65%)" }}
                />
                <motion.span
                  variants={{
                    rest:  { color: "rgba(255,255,255,0.6)" },
                    hover: { color: color, transition: { duration: 0.2 } },
                  }}
                  className="text-2xl md:text-3xl z-10"
                >
                  <Icon />
                </motion.span>
              </motion.div>

              {/* Label below */}
              <motion.span
                variants={{
                  rest:  { opacity: 0, y: 4 },
                  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                }}
                className="text-[10px] font-semibold"
                style={{ color }}
              >
                {label}
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Focus domains */}
        <p className="text-gray-300 text-sm md:text-base font-semibold tracking-widest">
          Data Science&nbsp;•&nbsp;Machine Learning&nbsp;•&nbsp;AI
        </p>

        {/* ── Motivational quote — highlighted like reference ── */}
        <div
          className="px-6 py-3 rounded-xl border"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(6,182,212,0.10))",
            borderColor: "rgba(16,185,129,0.25)",
            boxShadow: "0 0 20px rgba(16,185,129,0.08)",
          }}
        >
          <p
            className="text-sm md:text-base font-semibold italic"
            style={{
              background: "linear-gradient(90deg, #10b981, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            "Success is when preparation meets opportunity."
          </p>
        </div>

        {/* Bottom Bar: Timers on Left, Copyright in Center, Empty spacer on Right for desktop balance */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-8 pt-8 border-t border-white/5">
          {/* Left Col: Cyberpunk Tactical Timers */}
          <div className="flex justify-center md:justify-start order-1">
            <motion.div 
              whileHover={{ 
                scale: 1.03, 
                borderColor: "#fbbf24", // Yellow glow border on hover
                boxShadow: "0 0 20px rgba(251,191,36,0.3)" 
              }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
              className="flex items-center gap-4 sm:gap-6 p-3 px-5 border border-red-500/40 bg-[#0a0505] text-xs font-mono text-gray-300 rounded-none cursor-default select-none shadow-[0_0_15px_rgba(239,68,68,0.12)] transition-all duration-300 hover:text-white"
            >
              {/* IST Clock */}
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-400 font-extrabold uppercase tracking-wider text-[10px]">IST //</span>
                <span className="text-white font-black tracking-widest">{istTime || "00:00:00"}</span>
              </div>
              
              <div className="w-[1px] h-4 bg-red-500/20" />
              
              {/* Session Duration */}
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-red-500 font-extrabold uppercase tracking-wider text-[10px]">UPTIME //</span>
                <span className="text-white font-black tracking-widest">{formatElapsed(elapsedSeconds)}</span>
              </div>
            </motion.div>
          </div>

          {/* Center Col: Centered Copyright */}
          <div className="flex justify-center text-center order-2">
            <p className="text-xs text-gray-600">
              © 2026 Mohit Sharma. All rights reserved.
            </p>
          </div>

          {/* Right Col: Spacer for Symmetry on Desktop */}
          <div className="hidden md:block order-3" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
