import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'ОСМС', href: '/ru/patients/osms', description: 'Обязательное социальное медицинское страхование' },
    { title: 'ГОБМП', href: '/ru/patients/gobmp', description: 'Гарантированный объем бесплатной медицинской помощи' },
    { title: 'Часто задаваемые вопросы', href: '/ru/patients/faq', description: 'Ответы на частые вопросы пациентов' },
    { title: 'Обращения', href: '/ru/patients/appeals', description: 'Порядок обращения граждан' },
    { title: 'График врачей', href: '/ru/patients/doctors-schedule', description: 'Расписание приёма специалистов' },
    { title: 'Лекарственный формуляр', href: '/ru/patients/drug-formulary', description: 'Перечень лекарственных средств' },
    { title: 'Права и обязанности пациентов', href: '/ru/patients/rights', description: 'Ваши права и обязанности при получении помощи' },
    { title: 'Вопрос-ответ', href: '/ru/patients/qna', description: 'Задайте вопрос специалисту' },
    { title: 'Служба поддержки пациента', href: '/ru/patients/support-service', description: 'Служба поддержки и внутреннего аудита' },
];

export default function PatientsPage() {
    return (
        <div className="animate-fadeIn pb-10">
            <Breadcrumbs />
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
                    Пациентам
                </h1>

                <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose mb-10">
                    <h2 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Уважаемые посетители сайта!</h2>
                    <p>Мы рады приветствовать вас на страницах официального сайта!</p>
                    <p>Надеемся с помощью нашего сайта стать ближе к вам, найти с вами взаимопонимание в вопросах оказания медицинских услуг и наладить обратную связь.</p>
                    <p>Любое ваше обращение не останется без внимания, ваши предложения, замечания будут приняты к сведению и помогут нам совершенствовать организацию медицинской помощи.</p>

                    <div className="text-right mt-6 italic">
                        <p>Желаю всем здоровья!</p>
                        <p className="font-medium not-italic text-[var(--text-primary)]">Директор Рахменшеев С.К.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subpages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group p-5 rounded-xl border border-[var(--border)] bg-gray-50/50 hover:bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all no-underline flex flex-col h-full"
                        >
                            <div className="font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                                {page.title}
                            </div>
                            <div className="text-sm text-[var(--text-muted)] line-clamp-2">
                                {page.description}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
