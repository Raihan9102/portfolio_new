import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const certTags = [
  ["DevOps", "CI/CD", "Docker", "Jenkins", "SonarQube", "Prometheus & Grafana"],
  ["Deep Learning", "Neural Networks", "AI"],
  ["Artificial Intelligence", "Machine Learning"],
  ["Python", "Programming", "OOP"],
  ["Data Science", "Statistics", "Data Analysis"],
  ["SQL", "Relational Database", "MySQL"],
];

const certBadges = [
  "IDN Certified",
  "DeepLearning.AI",
  "Dicoding Certified",
  "Dicoding Certified",
  "Dicoding Certified",
  "Dicoding Certified",
];

const Certifications = () => {
  const { t } = useLanguage();
  const c = t.certs;

  const certifications = c.list.map((cert, i) => ({
    ...cert,
    badge: certBadges[i],
    tags: certTags[i] || [],
  }));

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 bg-white border-y border-slate-200">
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
            {c.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {c.title} <span className="gradient-blue-text">{c.titleSpan}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            {c.subtitle}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {cert.validity}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-blue-600 mb-2">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      ID: {cert.credentialId}
                    </span>
                  </div>
                )}

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Footer tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {cert.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
