import React from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaHandshake } from "react-icons/fa";

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      {/* Background gradients matching Leadership experience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-1/4 -right-10 w-[700px] h-[350px] rounded-full mix-blend-screen opacity-25 blur-[120px]"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.45) 0%, rgba(168,85,247,0.2) 60%, transparent 100%)",
            animation: "aurora-wind-comm 24s ease-in-out infinite",
            borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%",
          }}
        />
        <div 
          className="absolute -bottom-1/3 -left-10 w-[800px] h-[400px] rounded-full mix-blend-screen opacity-20 blur-[130px]"
          style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.3) 0%, rgba(225,29,72,0.15) 60%, transparent 100%)",
            animation: "aurora-wind-comm 30s ease-in-out infinite 3s",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          }}
        />
      </div>

      <style>{`
        @keyframes aurora-wind-comm {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          50% { transform: translate(-30px, 20px) rotate(5deg) scale(1.08); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-purple-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Leadership Beyond the Classroom
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow pb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Community Engagement
          </motion.h2>
        </div>

        {/* Two Glass Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card: Event Hosting & Anchoring */}
          <motion.div
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl overflow-hidden group flex flex-col justify-between"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: "rgba(6,182,212,0.3)",
              boxShadow: "0 10px 40px rgba(6,182,212,0.15)",
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold mb-6">
                Master of Ceremonies
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-3">
                <FaMicrophone className="text-cyan-400 animate-pulse" /> Event Hosting & Anchoring
              </h3>
              <p className="text-cyan-400 text-xs font-mono mb-4 uppercase tracking-widest">
                September 2025
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Hosted Fresher's Party (September 2025) as the Master of Ceremonies, coordinating stage flow, guest interactions, and event transitions while maintaining confidence under pressure.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">Key Highlights</h4>
              {[
                "Hosted Fresher's Party 2025",
                "Coordinated stage flow & cue sheets",
                "Maintained high energy & stage presence",
                "Interacted dynamically with guests",
                "Refined public speaking & verbal agility",
              ].map((highlight, hIdx) => (
                <motion.div
                  key={hIdx}
                  className="flex items-center gap-3 text-gray-300 text-xs bg-black/30 px-4 py-2.5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: hIdx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-cyan-400">✓</span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card: Volunteer Experience */}
          <motion.div
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl overflow-hidden group flex flex-col justify-between"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              borderColor: "rgba(168,85,247,0.3)",
              boxShadow: "0 10px 40px rgba(168,85,247,0.15)",
            }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-semibold mb-6">
                Community Service
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors duration-300 flex items-center gap-3">
                <FaHandshake className="text-purple-400" /> Volunteer Experience
              </h3>
              <p className="text-purple-400 text-xs font-mono mb-4 uppercase tracking-widest">
                University Events
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Actively volunteered for various events at Manipal University Jaipur, contributing to on-ground coordination, participant management, registration desks, hospitality, and logistics operations while collaborating with university organizing teams.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">Key Highlights</h4>
              {[
                "Event Management",
                "Registration Desk Support",
                "Coordination & Logistics",
                "Logistics Management Support",
                "Team Collaboration & Synergy",
              ].map((highlight, hIdx) => (
                <motion.div
                  key={hIdx}
                  className="flex items-center gap-3 text-gray-300 text-xs bg-black/30 px-4 py-2.5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: hIdx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-purple-400">✓</span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
