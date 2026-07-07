import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaNetworkWired, FaCheckCircle } from "react-icons/fa";

export default function Patent() {
  const trustParameters = [
    { name: "Packet Forwarding Consistency", desc: "Monitors packet transmission behavior to identify dropping patterns." },
    { name: "Message Integrity Validation", desc: "Ensures nodes do not alter routing details or message contents." },
    { name: "Dynamic Node Reputation Scoring", desc: "Updates reputation ratings in real-time based on cooperative metrics." },
    { name: "VANET Network Security Protection", desc: "Safeguards vehicle-to-vehicle communication reliability." },
    { name: "Packet Delivery Improvement", desc: "Optimizes throughput and significantly reduces network packet loss." },
  ];

  return (
    <section
      id="patent"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      {/* Background glow behind the patent showcase */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-purple-500/10 via-cyan-500/5 to-transparent blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <motion.p
            className="text-purple-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Intellectual Property
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Patent Publication
          </motion.h2>
        </div>

        {/* Premium Neon Border Glow Card */}
        <motion.div
          className="relative rounded-3xl border border-purple-500/30 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between relative z-10">
            {/* Left side info */}
            <div className="w-full lg:w-3/5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold mb-6">
                <FaNetworkWired /> Published Indian Patent
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                TBNDG: Trust-Based Malicious Node Detection System for Grey-Hole Attacks in Vehicular Ad Hoc Networks (VANETs)
              </h3>

              <div className="flex items-center gap-3 text-gray-300 text-sm mb-6 bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
                <span className="font-semibold text-cyan-400">Application No:</span>
                <span className="font-mono bg-black/40 px-2.5 py-0.5 rounded text-white">202611039350 A</span>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Proposed a comprehensive trust-based mitigation and detection framework for VANETs. By scoring node behavior across multiple dimensions, the system secures vehicle-to-vehicle networks against selective dropping (grey-hole) attacks, ensuring safe routing and minimized message delivery delays.
              </p>

              {/* Patent Preview Button */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="https://drive.google.com/file/d/1g0FnakC6et6dqSbFhjkqvDGhjcw97FXW/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white border border-purple-500/40 relative overflow-hidden group/btn"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(6,182,212,0.15))",
                    boxShadow: "0 0 20px rgba(168,85,247,0.25), inset 0 0 20px rgba(168,85,247,0.05)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(6,182,212,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {/* Shine on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)" }} />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  <span className="relative z-10">Preview Patent</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Right side list of parameters */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <FaShieldAlt className="text-purple-400" /> Trust Parameters
              </h4>
              <div className="space-y-3">
                {trustParameters.map((param, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-sm text-white">{param.name}</h5>
                      <p className="text-xs text-gray-400 mt-0.5">{param.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
