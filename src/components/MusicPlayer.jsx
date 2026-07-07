import React, { useRef, useState, useEffect } from "react";

// Number of animated bars in the waveform
const BAR_COUNT = 18;

// Each bar gets a unique animation delay for organic wave look
const barDelays = Array.from({ length: BAR_COUNT }, (_, i) =>
  ((i * 0.11) % 0.9).toFixed(2)
);

const MusicPlayer = () => {
  const playlist = [
    "/iwasneverthere.mp3",
    "/escapism.mp3",
    "/blue.mp3",
    "/YAD.mp3",
    "/stars.mp3",
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [infoText, setInfoText] = useState("Play music while scrolling");
  const audioRef = useRef(null);
  const lastTapTime = useRef(0);
  const clickTimeout = useRef(null);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const setSourceAndMaybePlay = (src, shouldPlay) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = src;
    audio.load();
    audio.muted = false;
    if (audio.volume === 0) audio.volume = 0.5;
    if (!shouldPlay) return;
    const onCanPlay = () => {
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          setIsPlaying(false);
          setInfoText("Play music while scrolling");
        });
      }
      audio.removeEventListener("canplay", onCanPlay);
    };
    audio.addEventListener("canplay", onCanPlay);
  };

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setInfoText("Double-click to shuffle");
    setSourceAndMaybePlay(playlist[index], true);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlayingRef.current) {
      audio.pause();
      setIsPlaying(false);
      setInfoText("Play music while scrolling");
    } else {
      setSourceAndMaybePlay(playlist[currentTrackIndex], true);
      setIsPlaying(true);
      setInfoText("Double-click to shuffle");
    }
  };

  const shuffleNextTrack = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = isPlayingRef.current;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } while (nextIndex === currentTrackIndex && playlist.length > 1);
    setCurrentTrackIndex(nextIndex);
    setSourceAndMaybePlay(playlist[nextIndex], wasPlaying);
  };

  const handleTrackEnd = () => shuffleNextTrack();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.preload = "auto";
    audio.volume = 0.6;
    audio.muted = false;
    const onError = () => console.warn("Audio error:", audio.error);
    audio.addEventListener("error", onError);
    return () => audio.removeEventListener("error", onError);
  }, []);

  useEffect(() => {
    const handleVolumeKeys = (e) => {
      const audio = audioRef.current;
      if (!audio) return;
      if (e.key === "ArrowUp") {
        e.preventDefault();
        audio.volume = Math.min(1, Math.round((audio.volume + 0.05) * 100) / 100);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        audio.volume = Math.max(0, Math.round((audio.volume - 0.05) * 100) / 100);
      }
    };
    window.addEventListener("keydown", handleVolumeKeys, { passive: false });
    return () => window.removeEventListener("keydown", handleVolumeKeys);
  }, []);

  const handleDoubleTapMobile = () => {
    const now = Date.now();
    if (now - lastTapTime.current < 400) shuffleNextTrack();
    lastTapTime.current = now;
  };

  const handleClick = () => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      shuffleNextTrack();
    } else {
      clickTimeout.current = setTimeout(() => {
        togglePlay();
        clickTimeout.current = null;
      }, 250);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Hint label */}
      <p className="text-xs text-gray-400 italic mr-1">{infoText}</p>

      <audio
        ref={audioRef}
        src={playlist[currentTrackIndex]}
        onEnded={handleTrackEnd}
        preload="auto"
      />

      {/* Sound Wave Button */}
      <button
        onClick={handleClick}
        onTouchStart={handleDoubleTapMobile}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="relative flex items-center justify-center gap-[3px] px-4 py-3 rounded-2xl cursor-pointer overflow-hidden group"
        style={{
          background: "rgba(10, 5, 30, 0.75)",
          border: "1px solid rgba(120, 80, 255, 0.4)",
          backdropFilter: "blur(12px)",
          boxShadow: isPlaying
            ? "0 0 20px rgba(100, 60, 255, 0.5), 0 0 40px rgba(80, 40, 200, 0.25), inset 0 0 20px rgba(100,60,255,0.08)"
            : "0 0 10px rgba(80, 50, 200, 0.2)",
          transition: "box-shadow 0.4s ease",
          minWidth: "90px",
          height: "52px",
        }}
      >
        {/* Glow orb behind bars */}
        <span
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: isPlaying
              ? "radial-gradient(ellipse at center, rgba(100,60,255,0.18) 0%, transparent 70%)"
              : "none",
            transition: "background 0.5s ease",
          }}
        />

        {/* Animated waveform bars */}
        {barDelays.map((delay, i) => {
          // Vary heights to make the wave look natural
          const baseH = 10 + Math.round(18 * Math.abs(Math.sin((i / BAR_COUNT) * Math.PI)));
          return (
            <span
              key={i}
              className={isPlaying ? "soundbar-playing" : "soundbar-paused"}
              style={{
                display: "inline-block",
                width: "3px",
                height: `${baseH}px`,
                borderRadius: "2px",
                background: `linear-gradient(to top,
                  hsl(${240 + i * 4}, 100%, 60%),
                  hsl(${260 + i * 3}, 90%, 75%))`,
                animationDelay: `${delay}s`,
                boxShadow: isPlaying
                  ? `0 0 6px hsl(${248 + i * 3}, 100%, 65%)`
                  : "none",
                transition: "box-shadow 0.4s ease, opacity 0.3s ease",
                opacity: isPlaying ? 1 : 0.35,
                flexShrink: 0,
              }}
            />
          );
        })}
      </button>
    </div>
  );
};

export default MusicPlayer;
