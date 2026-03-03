import Link from 'next/link';
import Image from 'next/image';
import HeroHeader from '@/components/home/HeroHeader';
import ImageCarousel from '@/components/home/ImageCarousel';
import GovernmentTiles from '@/components/home/GovernmentTiles';
import ServicesSection from '@/components/home/ServicesSection';
import VideoCarousel from '@/components/home/VideoCarousel';

const newsKz = [
    {
        date: '19.06.2025',
        title: 'Алматының есірткі заттары мен алкогольге тәуелді науқастар көрмеге шақырады.',
        href: '/kz/news/1',
        image: '/images/news/news1.jpg',
    },
    {
        date: '13.06.2025',
        title: 'Майталмандар марапатталды.',
        href: '/kz/news/2',
        image: '/images/news/news2.jpg',
    },
    {
        date: '30.05.2025',
        title: 'Психикалық сауықтыру орталығы емделушілері қойылымға шақырады.',
        href: '/kz/news/3',
        image: '/images/news/news3.jpg',
    },
    {
        date: '26.05.2025',
        title: 'Дәрігер–балалардың жанашыры.',
        href: '/kz/news/4',
        image: '/images/news/news1.jpg',
    },
];

const announcementsKz = [
    {
        date: '09',
        monthYear: '10/2023',
        title: 'ХАБАРЛАМА',
        href: '/kz/announcements/1',
    },
    {
        date: '05',
        monthYear: '07/2023',
        title: 'Оқуға түсуге немесе жұмысқа тұруға 075/у нысанды медициналық анықтаманы қалай алуға болады.',
        href: '/kz/announcements/2',
    },
    {
        date: '01',
        monthYear: '06/2023',
        title: '2023 жылы 1-маусымнан бастап МСҚ қатысты консультацияларды 1414, Qoldau 24/7, Telegram-бот',
        href: '/kz/announcements/3',
    },
    {
        date: '03',
        monthYear: '05/2023',
        title: 'Жеңіс күніне арналған айлық аясында ашық есік күндері',
        href: '/kz/announcements/4',
    },
];

export default function KzPage() {
    return (
        <div>
            {/* Hero Header + Navigation */}
            <HeroHeader />

            {/* Image Carousel */}
            <ImageCarousel />

            {/* Government Tiles */}
            <GovernmentTiles />

            {/* Services Section */}
            <ServicesSection />

            {/* Main content sections */}
            <div className="bg-[var(--bg)]">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left/Main column — News + Announcements (2/3) */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* News with images */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Жаңалықтар</h2>
                                    <Link
                                        href="/kz/news"
                                        className="text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline font-medium"
                                    >
                                        Барлық жаңалықтар →
                                    </Link>
                                </div>
                                <div className="space-y-3">
                                    {newsKz.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className="group flex items-start gap-4 p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                                        >
                                            {/* News thumbnail */}
                                            <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={80}
                                                    height={64}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs text-[var(--text-muted)] font-mono mb-1">{item.date}</div>
                                                <div className="text-sm text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors leading-relaxed">
                                                    {item.title}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Announcements */}
                            <section>
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold text-[var(--text-primary)]">Хабарландыру</h2>
                                    <Link
                                        href="/kz/announcements"
                                        className="text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline font-medium"
                                    >
                                        Барлық хабарландыру →
                                    </Link>
                                </div>
                                <div className="space-y-3">
                                    {announcementsKz.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            className="group flex gap-4 p-4 rounded-2xl border border-[var(--border)] bg-white hover:border-transparent hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 no-underline"
                                        >
                                            <div className="flex flex-col flex-shrink-0 text-center items-center justify-center p-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors min-w-[70px]">
                                                <span className="text-2xl font-bold leading-none mb-1 group-hover:text-white text-[var(--text-primary)]">{item.date}</span>
                                                <span className="text-[10px] uppercase font-semibold text-[var(--text-muted)] group-hover:text-white/80">{item.monthYear}</span>
                                            </div>
                                            <div className="flex-1 min-w-0 flex items-center">
                                                <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors leading-relaxed">
                                                    {item.title}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right sidebar column (1/3) */}
                        <div className="space-y-5">

                            {/* Facebook page widget */}
                            <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-white">
                                <div className="px-4 py-3 border-b border-[var(--border-light)] flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    <span className="text-sm font-semibold text-[var(--text-primary)]">Facebook — Ақорда</span>
                                </div>
                                <div className="overflow-hidden">
                                    <iframe
                                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAqordaResmi&tabs=timeline&width=280&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=210033156217922"
                                        width="280"
                                        height="400"
                                        style={{ border: 'none', overflow: 'hidden', width: '100%' }}
                                        scrolling="no"
                                        frameBorder="0"
                                        allowFullScreen
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                        title="Facebook Ақорда"
                                    /> </div>
                            </div>

                            {/* Accreditation badge */}
                            <a
                                href="https://nac.kz/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-xl border border-[var(--border)] bg-white p-4 hover:shadow-md transition-shadow no-underline"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 shadow-md">
                                        <div className="text-center">
                                            <div className="text-white font-bold text-lg leading-none">I</div>
                                            <div className="text-white text-[8px] leading-tight font-semibold">КАТ</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-[var(--text-primary)] leading-tight">ПХВ «Психикалық сауықтыру орталығы»</div>
                                        <div className="text-xs text-[var(--primary)] font-semibold mt-0.5">I Санат</div>
                                        <div className="text-xs text-[var(--text-muted)]">Ұлттық аккредитация 2023-2026</div>
                                        <div className="text-xs text-[var(--text-muted)]">г. Алматы</div>
                                    </div>
                                </div>
                            </a>

                            {/* GOBMP link */}
                            <a
                                href="/kz/patients/gobmp"
                                className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 12h6M12 9v6M12 3C6.477 3 2 7.477 2 12s4.477 9 10 9 10-4.477 10-9S17.523 3 12 3z" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">Кепілдендірілген тегін медициналық көмек көлемі</div>
                                    <div className="text-xs text-[var(--text-muted)]">ГОБМП — Жаңа модель</div>
                                </div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--text-muted)] flex-shrink-0">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            {/* Almaty Health Management */}
                            <a
                                href="https://almatydensaulyk.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-xl border border-[var(--border)] bg-white p-3 hover:shadow-md transition-shadow no-underline"
                            >
                                <Image
                                    src="/images/badges/uzalmaty.png"
                                    alt="Управление здравоохранения г. Алматы"
                                    width={200}
                                    height={80}
                                    className="w-full h-auto object-contain"
                                />
                            </a>

                            {/* Call Center */}
                            <a
                                href="tel:1303"
                                className="block rounded-xl border-2 border-[var(--primary)] bg-white p-3 hover:shadow-md transition-shadow no-underline"
                            >
                                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[var(--primary-light)] text-[var(--primary)]">
                                    <div className="text-sm font-semibold mb-1">Сенім телефоны</div>
                                    <div className="text-2xl font-bold tracking-tight">13-03</div>
                                </div>
                            </a>

                            {/* DamuMed */}
                            <div className="rounded-xl border border-[var(--border)] bg-white p-4">
                                <div className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">Ақпараттық жүйелер</div>
                                <div className="space-y-2">
                                    <a
                                        href="https://alm.dmed.kz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--border-light)] hover:border-[var(--primary)] hover:bg-[var(--primary-light)] transition-all no-underline group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#16a34a" strokeWidth="1.5" />
                                                <path d="M9 22V12h6v10" stroke="#16a34a" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">DamuMed</div>
                                            <div className="text-xs text-[var(--text-muted)]">Кешенді медициналық АЖ</div>
                                        </div>
                                    </a>
                                    <a
                                        href="https://goszakup.gov.kz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--border-light)] hover:border-[var(--primary)] hover:bg-[var(--primary-light)] transition-all no-underline group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#2563eb" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">Мемлекеттік сатып алулар</div>
                                            <div className="text-xs text-[var(--text-muted)]">Қазақстан Республикасы</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Contact card */}
                            <div className="p-5 rounded-xl border border-[var(--border)] bg-white">
                                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    Байланыстар
                                </h3>
                                <div className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                                    <div><strong className="text-[var(--primary)]">Сенім телефоны:</strong> <a href="tel:1303" className="hover:text-[var(--primary)] transition-colors">13-03</a></div>
                                    <div><strong>ЕКО:</strong> <a href="tel:1414" className="hover:text-[var(--primary)] transition-colors">14-14</a></div>
                                    <div><strong>Республикалық:</strong> <a href="tel:3580" className="hover:text-[var(--primary)] transition-colors">3580</a></div>
                                    <div><a href="tel:+77273765660" className="hover:text-[var(--primary)] transition-colors">Психиатриялық: +7 727 376-56-60</a></div>
                                    <div><a href="tel:+77273823462" className="hover:text-[var(--primary)] transition-colors">Наркологиялық: +7 727 382-34-62</a></div>
                                    <div><a href="tel:+77474966420" className="hover:text-[var(--primary)] transition-colors">Балалар бөлімшесі: 8 747 496 64 20</a></div>
                                    <div className="pt-2 border-t border-[var(--border-light)]">
                                        <a href="mailto:cpz.sekr@gmail.com" className="text-[var(--primary)] hover:underline text-sm">
                                            cpz.sekr@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Carousel (djslider) */}
            <VideoCarousel />
        </div>
    );
}
