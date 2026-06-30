import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CertificateModal from "./components/CertificateModal";
import CustomCursor from "./components/CustomCursor";

import { PROJECTS } from "./data/projects";
import { CERTIFICATES } from "./data/certificates";
import { SKILLS } from "./data/skills";

export default function App() {
  const [filter, setFilter] = useState("Все");
  const [darkMode, setDarkMode] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredProjects =
    filter === "Все"
      ? PROJECTS
      : PROJECTS.filter((project) => project.tech === filter);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Красивый шлейф мыши */}
      <CustomCursor darkMode={darkMode} />

      {/* Шапка сайта (оставили строго один раз) */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <About
          darkMode={darkMode}
          isAboutOpen={isAboutOpen}
          setIsAboutOpen={setIsAboutOpen}
        />

        <Skills
          darkMode={darkMode}
          skills={SKILLS}
        />

        <Projects
          darkMode={darkMode}
          filter={filter}
          setFilter={setFilter}
          projects={filteredProjects}
        />

        <Certificates
          darkMode={darkMode}
          certificates={CERTIFICATES}
          setSelectedCert={setSelectedCert}
        />
      </main>

      <CertificateModal
        darkMode={darkMode}
        selectedCert={selectedCert}
        setSelectedCert={setSelectedCert}
      />
    </div>
  );
}
