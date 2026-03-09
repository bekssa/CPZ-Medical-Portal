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
          <span className="text-[var(--text-primary)] line-clamp-1">Биография Директора</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Биография Директора
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
            <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
              Рахменшеев Сапар Куттыбаевич
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-3">Образование</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>1997 г. — окончил Международный Казахско-Турецкий Университет имени Кожа-Ахмета Яссауи по специальности &laquo;Лечебное дело&raquo;.</li>
                <li>2008 г. — окончил Московскую государственную академию по постдипломному обучению, специальность — Менеджмент в здравоохранении.</li>
                <li>2012–2014 гг. — обучение в Магистратуре МВА (магистр делового администрирования) по специальности &laquo;Общественное здравоохранение&raquo;, доктор PhD.</li>
              </ul>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-3">Трудовая деятельность</h3>
              <div className="space-y-3">
                {[
                  { period: '1997–2006 гг.', role: 'Врач-нарколог ГНЦМСК города Алматы.' },
                  { period: '2006–2008 гг.', role: 'Заместитель главного врача по лечебной работе ГНЦМСК города Алматы.' },
                  { period: '2008–2011 гг.', role: 'Заместитель начальника Управления здравоохранения Кызылординской области.' },
                  { period: '2011–2012 гг.', role: 'Директор Департамента Комитета оплаты медицинских услуг МЗ РК по Алматинской области.' },
                  { period: '2012–2014 гг.', role: 'Директор Департамента Комитета оплаты медицинских услуг МЗ РК по городу Алматы.' },
                  { period: '2014–2015 гг.', role: 'Руководитель управления здравоохранения по Кызылординской области.' },
                  { period: '2016–2017 гг.', role: 'Заместитель директора ТОО «Институт развития здравоохранения».' },
                  { period: 'С августа 2017 г.', role: 'Главный врач ГКП на ПХВ Городской поликлиники №1 города Алматы.' },
                  { period: 'С января 2018 г.', role: 'Директор ГКП на ПХВ «Центр психического здоровья» Управления здравоохранения города Алматы.' },
                ].map((item) => (
                  <div key={item.period} className="flex gap-3 items-start p-3 rounded-xl border border-[var(--border)] bg-gray-50/50">
                    <span className="shrink-0 text-sm font-semibold text-[var(--primary)] min-w-[120px]">{item.period}</span>
                    <span className="text-[var(--text-secondary)]">{item.role}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <p className="text-[var(--text-secondary)] mb-2">
                  Является отличником здравоохранения, имеет большой опыт работы в организациях здравоохранения и Управления здравоохранения.
                </p>
                <p className="text-[var(--text-secondary)]">
                  <strong>Владеет языками:</strong> казахский, русский и английский.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
