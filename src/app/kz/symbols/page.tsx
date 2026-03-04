import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const symbols = [
    {
        title: 'Мемлекеттік Ту',
        href: '/kz/symbols/flag',
        description: 'Қазақстан Республикасының Мемлекеттік Туы – ортасында шұғылалы күн, оның астында қалықтап ұшқан қыран бейнеленген тік бұрышты көгілдір түсті мата.',
    },
    {
        title: 'Мемлекеттік Елтаңба',
        href: '/kz/symbols/emblem',
        description: 'Қазақстан Республикасының Мемлекеттік Елтаңбасы – дөңгелек нысанды және көгілдір түс аясындағы шаңырақ бейнесін білдіреді.',
    },
    {
        title: 'Мемлекеттік Әнұран',
        href: '/kz/symbols/anthem',
        description: 'Қазақстан Республикасының Мемлекеттік Әнұраны – салтанатты патриоттық ән.',
    },
];

export default function SymbolsPage() {
    return (
        <div className="animate-fadeIn pb-10">
            <Breadcrumbs />
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
                    Мемлекеттік рәміздер
                </h1>

                <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose mb-10">
                    <p>
                        Қазақстан Республикасының Мемлекеттік рәміздері — конституциялық заңмен белгіленген мемлекеттің айрықша белгілері: Мемлекеттік Ту, Мемлекеттік Елтаңба және Мемлекеттік Әнұран.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {symbols.map((symbol) => (
                        <Link
                            key={symbol.href}
                            href={symbol.href}
                            className="group p-5 rounded-xl border border-[var(--border)] bg-gray-50/50 hover:bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all no-underline flex flex-col h-full"
                        >
                            <div className="font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                                {symbol.title}
                            </div>
                            <div className="text-sm text-[var(--text-muted)] leading-relaxed">
                                {symbol.description}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
