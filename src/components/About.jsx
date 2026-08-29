import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.about;

  const pillarIcons = ["👁️", "📡", "💻", "📊"];
  const pillarTags = [
    ["YOLOv8n", "ByteTrack", "Raspberry Pi 5", "PyTorch"],
    ["ESP32", "Arduino", "C++", "Sensors", "Blynk.io"],
    ["React.js", "Flutter", "Tailwind CSS", "REST API"],
    ["Looker Studio", "AppSheet", "Project Management", "SQL"],
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 bg-white/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            {a.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {a.title} <span className="gradient-blue-text">{a.titleSpan}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            {a.subtitle}
          </p>
        </motion.div>

        {/* Profile Story & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Profile Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {a.profileTitle}
            </h3>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>{a.story1}</p>
              <p>{a.story2}</p>
              <p className="text-slate-600">{a.story3}</p>
            </div>

            {/* Quick Contact Tags */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-mono text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📍</span> Bandung, Indonesia
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📧</span> raihan.rahmat2019@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📞</span> +6282246269033
              </div>
            </div>
          </motion.div>

          {/* Education & Soft Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[11px] font-mono text-blue-600 uppercase tracking-wider block mb-1 font-bold">
                    {a.higherEdu}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">Telkom University</h4>
                  <p className="text-slate-600 text-sm mt-0.5 font-medium">{a.eduDegree}</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono font-bold border border-blue-200">
                  {a.eduPeriod}
                </span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed">{a.eduDesc}</p>
            </div>

            {/* Soft Skills Badges */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">✨</span> {a.softSkillsTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {a.softSkills.map((skill, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-800">{skill.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{skill.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Competency Pillars */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
            {a.pillarsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.pillars.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-2xl mb-4 text-blue-600">
                    {pillarIcons[index]}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {comp.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {comp.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {pillarTags[index].map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-semibold border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
