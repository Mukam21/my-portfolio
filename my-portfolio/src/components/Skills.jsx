export default function Skills({ darkMode, skills }) {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">🛠️ Навыки и Технологии</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className={`px-3 py-1.5 rounded-xl text-sm font-semibold border ${darkMode ? 'bg-slate-900/60 border-slate-800/80 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-2xs'}`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
