import { useState } from "react";
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

  return (
    <div className="relative animated-gradient text-white">
      <CustomCursor />
      <Navbar />
      <MusicPlayer />

      {/* Intro always on top until it finishes */}
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      {/* Homepage always present (masked reveal) */}
      <Home introDone={introDone} />

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
      <Footer />
    </div>
  );
}
