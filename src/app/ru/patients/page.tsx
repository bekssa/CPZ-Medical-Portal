import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'ОСМС', href: '/patients/osms', description: 'Обязательное социальное медицинское страхование' },
    { title: 'ГОБМП', href: '/patients/gobmp', description: 'Гарантированный объем бесплатной медицинской помощи' },
    { title: 'Часто задаваемые вопросы', href: '/patients/faq', description: 'Ответы на частые вопросы пациентов' },
    { title: 'Обращения', href: '/patients/appeals', description: 'Порядок обращения граждан' },
    { title: 'График врачей', href: '/patients/doctors-schedule', description: 'Расписание приёма специалистов' },
    { title: 'Лекарственный формуляр', href: '/patients/drug-formulary', description: 'Перечень лекарственных средств' },
    { title: 'Права и обязанности пациентов', href: '/patients/rights', description: 'Ваши права и обязанности при получении помощи' },
    { title: 'Вопрос-ответ', href: '/patients/qa', description: 'Задайте вопрос специалисту' },
    { title: 'Служба поддержки пациента', href: '/patients/support-service', description: 'Служба поддержки и внутреннего аудита' },
];

export default function PatientsPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Пациентам</h1>
                <p>
                    В данном разделе вы найдете информацию об обязательном социальном медицинском страховании (ОСМС),
                    гарантированном объеме бесплатной медицинской помощи (ГОБМП), ваших правах и обязанностях как пациента,
                    а также графики приёма специалистов и другую полезную информацию.
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
