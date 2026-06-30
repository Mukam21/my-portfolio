export default function CertificateModal({ darkMode, selectedCert, setSelectedCert }) {
  if (!selectedCert) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`relative max-w-3xl w-full rounded-2xl border p-6 md:p-8 shadow-2xl ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
        
        <button 
          onClick={() => setSelectedCert(null)}
          className="absolute top-4 right-4 text-2xl font-bold cursor-pointer hover:text-cyan-400 transition-all p-2"
        >
          ✕
        </button>

        <span className="font-mono text-xs font-bold text-cyan-500 bg-cyan-500/10 px-2.5 py-1 rounded-md">{selectedCert.year} год</span>
        <h3 className="text-2xl font-extrabold mt-3 mb-6 text-cyan-400 pr-8">{selectedCert.title}</h3>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/2 aspect-[4/3] bg-slate-800 rounded-xl border border-slate-700/50 overflow-hidden shrink-0 flex items-center justify-center shadow-md">
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title} 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-2">📜 История получения:</h4>
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {selectedCert.story}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button 
            onClick={() => setSelectedCert(null)}
            className="bg-slate-800 border border-slate-700 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-slate-700 transition-all cursor-pointer"
          >
            Закрыть окно
          </button>
        </div>

      </div>
    </div>
  );
}
