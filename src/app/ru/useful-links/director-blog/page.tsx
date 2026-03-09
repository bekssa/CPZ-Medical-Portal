import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">Блог Директора</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Блог Директора
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
            <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
              <div className="shrink-0">
                <img
                  src="/images/old/007.png"
                  alt="Директор Рахменшеев Сапар Куттыбаевич"
                  className="w-48 h-auto rounded-2xl shadow-sm border border-[var(--border)]"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-[var(--text-primary)] italic">
                  Уважаемые посетители сайта!
                </p>
                <p>
                  Я рад приветствовать Вас на официальном интернет-ресурсе &laquo;Центра психического здоровья&raquo; города Алматы!
                </p>
                <p>
                  Цели и задачи в Послании Главы государства и в Государственной программе развития здравоохранения Республики Казахстан являются основной политикой Центра психического здоровья.
                </p>
                <p>
                  Долгом каждого сотрудника Центра является охрана психического здоровья всех алматинцев!
                </p>
                <p>
                  На нашем сайте Вы найдете любую интересующую Вас информацию. Здесь Вы можете задать любой вопрос, на который получите ответ в кратчайшие сроки.
                </p>
                <p>
                  Также Вы можете сделать предложение по улучшению качества оказываемой специализированной помощи или поблагодарить сотрудника Центра.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
