import Link from 'next/link';
import Image from 'next/image';

const announcementsList = [
  {
    id: 'radiology',
    date: '24.07.2024',
    title: 'Лучевая диагностика Центра психического здоровья',
    excerpt: 'В отделение лучевой диагностики Центра психического здоровья УОЗ г.Алматы входят 3 кабинета: 1. Кабинет компьютерной томографии (КТ); 2. Рентген кабинет; 3. УЗИ кабинет.',
    image: '/images/announcements/ann1.jpg',
    href: '/ru/announcements/radiology',
  },
  {
    id: 'form-073',
    date: '05.07.2024',
    title: 'Как получить справку формы 073/у для получения водительского удостоверения (шоферская комиссия)',
    excerpt: 'Подробная информация о порядке получения справки формы 073/у для водительской комиссии.',
    image: '/images/announcements/ann2.jpg',
    href: '/ru/announcements/form-073',
  },
  {
    id: 'psychiatrist-certificates',
    date: '05.07.2024',
    title: 'Как и где получить справки от психиатра и нарколога формы 073/у, 75/у, 027/у, 028/у?',
    excerpt: 'Информация о порядке получения медицинских справок различных форм от специалистов центра.',
    image: '/images/announcements/ann3.jpg',
    href: '/ru/announcements/psychiatrist-certificates',
  },
  {
    id: 'visitors-notice',
    date: '09.10.2023',
    title: 'Уважаемые посетители!',
    excerpt: 'Важное объявление для посетителей Центра психического здоровья.',
    image: '/images/announcements/ann1.jpg',
    href: '/ru/announcements/visitors-notice',
  },
  {
    id: 'fsms-consulting',
    date: '01.06.2023',
    title: 'ФСМС сообщает, что с 1 июня 2023 года все консультации 1414, Qoldau 24/7, Telegram-бот',
    excerpt: 'Фонд социального медицинского страхования информирует о новых возможностях получения консультаций.',
    image: '/images/announcements/ann2.jpg',
    href: '/ru/announcements/fsms-consulting',
  },
  {
    id: 'free-consultation',
    date: '03.05.2023',
    title: 'Приглашаем всех на консультацию бесплатно и анонимно',
    excerpt: 'Центр психического здоровья приглашает всех желающих на бесплатные и анонимные консультации специалистов.',
    image: '/images/announcements/ann3.jpg',
    href: '/ru/announcements/free-consultation',
  },
];

export default function AnnouncementsPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">Главная</Link>
          <span>/</span>
          <span className="text-[var(--text-primary)]">Объявления</span>
        </nav>

        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-2">
          <span className="w-1 h-7 bg-[var(--primary)] rounded-full inline-block" />
          Объявления
        </h1>

        <div className="space-y-4">
          {announcementsList.map((item) => (
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
