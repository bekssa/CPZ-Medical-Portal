import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'Миссия, Цель и Ценности', href: '/about/mission', description: 'Основные принципы и направления деятельности центра' },
    { title: 'Администрация', href: '/about/administration', description: 'Руководство центра психического здоровья' },
    { title: 'Как нас найти', href: '/about/location', description: 'Адрес и маршрут до центра' },
    { title: 'Наблюдательный совет', href: '/about/supervisory-board', description: 'Состав и деятельность наблюдательного совета' },
    { title: 'Стратегический план', href: '/about/strategic-plan', description: 'Стратегическое развитие центра' },
    { title: 'Этический кодекс', href: '/about/ethics-code', description: 'Кодекс этики и поведения сотрудников' },
    { title: 'Противодействие коррупции', href: '/about/anti-corruption', description: 'Антикоррупционная политика' },
    { title: 'Устав', href: '/about/charter', description: 'Устав предприятия' },
    { title: 'Аналитический обзор', href: '/about/analytics', description: 'Аналитические материалы и обзоры' },
    { title: 'Государственные закупки', href: '/about/procurement', description: 'Объявления, протоколы вскрытия и итогов' },
];

export default function AboutPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>О центре</h1>
                <p>
                    Центр Психического Здоровья города Алматы — государственное предприятие на праве хозяйственного ведения,
                    осуществляющее деятельность по оказанию психиатрической и наркологической помощи населению города Алматы.
                </p>
                <p>
                    Основными задачами центра являются оказание специализированной психиатрической и наркологической помощи
                    населению, профилактика психических расстройств и расстройств, связанных с употреблением психоактивных веществ,
                    реабилитация лиц с психическими и поведенческими расстройствами.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subpages.map((page) => (
                    <Link
                        key={page.href}
                        href={page.href}
                        className="group p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                    >
                        <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                            {page.title}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">{page.description}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
