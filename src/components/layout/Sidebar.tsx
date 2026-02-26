'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useMemo } from 'react';
import { navigation, kazakhNavigation, NavItem } from '@/data/navigation';

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
        >
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function NavSection({
    item,
    depth = 0,
    pathname,
    searchQuery,
}: {
    item: NavItem;
    depth?: number;
    pathname: string;
    searchQuery: string;
}) {
    const isActive = pathname === item.href;
    const isParentActive = pathname.startsWith(item.href) && item.href !== '/';
    const [open, setOpen] = useState(isParentActive || isActive);

    const hasChildren = item.children && item.children.length > 0;

    // Filter children based on search
    const filteredChildren = useMemo(() => {
        if (!hasChildren || !searchQuery) return item.children;
        return item.children!.filter(
            (child) =>
                child.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (child.children &&
                    child.children.some((gc) =>
                        gc.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ))
        );
    }, [hasChildren, item.children, searchQuery]);

    // If searching and no match, hide this section
    if (
        searchQuery &&
        !item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!filteredChildren || filteredChildren.length === 0)
    ) {
        return null;
    }

    const paddingLeft = depth === 0 ? 'pl-3' : depth === 1 ? 'pl-7' : 'pl-11';

    return (
        <div>
            <div className="flex items-center">
                <Link
                    href={item.href}
                    className={`flex-1 flex items-center gap-2 px-3 py-2 ${paddingLeft} text-sm rounded-lg transition-all duration-150 no-underline
            ${isActive
                            ? 'bg-[var(--primary-light)] text-[var(--primary-dark)] font-medium'
                            : isParentActive
                                ? 'text-[var(--primary)] font-medium'
                                : 'text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--text-primary)]'
                        }
          `}
                >
                    {depth === 0 && (
                        <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive || isParentActive ? 'bg-[var(--primary)]' : 'bg-[var(--secondary)]'
                                }`}
                        />
                    )}
                    <span className="flex-1">{item.title}</span>
                    {hasChildren && (
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpen(!open);
                            }}
                            className="p-0.5 hover:bg-gray-200 rounded transition-colors text-[var(--text-muted)]"
                        >
                            <ChevronIcon open={open} />
                        </button>
                    )}
                </Link>
            </div>

            {hasChildren && open && (
                <div className="mt-0.5 transition-all duration-200">
                    {(filteredChildren || []).map((child) => (
                        <NavSection
                            key={child.href}
                            item={child}
                            depth={depth + 1}
                            pathname={pathname}
                            searchQuery={searchQuery}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Sidebar({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');

    // Определяем текущий язык и выбираем соответствующую навигацию
    const currentNavigation = (pathname === '/kz' || pathname.startsWith('/kz/')) ? kazakhNavigation : navigation;

    return (
        <>

            <div className="flex flex-col h-full">
                {/* Sidebar search */}
                <div className="p-3 border-b border-[var(--border-light)]">
                    <div className="relative">
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                        >
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder={pathname.startsWith('/kz/') ? 'Бөлімді іздеу...' : 'Найти раздел...'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[var(--border-light)] bg-[var(--bg)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                        />
                    </div>
                </div>

                {/* Navigation */}
                <nav className="p-2 space-y-0.5">
                    {currentNavigation.map((item) => (
                        <NavSection
                            key={item.href}
                            item={item}
                            pathname={pathname}
                            searchQuery={searchQuery}
                        />
                    ))}
                </nav>

                {/* Bottom info */}
                <div className="p-4 mt-4 border-t border-[var(--border-light)]">
                    <div className="text-xs text-[var(--text-muted)] space-y-1">
                        <div className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span>Телефон доверия: <strong>13-03</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                            <span>Call-центр: <strong>3000-103</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
