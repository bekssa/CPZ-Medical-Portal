import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const symbols = [
    {
        title: 'Государственный Флаг',
        href: '/symbols/flag',
        description: 'Государственный Флаг Республики Казахстан представляет собой прямоугольное полотнище голубого цвета.',
    },
    {
        title: 'Государственный Герб',
        href: '/symbols/emblem',
        description: 'Государственный Герб Республики Казахстан имеет форму круга и представляет собой изображение шанырака.',
    },
    {
        title: 'Государственный Гимн',
        href: '/symbols/anthem',
        description: 'Государственный Гимн Республики Казахстан — торжественная патриотическая песня.',
    },
];

export default function SymbolsPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Государственные символы</h1>
                <p>
                    Государственные символы Республики Казахстан — установленные конституционным законом
                    отличительные знаки государства: Государственный Флаг, Государственный Герб и Государственный Гимн.
                </p>
            </div>

            <div className="mt-8 space-y-4">
                {symbols.map((symbol) => (
                    <Link
                        key={symbol.href}
                        href={symbol.href}
                        className="group block p-6 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                    >
                        <div className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-1">
                            {symbol.title}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">{symbol.description}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
