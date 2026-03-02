'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        src: '/images/slider/slide1.jpg',
        alt: 'Центр психического здоровья',
        title: 'Центр Психического Здоровья',
        subtitle: 'Квалифицированная помощь. Забота. Доверие.',
    },
    {
        id: 2,
        src: '/images/slider/slide2.jpg',
        alt: 'ФСМС — Фонд социального медицинского страхования',
        title: 'ФСМС/ОСМС',
        subtitle: 'Обязательное социальное медицинское страхование',
    },
    {
        id: 3,
        src: '/images/slider/slide3.jpg',
        alt: 'Документы и НПА',
        title: 'Нормативно-правовые акты',
        subtitle: 'Регламент оказания психиатрической и наркологической помощи',
    },
    {
        id: 4,
        src: '/images/slider/slide4.jpg',
        alt: 'Реабилитация и поддержка',
        title: 'Реабилитация и восстановление',
        subtitle: 'Комплексный подход к лечению и социальной адаптации',
    },
    {
        id: 5,
        src: '/images/slider/slide5.jpg',
        alt: 'Наши специалисты',
        title: 'Команда профессионалов',
        subtitle: 'Опытные врачи-психиатры и наркологи города Алматы',
    },
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goTo = useCallback((index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(index);
        setTimeout(() => setIsAnimating(false), 800);
    }, [isAnimating]);

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo]);

    // Auto-play every 6 seconds
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] overflow-hidden bg-gray-900">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Real image */}
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="100vw"
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                    {/* Text content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-7xl mx-auto px-6 w-full">
                            <div className="max-w-xl">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-sm">
                                    {slide.title}
                                </h2>
                                <p className="text-sm sm:text-base text-white/85 mb-5 leading-relaxed">
                                    {slide.subtitle}
                                </p>
                                <a
                                    href="tel:1303"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    Позвонить: 13-03
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === current
                            ? 'w-8 bg-white'
                            : 'w-2 bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Слайд ${index + 1}`}
                    />
                ))}
            </div>

            {/* Previous arrow */}
            <button
                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/25 hover:bg-black/50 text-white transition-colors"
                aria-label="Предыдущий"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Next arrow */}
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/25 hover:bg-black/50 text-white transition-colors"
                aria-label="Следующий"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
