export default function Certificates({ darkMode, certificates, setSelectedCert }) {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-bold mb-2 text-cyan-400">🏆 Достижения и Сертификаты</h3>
      <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>💡 Нажмите на любой сертификат, чтобы увидеть фото документа и историю его получения.</p>
      
      <div className="space-y-4">
        {certificates.map(cert => (
          <div 
            key={cert.id} 
            onClick={() => setSelectedCert(cert)}
            className={`p-5 rounded-xl border flex gap-4 items-start transition-all cursor-pointer hover:scale-[1.01] ${
              darkMode ? 'bg-slate-900/20 border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/40' : 'bg-white border-slate-100 shadow-2xs hover:border-cyan-500/40 hover:shadow-sm'
            }`}
          >
            <span className="font-mono text-cyan-400 font-bold bg-cyan-400/10 px-3 py-1 rounded-lg text-sm shrink-0">{cert.year}</span>
            <div className="flex-1">
              <h4 className="font-bold text-base hover:text-cyan-400 transition-colors flex items-center gap-2">
                {cert.title} <span className="text-xs text-cyan-500/60">🔍 Посмотреть</span>
              </h4>
              <p className={`text-sm mt-1 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
