import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const newsData: Record<string, {
    date: string;
    title: string;
    content: string;
    images: string[];
}> = {
    'meeting-rahmengsheev': {
        date: '11.02.2026',
        title: 'Орталықтың басшысы Рахменшеев С.-дің қызметкерлермен кездесуі',
        content: 'Бүгін орталықтың басшысы Рахменшеев С.-дің қызметкерлермен кездесуі өтті, оның мақсаты ҚР Конституциялық реформасын ұжымда түсіндіру болды. Кездесу барысында конституциялық өзгерістердің негізгі аспектілері мен медициналық ұйымдардың жұмысына тигізетін ықпалы талқыланды.',
        images: ['/images/news/news1.jpg'],
    },
    'osms-2026-good': {
        date: '19.12.2025',
        title: '2026 жылдан бастап МӘМС-та сақтандырылғандарға жақсы жаңалық',
        content: '2026 жылдан бастап МӘМС жүйесінде сақтандырылғандар кеңейтілген медициналық қызметтер пакетін алады. Тегін қызметтер тізімі айтарлықтай кеңейтіледі.',
        images: ['/images/news/news2.jpg'],
    },
    'osms-2026-important': {
        date: '19.12.2025',
        title: '2026 жылдан МӘМС бойынша маңызды жаңалық',
        content: '2026 жылдан бастап міндетті әлеуметтік медициналық сақтандыру жүйесіндегі өзгерістер туралы маңызды ақпарат. Сақтандырылған барлық азаматтар жаңа ережелермен танысуы керек.',
        images: ['/images/news/news3.jpg'],
    },
    'socially-significant-2026': {
        date: '19.12.2025',
        title: '2026 жылдың 1 қаңтарынан бастап әлеуметтік маңызды аурулардың жаңартылған тізімі күшіне енеді',
        content: '2026 жылдың 1 қаңтарынан бастап әлеуметтік маңызды аурулардың жаңартылған тізімі күшіне енеді. Тізімге жаңа аурулар қосылды.',
        images: ['/images/news/news1.jpg'],
    },
};

export async function generateStaticParams() {
    return Object.keys(newsData).map((slug) => ({ slug }));
}

export default async function NewsArticlePageKz({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = newsData[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-[var(--bg)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10">
                <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">Басты бет</Link>
                    <span>/</span>
                    <Link href="/kz/news" className="hover:text-[var(--primary)] transition-colors no-underline">Жаңалықтар</Link>
                    <span>/</span>
                    <span className="text-[var(--text-primary)] line-clamp-1">{article.title}</span>
                </nav>

                <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8">
                    <div className="text-xs text-[var(--text-muted)] font-mono mb-3">{article.date}</div>
                    <h1 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6 leading-snug">
                        {article.title}
                    </h1>

                    {article.images.map((img, i) => (
                        <div key={i} className="mb-6 rounded-xl overflow-hidden">
                            <Image
                                src={img}
                                alt={article.title}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}

                    <div className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                        {article.content}
                    </div>
                </article>

                <div className="mt-6">
                    <Link
                        href="/kz/news"
                        className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Жаңалықтарға оралу
                    </Link>
                </div>
            </div>
        </div>
    );
}
