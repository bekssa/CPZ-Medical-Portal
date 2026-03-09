'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, NavItem } from '@/data/navigation';

function findBreadcrumbs(
    items: NavItem[],
    path: string,
    trail: { title: string; href: string }[] = []
): { title: string; href: string }[] | null {
    for (const item of items) {
        const currentTrail = [...trail, { title: item.title, href: item.href }];
        if (item.href === path) return currentTrail;
        if (item.children) {
            const result = findBreadcrumbs(item.children, path, currentTrail);
            if (result) return result;
        }
    }
    return null;
}

interface BreadcrumbsProps {
    items?: { label: string; href: string }[];
    className?: string;
}

export { Breadcrumbs };
export default function Breadcrumbs(_props?: BreadcrumbsProps) {
    const pathname = usePathname();
    const crumbs = findBreadcrumbs(navigation, pathname) || [];

    if (crumbs.length <= 1) return null;

    return (
        <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-1.5 text-sm mb-6 flex-wrap"
        >
            {crumbs.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-1.5">
                    {i > 0 && (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--text-muted)]">
                            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                    {i < crumbs.length - 1 ? (
                        <Link
                            href={crumb.href}
                            className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors no-underline"
                        >
                            {crumb.title}
                        </Link>
                    ) : (
                        <span className="text-[var(--text-primary)] font-medium">{crumb.title}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
