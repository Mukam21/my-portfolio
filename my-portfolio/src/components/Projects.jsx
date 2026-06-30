export default function Projects({ darkMode, filter, setFilter, projects }) {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-cyan-400">📁 Мои Разработки</h3>
        <div className="flex gap-2 flex-wrap">
          {["Все", "Go", "Python"].map(tech => (
            <button 
              key={tech} 
              onClick={() => setFilter(tech)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tech 
                  ? 'bg-cyan-500 text-slate-950 scale-105' 
                  : (darkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50')
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/50' : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-md'}`}>
            <span className="text-xs font-bold text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">{project.tech}</span>
            <h4 className="text-xl font-bold mt-4 mb-2">{project.title}</h4>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
