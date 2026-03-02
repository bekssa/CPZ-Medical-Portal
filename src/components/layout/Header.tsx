'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header({
    onMenuToggle,
}: {
    onMenuToggle: () => void;
}) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [phonesOpen, setPhonesOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const headerRef = useRef<HTMLElement>(null);

    // Закрытие выпадающих меню при клике вне хедера
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setPhonesOpen(false);
                setSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    const phoneNumbers = [
        { label: lang === 'KZ' ? 'Психиатриялық қызмет' : 'Психиатрическая служба', number: '+7 727 376-56-60', href: 'tel:+77273765660' },
        { label: lang === 'KZ' ? 'Наркологиялық қызмет' : 'Наркологическая служба', number: '+7 727 382-34-62', href: 'tel:+77273823462' },
        { label: lang === 'KZ' ? 'Сенім телефоны' : 'Телефон доверия', number: '13-03', href: 'tel:1303' },
        { label: lang === 'KZ' ? 'Балалар бөлімшесі' : 'Поликлиника детского отделения', number: '8 747 496 64 20', href: 'tel:+77474966420' }
    ];

    return (
        <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-white to-[#0e40df]/5 backdrop-blur-md border-b border-[#0e40df]/30 shadow-sm h-[var(--header-height)]">
            <div className="h-full max-w-full mx-auto px-2 sm:px-4 flex items-center justify-between">
                {/* Left: burger + logo */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Mobile burger only — hidden on desktop */}
                    <button
                        onClick={onMenuToggle}
                        className="p-1.5 sm:p-2 rounded-lg text-[#0e40df] hover:bg-[#0e40df]/10 border border-transparent hover:border-[#0e40df]/20 transition-all md:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>

                    <Link href={lang === 'KZ' ? '/kz' : '/ru'} className="flex items-center gap-2 sm:gap-3 no-underline group pr-1">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/logo-cpz.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <div className="text-[9px] sm:text-xs text-[var(--text-muted)] leading-tight">
                                {lang === 'KZ' ? 'Ресми интернет-ресурс' : 'Официальный интернет-ресурс'}
                            </div>
                            <div className="text-[11px] sm:text-sm font-bold text-[#0e40df] leading-tight tracking-tight max-w-[130px] sm:max-w-none">
                                {lang === 'KZ' ? 'Алматы қ. Психикалық Саулықтыру Орталығы' : 'Центр Психического Здоровья г. Алматы'}
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right: phone, search, lang */}
                <div className="flex items-center gap-2 lg:gap-4">

                    {/* PC Phones Block (2x2 grid) */}
                    <div className="hidden lg:grid grid-cols-2 gap-x-6 gap-y-1.5 mr-2">
                        {phoneNumbers.map((phone, idx) => (
                            <a key={idx} href={phone.href} className="flex flex-col group no-underline">
                                <span className="text-[10px] text-[var(--text-muted)] leading-none mb-0.5 group-hover:text-[#0e40df] transition-colors">{phone.label}</span>
                                <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[#0e40df] transition-colors leading-none flex items-center gap-1.5">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#0e40df]">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {phone.number}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Phones Dropdown Button */}
                    <div className="relative lg:hidden">
                        <button
                            onClick={() => { setPhonesOpen(!phonesOpen); setSearchOpen(false); }}
                            className={`p-1.5 sm:p-2 rounded-lg border transition-all ${phonesOpen ? 'bg-[#0e40df] text-white border-[#0e40df]' : 'bg-white border-[#0e40df]/20 text-[#0e40df] hover:bg-[#0e40df]/10 shadow-sm'}`}
                            aria-label="Phones"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {phonesOpen && (
                            <div className="absolute right-[0px] top-full mt-2 w-72 max-w-[calc(100vw-1rem)] bg-white rounded-xl shadow-xl border border-[var(--border)] p-2 z-50 animate-fadeIn overflow-hidden">
                                <div className="space-y-1">
                                    {phoneNumbers.map((phone, idx) => (
                                        <a key={idx} href={phone.href} className="flex flex-col px-3 py-2 rounded-lg hover:bg-[#0e40df]/10 transition-colors no-underline">
                                            <span className="text-[11px] text-[var(--text-muted)] font-medium mb-0.5">{phone.label}</span>
                                            <span className="text-sm font-bold text-[#0e40df] flex items-center gap-1.5">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#0e40df]">
                                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {phone.number}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <button
                            onClick={() => { setSearchOpen(!searchOpen); setPhonesOpen(false); }}
                            className={`p-1.5 sm:p-2 rounded-lg border transition-all ${searchOpen ? 'bg-[#0e40df] text-white border-[#0e40df]' : 'bg-white border-[#0e40df]/20 text-[#0e40df] hover:bg-[#0e40df]/10 shadow-sm'}`}
                            aria-label="Search"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                        {searchOpen && (
                            <div className="absolute right-[-45px] sm:right-0 top-full mt-2 w-[calc(100vw-2rem)] sm:w-72 max-w-[320px] animate-fadeIn">
                                <input
                                    type="text"
                                    placeholder={lang === 'KZ' ? 'Сайттан іздеу...' : 'Поиск по сайту...'}
                                    autoFocus
                                    className="w-full px-4 py-2.5 rounded-xl border border-[#0e40df]/30 bg-white text-sm focus:outline-none focus:border-[#0e40df] focus:ring-2 focus:ring-[#0e40df]/20 shadow-xl"
                                    onBlur={() => setSearchOpen(false)}
                                />
                            </div>
                        )}
                    </div>

                    {/* Language switcher - Desktop Only */}
                    <div className="hidden sm:flex items-center bg-white border border-[#0e40df]/30 rounded-lg p-0.5 shadow-sm">
                        {(['RU', 'KZ', 'EN'] as const).map((l) => (
                            <button
                                key={l}
                                onClick={() => handleLanguageSwitch(l)}
                                disabled={l === 'EN'}
                                className={`px-3 py-1 text-xs font-bold transition-all rounded-md ${lang === l
                                    ? 'bg-[#0e40df] text-white shadow-sm'
                                    : l === 'EN'
                                        ? 'text-[#0e40df]/40 cursor-not-allowed'
                                        : 'text-[#0e40df] hover:bg-[#0e40df]/10'
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
