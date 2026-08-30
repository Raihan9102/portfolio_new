import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  const sk = t.skills;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillClusters = [
    {
      category: "Deep Learning, Computer Vision & AI",
      icon: "🧠",
      description: "PyTorch, YOLO object detection, Multi-Object Tracking, Explainable AI & audio AI",
      skills: [
        { name: "Deep Learning & AI", level: "Intermediate", desc: "Neural network architectures, multi-branch models & cross-validation" },
        { name: "PyTorch (FP16)", level: "Intermediate", desc: "Deep neural networks (CNN, BiLSTM-MHA) & half-precision optimized inference" },
        { name: "Computer Vision", level: "Advanced", desc: "Object detection, spatial feature extraction, tracking & edge vision deployment" },
        { name: "YOLOv8 / YOLOv8n", level: "Advanced", desc: "Anchor-free object detection, custom dataset fine-tuning & transfer learning" },
        { name: "ByteTrack (MOT)", level: "Advanced", desc: "Multi-Object Tracking, two-stage association & spatio-temporal tracking" },
        { name: "Explainable AI (SHAP)", level: "Intermediate", desc: "GradientExplainer attribution & clinical transparency on CNN layers" },
        { name: "Wav2Vec 2.0 & Audio AI", level: "Intermediate", desc: "Self-supervised audio embeddings, Mel-Spectrograms & MFCC feature fusion" },
        { name: "OpenCV & Picamera2", level: "Intermediate", desc: "Threaded video acquisition, frame processing, ROI & centroid calculation" },
      ],
    },
    {
      category: "IoT Development & Sensor Integration",
      icon: "📡",
      description: "Microcontrollers, multi-sensor hardware integration, and IoT cloud platforms",
      skills: [
        { name: "ESP32", level: "Intermediate", desc: "WiFi-enabled IoT SoC, dual-core firmware programming & cloud telemetry" },
        { name: "Arduino", level: "Intermediate", desc: "Rapid prototyping, GPIO peripheral control, and serial communication" },
        { name: "Sensor Integration", level: "Intermediate", desc: "Ultrasonic distance sensors, Tilt balance sensors & Buzzer alarm systems" },
        { name: "Blynk.io Platform", level: "Intermediate", desc: "Remote mobile/web telemetry dashboards and device control" },
        { name: "C / C++", level: "Intermediate", desc: "Embedded firmware logic, memory management, and microcontroller code" },
        { name: "Raspberry Pi 5", level: "Advanced", desc: "Edge AI computing, GPIO/MIPI camera interface & edge model deployment" },
      ],
    },
    {
      category: "Front-End & Mobile App Development",
      icon: "💻",
      description: "Responsive web platforms, UI engineering, and cross-platform mobile apps",
      skills: [
        { name: "React.js", level: "Intermediate", desc: "Component architecture, state management, hooks & single-page applications" },
        { name: "JavaScript (ES6+)", level: "Intermediate", desc: "Asynchronous workflows, DOM APIs & REST API consumption" },
        { name: "HTML5 & CSS3", level: "Intermediate", desc: "Semantic markup, modern responsive styling & micro-animations" },
        { name: "Tailwind CSS", level: "Intermediate", desc: "Utility-first modern styling, responsive layouts & custom design systems" },
        { name: "Flutter & Dart", level: "Intermediate", desc: "Cross-platform mobile app development (Detectra monitoring app)" },
        { name: "Python", level: "Intermediate", desc: "Data processing, machine learning modeling, PyTorch & Flask scripting" },
      ],
    },
    {
      category: "Networking, Data Analytics & Tools",
      icon: "🛠️",
      description: "Network configuration, business analytics dashboards, databases & dev tools",
      skills: [
        { name: "Cisco Packet Tracer", level: "Basic / Familiar", desc: "Basic network topology configuration, IP routing & network simulation" },
        { name: "Google Looker Studio", level: "Intermediate", desc: "Dynamic interactive dashboards, budget oversight & executive analytics" },
        { name: "AppSheet", level: "Intermediate", desc: "No-code business process automation and data collection applications" },
        { name: "Microsoft Excel", level: "Basic / Familiar", desc: "Data organization, spreadsheet modeling & basic formulas" },
        { name: "MySQL / SQL", level: "Basic / Familiar", desc: "Relational database querying, schema structuring & data management" },
        { name: "Firebase Realtime DB", level: "Intermediate", desc: "Serverless NoSQL real-time cloud data synchronization & auth" },
        { name: "Git & GitHub", level: "Intermediate", desc: "Version control, branching, repository management & code collaboration" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 bg-[#f8fafc]">
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
            {sk.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {sk.title} <span className="gradient-blue-text">{sk.titleSpan}</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            {sk.subtitle}
          </p>
        </motion.div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillClusters.map((cluster, cIdx) => (
            <motion.div
              key={cIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: cIdx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Cluster Title */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{cluster.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {cluster.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mb-6 font-normal">
                  {cluster.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {cluster.skills.map((skill, sIdx) => {
                    const isHovered = hoveredSkill === `${cIdx}-${sIdx}`;
                    return (
                      <div
                        key={sIdx}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(`${cIdx}-${sIdx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/70 transition-all cursor-pointer flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        </div>

                        {/* Tooltip */}
                        {isHovered && (
                          <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-slate-900 text-white shadow-xl text-center pointer-events-none">
                            <p className="text-xs font-bold text-blue-300 mb-1">
                              {skill.name} • <span className="text-slate-300 font-normal">{skill.level}</span>
                            </p>
                            <p className="text-[11px] text-slate-200 leading-tight">
                              {skill.desc}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
