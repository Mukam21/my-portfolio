export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`border-b px-8 py-4 flex justify-between items-center ${darkMode ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-white/50'} backdrop-blur-md sticky top-0 z-10`}>
      <span className="text-xl font-black tracking-wider text-cyan-500">MUKAM BACKEND DEVELOPER</span>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs'}`}
      >
        {darkMode ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
      </button>
    </header>
  );
}
