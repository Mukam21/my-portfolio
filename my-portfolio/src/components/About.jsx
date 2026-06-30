import { useState } from "react";

export default function About({
  darkMode,
  isAboutOpen,
  setIsAboutOpen,
}) {
  const [isTechReportOpen, setIsTechReportOpen] = useState(false);

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        {/* Рамка с фотографией */}
        <div className="w-48 h-48 rounded-2xl bg-slate-800 border-2 border-cyan-500 overflow-hidden shadow-xl shadow-cyan-500/10 flex items-center justify-center shrink-0">
          <img
            src="/mukam.jpg"
            alt="Усманов Мукам"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
            Усманов Мукам
          </h1>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Golang Backend-разработчик
          </h2>

          <p
            className={`text-base mb-6 leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Специализируюсь на разработке отказоустойчивой серверной логики на Go
            и проектировании REST API. Обладаю сильной инженерной и
            алгоритмической базой.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col lg:flex-row gap-3 justify-center md:justify-start items-center text-sm">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="w-full lg:w-auto bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-400 transition-all cursor-pointer shadow-md shadow-cyan-500/10"
            >
              {isAboutOpen
                ? "▲ Свернуть «Обо мне»"
                : "▼ Развернуть «Обо мне»"}
            </button>

            <button
              onClick={() =>
                setIsTechReportOpen(!isTechReportOpen)
              }
              className="w-full lg:w-auto bg-slate-800 text-cyan-400 border border-cyan-500/40 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-700 transition-all cursor-pointer shadow-md shadow-cyan-500/50 animate-pulse"
            >
              {isTechReportOpen
                ? "▲ Скрыть отчёт по Go"
                : "📋 Технический отчёт по Go"}
            </button>

            <div className="flex gap-3 w-full lg:w-auto justify-center">
              <a
                href="https://t.me/usmanowmukam"
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                ✈️ Telegram
              </a>

              <a
                href="https://github.com/Mukam21?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Блок "Обо мне" */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isAboutOpen
            ? "max-h-[1200px] opacity-100 mt-8"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-900/40 border-slate-800"
              : "bg-slate-100 border-slate-200"
          }`}
        >
          <h3 className="text-xl font-bold mb-4 text-cyan-400">
            🌍 Личная информация и Опыт
          </h3>

          <div
            className={`space-y-4 text-base leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <p>
              🌐 <strong>Гражданство:</strong> Туркменистан
            </p>

            <p>
              🎓 <strong>Образование:</strong> Учусь в одном из ведущих
              технических вузов России — <strong>НИЯУ МИФИ</strong> на программе
              бакалавриата по направлению «Прикладная математика и физика»
              (период обучения: <strong>2025 – 2029 гг.</strong>).
            </p>

            <div className="border-t border-dashed my-4 pt-4 border-slate-700">
              <p>
                Специализируюсь на разработке отказоустойчивой серверной логики
                на Go и проектировании REST API. Обладаю сильной инженерной и
                алгоритмической базой: побеждал в робототехнических
                соревнованиях НИЯУ МИФИ (программирование роботов на Python),
                глубоко понимаю низкоуровневые механизмы управления памятью
                благодаря изучению языка C в университете.
              </p>

              <p>
                Имею практический опыт проектирования backend-архитектуры,
                работы с базами данных, аутентификацией и авторизацией, а также
                интеграции frontend-части с сервером.
              </p>

              <p>
                Понимаю принципы чистой архитектуры и разделения слоёв
                (handler / service / repository), умею писать поддерживаемый и
                читаемый код. Есть опыт работы с Git и понимание процесса
                разработки.
              </p>

              <p className="text-cyan-400 font-semibold">
                Быстро обучаюсь, умею самостоятельно находить и решать проблемы,
                заинтересован в развитии в backend-разработке и построении
                надёжных серверных систем.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Технический отчёт */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isTechReportOpen
            ? "max-h-[2500px] opacity-100 mt-8"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-900/40 border-slate-800"
              : "bg-slate-100 border-slate-200"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            🛠️ Глубокий разбор архитектуры бэкенд-разработок
          </h3>

          <div className="space-y-8 text-sm md:text-base leading-relaxed">
            <div className="border-b border-slate-800/80 pb-6">
              <h4 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">01.</span>{" "}
                Полноценный E-Commerce Маркетплейс (Golang)
              </h4>

              <p
                className={`${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Проект представляет собой масштабируемый и готовый к продакшну
                бэкенд для интернет-магазина, спроектированный по стандарту
                Standard Go Project Layout с разделением на независимые слои
                (Clean Architecture).
              </p>
            </div>

            <div className="border-b border-slate-800/80 pb-6">
              <h4 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">02.</span>{" "}
                Высоконагруженные утилиты и Очереди (go-task-queue)
              </h4>

              <p
                className={`${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Спроектировал распределённую асинхронную очередь задач с
                использованием пула воркеров (Worker Pool) на Go.
              </p>

              <p
                className={`${
                  darkMode ? "text-slate-300" : "text-slate-700"
                } mt-3`}
              >
                Реализовал API создания, получения статуса и удаления задач.
                Особое внимание уделил потокобезопасности и предотвращению race
                conditions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-3">
                <span className="text-cyan-400">03.</span>{" "}
                Инфраструктурный стек (Docker, Kubernetes, Redis)
              </h4>

              <p
                className={`${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Имею практический опыт построения современной инфраструктуры
                бэкенд-приложений. Использовал связку PostgreSQL + Redis для
                кэширования данных и уменьшения нагрузки на базу данных.
              </p>

              <p
                className={`${
                  darkMode ? "text-slate-300" : "text-slate-700"
                } mt-3`}
              >
                Разрабатывал Dockerfile и конфигурации Docker Compose для
                контейнеризации сервисов, а также писал манифесты Kubernetes для
                декларативного развёртывания и масштабирования приложений.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}