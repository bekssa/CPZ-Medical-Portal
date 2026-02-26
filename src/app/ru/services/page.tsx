import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'Реестр государственных услуг', href: '/services/registry', description: 'Перечень государственных услуг, оказываемых центром' },
    { title: 'Стандарты государственных услуг', href: '/services/standards', description: 'Стандарты оказания медицинских и государственных услуг' },
    { title: 'НПА по государственным услугам', href: '/services/npa', description: 'Нормативные правовые акты, регулирующие оказание государственных услуг' },
    { title: 'Отчеты по государственным услугам', href: '/services/reports', description: 'Отчёты о деятельности по оказанию государственных услуг' },
];

export default function ServicesPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Государственные услуги</h1>
                <p>
                    Информация о государственных услугах, оказываемых Центром психического здоровья города Алматы.
                    Здесь представлены реестры, стандарты, нормативные акты и отчётность по оказанию услуг населению.
                </p>
            </div>

            <div className="mt-8 space-y-3">
                {subpages.map((page) => (
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
        </div>
    );
}
