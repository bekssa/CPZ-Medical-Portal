'use client';

import Image from 'next/image';

const tiles = [
    {
        title: 'Государственные символы РК',
        href: 'https://prg.kz/m/amp/document/38602479/',
        src: '/images/gos-site/1.jpg',
        alt: 'Государственные символы Республики Казахстан',
    },
    {
        title: 'Послание Президента РК',
        href: 'https://www.akorda.kz/ru/addresses',
        src: '/images/gos-site/2.jpg',
        alt: 'Президент Казахстана Токаев',
    },
    {
        title: 'Официальный сайт Президента РК',
        href: 'https://akorda.kz/',
        src: '/images/gos-site/3.jpg',
        alt: 'Официальный сайт Президента Республики Казахстан — Акорда',
    },
    {
        title: 'Казахстан-2050. Наша сила',
        href: 'http://strategy2050.kz/',
        src: '/images/gos-site/4.jpg',
        alt: 'Стратегия Казахстан 2050',
    },
    {
        title: 'Здоровая нация',
        href: 'https://adilet.zan.kz/rus/docs/P2100000725',
        src: '/images/gos-site/5.png',
        alt: 'Здоровая нация — государственная программа',
    },
];

export default function GovernmentTiles() {
    return (
        <section className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {tiles.map((tile) => (
                        <a
                            key={tile.href}
                            href={tile.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] no-underline shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Real image */}
                            <Image
                                src={tile.src}
                                alt={tile.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                            />

                            {/* Permanent dark overlay at bottom for caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            {/* Hover extra darkening */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2">
                                <div className="text-xs font-medium text-white leading-tight text-center drop-shadow">
                                    {tile.title}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
