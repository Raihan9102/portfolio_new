import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Static tech stacks per project (language-independent)
const projectTech = [
  ["YOLOv8n", "ByteTrack", "Raspberry Pi 5", "PyTorch (FP16)", "OpenCV", "Picamera2", "Flask", "Firebase RTDB", "Flutter (Dart)"],
  ["PyTorch", "Python", "Wav2Vec 2.0", "BiLSTM-MHA", "SHAP XAI", "Mel-Spectrogram", "MFCC", "Librosa", "Scikit-Learn"],
  ["ESP32", "C++", "Arduino IDE", "Ultrasonic Sensor", "Tilt Sensor", "Buzzer Alert", "Blynk.io IoT Cloud", "Embedded Systems"],
  ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "CoinGecko API", "Node.js", "Postman", "Vercel"],
  ["Google Looker Studio", "AppSheet", "Project Management", "Budget Analytics", "Data Modeling", "Executive Reporting"],
];

const projectImages = [
  "/asset/portfolio/ta_presentation.jpg",
  "/asset/portfolio/humic_mindvoice.jpg",
  "/asset/portfolio/alat_bantu_tunanetra.jpeg",
  "/asset/portfolio/cryptomania.png",
  "/asset/portfolio/pt_len_dashboard.png",
];

const projectLinks = [
  { demoLink: "https://youtu.be/PJBtC-95MzE", githubLink: null },
  { demoLink: null, githubLink: null },
  { demoLink: null, githubLink: "https://github.com/Raihan9102" },
  { demoLink: "https://cryptomania-app.vercel.app/", githubLink: "https://github.com/Raihan9102/crypto-mania" },
  { demoLink: null, githubLink: null },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  const proj = t.projects;

  // Merge translation data with static tech/images/links
  const projects = proj.list.map((p, i) => ({
    ...p,
    tech: projectTech[i] || [],
    image: projectImages[i] || "",
    ...projectLinks[i],
  }));

  const filterOptions = ["All", "AI", "IoT", "Web", "Data"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tagCategory === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            {proj.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {proj.title} <span className="gradient-blue-text">{proj.titleSpan}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            {proj.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center gap-2.5 mb-12 flex-wrap"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeFilter === filter
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600"
                : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-blue-600"
                }`}
            >
              {proj.filters[filter]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer border border-slate-200 shadow-sm glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-52 overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-3.5 right-3.5 flex gap-2">
                      <span className="px-3 py-1 bg-blue-600/90 text-white backdrop-blur-md rounded-full text-[11px] font-bold shadow-md">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="px-2.5 py-0.5 rounded bg-white/90 text-slate-800 text-[11px] font-mono font-bold shadow-sm backdrop-blur-sm">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-[11px] font-mono font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-[11px] font-mono text-slate-500">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {proj.viewDetails}
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1"
                      >
                        <span>{project.demoLink.includes('youtu') ? '▶ Video' : 'Live Demo'}</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-all border border-slate-200"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl"
              >
                {/* Modal Header Media */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white shadow transition-all font-bold"
                  >
                    ✕
                  </button>

                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-2 font-bold">
                      {proj.modalOverview}
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3 font-bold">
                      {proj.modalHighlights}
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-blue-600 uppercase tracking-wider mb-3 font-bold">
                      {proj.modalStack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-xs font-mono font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                    {selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-center font-bold text-sm transition-all shadow-md shadow-blue-600/25"
                      >
                        {selectedProject.demoLink.includes('youtu') ? proj.modalVideo : proj.modalLiveDemo}
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-800 font-bold text-sm transition-all flex items-center gap-2 border border-slate-200"
                      >
                        {proj.modalGitHub}
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-3 rounded-xl text-slate-500 hover:text-slate-800 text-sm font-semibold"
                    >
                      {proj.modalClose}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
