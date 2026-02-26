'use client';

const links = [
    {
        title: 'DamuMed',
        subtitle: 'Комплексная медицинская информационная система',
        href: 'https://damumed.kz',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="6" width="24" height="16" rx="3" stroke="white" strokeWidth="1.5" />
                <path d="M9 14h10M14 10v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        bg: 'from-[#0D6EFD] to-[#0A58D6]',
    },
    {
        title: 'Государственные закупки',
        subtitle: 'Республики Казахстан',
        href: 'https://www.goszakup.gov.kz',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 6h20l-2 14H6L4 6z" stroke="white" strokeWidth="1.5" />
                <path d="M10 10v4M14 10v4M18 10v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 6V4a2 2 0 012-2h8a2 2 0 012 2v2" stroke="white" strokeWidth="1.5" />
            </svg>
        ),
        bg: 'from-[#0A5F4F] to-[#067A64]',
    },
    {
        title: 'Управление здравоохранения',
        subtitle: 'г. Алматы',
        href: 'https://almatydensaulyk.kz',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="10" r="5" stroke="white" strokeWidth="1.5" />
                <path d="M5 24c0-5 4-9 9-9s9 4 9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        bg: 'from-[#7B2D8B] to-[#9B3AAD]',
    },
];

export default function UsefulLinks() {
    return (
        <section className="bg-white py-8 border-t border-[var(--border-light)]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[var(--primary)] rounded-full inline-block" />
                    Полезные ресурсы
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br ${link.bg} text-white no-underline hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                {link.icon}
                            </div>
                            <div>
                                <div className="font-semibold text-sm leading-tight">{link.title}</div>
                                <div className="text-white/70 text-xs mt-0.5 leading-snug">{link.subtitle}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
