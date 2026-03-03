import Link from 'next/link';
import Image from 'next/image';

const announcementsList = [
    {
        id: 'radiology',
        date: '24.07.2024',
        title: 'Психикалық денсаулық орталығының лучевая диагностика бөлімі',
        excerpt: 'Алматы қаласы Денсаулық сақтау басқармасының Психикалық денсаулық орталығының лучевая диагностика бөліміне 3 кабинет кіреді.',
        image: '/images/announcements/ann1.jpg',
        href: '/kz/announcements/radiology',
    },
    {
        id: 'form-073',
        date: '05.07.2024',
        title: 'Жүргізуші куәлігін алу үшін 073/у нысанындағы анықтама қалай алуға болады?',
        excerpt: '073/у нысанындағы анықтаманы алу тәртібі туралы толық ақпарат.',
        image: '/images/announcements/ann2.jpg',
        href: '/kz/announcements/form-073',
    },
    {
        id: 'psychiatrist-certificates',
        date: '05.07.2024',
        title: 'Психиатр мен наркологтан 073/у, 75/у, 027/у, 028/у нысанындағы анықтамаларды қалай алуға болады?',
        excerpt: 'Орталық мамандарынан әртүрлі нысандағы медициналық анықтамаларды алу тәртібі туралы ақпарат.',
        image: '/images/announcements/ann3.jpg',
        href: '/kz/announcements/psychiatrist-certificates',
    },
    {
        id: 'visitors-notice',
        date: '09.10.2023',
        title: 'Құрметті келушілер!',
        excerpt: 'Психикалық денсаулық орталығының келушілеріне арналған маңызды хабарландыру.',
        image: '/images/announcements/ann1.jpg',
        href: '/kz/announcements/visitors-notice',
    },
    {
        id: 'fsms-consulting',
        date: '01.06.2023',
        title: 'МӘМС 2023 жылдың 1 маусымынан бастап барлық кеңестер 1414, Qoldau 24/7 арқылы',
        excerpt: 'Әлеуметтік медициналық сақтандыру қоры кеңес алудың жаңа мүмкіндіктері туралы хабарлайды.',
        image: '/images/announcements/ann2.jpg',
        href: '/kz/announcements/fsms-consulting',
    },
    {
        id: 'free-consultation',
        date: '03.05.2023',
        title: 'Барлығын тегін және анонимді кеңеске шақырамыз',
        excerpt: 'Психикалық денсаулық орталығы барлық тілектілерді мамандармен тегін және анонимді кеңеске шақырады.',
        image: '/images/announcements/ann3.jpg',
        href: '/kz/announcements/free-consultation',
    },
];

export default function AnnouncementsPageKz() {
    return (
        <div className="bg-[var(--bg)] min-h-screen">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2">
                    <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">Басты бет</Link>
                    <span>/</span>
                    <span className="text-[var(--text-primary)]">Хабарландырулар</span>
                </nav>

                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-2">
                    <span className="w-1 h-7 bg-[var(--primary)] rounded-full inline-block" />
                    Хабарландырулар
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
