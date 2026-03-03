import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const announcementsData: Record<string, {
    date: string;
    title: string;
    content: string;
    images: string[];
}> = {
    'radiology': {
        date: '24.07.2024',
        title: 'Психикалық денсаулық орталығының лучевая диагностика бөлімі',
        content: 'Алматы қаласы Денсаулық сақтау басқармасының Психикалық денсаулық орталығының лучевая диагностика бөліміне 3 кабинет кіреді: 1. Компьютерлік томография (КТ) кабинеті; 2. Рентген кабинеті; 3. УДЗ кабинеті.',
        images: ['/images/announcements/ann1.jpg'],
    },
    'form-073': {
        date: '05.07.2024',
        title: 'Жүргізуші куәлігін алу үшін 073/у нысанындағы анықтама қалай алуға болады?',
        content: '073/у нысанындағы анықтаманы алу үшін Психикалық денсаулық орталығының поликлиника бөліміне жүгіну қажет. Анықтаманы психиатр дәрігер тиісті тексеруден өткеннен кейін береді.',
        images: ['/images/announcements/ann2.jpg'],
    },
    'psychiatrist-certificates': {
        date: '05.07.2024',
        title: 'Психиатр мен наркологтан 073/у, 75/у, 027/у, 028/у нысанындағы анықтамаларды қалай алуға болады?',
        content: 'Орталықтың поликлиника бөлімінде психиатр мен наркологтан әртүрлі нысандағы медициналық анықтамаларды алуға болады. Анықтама алу үшін жеке куәлік болуы қажет.',
        images: ['/images/announcements/ann3.jpg'],
    },
    'visitors-notice': {
        date: '09.10.2023',
        title: 'Құрметті келушілер!',
        content: 'Психикалық денсаулық орталығы келушілерге науқастарды барып көру ережелері туралы хабарлайды. Белгіленген режимді сақтап, персоналдың нұсқауларын орындауды сұраймыз. Барып көру режимі: күн сайын 10:00-ден 18:00-ге дейін.',
        images: ['/images/announcements/ann1.jpg'],
    },
    'fsms-consulting': {
        date: '01.06.2023',
        title: 'МӘМС 2023 жылдың 1 маусымынан бастап барлық кеңестер 1414, Qoldau 24/7, Telegram-бот арқылы',
        content: 'Әлеуметтік медициналық сақтандыру қоры 2023 жылдың 1 маусымынан бастап барлық кеңестер 1414 нөмірі, Qoldau 24/7 қызметі және Telegram-бот арқылы қолжетімді екенін хабарлайды.',
        images: ['/images/announcements/ann2.jpg'],
    },
    'free-consultation': {
        date: '03.05.2023',
        title: 'Барлығын тегін және анонимді кеңеске шақырамыз',
        content: 'Алматы қаласының Психикалық денсаулық орталығы барлық тілектілерді мамандармен тегін және анонимді кеңеске шақырады. Жазылу телефоны: 3000-103.',
        images: ['/images/announcements/ann3.jpg'],
    },
};

export async function generateStaticParams() {
    return Object.keys(announcementsData).map((slug) => ({ slug }));
}

export default async function AnnouncementArticlePageKz({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = announcementsData[slug];

    if (!article) {
        notFound();
    }

    return (
        <div className="bg-[var(--bg)] min-h-screen">
            <div className="max-w-4xl mx-auto px-4 py-10">
                <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
                    <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">Басты бет</Link>
                    <span>/</span>
                    <Link href="/kz/announcements" className="hover:text-[var(--primary)] transition-colors no-underline">Хабарландырулар</Link>
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
                        href="/kz/announcements"
                        className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Хабарландыруларға оралу
                    </Link>
                </div>
            </div>
        </div>
    );
}
