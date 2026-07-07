import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaPaintBrush, FaCalendarAlt, FaBullhorn, FaCheckCircle } from "react-icons/fa";

export default function Leadership() {
  const contributions = [
    {
      icon: <FaUsers className="text-xl text-cyan-400" />,
      text: "Led and managed the Design & Media team, delegating tasks and establishing content production timelines.",
    },
    {
      icon: <FaPaintBrush className="text-xl text-purple-400" />,
      text: "Managed comprehensive branding, content creation, and digital outreach assets for club events and initiatives.",
    },
    {
      icon: <FaBullhorn className="text-xl text-pink-400" />,
      text: "Collaborated closely with technical and organizing teams to translate complex concepts into clear, engaging visual designs.",
    },
    {
      icon: <FaCheckCircle className="text-xl text-emerald-400" />,
      text: "Monitored digital engagement metrics and feedback loop to iterate on social media content effectiveness.",
    },
  ];

  return (
    <section
      id="leadership"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shifting Aurora Bands */}
        <div 
          className="absolute -top-1/4 -left-10 w-[700px] h-[350px] rounded-full mix-blend-screen opacity-35 blur-[100px]"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.5) 0%, rgba(16,185,129,0.3) 50%, transparent 100%)",
            animation: "aurora-wind 22s ease-in-out infinite",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          }}
        />
        <div 
          className="absolute -bottom-1/3 -right-10 w-[800px] h-[400px] rounded-full mix-blend-screen opacity-40 blur-[110px]"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(168,85,247,0.25) 50%, transparent 100%)",
            animation: "aurora-wind 28s ease-in-out infinite 3s",
            borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%",
          }}
        />

        {/* Slow Solar Wind Flow Line */}
        <div 
          className="absolute top-1/2 left-0 w-full h-[150px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent skew-y-12"
          style={{
            animation: "pulse-slow 8s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes aurora-wind {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -20px) rotate(5deg) scale(1.08); }
          66% { transform: translate(-20px, 15px) rotate(-5deg) scale(0.95); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-purple-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Team Coordination
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Leadership Experience
          </motion.h2>
        </div>

        <motion.div
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Neon blob glow inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Summary card info */}
            <div className="w-full md:w-2/5 flex flex-col justify-between h-full">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold mb-6">
                  Extra-Curricular Head
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  Head, Design & Media Team
                </h3>
                <p className="text-purple-400 text-base font-semibold mb-4">
                  Centaurus Arena Club, MUJ
                </p>
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm mt-4 bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
                <FaCalendarAlt className="text-cyan-400" />
                <span>1 Year & 4 Months</span>
              </div>
            </div>

            {/* List of details */}
            <div className="w-full md:w-3/5 flex flex-col gap-5">
              <h4 className="text-lg font-bold text-white mb-1">Key Responsibilities & Impact</h4>
              <div className="space-y-4">
                {contributions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start bg-black/20 p-4 rounded-xl border border-white/5 hover:border-cyan-500/25 transition-colors duration-300"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 text-cyan-400">
                      {item.icon}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed pt-1">
                      {item.text}
                    </p>
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
