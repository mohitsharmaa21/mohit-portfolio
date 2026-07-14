import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function OverlayMenu({ isOpen, onClose }) {
  // Pick clip origin based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024; // lg breakpoint
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close menu"
          >
            <FiX />
          </button>

          {/* Menu Links with scrolling support for small screen heights */}
          <div className="max-h-[80vh] overflow-y-auto py-8 px-6 w-full flex justify-center scrollbar-none">
            <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-center">
              {[
                "Home",
                "Stats",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Research",
                "Patent",
                "Certifications",
                "Achievements",
                "Leadership",
                "Contact",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300 block py-1"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
