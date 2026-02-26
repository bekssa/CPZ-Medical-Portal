'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navigation, kazakhNavigation } from '@/data/navigation';

export default function HeroHeader() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Определяем текущий язык из пути
    const lang = useMemo<'RU' | 'KZ'>(() => {
        if (pathname === '/kz' || pathname.startsWith('/kz/')) return 'KZ';
        return 'RU';
    }, [pathname]);

    // Переключение языка
    const handleLangSwitch = (newLang: 'RU' | 'KZ') => {
        const currentPath = pathname.replace(/^\/(ru|kz)(\/|$)/, '/');
        router.push(newLang === 'RU' ? `/ru${currentPath}` : `/kz${currentPath}`);
    };

    // Выбираем навигацию по языку
    const currentNavigation = lang === 'KZ' ? kazakhNavigation : navigation;

    const isKZ = lang === 'KZ';

    return (
        <div>
            {/* Top info bar */}
            <div className="bg-white border-b border-[var(--border-light)]">
                <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span>{isKZ ? 'Ресми интернет-ресурс' : 'Официальный интернет-ресурс'}</span>
                    <div className="flex items-center gap-4">
                        <a href="tel:1414" className="hover:text-[var(--primary)] transition-colors">ЕКЦ: 14-14</a>
                        <a href="tel:3580" className="hidden sm:inline hover:text-[var(--primary)] transition-colors">
                            {isKZ ? 'Республикалық: 3580' : 'Республиканский: 3580'}
                        </a>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <header className="bg-white border-b-4 border-[var(--primary)]">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-start justify-between gap-6 flex-wrap">
                        {/* Logo + Title */}
                        <Link href={isKZ ? '/kz' : '/ru'} className="flex items-center gap-4 no-underline group">
                            <div className="w-20 h-20 flex-shrink-0 group-hover:opacity-90 transition-opacity">
                                <Image
                                    src="/images/logo-cpz.png"
                                    alt="Логотип ЦПЗ Алматы"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                                    {isKZ ? 'Психикалық Саулықтыру Орталығы' : 'Центр Психического Здоровья'}
                                </div>
                                <div className="text-sm text-[var(--text-muted)] mt-0.5">
                                    {isKZ ? 'Алматы қаласы' : 'города Алматы'}
                                </div>
                            </div>
                        </Link>

                        {/* Right side info */}
                        <div className="flex flex-col items-end gap-3">
                            {/* Contact info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <a href="tel:3000103" className="flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors no-underline">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    Call-{isKZ ? 'орталық' : 'центр'}: 3000-103
                                </a>
                                <a href="tel:1303" className="hidden md:flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors no-underline">
                                    {isKZ ? 'Сенім телефоны: ' : 'Телефон доверия: '}
                                    <strong className="text-[var(--primary-dark)]">13-03</strong>
                                </a>
                            </div>

                            {/* Additional phones */}
                            <div className="hidden lg:flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                                <span>{isKZ ? 'Психиатриялық: +7 727 376-56-60' : 'Психиатрическая: +7 727 376-56-60'}</span>
                                <span>{isKZ ? 'Наркологиялық: +7 727 382-34-62' : 'Наркологическая: +7 727 382-34-62'}</span>
                                <a href="mailto:cpz.sekr@gmail.com" className="text-[var(--primary)] hover:underline">cpz.sekr@gmail.com</a>
                            </div>

                            {/* Search + Lang */}
                            <div className="flex items-center gap-3">
                                {/* Search */}
                                <div className="relative">
                                    {searchOpen ? (
                                        <input
                                            type="text"
                                            placeholder={isKZ ? 'Сайттан іздеу...' : 'Поиск по сайту...'}
                                            autoFocus
                                            className="w-64 px-4 py-2 rounded-lg border border-[var(--border)] bg-white text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light)] animate-fadeIn"
                                            onBlur={() => setSearchOpen(false)}
                                        />
                                    ) : (
                                        <button
                                            onClick={() => setSearchOpen(true)}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            {isKZ ? 'Іздеу' : 'Поиск'}
                                        </button>
                                    )}
                                </div>

                                {/* Lang switcher */}
                                <div className="flex items-center border border-[var(--border)] rounded-lg overflow-hidden">
                                    {(['RU', 'KZ'] as const).map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => handleLangSwitch(l)}
                                            className={`px-3 py-2 text-xs font-medium transition-colors ${lang === l
                                                ? 'bg-[var(--primary)] text-white'
                                                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-gray-50'
                                                }`}
                                        >
                                            {l === 'KZ' ? 'ҚЗ' : l}
                                        </button>
                                    ))}
                                    <button
                                        disabled
                                        className="px-3 py-2 text-xs font-medium text-[var(--text-muted)] opacity-50 cursor-not-allowed"
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation bar */}
            <nav className="bg-[var(--primary)] shadow-md relative z-30">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-0">
                        {currentNavigation.map((item) => (
                            <li key={item.href} className="group relative">
                                <Link
                                    href={item.href}
                                    className="block px-4 py-3.5 text-sm font-medium text-white/90 hover:bg-white/15 hover:text-white transition-colors no-underline"
                                >
                                    {item.title}
                                </Link>
                                {/* Dropdown on hover */}
                                {item.children && item.children.length > 0 && (
                                    <div className="absolute top-full left-0 w-72 bg-white rounded-b-lg shadow-xl border border-[var(--border)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary-dark)] transition-colors no-underline first:rounded-t-lg last:rounded-b-lg"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile burger */}
                    <div className="md:hidden flex items-center justify-between py-3">
                        <span className="text-white text-sm font-medium">{isKZ ? 'Мәзір' : 'Меню'}</span>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-white hover:bg-white/15 rounded-lg transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                {mobileMenuOpen ? (
                                    <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                ) : (
                                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-[var(--border)] shadow-lg animate-fadeIn max-h-[60vh] overflow-y-auto">
                        {currentNavigation.map((item) => (
                            <div key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors no-underline border-b border-[var(--border-light)]"
                                >
                                    {item.title}
                                </Link>
                                {item.children && item.children.length > 0 && (
                                    <div className="bg-gray-50">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block px-10 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors no-underline"
                                            >
                                                {child.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
}
