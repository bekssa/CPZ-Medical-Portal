import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const links = [
    { title: 'История центра', href: '/links/history', description: 'Историческая справка о создании и развитии центра' },
    { title: 'Блог Директора', href: '/links/director-blog', description: 'Публикации и обращения директора центра' },
    { title: 'Биография Директора', href: '/links/director-bio', description: 'Биографическая справка директора' },
    { title: 'Бесплатные и льготные лекарства', href: '/links/free-medicines', description: 'Перечень бесплатных и льготных лекарственных средств' },
    { title: 'Гарантированный объем медицинской помощи', href: '/links/guaranteed-care', description: 'Информация о гарантированном объёме медицинской помощи' },
    { title: 'Финансовая отчетность', href: '/links/financial-reports', description: 'Финансовые отчёты и данные о доходах и расходах' },
];

const externalLinks = [
    { title: 'Официальный сайт Президента РК', url: 'https://akorda.kz' },
    { title: 'Послание Президента РК', url: 'https://www.akorda.kz/ru/addresses' },
    { title: 'Казахстан-2050', url: 'https://strategy2050.kz' },
    { title: 'Управление здравоохранения г. Алматы', url: 'https://almatydensaulyk.kz' },
    { title: 'Фонд социального мед. страхования (ФСМС)', url: 'https://fms.kz' },
];

export default function LinksPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Полезные ссылки</h1>
                <p>
                    Раздел содержит информацию об истории центра, биографию руководства, финансовую отчётность,
                    а также ссылки на полезные внешние ресурсы.
                </p>
            </div>

            <div className="mt-8 space-y-3">
                {links.map((page) => (
                    <Link
                        key={page.href}
                        href={page.href}
                        className="group block p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                    >
                        <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                            {page.title}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">{page.description}</div>
                    </Link>
                ))}
            </div>

            {/* External links */}
            <div className="mt-10">
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Внешние ресурсы</h2>
                <div className="space-y-2">
                    {externalLinks.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3 rounded-lg border border-[var(--border-light)] bg-white hover:border-[var(--primary)] transition-all no-underline"
                        >
                            <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors">
                                {link.title}
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
