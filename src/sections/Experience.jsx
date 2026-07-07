import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Celebal Technologies",
    location: "Jaipur, Rajasthan (Onsite)",
    duration: "May 2026 – August 2026",
    description: [
      "Contributed to the development of end-to-end data science and machine learning solutions on real-world datasets.",
      "Performed exploratory data analysis (EDA), data preprocessing, and advanced feature engineering to prepare robust modeling pipelines.",
      "Built and optimized predictive models using Python, Scikit-learn, LightGBM, and XGBoost.",
      "Gained hands-on experience in MLOps workflows, deploying models using Databricks, MLflow Model Serving, REST APIs, and Microsoft Azure."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-black text-white overflow-hidden w-full flex items-center justify-center border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/5 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-cyan-400 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Path
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Glowing Pulse Dot on the line */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center z-10">
                <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-cyan-400 opacity-30" />
                <div className="relative p-2.5 rounded-full bg-gray-950 border-2 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <FaBriefcase className="text-sm md:text-base" />
                </div>
              </div>

              {/* Experience Card */}
              <motion.article
                className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
                whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(6,182,212,0.1)" }}
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-[40px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/15 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 text-sm md:text-base font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-300 font-medium">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FaCalendarAlt className="text-cyan-400" /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <FaMapMarkerAlt className="text-purple-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Bullet Points */}
                <div className="space-y-3.5">
                  {exp.description.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0 text-sm" />
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
