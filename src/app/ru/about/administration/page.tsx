import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function AdministrationPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Администрация</h1>
                <p>Руководство Центра психического здоровья города Алматы.</p>

                <div className="mt-6 space-y-4">
                    <div className="p-5 rounded-xl border border-[var(--border)] bg-white">
                        <div className="text-base font-semibold text-[var(--text-primary)]">Директор</div>
                        <div className="text-sm text-[var(--text-secondary)] mt-1">Рахменшеев Серик</div>
                        <div className="text-xs text-[var(--text-muted)] mt-2">Осуществляет общее руководство деятельностью центра</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
