import Link from 'next/link';

const resources = [
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
  {
    title: 'Об утверждении Правил оказания стационарной помощи',
    description: 'Нормативный правовой акт — adilet.zan.kz',
    href: 'https://adilet.zan.kz/rus/docs/V1500012204',
    icon: '🏥',
  },
  {
    title: 'Об утверждении правил оказания скорой медицинской помощи',
    description: 'Нормативный правовой акт — adilet.zan.kz',
    href: 'https://adilet.zan.kz/rus/docs/V2000021713#z294',
    icon: '🚑',
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
          <span className="text-[var(--text-primary)] line-clamp-1">Гарантированный объем медицинской помощи</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Гарантированный объем медицинской помощи
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
            <p>
              Гарантированный объём бесплатной медицинской помощи (ГОБМП) — это комплекс медицинских услуг, предоставляемых гражданам за счёт бюджетных средств. В рамках ГОБМП предоставляется скорая помощь, первичная медико-санитарная помощь, а также специализированная и высокотехнологичная помощь при социально значимых заболеваниях.
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
