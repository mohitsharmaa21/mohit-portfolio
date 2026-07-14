import { motion } from "framer-motion";
import mohitProfile from "../assets/mohit_profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden border-t border-white/5"
      aria-label="About me"
    >
      {/* Layered neon background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 py-20 flex flex-col gap-12">
        
        {/* Profile header */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Photo Wrapper */}
          <motion.div
            className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1CD8D2]/20 to-[#302b63]/20 border border-[#1CD8D2]/25 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            aria-hidden="true"
          >
            <img 
              src={mohitProfile} 
              alt="Mohit Sharma portrait" 
              className="w-full h-full object-cover"
              loading="lazy"
              width="240"
              height="240"
            />
          </motion.div>

          {/* Name + Role + Bio + CTAs */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]">
              Mohit Sharma
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              BCA Data Science Undergraduate
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">
              Final Year Student Passionate about transforming data into actionable insights through machine learning, predictive analytics, and AI-driven solutions. Experienced in building end-to-end data science workflows, from data preprocessing and model development to deployment using modern cloud technologies.
            </p>

            {/* Quick stats grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {[
                { label: "CGPA", value: "9.60 / 10.0" },
                { label: "Specialty", value: "Machine Learning" },
                { label: "Focus", value: "Data Science / Data Scientist" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-xs text-gray-400">{item.label}</div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-2.5 hover:bg-gray-200 transition text-sm"
                aria-label="View my projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white px-5 py-2.5 hover:bg-white/20 transition text-sm"
                aria-label="Get in touch"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* Detailed Bio paragraph */}
        <div className="grid grid-cols-1">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Throughout my academic program and my onsite internship at Celebal Technologies, I have focused on designing scalable machine learning pipelines. My expertise includes training and optimizing classification models, tuning tree-based models like LightGBM and XGBoost, implementing neural network architectures using TensorFlow, and managing models in production using Databricks MLflow and Microsoft Azure.
            </p>
            <p className="mt-4 text-gray-400 text-base sm:text-lg">
              I am passionate about bridging the gap between theoretical data science models and actual production deployment, applying MLOps methodologies to deliver reliable, enterprise-grade AI solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
