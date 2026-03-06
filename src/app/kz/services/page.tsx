import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'Мемлекеттік қызметтер тізілімі', href: '/kz/services/register', description: 'Орталық көрсететін мемлекеттік қызметтер тізбесі' },
    { title: 'Мемлекеттік қызметтер стандарттары', href: '/kz/services/standards', description: 'Медициналық және мемлекеттік қызметтер көрсету стандарттары' },
    { title: 'Мемлекеттік қызметтер бойынша НҚА', href: '/kz/services/npa', description: 'Мемлекеттік қызметтер көрсетуді реттейтін нормативтік құқықтық актілер' },
    { title: 'Мемлекеттік қызметтер бойынша есептер', href: '/kz/services/reports', description: 'Мемлекеттік қызметтер көрсету жөніндегі қызмет туралы есептер' },
];

export default function ServicesPage() {
    return (
        <div className="animate-fadeIn pb-10">
            <Breadcrumbs />
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
                    Мемлекеттік қызметтер
                </h1>

                <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose mb-10">
                    <p>
                        Алматы қаласы Психикалық денсаулық орталығы көрсететін мемлекеттік қызметтер туралы ақпарат.
                        Мұнда тізілімдер, стандарттар, нормативтік актілер және халыққа қызмет көрсету бойынша есептілік берілген.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subpages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group p-5 rounded-xl border border-[var(--border)] bg-gray-50/50 hover:bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all no-underline flex flex-col h-full"
                        >
                            <div className="font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                                {page.title}
                            </div>
                            <div className="text-sm text-[var(--text-muted)] line-clamp-2">{page.description}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
