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
        title: 'Лучевая диагностика Центра психического здоровья',
        content: 'В отделение лучевой диагностики Центра психического здоровья УОЗ г.Алматы входят 3 кабинета: 1. Кабинет компьютерной томографии (КТ); 2. Рентген кабинет; 3. УЗИ кабинет. Отделение оснащено современным оборудованием и принимает пациентов в рабочие дни.',
        images: ['/images/announcements/ann1.jpg'],
    },
    'form-073': {
        date: '05.07.2024',
        title: 'Как получить справку формы 073/у для получения водительского удостоверения (шоферская комиссия)',
        content: 'Для получения справки формы 073/у необходимо обратиться в поликлиническое отделение Центра психического здоровья. Справка выдается врачом-психиатром после прохождения соответствующего осмотра. Режим работы: понедельник-пятница, с 8:00 до 17:00.',
        images: ['/images/announcements/ann2.jpg'],
    },
    'psychiatrist-certificates': {
        date: '05.07.2024',
        title: 'Как и где получить справки от психиатра и нарколога формы 073/у, 75/у, 027/у, 028/у?',
        content: 'Справки различных форм от психиатра и нарколога можно получить в поликлиническом отделении Центра психического здоровья. Для получения справки необходимо иметь при себе удостоверение личности. Прием ведется ежедневно с понедельника по пятницу.',
        images: ['/images/announcements/ann3.jpg'],
    },
    'visitors-notice': {
        date: '09.10.2023',
        title: 'Уважаемые посетители!',
        content: 'Уважаемые посетители! Центр психического здоровья информирует о правилах посещения пациентов. Просим соблюдать установленный режим и следовать指示 указаниям персонала. Режим посещения: ежедневно с 10:00 до 18:00.',
        images: ['/images/announcements/ann1.jpg'],
    },
    'fsms-consulting': {
        date: '01.06.2023',
        title: 'ФСМС сообщает, что с 1 июня 2023 года все консультации 1414, Qoldau 24/7, Telegram-бот',
        content: 'Фонд социального медицинского страхования сообщает, что с 1 июня 2023 года все консультации доступны по номеру 1414, через сервис Qoldau 24/7 и Telegram-бот. Консультации предоставляются бесплатно для всех застрахованных граждан.',
        images: ['/images/announcements/ann2.jpg'],
    },
    'free-consultation': {
        date: '03.05.2023',
        title: 'Приглашаем всех на консультацию бесплатно и анонимно',
        content: 'Центр психического здоровья г. Алматы приглашает всех желающих на бесплатные и анонимные консультации специалистов. Квалифицированные врачи-психиатры и психологи окажут профессиональную помощь. Запись по телефону: 3000-103.',
        images: ['/images/announcements/ann3.jpg'],
    },
};

export async function generateStaticParams() {
    return Object.keys(announcementsData).map((slug) => ({ slug }));
}

export default async function AnnouncementArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = announcementsData[slug];

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
                    <Link href="/ru/announcements" className="hover:text-[var(--primary)] transition-colors no-underline">Объявления</Link>
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
                        href="/ru/announcements"
                        className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors no-underline"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Вернуться к объявлениям
                    </Link>
                </div>
            </div>
        </div>
    );
}
