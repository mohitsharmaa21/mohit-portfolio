import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiOrcid } from "react-icons/si";

const profiles = [
  {
    icon: <FaGithub className="text-4xl text-white" />,
    name: "GitHub Profile",
    desc: "Explore machine learning repositories, deep learning models, and production deployment scripts.",
    href: "https://github.com/mohitsharmaa21",
    color: "from-gray-800 to-black",
    glow: "rgba(255, 255, 255, 0.15)",
    actionText: "Visit GitHub",
  },
  {
    icon: <SiKaggle className="text-4xl text-cyan-400" />,
    name: "Kaggle Profile",
    desc: "View predictive modeling notebooks, competitive analytics solutions, and dataset insights.",
    href: "https://www.kaggle.com/mohitsharma7231",
    color: "from-cyan-950 to-black",
    glow: "rgba(6, 182, 212, 0.2)",
    actionText: "Visit Kaggle",
  },
  {
    icon: <FaLinkedin className="text-4xl text-blue-500" />,
    name: "LinkedIn Network",
    desc: "Connect for professional networking, research collaborations, and project discussions.",
    href: "https://www.linkedin.com/in/mohit-sharma2005",
    color: "from-blue-950 to-black",
    glow: "rgba(59, 130, 246, 0.2)",
    actionText: "Connect on LinkedIn",
  },
  {
    icon: <SiOrcid className="text-4xl text-lime-400" />,
    name: "ORCID Record",
    desc: "View verified academic paper publications, conference presentations, and research credentials.",
    href: "https://orcid.org/0009-0007-3823-0898",
    color: "from-lime-950 to-black",
    glow: "rgba(163, 230, 53, 0.2)",
    actionText: "View ORCID iD",
  },
];

export default function ProfileLinks() {
  return (
    <section
      id="profiles"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Digital Profiles
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect With Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={i}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${profile.color} backdrop-blur-md overflow-hidden flex flex-col justify-between group`}
              style={{
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: `0 10px 30px ${profile.glow}`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
            >
              {/* Card overlay shine */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${profile.glow}, transparent 70%)`,
                }}
              />

              <div>
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-300">
                  {profile.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {profile.name}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  {profile.desc}
                </p>
              </div>

              <div className="text-xs text-cyan-400 font-semibold flex items-center gap-1.5 justify-end">
                <span>{profile.actionText}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
