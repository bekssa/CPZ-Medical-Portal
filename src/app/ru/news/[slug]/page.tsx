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
        title: 'Встреча руководителя Центра Рахменшеева С. с сотрудниками',
        content: 'Сегодня прошла встреча руководителя Центра Рахменшеева С. с сотрудниками, целью которой была беседа по разъяснению в коллективе Конституционной реформы РК. В ходе встречи были обсуждены ключевые аспекты конституционных изменений и их влияние на работу медицинских организаций.',
        images: ['/images/news/news1.jpg'],
    },
    'osms-2026-good': {
        date: '19.12.2025',
        title: 'Хорошая новость для застрахованных в ОСМС с 2026 года',
        content: 'С 2026 года застрахованные в системе ОСМС получат расширенный пакет медицинских услуг. Список бесплатных услуг будет значительно расширен, включая новые виды диагностики и лечения.',
        images: ['/images/news/news2.jpg'],
    },
    'osms-2026-important': {
        date: '19.12.2025',
        title: 'Важная новость по ОСМС с 2026 года',
        content: 'Важная информация об изменениях в системе обязательного социального медицинского страхования с 2026 года. Все застрахованные граждане должны ознакомиться с новыми правилами.',
        images: ['/images/news/news3.jpg'],
    },
    'socially-significant-2026': {
        date: '19.12.2025',
        title: 'С 1 января 2026 года вступает в силу обновленный перечень социально значимых заболеваний',
        content: 'С 1 января 2026 года вступит в силу обновленный перечень социально значимых заболеваний. В перечень включены новые заболевания, лечение которых будет осуществляться в рамках ОСМС.',
        images: ['/images/news/news1.jpg'],
    },
};

export async function generateStaticParams() {
    return Object.keys(newsData).map((slug) => ({ slug }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = newsData[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-[var(--bg)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10">
                {/* Breadcrumbs */}
                <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">Главная</Link>
                    <span>/</span>
                    <Link href="/ru/news" className="hover:text-[var(--primary)] transition-colors no-underline">Новости</Link>
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
                        href="/ru/news"
                        className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Вернуться к новостям
                    </Link>
                </div>
            </div>
        </div>
    );
}
