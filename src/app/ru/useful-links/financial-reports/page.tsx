import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">Отчет о доходах и расходах</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Отчет о доходах и расходах
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose space-y-6">
            <div className="space-y-4">
              <img src="/images/old/%d0%ba%d0%b0%d1%80%d1%82%d0%b8%d0%bd%d0%ba%d0%b8/30042024/1%d0%ba%d0%b2_2024_0001_page-0001.jpg" alt="1кв 2024 0001 page 0001" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/%d0%ba%d0%b0%d1%80%d1%82%d0%b8%d0%bd%d0%ba%d0%b8/30042024/2023_0001_page-0001.jpg" alt="2023 0001 page 0001" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/2022_otchet.jpg" alt="2022 otchet.jpg" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/2021otchet.jpg" alt="2021otchet.jpg" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/2020otc.jpg" alt="2020otc.jpg" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/2019_otc.jpg" alt="2019 otc.jpg" className="max-w-full h-auto" />
            </div>

            <div className="space-y-4">
              <img src="/images/old/2019_%d0%b3.jpg" alt="2019 г.jpg" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">28.10.2019 г.</p>
            <div className="space-y-4">
              <img src="/images/old/otchet_doh_za9m.jpg" alt="otchet doh za9m.jpg" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">12.04.2019 г.</p>
            <div className="space-y-4">
              <img src="/images/old/120419.jpg" alt="120419.jpg" className="max-w-full h-auto" style={{ maxWidth: '705px' }} />
            </div>

            <p className="font-bold">07.01.2019г.</p>
            <div className="space-y-4">
              <img src="/images/old/2019_%d1%84%d0%b8%d0%bd_%d0%be%d1%82%d1%87%d0%b5%d1%82.jpg" alt="2019 фин отчет.jpg" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">25.10.2018г.</p>
            <div className="space-y-4">
              <img src="/images/old/201891.jpg" alt="201891.jpg" className="max-w-full h-auto" />
              <img src="/images/old/201892.jpg" alt="201892.jpg" className="max-w-full h-auto" />
              <img src="/images/old/201893.jpg" alt="201893.jpg" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">14.11.2015 г.</p>
            <div className="space-y-4">
              <img src="/images/old/020202.jpg" alt="Отчет 2015" className="max-w-full h-auto" style={{ maxWidth: '426px' }} />
            </div>

            <p className="font-bold">26.01.2016 г.</p>
            <div className="space-y-4">
              <img src="/images/old/2016.jpg" alt="Отчет 2016" className="max-w-full h-auto" style={{ maxWidth: '438px' }} />
            </div>

            <div className="space-y-4">
              <img src="/images/old/Poisk.jpg" alt="Поиск" className="max-w-full h-auto" style={{ maxWidth: '432px' }} />
            </div>

            <p className="font-bold">02.03.2016 г.</p>
            <div className="space-y-4">
              <img src="/images/old/016.jpg" alt="Отчет 03.2016" className="max-w-full h-auto" style={{ maxWidth: '491px' }} />
            </div>

            <div className="space-y-4">
              <img src="/images/old/%202016.jpg" alt="Отчет 2016" className="max-w-full h-auto" style={{ maxWidth: '499px' }} />
            </div>

            <p className="font-bold">12.04.2016г</p>
            <div className="space-y-4">
              <img src="/images/old/Page1.jpg" alt="Отчет 04.2016" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">08.07.2016г.</p>
            <div className="space-y-4">
              <img src="/images/old/ru2kv2016.jpg" alt="2кв 2016" className="max-w-full h-auto" style={{ maxWidth: '605px' }} />
            </div>

            <p className="font-bold">05.10.2016г.</p>
            <div className="space-y-4">
              <img src="/images/old/otchetbux2.png" alt="Отчет бух 2016" className="max-w-full h-auto" style={{ maxWidth: '612px' }} />
            </div>

            <p className="font-bold">13.01.2017г.</p>
            <div className="space-y-4">
              <img src="/images/old/otchet.jpg" alt="Отчет 2017" className="max-w-full h-auto" style={{ maxWidth: '610px' }} />
            </div>

            <p className="font-bold">27.04.2017г.</p>
            <div className="space-y-4">
              <img src="/images/old/Adil/001.jpg" alt="Отчет 04.2017" className="max-w-full h-auto" />
            </div>

            <p className="font-bold">15.01.2017г.</p>
            <div className="space-y-4">
              <img src="/images/old/2017.jpg" alt="2017.jpg" className="max-w-full h-auto" style={{ maxWidth: '605px' }} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
