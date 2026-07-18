import { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import QuickStats from "./sections/QuickStats";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Research from "./sections/Research";
import Patent from "./sections/Patent";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Leadership from "./sections/Leadership";
import Community from "./sections/Community";
import StartupJourney from "./sections/StartupJourney";
import ProfileLinks from "./sections/ProfileLinks";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsResumeOpen(true);
    window.addEventListener("open-resume", handleOpen);
    return () => window.removeEventListener("open-resume", handleOpen);
  }, []);

  return (
    <div className="relative animated-gradient text-white">
      <CustomCursor />
      <Navbar />
      <MusicPlayer />

      {/* Intro always on top until it finishes */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {/* Homepage always present (masked reveal) */}
      <Home introDone={introDone} />

      <main>
        <QuickStats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Patent />
        <Achievements />
        <Certifications />
        <Leadership />
        <Community />
        <StartupJourney />
        <ProfileLinks />
        <Contact />
      </main>

      <Footer />

      {/* Global Resume Preview Modal */}
      {isResumeOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#080519]/95 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#080519]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-bold text-white">Curriculum Vitae / Resume</h3>
              </div>
              <div className="flex items-center gap-3">
                 <a
                  href="https://drive.google.com/file/d/1F28YWbQ8FCX3h6HqAeioSUXSOWRLb82A/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
                >
                  Open in Drive
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Body */}
            <div className="flex-1 bg-black/40 relative">
              <iframe
                src="https://drive.google.com/file/d/1F28YWbQ8FCX3h6HqAeioSUXSOWRLb82A/preview"
                className="w-full h-full border-0"
                allow="autoplay"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
