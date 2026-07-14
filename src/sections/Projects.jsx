import React from "react"; 
import { motion, useScroll, AnimatePresence, useTransform } from "framer-motion"; 

// Importing project images
import purchaseIntentImg from "../assets/purchase_intent.png";
import fakeNewsImg from "../assets/fake_news.png";

const MH3 = motion.h3; 

// Custom Hook: Detects if screen size matches "mobile"
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener?.("change", handler) || mql.addListener(handler); 

    setIsMobile(mql.matches);
    return () =>
      mql.removeEventListener?.("change", handler) || mql.removeListener(handler); 
  }, [query]);

  return isMobile; 
};

export default function Projects() {
  const isMobile = useIsMobile(); 

  // List of project objects (dynamic images based on screen size)
  const projects = React.useMemo(
    () => [
      {
        title: "Purchase Intent Prediction",
        subtitle: "Online Shopper Purchase Intent Prediction",
        link: "https://purchaseintentpredictor.netlify.app/",
        hasDeployment: true,
        bgColor: "#092537", // cosmic deep blue
        image: purchaseIntentImg,
        description: "Designed and deployed an end-to-end machine learning solution to predict online shopper purchase intent from user browsing behavior and session data.",
        bullets: [
          "Leveraged advanced data preprocessing and feature engineering.",
          "Optimized model hyperparameters for maximum precision.",
          "Deployed using Databricks MLflow Model Serving with REST API integration for real-time predictions."
        ],
        github: "https://github.com/mohitsharmaa21/Purchase-Intent-Predictor",
        kaggle: "https://www.kaggle.com/code/mohitsharma7231/online-shoppers-intention-lightgbm-model#Model-Evaluation-&-Results"
      },
      {
        title: "Fake News Detection",
        subtitle: "Fake News Detection using Deep Learning",
        link: "#",
        hasDeployment: false,
        bgColor: "#1c0b2b", // cosmic deep purple
        image: fakeNewsImg,
        description: "Developed a deep learning–based text classification model using DNN, CNN, and LSTM architectures to identify fake news articles from real news.",
        bullets: [
          "Implemented tokenization, TF-IDF vectorization, and data scaling pipelines.",
          "Trained using Python, Scikit-learn, and TensorFlow.",
          "Achieved ~99% test accuracy on test datasets."
        ]
      },
    ],
    [isMobile]
  );

  const sceneRef = React.useRef(null); 
  const { scrollYProgress } = useScroll({
    target: sceneRef, 
    offset: ["start start", "end end"], 
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length); 
  const [activeIndex, setActiveIndex] = React.useState(0); 

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const idx = thresholds.findIndex((t) => v <= t); 
      setActiveIndex(idx === -1 ? thresholds.length - 1 : idx); 
    });
    return () => unsubscribe(); 
  }, [scrollYProgress, thresholds]);

  const activeProject = projects[activeIndex]; 

  // Smooth scroll transitions mapping scrollYProgress to position/opacity/scale
  const opacity0 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [1, 1, 0, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [0, 0, -60, -60]);
  const scale0 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [1, 1, 0.96, 0.96]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [0, 0, 1, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [60, 60, 0, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [0.96, 0.96, 1, 1]);

  return (
    <section
      id="projects"
      ref={sceneRef} 
      className="relative text-white border-t border-white/5"
      style={{
        height: `${100 * projects.length}vh`, 
        backgroundColor: activeProject.bgColor, 
        transition: "background-color 400ms ease",
      }}
    >
      {/* Sticky container keeps content fixed while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-8 pb-3 text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Featured Projects 
        </h2>

        {/* Main Project Display Area */}
        <div className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "-mt-4" : ""}`}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              style={{
                width: "90%",
                maxWidth: "1200px",
                opacity: idx === 0 ? opacity0 : opacity1,
                y: idx === 0 ? y0 : y1,
                scale: idx === 0 ? scale0 : scale1,
                pointerEvents: activeIndex === idx ? "auto" : "none",
                zIndex: activeIndex === idx ? 20 : 0,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {/* Animate project title when switching */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <MH3
                    key={project.title}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block text-center text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 sm:absolute sm:-top-16 sm:left-[5%] lg:left-0`}
                    style={{ zIndex: 30, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    {project.title}
                  </MH3>
                )}
              </AnimatePresence>

              {/* Project Image Wrapper */}
              <div
                className={`relative w-full overflow-hidden bg-black/40 border border-white/10 shadow-2xl ${
                  isMobile ? "mb-6 rounded-2xl h-[55vh]" : "mb-10 rounded-3xl h-[64vh]"
                }`}
                style={{ zIndex: 10 }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />

                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 z-11 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
                  }}
                />

                {/* Premium Glassmorphism Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 p-5 md:p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md max-w-2xl shadow-xl">
                  <h4 className="text-cyan-300 text-sm md:text-base font-bold mb-1.5">{project.subtitle}</h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">{project.description}</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[11px] md:text-xs">
                    {project.bullets.map((bullet, bidx) => (
                      <li key={bidx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Project Button Controls */}
        <div className={`absolute ${isMobile ? "bottom-14" : "bottom-8"} z-30 w-full flex justify-center px-4`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-3"
            >
              {activeProject?.hasDeployment && (
                <a
                  href={activeProject?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 font-bold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300"
                  aria-label={`View Live ${activeProject?.title}`}
                >
                  View Live Project
                </a>
              )}
              {activeProject?.github && (
                <a
                  href={activeProject?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 font-bold rounded-full bg-gray-900 border border-white/20 text-white text-xs sm:text-sm hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300"
                  aria-label={`View GitHub Repo`}
                >
                  GitHub Repo
                </a>
              )}
              {activeProject?.kaggle && (
                <a
                  href={activeProject?.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 font-bold rounded-full bg-blue-950 border border-blue-500/30 text-cyan-400 text-xs sm:text-sm hover:bg-blue-900 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:scale-105 transition-all duration-300"
                  aria-label={`View Kaggle Notebook`}
                >
                  Kaggle Notebook
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
