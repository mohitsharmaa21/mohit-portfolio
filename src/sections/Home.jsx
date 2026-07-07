import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaFileLines } from "react-icons/fa6";
import { SiKaggle, SiOrcid } from "react-icons/si";
import mohitProfile from "../assets/mohit_profile.jpg";
import ParticleBackground from "../components/ParticlesBackground";

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/mohitsharmaa21" },
  { Icon: SiKaggle, label: "Kaggle", href: "https://www.kaggle.com/mohitsharma7231" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma2005" },
  { Icon: SiOrcid, label: "ORCID", href: "https://orcid.org/0009-0007-3823-0898" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(6,182,212,0.9)) drop-shadow(0 0 18px rgba(168,85,247,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const Home = React.forwardRef((props, ref) => {
  const roles = useMemo(
    () => [
      "Machine Learning Engineer",
      "AI Developer",
      "Data Scientist",
      "Data Science Specialist",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typing effect logic
  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full relative overflow-hidden bg-black flex items-center"
    >
      <ParticleBackground />

      {/* gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-[500px] max-h-[500px]
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2]
          opacity-30 sm:opacity-20 md:opacity-10 
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        />
        <div
          className="absolute bottom-0 right-0 
          w-[70vw] sm:w-[50vw] md:w-[40vw] 
          h-[70vw] sm:h-[50vw] md:h-[40vw] 
          max-w-[500px] max-h-[500px] 
          rounded-full 
          bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] 
          opacity-40 sm:opacity-30 
          blur-[100px] sm:blur-[130px] md:blur-[150px] 
          animate-pulse delay-500"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* left */}
        <motion.div
          className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left relative"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div>
            {/* typing role text */}
            <motion.div
              className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-400 tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span>{roles[index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-cyan-400 animate-pulse align-middle"
                style={{ height: "1em" }}
              />
            </motion.div>

            {/* name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hello, I&apos;m
              <br />
              <span className="text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Mohit Sharma
              </span>
            </motion.h1>

            {/* description */}
            <motion.p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Data Science student at Manipal University Jaipur specializing in Machine Learning, 
              Deep Learning, and MLOps deployment. Turning raw datasets into predictive, production-ready AI models.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-base font-semibold text-white 
                bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
                shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/Mohit_Resume_updated.pdf"
                download
                className="px-6 py-3 rounded-full text-base font-semibold text-black bg-white 
                hover:bg-gray-200 shadow-lg hover:scale-105 transition-all duration-300"
              >
                My Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-base font-semibold text-white border border-white/20
                hover:bg-white/10 hover:border-white/40 shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              className="mt-8 flex gap-6 text-3xl justify-center lg:justify-start"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* right - Circular Profile with glowing orbit animations */}
        <motion.div
          className="col-span-1 lg:col-span-5 hidden lg:flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="relative w-[360px] h-[360px] flex items-center justify-center">
            {/* Glowing Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 opacity-20 blur-[30px] animate-pulse" />

            {/* Main Avatar Wrapper */}
            <div 
              className="absolute inset-8 rounded-full overflow-hidden border-[3px] border-cyan-400/30 bg-gray-900 shadow-[0_0_40px_rgba(6,182,212,0.3)] group"
              style={{ willChange: "transform" }}
            >
              <img
                src={mohitProfile}
                alt="Mohit Sharma profile photo"
                className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Home;
