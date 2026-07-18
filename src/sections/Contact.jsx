import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ParticlesBackground from "../components/ParticlesBackground.jsx";
import Astra from "../assets/Astra.png";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaFileLines } from "react-icons/fa6";
import { SiKaggle, SiOrcid } from "react-icons/si";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || "service_placeholder";
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || "template_placeholder";
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || "key_placeholder";

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/mohitsharmaa21", glow: "rgba(255,255,255,0.2)" },
  { Icon: SiKaggle, label: "Kaggle", href: "https://www.kaggle.com/mohitsharma7231", glow: "rgba(6,182,212,0.2)" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma2005", glow: "rgba(59,130,246,0.2)" },
  { Icon: SiOrcid, label: "ORCID", href: "https://orcid.org/0009-0007-3823-0898", glow: "rgba(163,230,53,0.2)" },
  { Icon: FaFileLines, label: "Resume", href: "https://drive.google.com/file/d/1F28YWbQ8FCX3h6HqAeioSUXSOWRLb82A/view?usp=drive_link", glow: "rgba(192,132,252,0.2)" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};
    required.forEach(
      (f) => !formData[f].trim() && (newErrors[f] = "Fill this field")
    );
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("sending");

    try {
      const toEmail = "mohitsharam44@gmail.com";
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Mohit,\n\nI reached out via your portfolio website.\n\nHere are my details:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Topic: ${formData.service}\n\nBrief Idea:\n${formData.idea}\n\nLet's connect!`
      );
      
      window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
      
      setStatus("success");
      setFormData({ name: "", email: "", service: "", idea: "" });
    } catch (err) {
      console.error("Mail redirection error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact" 
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-12 lg:px-20 flex items-center border-t border-white/5"
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Animated Image & Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8"
        >
          {/* Floating Astronaut Image */}
          <div className="relative flex justify-center w-full">
            <motion.img
              src={Astra}
              alt="Futuristic Contact Astronaut"
              className="w-72 md:w-[420px] rounded-3xl shadow-2xl object-cover filter drop-shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Quick Contact Info Details */}
          <div className="w-full max-w-md p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col gap-4 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
            
            <a 
              href="mailto:mohitsharam44@gmail.com" 
              className="flex items-center gap-4 text-gray-300 hover:text-cyan-300 hover:bg-white/5 p-3 rounded-xl border border-transparent hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase">Drop an Email</p>
                <span className="text-sm font-semibold">mohitsharam44@gmail.com</span>
              </div>
            </a>

            <a 
              href="tel:+917231008666" 
              className="flex items-center gap-4 text-gray-300 hover:text-purple-300 hover:bg-white/5 p-3 rounded-xl border border-transparent hover:border-white/10 transition-all cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                <FaPhone />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase">Call Directly</p>
                <span className="text-sm font-semibold">+91 7231008666</span>
              </div>
            </a>

            {/* Social profiles row */}
            <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 justify-center lg:justify-start">
              {socials.map(({ Icon, label, href, glow }, sidx) => (
                <motion.a
                  key={sidx}
                  href={href}
                  onClick={(e) => {
                    if (label === "Resume") {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("open-resume"));
                    }
                  }}
                  target={label === "Resume" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`Visit Mohit's ${label}`}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all"
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0 0 15px ${glow}`,
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                >
                  <Icon className="text-lg" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-white/5 p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400">
            Let’s Build Something Intelligent Together
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name-input" className="mb-1 text-xs font-semibold text-gray-400">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`p-3.5 rounded-xl bg-white/5 border ${
                  errors.name ? "border-red-500" : "border-white/10"
                } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email-input" className="mb-1 text-xs font-semibold text-gray-400">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`p-3.5 rounded-xl bg-white/5 border ${
                  errors.email ? "border-red-500" : "border-white/10"
                } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="service-select" className="mb-1 text-xs font-semibold text-gray-400">
                Something In Mind? <span className="text-red-500">*</span>
              </label>
              <select
                id="service-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3.5 rounded-xl bg-white/5 border ${
                  errors.service ? "border-red-500" : "border-white/10"
                } focus:outline-none focus:border-cyan-400 text-white text-sm transition-colors`}
              >
                <option value="" disabled className="text-black">
                  Select a topic...
                </option>
                <option value="Machine Learning / Deep Learning" className="text-black">
                  Machine Learning / Deep Learning
                </option>
                <option value="Data Analytics & ETL Pipelines" className="text-black">
                  Data Analytics & ETL Pipelines
                </option>
                <option value="Model Deployment (MLOps)" className="text-black">
                  Model Deployment (MLOps)
                </option>
                <option value="Others" className="text-black">
                  Others
                </option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            {/* Budget field removed */}

            {/* Idea */}
            <div className="flex flex-col">
              <label htmlFor="idea-input" className="mb-1 text-xs font-semibold text-gray-400">
                Brief Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                id="idea-input"
                name="idea"
                rows={4}
                placeholder="Explain the requirements, dataset details, or project goals..."
                value={formData.idea}
                onChange={handleChange}
                className={`p-3.5 rounded-xl bg-white/5 border ${
                  errors.idea ? "border-red-500" : "border-white/10"
                } text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
              />
              {errors.idea && (
                <p className="text-red-500 text-xs mt-1">{errors.idea}</p>
              )}
            </div>

            {/* Status Message */}
            {status && (
              <p
                className={`text-xs font-semibold ${
                  status === "success"
                    ? "text-emerald-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "Transmitting message..."
                  : status === "success"
                  ? "Message sent successfully ✅"
                  : "Something went wrong ❌"}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              type="submit"
              className="
                mt-2
                bg-gradient-to-r from-cyan-400 to-blue-500
                hover:opacity-90
                disabled:opacity-60 
                text-white 
                py-3.5 
                rounded-xl 
                font-bold 
                text-sm
                shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
                transition-all duration-300
                cursor-pointer
              "
            >
              {status === "sending" ? "Transmitting..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
