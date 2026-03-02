'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHomepage = pathname === '/ru' || pathname === '/ru/' || pathname === '/kz' || pathname === '/kz/';

    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setSidebarOpen(true);
        }
    }, []);

    // Homepage: bare layout
    if (isHomepage) {
        return (
            <div className="min-h-screen flex flex-col bg-[var(--bg)]">
                {children}
                <Footer />
            </div>
        );
    }

    // Internal pages:
    // Fixed header → flex row (sidebar sticky + main) → footer
    // The footer is always in document flow BELOW the sidebar row,
    // so it physically appears under the sidebar on long pages.
    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg)]">
            <Header onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Main layout row — below the fixed header */}
            <div className="flex flex-1 pt-[var(--header-height)]">

                {/* Sidebar:
                    - Mobile: fixed slide-over (z-40)
                    - Desktop: sticky column that scrolls with content but sticks to top */}
                <aside
                    className={`
                        flex-shrink-0 w-[var(--sidebar-width)] bg-white border-r border-[var(--border)] overflow-y-auto
                        fixed top-[var(--header-height)] left-0 bottom-0 z-40
                        lg:sticky lg:top-[var(--header-height)] lg:self-start lg:h-[calc(100vh-var(--header-height))] lg:z-auto lg:bottom-auto
                        transition-transform duration-300 ease-in-out
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    `}
                >
                    <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                </aside>


                {/* Page content */}
                <main className="flex-1 min-w-0 flex flex-col">
                    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                        {children}
                    </div>
                </main>
            </div>

            {/* Footer — always below the sidebar+content row */}
            <Footer />
        </div>
    );
}
