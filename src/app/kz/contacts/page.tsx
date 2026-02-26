export default function KzContactsPage() {
    return (
        <div className="article-content max-w-3xl">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Байланыстар</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#00B7C6" strokeWidth="1.5" />
                        </svg>
                        Телефондар
                    </h2>
                    <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                        <div><strong className="text-[var(--primary)]">Call-орталық:</strong> <a href="tel:3000103" className="hover:text-[var(--primary)]">3000-103</a></div>
                        <div><strong>ЕКО:</strong> <a href="tel:1414" className="hover:text-[var(--primary)]">14-14</a></div>
                        <div><strong>Республикалық:</strong> <a href="tel:3580" className="hover:text-[var(--primary)]">3580</a></div>
                        <div><strong className="text-[var(--primary)]">Сенім телефоны:</strong> <a href="tel:1303" className="hover:text-[var(--primary)]">13-03</a></div>
                        <div><a href="tel:+77477080228" className="hover:text-[var(--primary)]">+7 747 708 02 28</a></div>
                        <div>Психиатриялық: <a href="tel:+77273765660" className="hover:text-[var(--primary)]">+7 727 376-56-60</a></div>
                        <div>Наркологиялық: <a href="tel:+77273823462" className="hover:text-[var(--primary)]">+7 727 382-34-62</a></div>
                        <div>Балалар бөлімі: <a href="tel:+77474966420" className="hover:text-[var(--primary)]">8 747 496 64 20</a></div>
                    </div>
                </div>

                <div className="p-5 rounded-xl border border-[var(--border)] bg-white">
                    <h2 className="text-base font-bold text-[var(--text-primary)] mb-3">Мекенжай</h2>
                    <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                        <p>Алматы қаласы, Байзақов к-сі, 222</p>
                        <p>Индекс: 050022</p>
                        <a href="mailto:cpz.sekr@gmail.com" className="text-[var(--primary)] hover:underline block">cpz.sekr@gmail.com</a>
                    </div>

                    <div className="mt-4 rounded-lg overflow-hidden h-40 bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5!2d76.9123!3d43.2566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE1JzE5LjgiTiA3NsKwNTQnNDMuOSJF!5e0!3m2!1sku!2skz!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Карта"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
