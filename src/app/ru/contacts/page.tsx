import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function ContactsPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Контакты</h1>
                <p>
                    Связаться с Центром Психического Здоровья города Алматы можно по указанным ниже контактным данным.
                </p>
            </div>

            <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="p-6 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Адрес
                    </h2>
                    <div className="text-sm text-[var(--text-secondary)] space-y-1">
                        <p className="m-0">г. Алматы, Центр Психического Здоровья</p>
                    </div>
                </div>

                {/* Phone numbers */}
                <div className="p-6 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Телефоны
                    </h2>
                    <div className="text-sm text-[var(--text-secondary)]">
                        <table className="w-full">
                            <tbody className="divide-y divide-[var(--border-light)]">
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Телефон доверия</td>
                                    <td className="py-2.5"><a href="tel:1303" className="text-[var(--primary)] hover:underline">13-03</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">ЕКЦ</td>
                                    <td className="py-2.5"><a href="tel:1414" className="text-[var(--primary)] hover:underline">14-14</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Республиканский</td>
                                    <td className="py-2.5"><a href="tel:3580" className="text-[var(--primary)] hover:underline">3580</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Телефон доверия</td>
                                    <td className="py-2.5">
                                        <a href="tel:1303" className="text-[var(--primary)] hover:underline">13-03</a>
                                        {' / '}
                                        <a href="tel:87089832863" className="text-[var(--primary)] hover:underline">8 708 983 28 63</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Психиатрическая служба</td>
                                    <td className="py-2.5"><a href="tel:+77273765660" className="text-[var(--primary)] hover:underline">+7 727 376-56-60</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Наркологическая служба</td>
                                    <td className="py-2.5"><a href="tel:+77273823462" className="text-[var(--primary)] hover:underline">+7 727 382-34-62</a></td>
                                </tr>
                                <tr>
                                    <td className="py-2.5 font-medium text-[var(--text-primary)] pr-4">Поликлиника детского отделения</td>
                                    <td className="py-2.5"><a href="tel:87474966420" className="text-[var(--primary)] hover:underline">8 747 496 64 20</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Email */}
                <div className="p-6 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Электронная почта
                    </h2>
                    <div className="text-sm">
                        <a href="mailto:cpz.sekr@gmail.com" className="text-[var(--primary)] hover:underline">
                            cpz.sekr@gmail.com
                        </a>
                    </div>
                </div>

                {/* Working hours */}
                <div className="p-6 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[var(--primary)]">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Режим работы
                    </h2>
                    <div className="text-sm text-[var(--text-secondary)]">
                        <p className="m-0">Понедельник – Пятница: 08:00 – 17:00</p>
                        <p className="m-0 mt-1">Суббота, Воскресенье: выходной</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
