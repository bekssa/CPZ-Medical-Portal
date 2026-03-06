import Breadcrumbs from '@/components/ui/Breadcrumbs';

const standardsLinks = [
  { title: 'Қазақстан Республикасының «Мемлекеттік қызметтер туралы» Заңы', href: 'https://adilet.zan.kz/kaz/docs/Z1300000088' },
  { title: 'Мемлекеттік қызметтер тізілімін бекіту туралы', href: 'https://adilet.zan.kz/kaz/docs/V2000019982' },
  { title: 'Денсаулық сақтау саласындағы мемлекеттік қызметтер көрсетудің кейбір мәселелері туралы', href: 'https://adilet.zan.kz/kaz/docs/V2000020665' },
  { title: 'Қазақстан Республикасы халқының психикалық денсаулығы саласындағы медициналық-әлеуметтік көмек көрсетуді ұйымдастыру стандартын бекіту туралы', href: 'https://adilet.zan.kz/kaz/docs/V2000021712' },
];

export default function StandardsPage() {
  return (
    <div className="animate-fadeIn pb-10">
      <Breadcrumbs />
      <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
          Мемлекеттік қызметтер стандарттары
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
          <p>
            Психикалық денсаулық саласындағы мемлекеттік қызметтер көрсету стандарттары
            Қазақстан Республикасының нормативтік құқықтық актілері негізінде бекітілген.
          </p>

          <div className="mt-6 space-y-3">
            {standardsLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
              >
                <span className="mt-0.5 text-[var(--primary)] text-lg shrink-0">📋</span>
                <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  {link.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
