import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function RegisterPage() {
  return (
    <div className="animate-fadeIn pb-10">
      <Breadcrumbs />
      <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
          Реестр государственных услуг
        </h1>

        <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-relaxed">
          <p>
            Реестр государственных услуг утверждён приказом и.о. Министра цифрового развития, инноваций и
            аэрокосмической промышленности Республики Казахстан.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="https://adilet.zan.kz/rus/docs/V2000019982"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
            >
              <span className="mt-0.5 text-[var(--primary)] text-lg shrink-0">📄</span>
              <div>
                <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                  Об утверждении реестра государственных услуг
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  Приказ от 31 января 2020 года № 39/НҚ — adilet.zan.kz
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
