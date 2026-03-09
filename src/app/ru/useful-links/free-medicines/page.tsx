import Link from 'next/link';

const resources = [
  {
    title: 'Перечень лекарственных средств для бесплатного и льготного амбулаторного обеспечения',
    description: 'Приказ Министра здравоохранения РК от 5 августа 2021 года № ҚР ДСМ-75',
    href: 'https://adilet.zan.kz/rus/docs/V2100023885',
    icon: '💊',
  },
  {
    title: 'Об утверждении перечня гарантированного объема бесплатной медицинской помощи',
    description: 'Постановление Правительства РК от 16 октября 2020 года № 672',
    href: 'https://adilet.zan.kz/rus/docs/P2000000672',
    icon: '📋',
  },
  {
    title: 'О здоровье народа и системе здравоохранения',
    description: 'Кодекс Республики Казахстан от 7 июля 2020 года № 360-VI ЗРК',
    href: 'https://adilet.zan.kz/rus/docs/K2000000360',
    icon: '⚖️',
  },
];

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">Бесплатные и льготные лекарства</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Бесплатные и льготные лекарства
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
            <p>
              В соответствии с законодательством Республики Казахстан, граждане имеют право на бесплатное и льготное обеспечение лекарственными средствами в рамках гарантированного объёма бесплатной медицинской помощи (ГОБМП) и обязательного социального медицинского страхования (ОСМС).
            </p>

            <div className="mt-6 space-y-3">
              {resources.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                >
                  <span className="mt-0.5 text-lg shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-sm text-[var(--text-muted)] mt-1">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
