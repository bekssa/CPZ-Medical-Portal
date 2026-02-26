'use client';

import { useState, useEffect, useCallback } from 'react';

// 50 YouTube video IDs from old site djslider
const videos = [
    { id: 'SnSZHHYARY4', title: 'Миссионерлік' },
    { id: 'ugd7k2FRDr8', title: 'Онлайн знакомства' },
    { id: 'w5eF2oxr2S8', title: 'Миссионерство' },
    { id: 'kzG4toSyfIc', title: 'ЦПЗ обзор' },
    { id: 'hT65qIfja2Q', title: 'PR Anuar 2' },
    { id: 'FBI7yIQzvl8', title: 'ЦПЗ видео' },
    { id: '-_Wz8WfufME', title: 'Отделение ЦПЗ' },
    { id: 'kh3da5SFEOY', title: 'Құстар' },
    { id: 'S_selMAFyVA', title: 'ЦПЗ' },
    { id: 'uCnL3JM06tI', title: 'ЦПЗ помощь' },
    { id: 'd9T_3mVHt-o', title: 'ЦПЗ служба' },
    { id: 'p5strgXR49s', title: 'Инсульт рус' },
    { id: 'bMYVY_dMCrs', title: 'Инсульт каз' },
    { id: 'agweGZ6hBIM', title: 'Qamalladin' },
    { id: 'rojo2kr4OxQ', title: 'PR Anuar' },
    { id: '63bj9rXMGX0', title: 'Видео инсульт 21' },
    { id: 'tvkRcX7Rk9A', title: 'ЦПЗ видеозапись' },
    { id: '8MCrnYfGSUE', title: 'Медицинские услуги' },
    { id: 'llaAzOKpqkY', title: 'Синтетикалық есірткі' },
    { id: 'PGLsJP65wts', title: 'КГП на ПХВ ЦПЗ' },
    { id: '-FRSvQ4Bu4A', title: 'Лучевая диагностика' },
    { id: 'l0Pe2VM_LE8', title: 'Психосоматические расстройства' },
    { id: 'j_arE0dQfwg', title: 'Женский отдел' },
    { id: 'HQIwdXG9i-8', title: 'Консультационная помощь' },
    { id: 'cyZ9HqrdcLE', title: 'ЦПЗ выставка' },
    { id: 'wraMhJSigBc', title: 'ЦПЗ женское отделение' },
    { id: 'qKZeGMSAbBU', title: 'Выдача справок' },
    { id: 'fQzcSX-j6Cc', title: 'Приемный покой' },
    { id: 'kzlH8_TOv1Q', title: 'Отделение пожилого возраста' },
    { id: 'qw2ecg4E_fY', title: 'Детское психиатрическое отделение' },
    { id: 'ESLgpZILbDk', title: 'Отделение ЦПЗ' },
    { id: '6ZP8kawODWI', title: 'МЫ против кор...' },
    { id: 'DOtz__4nZXc', title: 'Мы против коррупции' },
    { id: 'wpiceG1nGr0', title: 'Сагинтаев: коронавирус' },
    { id: 'EhxbgkKIOIg', title: 'ARUJAN YT' },
];

const VISIBLE = 4; // how many thumbnails shown at once

export default function VideoCarousel() {
    const [start, setStart] = useState(0);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const total = videos.length;

    const prev = useCallback(() => {
        setStart((s) => (s - 1 + total) % total);
    }, [total]);

    const next = useCallback(() => {
        setStart((s) => (s + 1) % total);
    }, [total]);

    // Auto-advance every 5s  
    useEffect(() => {
        const t = setInterval(next, 5000);
        return () => clearInterval(t);
    }, [next]);

    const visible = Array.from({ length: VISIBLE }, (_, i) => videos[(start + i) % total]);

    return (
        <section className="bg-[#1a1a2e] py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-xl font-semibold mb-5 flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.33 29 29 0 00-.46-5.34z" fill="#FF0000" />
                        <polygon points="9.75,15.02 15.5,11.75 9.75,8.48 9.75,15.02" fill="white" />
                    </svg>
                    Видеогалерея
                </h2>

                <div className="relative">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {visible.map((video) => (
                            <button
                                key={video.id}
                                onClick={() => setActiveVideo(video.id)}
                                className="group relative aspect-video rounded-xl overflow-hidden bg-gray-800 shadow-md hover:shadow-xl transition-shadow"
                            >
                                {/* YouTube thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Play overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <polygon points="5,3 19,12 5,21" fill="#FF0000" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Title */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2">
                                    <div className="text-white text-xs font-medium truncate">{video.title}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-4">
                        <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <span className="text-white/50 text-xs">{start + 1} из {total}</span>
                        <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-3xl mx-4 aspect-video rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
