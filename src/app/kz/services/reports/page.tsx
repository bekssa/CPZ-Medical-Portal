import Breadcrumbs from '@/components/ui/Breadcrumbs';

const reports = [
  { year: '2020', title: 'Мемлекеттік қызметтер бойынша 2020 жылғы ақпарат', href: 'https://cpzalmaty.kz/images/2020.docx' },
  { year: '2021', title: 'Мемлекеттік қызметтер бойынша 2021 жылғы ақпарат', href: 'https://cpzalmaty.kz/images/2021.docx' },
  { year: '2022', title: 'Мемлекеттік қызметтер бойынша 2022 жылғы ақпарат', href: null },
  { year: '2022', title: 'Алматы қ. ДБ ШЖК-дағы КМК «Психикалық денсаулық орталығы» 2021 жылдың ұқсас кезеңімен салыстырғанда 2022 жылдың 12 айындағы жұмыс туралы есеп', href: 'https://cpzalmaty.kz/images/otchet/Годовой_отчет_2022год_в_сравнении_с_2021г.docx' },
];

export default function ReportsPage() {
  return (
    <div className="animate-fadeIn pb-10">
      <Breadcrumbs />
      <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
          Мемлекеттік қызметтер бойынша есептер
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
          <p>
            Алматы қаласы ДБ ШЖК-дағы КМК «Психикалық денсаулық орталығының» халыққа мемлекеттік қызметтер көрсету жөніндегі қызметі туралы есептер.
          </p>

          <div className="mt-6 space-y-3">
            {reports.map((report, i) => {
              if (report.href) {
                return (
                  <a
                    key={i}
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
                  >
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                      {report.year}
                    </span>
                    <div>
                      <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        {report.title}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1">
                        📥 Құжатты жүктеу (.docx)
                      </div>
                    </div>
                  </a>
                );
              }

              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)]"
                >
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-gray-50 text-gray-500 flex items-center justify-center text-xs font-bold">
                    {report.year}
                  </span>
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">
                      {report.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
}
