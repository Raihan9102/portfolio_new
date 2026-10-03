import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const quickStats = [
    { label: t.hero.stats.internships.label, value: "2", sub: t.hero.stats.internships.sub },
    { label: t.hero.stats.projects.label, value: "5+", sub: t.hero.stats.projects.sub },
    { label: t.hero.stats.certs.label, value: "6+", sub: t.hero.stats.certs.sub },
    { label: t.hero.stats.specializations.label, value: "4", sub: t.hero.stats.specializations.sub },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-28 pb-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full"
      >
        {/* Top Status & Academic Pill */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.hero.status}
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-800 shadow-sm">
            {t.hero.academic}
          </div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-14">
          {/* Left Column: Formal Photo Profile Showcase */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
              {/* Outer Soft Blue Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-sky-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white bg-white shadow-2xl shadow-blue-900/10">
                <img
                  src="/asset/portfolio/raihan_formal.jpg"
                  alt="Muhammad Raihan Thaffan Hidayat"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                />

                {/* Clean white gradient label bar at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
                  <p className="text-white font-bold text-sm leading-tight">
                    M. Raihan Thaffan Hidayat
                  </p>
                  <p className="text-sky-300 text-xs font-mono mt-0.5">
                    Telecommunications Engineer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Information */}
          <div className="lg:col-span-7 flex flex-col text-left order-1 lg:order-2">
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                {t.hero.greeting}{" "}
                <span className="gradient-text block mt-1">
                  Muhammad Raihan Thaffan Hidayat
                </span>
              </h1>

              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-semibold mb-5">
                {t.hero.specialization}
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4 font-normal">
                {t.hero.bio1}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {t.hero.bio2}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection("experience")}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2.5 text-sm"
              >
                <span>{t.hero.viewExperience}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a
                href="/cv/cv_2026.pdf"
                download="CV_Muhammad_Raihan_Thaffan_Hidayat.pdf"
                className="px-6 py-3.5 bg-white rounded-xl font-bold text-slate-800 border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2 text-sm shadow-sm"
              >
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.hero.downloadCV}
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-all text-sm"
              >
                {t.hero.getInTouch}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Key Stats Strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {quickStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center relative overflow-hidden group hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:via-blue-600 transition-all"></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1 group-hover:text-blue-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-1 font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
