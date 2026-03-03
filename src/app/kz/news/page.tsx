import Link from 'next/link';
import Image from 'next/image';

const newsList = [
  {
    id: 'meeting-rahmengsheev',
    date: '11.02.2026',
    title: 'Орталықтың басшысы Рахменшеев С.-дің қызметкерлермен кездесуі',
    excerpt: 'Бүгін орталықтың басшысы Рахменшеев С.-дің қызметкерлермен кездесуі өтті, оның мақсаты ҚР Конституциялық реформасын ұжымда түсіндіру болды.',
    image: '/images/news/news1.jpg',
    href: '/kz/news/meeting-rahmengsheev',
  },
  {
    id: 'osms-2026-good',
    date: '19.12.2025',
    title: '2026 жылдан бастап МӘМС-та сақтандырылғандарға жақсы жаңалық',
    excerpt: '2026 жылдан бастап МӘМС жүйесінде сақтандырылғандар кеңейтілген медициналық қызметтер пакетін алады.',
    image: '/images/news/news2.jpg',
    href: '/kz/news/osms-2026-good',
  },
  {
    id: 'osms-2026-important',
    date: '19.12.2025',
    title: '📢 2026 жылдан МӘМС бойынша маңызды жаңалық',
    excerpt: 'Міндетті әлеуметтік медициналық сақтандыру жүйесіндегі өзгерістер туралы маңызды ақпарат.',
    image: '/images/news/news3.jpg',
    href: '/kz/news/osms-2026-important',
  },
  {
    id: 'socially-significant-2026',
    date: '19.12.2025',
    title: '2026 жылдың 1 қаңтарынан бастап әлеуметтік маңызды аурулардың жаңартылған тізімі күшіне енеді',
    excerpt: 'Әлеуметтік маңызды аурулардың жаңартылған тізімі 2026 жылдың 1 қаңтарынан бастап күшіне енеді.',
    image: '/images/news/news1.jpg',
    href: '/kz/news/socially-significant-2026',
  },
];

export default function NewsPageKz() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2">
          <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">Басты бет</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">Жаңалықтар</span>
        </nav>

        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-2">
          <span className="w-1 h-7 bg-[var(--primary)] rounded-full inline-block" />
          Жаңалықтар
        </h1>

        <div className="space-y-4">
          {newsList.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-start gap-5 p-5 rounded-2xl border border-[var(--border)] bg-white hover:border-transparent hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              <div className="w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={112}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--text-muted)] font-mono mb-1">{item.date}</div>
                <h2 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-1 leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--text-muted)] flex-shrink-0 mt-1 group-hover:text-[var(--primary)] transition-colors">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
