import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function RegisterPage() {
  return (
    <div className="animate-fadeIn pb-10">
      <Breadcrumbs />
      <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
          Мемлекеттік қызметтер тізілімі
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
          <p>
            Мемлекеттік қызметтер тізілімі Қазақстан Республикасы Цифрлық даму, инновациялар
            және аэроғарыш өнеркәсібі министрінің м.а. бұйрығымен бекітілген.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="https://adilet.zan.kz/kaz/docs/V2000019982"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
            >
              <span className="mt-0.5 text-[var(--primary)] text-lg shrink-0">📄</span>
              <div>
                <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  Мемлекеттік қызметтер тізілімін бекіту туралы
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  2020 жылғы 31 қаңтардағы № 39/НҚ бұйрық — adilet.zan.kz
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
