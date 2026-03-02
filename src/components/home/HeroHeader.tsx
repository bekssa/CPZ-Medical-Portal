'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { navigation, kazakhNavigation } from '@/data/navigation';

export default function HeroHeader() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeMobileMenu, setActiveMobileMenu] = useState<'none' | 'nav' | 'lang' | 'phones' | 'search'>('none');
    const pathname = usePathname();
    const router = useRouter();
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Закрытие мобильного меню при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeMobileMenu !== 'none' && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {

                // Исключаем клик по кнопкам открытия меню (они лежат выше в DOM)
                const target = event.target as HTMLElement;
                if (!target.closest('.mobile-menu-trigger')) {
                    setActiveMobileMenu('none');
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeMobileMenu]);

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
            <header className="bg-white relative z-40">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)]"></div>
                <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
                    <div className="flex items-center justify-between gap-4 sm:gap-6">
                        {/* Logo + Title */}
                        <Link href={isKZ ? '/kz' : '/ru'} className="flex items-center gap-3 sm:gap-4 no-underline group w-full sm:w-auto">
                            <div className="w-10 h-10 sm:w-20 sm:h-20 flex-shrink-0 group-hover:opacity-90 transition-opacity">
                                <Image
                                    src="/images/logo-cpz.png"
                                    alt="Логотип ЦПЗ Алматы"
                                    width={80}
                                    height={80}
                                    className="object-contain w-full h-full"
                                    priority
                                />
                            </div>
                            <div>
                                <div className="text-base sm:text-2xl font-bold text-[var(--primary-dark)] tracking-tight leading-tight">
                                    {isKZ ? 'Психикалық Саулықтыру Орталығы' : 'Центр Психического Здоровья'}
                                </div>
                                <div className="text-xs sm:text-sm text-[var(--primary-dark)] opacity-80 mt-0.5">
                                    {isKZ ? 'Алматы қаласы' : 'города Алматы'}
                                </div>
                            </div>
                        </Link>

                        {/* Right side info block */}
                        <div className="hidden sm:flex items-center gap-6 lg:gap-8">

                            {/* Left partition: Search + Lang */}
                            <div className="flex flex-col items-end gap-3 lg:gap-4">
                                {/* Language switcher */}
                                <div className="flex items-center bg-gray-50 rounded-lg p-0.5 border border-[var(--border-light)] shadow-sm">
                                    {(['RU', 'KZ'] as const).map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => handleLangSwitch(l)}
                                            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${lang === l
                                                ? 'bg-white text-[var(--primary-dark)] border border-[var(--border)] shadow-sm'
                                                : 'text-[var(--text-muted)] hover:text-[var(--primary)] border border-transparent'
                                                }`}
                                        >
                                            {l === 'KZ' ? 'ҚЗ' : 'RU'}
                                        </button>
                                    ))}
                                    <button
                                        disabled
                                        className="px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] opacity-30 cursor-not-allowed border border-transparent"
                                    >
                                        EN
                                    </button>
                                </div>

                                {/* Search */}
                                <div className="relative group">
                                    {searchOpen ? (
                                        <input
                                            type="text"
                                            placeholder={isKZ ? 'Сайттан іздеу...' : 'Поиск по сайту...'}
                                            autoFocus
                                            className="w-[140px] sm:w-56 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-white text-xs focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary-light)] animate-fadeIn shadow-inner"
                                            onBlur={() => setSearchOpen(false)}
                                        />
                                    ) : (
                                        <button
                                            onClick={() => setSearchOpen(true)}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:text-[var(--primary)] bg-gray-50 border border-[var(--border-light)] hover:border-[var(--primary)] transition-all shadow-sm"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            {isKZ ? 'Іздеу' : 'Поиск'}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Right partition: Phones */}
                            <div className="flex flex-col items-start gap-2.5 text-xs text-[var(--text-muted)] border-l border-[var(--border-light)] pl-6 lg:pl-8">
                                <a href="tel:+77273765660" className="flex items-center gap-2.5 hover:text-[var(--primary)] transition-colors group no-underline">
                                    <div className="w-5 h-5 rounded-full bg-gray-50 group-hover:bg-[var(--primary-light)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span className="w-32 lg:w-36">{isKZ ? 'Психиатриялық:' : 'Психиатрическая:'}</span>
                                    <span className="font-bold text-[var(--text-primary)] text-sm">+7 727 376-56-60</span>
                                </a>
                                <a href="tel:+77273823462" className="flex items-center gap-2.5 hover:text-[var(--primary)] transition-colors group no-underline">
                                    <div className="w-5 h-5 rounded-full bg-gray-50 group-hover:bg-[var(--primary-light)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span className="w-32 lg:w-36">{isKZ ? 'Наркологиялық:' : 'Наркологическая:'}</span>
                                    <span className="font-bold text-[var(--text-primary)] text-sm">+7 727 382-34-62</span>
                                </a>
                                <a href="tel:1303" className="flex items-center gap-2.5 hover:text-[var(--primary-dark)] transition-colors group no-underline">
                                    <div className="w-5 h-5 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)]">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span className="w-32 lg:w-36 font-semibold text-[var(--primary)]">{isKZ ? 'Сенім телефоны:' : 'Телефон доверия:'}</span>
                                    <span className="font-extrabold text-[var(--primary)] text-sm tracking-wide">13-03</span>
                                </a>
                                <a href="tel:+77474966420" className="flex items-center gap-2.5 hover:text-[var(--primary)] transition-colors group no-underline mt-1">
                                    <div className="w-5 h-5 rounded-full bg-gray-50 group-hover:bg-[var(--primary-light)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                    <span className="w-32 lg:w-36">{isKZ ? 'Балалар бөлімшесі:' : 'Поликлиника детская:'}</span>
                                    <span className="font-bold text-[var(--text-primary)] text-sm">8 747 496 64 20</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation bar */}
            <nav className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary)] shadow-[var(--shadow-soft)] relative z-30">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop nav */}
                    <ul className="hidden md:flex flex-wrap items-center gap-0">
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
                                    <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-md rounded-b-[var(--radius-lg)] shadow-[var(--shadow-hover)] border border-[var(--border-light)] border-t-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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

                    {/* Mobile icon bar */}
                    <div className="md:hidden flex items-center justify-between py-2">
                        <div className="flex items-center gap-1.5 text-white">
                            {/* Search */}
                            <button onClick={() => setActiveMobileMenu(prev => prev === 'search' ? 'none' : 'search')} className={`mobile-menu-trigger p-2 rounded-lg transition-colors ${activeMobileMenu === 'search' ? 'bg-white/20' : 'hover:bg-white/10'}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            {/* Phones */}
                            <button onClick={() => setActiveMobileMenu(prev => prev === 'phones' ? 'none' : 'phones')} className={`mobile-menu-trigger p-2 rounded-lg transition-colors ${activeMobileMenu === 'phones' ? 'bg-white/20' : 'hover:bg-white/10'}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </button>
                            {/* Language */}
                            <button onClick={() => setActiveMobileMenu(prev => prev === 'lang' ? 'none' : 'lang')} className={`mobile-menu-trigger p-2 rounded-lg text-sm font-bold transition-colors ${activeMobileMenu === 'lang' ? 'bg-white/20' : 'hover:bg-white/10'}`}>
                                {lang}
                            </button>
                        </div>
                        {/* Nav burger */}
                        <button onClick={() => setActiveMobileMenu(prev => prev === 'nav' ? 'none' : 'nav')} className={`mobile-menu-trigger flex items-center gap-2 p-2 text-white rounded-lg transition-colors ${activeMobileMenu === 'nav' ? 'bg-white/20' : 'hover:bg-white/10'}`}>
                            <span className="text-sm font-medium">{isKZ ? 'Мәзір' : 'Меню'}</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                {activeMobileMenu === 'nav' ? (
                                    <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                ) : (
                                    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menus */}
                {activeMobileMenu !== 'none' && (
                    <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-[var(--border)] shadow-lg animate-fadeIn overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>

                        {/* Search Menu */}
                        {activeMobileMenu === 'search' && (
                            <div className="px-6 py-6 bg-white border-b border-[var(--border-light)]">
                                <form onSubmit={(e) => { e.preventDefault(); setActiveMobileMenu('none'); }} className="relative">
                                    <input
                                        type="text"
                                        placeholder={isKZ ? 'Сайттан іздеу...' : 'Поиск по сайту...'}
                                        autoFocus
                                        className="w-full pl-4 pr-10 py-3 rounded-lg border border-[var(--border)] bg-gray-50 text-base focus:outline-none focus:border-[var(--primary)] focus:bg-white transition-all shadow-inner"
                                    />
                                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--primary)]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Language Menu */}
                        {activeMobileMenu === 'lang' && (
                            <div className="px-6 py-4 bg-gray-50 border-b border-[var(--border-light)]">
                                <div className="font-semibold text-xs text-[var(--text-muted)] uppercase mb-3">Язык / Тіл</div>
                                <div className="flex flex-col gap-2">
                                    {(['RU', 'KZ'] as const).map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => { handleLangSwitch(l); setActiveMobileMenu('none'); }}
                                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${lang === l
                                                ? 'bg-[var(--primary)] text-white shadow-sm'
                                                : 'bg-white border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--primary)]'
                                                }`}
                                        >
                                            {l === 'KZ' ? 'Қазақша (KZ)' : 'Русский (RU)'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Phones Menu */}
                        {activeMobileMenu === 'phones' && (
                            <div className="px-6 py-4 bg-white border-b border-[var(--border-light)]">
                                <div className="font-semibold text-xs text-[var(--text-muted)] uppercase mb-4">{isKZ ? 'Телефондар' : 'Телефоны'}</div>
                                <div className="space-y-4">
                                    <a href="tel:+77273765660" className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border-light)] bg-gray-50 text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] no-underline">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-[var(--text-muted)]">{isKZ ? 'Психиатриялық қызмет' : 'Психиатрическая служба'}</span>
                                            <span className="text-lg font-semibold">+7 727 376-56-60</span>
                                        </div>
                                    </a>
                                    <a href="tel:+77273823462" className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border-light)] bg-gray-50 text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] no-underline">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-[var(--text-muted)]">{isKZ ? 'Наркологиялық қызмет' : 'Наркологическая служба'}</span>
                                            <span className="text-lg font-semibold">+7 727 382-34-62</span>
                                        </div>
                                    </a>
                                    <a href="tel:1303" className="flex items-center gap-4 p-3 rounded-xl border-2 border-[var(--primary)] bg-white text-[var(--primary)] transition-all shadow-sm hover:shadow-md no-underline">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-medium text-[var(--primary)] opacity-80">{isKZ ? 'Сенім телефоны' : 'Телефон доверия'}</span>
                                            <span className="text-xl font-bold">13-03</span>
                                        </div>
                                    </a>
                                    <a href="tel:+77474966420" className="flex items-center gap-4 p-3 rounded-xl border border-[var(--border-light)] bg-gray-50 text-[var(--text-primary)] transition-colors hover:border-[var(--primary)] no-underline">
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 text-[var(--primary)]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-[var(--text-muted)]">{isKZ ? 'Балалар бөлімшесі' : 'Поликлиника детского отделения'}</span>
                                            <span className="text-lg font-semibold">8 747 496 64 20</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Navigation Menu */}
                        {activeMobileMenu === 'nav' && (
                            <div className="bg-white">
                                {currentNavigation.map((item) => (
                                    <div key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setActiveMobileMenu('none')}
                                            className="block px-6 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)] transition-colors no-underline border-b border-[var(--border-light)]"
                                        >
                                            {item.title}
                                        </Link>
                                        {item.children && item.children.length > 0 && (
                                            <div className="bg-gray-50 border-b border-[var(--border-light)]">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => setActiveMobileMenu('none')}
                                                        className="block px-10 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors no-underline"
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
                    </div>
                )}
            </nav>
        </div>
    );
}
