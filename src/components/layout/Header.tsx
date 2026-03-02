'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({
    onMenuToggle,
}: {
    onMenuToggle: () => void;
}) {
    const [searchOpen, setSearchOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Определяем текущий язык из пути — всегда синхронизирован с pathname
    const lang = useMemo<'RU' | 'KZ' | 'EN'>(() => {
        if (pathname === '/kz' || pathname.startsWith('/kz/')) return 'KZ';
        return 'RU';
    }, [pathname]);

    // Функция для переключения языка
    const handleLanguageSwitch = (newLang: 'RU' | 'KZ' | 'EN') => {
        if (newLang === 'EN') return; // Временно отключаем EN

        // Обрезаем /ru или /kz с конца (включая homepage без trailing slash)
        const currentPath = pathname.replace(/^\/(ru|kz)(\/|$)/, '/');
        const newPath = newLang === 'RU' ? `/ru${currentPath}` : `/kz${currentPath}`;
        router.push(newPath);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border-light)] shadow-[var(--shadow-soft)] h-[var(--header-height)]">
            <div className="h-full max-w-full mx-auto px-4 flex items-center justify-between">
                {/* Left: burger + logo */}
                <div className="flex items-center gap-3">
                    {/* Mobile burger only — hidden on desktop */}
                    <button
                        onClick={onMenuToggle}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    <Link href={lang === 'KZ' ? '/kz' : '/ru'} className="flex items-center gap-3 no-underline">
                        <div className="w-9 h-9 rounded-lg bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-xs text-[var(--text-muted)] leading-tight">
                                {lang === 'KZ' ? 'Ресми интернет-ресурс' : 'Официальный интернет-ресурс'}
                            </div>
                            <div className="text-sm font-semibold text-[var(--text-primary)] leading-tight tracking-tight">
                                {lang === 'KZ' ? 'Психикалық Саулықтыру Орталығы' : 'Центр Психического Здоровья'}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right: phone, search, lang */}
                <div className="flex items-center gap-2">
                    {/* Phone */}
                    <a
                        href="tel:3000103"
                        className="hidden md:flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors px-3 py-1.5 rounded-lg hover:bg-[var(--primary-light)]"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-medium">3000-103</span>
                    </a>

                    {/* Search */}
                    <div className="relative">
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[var(--text-secondary)]"
                            aria-label="Search"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        {searchOpen && (
                            <div className="absolute right-[-70px] sm:right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-72 max-w-[320px] animate-fadeIn">
                                <input
                                    type="text"
                                    placeholder={lang === 'KZ' ? 'Сайттан іздеу...' : 'Поиск по сайту...'}
                                    autoFocus
                                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] shadow-lg"
                                    onBlur={() => setSearchOpen(false)}
                                />
                            </div>
                        )}
                    </div>

                    {/* Language switcher */}
                    <div className="flex items-center border border-[var(--border)] rounded-lg overflow-hidden">
                        {(['RU', 'KZ', 'EN'] as const).map((l) => (
                            <button
                                key={l}
                                onClick={() => handleLanguageSwitch(l)}
                                disabled={l === 'EN'}
                                className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${lang === l
                                    ? 'bg-[var(--primary)] text-white'
                                    : l === 'EN'
                                        ? 'text-[var(--text-muted)] opacity-50 cursor-not-allowed'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-gray-50'
                                    }`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
