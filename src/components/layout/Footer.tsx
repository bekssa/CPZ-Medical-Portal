import Link from 'next/link';

const footerLinks = [
    { title: 'Главная', href: '/' },
    { title: 'О центре', href: '/about' },
    { title: 'Пациентам', href: '/patients' },
    { title: 'Контакты', href: '/contacts' },
    { title: 'НПА', href: '/npa' },
    { title: 'Гос. услуги', href: '/services' },
];

export default function Footer() {
    return (
        <footer className="bg-[#1A1D26] text-gray-400 mt-auto">
            <div className="max-w-5xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Info */}
                    <div>
                        <div className="text-white font-semibold text-sm mb-3">
                            Центр Психического Здоровья
                        </div>
                        <p className="text-xs leading-relaxed text-gray-500">
                            Официальный интернет-ресурс Центра психического здоровья города Алматы.
                            Предоставление психиатрической и наркологической помощи населению.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <div className="text-white font-semibold text-sm mb-3">Разделы</div>
                        <ul className="space-y-1.5">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-xs text-gray-500 hover:text-[var(--primary)] transition-colors no-underline"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div>
                        <div className="text-white font-semibold text-sm mb-3">Контакты</div>
                        <div className="space-y-2 text-xs text-gray-500">
                            <div className="flex items-start gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>г. Алматы, Центр Психического Здоровья</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>Call-центр: 3000-103</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <span>Телефон доверия: 13-03</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                <a href="mailto:cpz.sekr@gmail.com" className="hover:text-[var(--primary)] transition-colors">
                                    cpz.sekr@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span>Пн–Пт: 08:00 – 17:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Центр Психического Здоровья г. Алматы. Все права защищены.
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span>ЕКЦ 14-14</span>
                        <span>Республиканский: 3580</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
