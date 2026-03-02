'use client';

const services = [
    {
        title: 'Психиатрическая служба',
        href: '/about',
        description: 'Диагностика и лечение психических расстройств, консультации специалистов.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="10" r="6" stroke="#00B7C6" strokeWidth="1.5" />
                <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#00B7C6" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 10h6M16 7v6" stroke="#00B7C6" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        color: 'from-[#00B7C6]/10 to-[#00B7C6]/5',
        border: 'border-[#00B7C6]/30',
    },
    {
        title: 'Наркологическая служба',
        href: '/about',
        description: 'Лечение зависимостей, реабилитация и социальная адаптация пациентов.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4c-6 0-10 4-10 8 0 6 10 17 10 17s10-11 10-17c0-4-4-8-10-8z" stroke="#00B7C6" strokeWidth="1.5" />
                <path d="M13 14h6M16 11v6" stroke="#00B7C6" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        color: 'from-[#0E7490]/10 to-[#0E7490]/5',
        border: 'border-[#0E7490]/30',
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-8 sm:py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[var(--primary)] rounded-full inline-block" />
                    Наши службы
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {services.map((service) => (
                        <a
                            key={service.href + service.title}
                            href={service.href}
                            className={`group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.border} hover:border-transparent hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300 no-underline`}
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                {service.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm text-[var(--primary)] font-medium group-hover:gap-2 transition-all">
                                    Перейти в раздел
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
