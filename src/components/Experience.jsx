import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  const { t } = useLanguage();
  const exp = t.experience;

  const workExperiences = exp.workList.map((item) => ({
    ...item,
    badgeColor: item.company.includes("HUMIC") ? "border-blue-200 text-blue-800 bg-blue-50" : "border-sky-200 text-sky-800 bg-sky-50",
  }));

  const orgExperiences = exp.orgList.map((item, idx) => ({
    ...item,
    badgeColor: idx === 0 ? "border-blue-200 text-blue-800 bg-blue-50" : "border-slate-200 text-slate-800 bg-slate-100",
  }));

  const currentList = activeTab === "work" ? workExperiences : orgExperiences;

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            {exp.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {exp.title} <span className="gradient-blue-text">{exp.titleSpan}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            {exp.subtitle}
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("work")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "work"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {exp.tabWork}
            </button>
            <button
              onClick={() => setActiveTab("org")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "org"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {exp.tabOrg}
            </button>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 relative">
          {/* Vertical decorative line for desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-blue-100"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {currentList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline Node Icon */}
                  <div className="hidden md:flex absolute left-5 top-7 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-blue-600 items-center justify-center text-blue-600 font-bold text-xs shadow-md">
                    {index + 1}
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm glass-card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {item.role}
                          </h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${item.badgeColor}`}>
                            {item.type}
                          </span>
                        </div>
                        <p className="text-blue-600 font-bold text-sm">
                          {item.company}
                          <span className="text-slate-500 font-normal"> • {item.location}</span>
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700 self-start sm:self-center">
                        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.period}
                      </div>
                    </div>

                    {/* Highlights list */}
                    <ul className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <span className="text-blue-600 mt-1 flex-shrink-0 font-bold">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech & Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
