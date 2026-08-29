import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackgroundBlobs from "./components/BackgroundBlobs";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

const AppContent = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-900 overflow-hidden selection:bg-blue-600 selection:text-white">
      <BackgroundBlobs />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 border-t border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-base font-bold text-slate-900 tracking-wide">
              Muhammad Raihan Thaffan Hidayat
            </p>
            <p className="text-xs text-slate-500 mt-1 font-mono">
              {t.footer.degree}
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-600 font-mono font-medium">
            <span>Bekasi, Indonesia</span>
            <span>•</span>
            <a href="mailto:raihan.rahmat2019@gmail.com" className="text-blue-600 hover:underline font-semibold">
              raihan.rahmat2019@gmail.com
            </a>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
