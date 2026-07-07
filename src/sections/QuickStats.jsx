import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate, FaFileAlt, FaGlobe } from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
    label: "Academic CGPA",
    value: "9.60 / 10.0",
    desc: "BCA Data Science, MUJ",
    glow: "rgba(34, 211, 238, 0.15)",
  },
  {
    icon: <FaBriefcase className="text-3xl text-purple-400" />,
    label: "Data Science Internship",
    value: "Celebal Technologies",
    desc: "Onsite (May'26 - Aug'26)",
    glow: "rgba(192, 132, 252, 0.15)",
  },
  {
    icon: <FaCode className="text-3xl text-emerald-400" />,
    label: "Applied ML Projects",
    value: "ML + DL + Deployment",
    desc: "End-to-End Solutions",
    glow: "rgba(52, 211, 153, 0.15)",
  },
  {
    icon: <FaFileAlt className="text-3xl text-amber-400" />,
    label: "Published Patent",
    value: "Indian Patent Published",
    desc: "VANETs Grey-Hole Detection",
    glow: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: <FaGlobe className="text-3xl text-blue-400" />,
    label: "Research & Publications",
    value: "3 Conference Papers",
    desc: "AI, DL & Digital Twins",
    glow: "rgba(96, 165, 250, 0.15)",
  },
  {
    icon: <FaCertificate className="text-3xl text-pink-400" />,
    label: "Professional Certifications",
    value: "NPTEL, Cisco, Databricks",
    desc: "Cloud, Java & Data Science",
    glow: "rgba(244, 114, 182, 0.15)",
  },
];

export default function QuickStats() {
  return (
    <section
      id="stats"
      className="relative py-20 bg-black text-white overflow-hidden w-full flex items-center justify-center"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/5 blur-[150px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Quick Overview
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Key Achievements & Stats
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group"
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: `0 8px 30px ${stat.glow}`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
            >
              {/* Background gradient spotlight on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 80% 20%, ${stat.glow}, transparent 50%)`,
                }}
              />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                  <p className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.value}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
