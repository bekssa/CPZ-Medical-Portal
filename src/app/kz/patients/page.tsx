import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

const subpages = [
    { title: 'МӘМС', href: '/kz/patients/osms', description: 'Міндетті әлеуметтік медициналық сақтандыру' },
    { title: 'ТМККК', href: '/kz/patients/gobmp', description: 'Тегін медициналық көмектің кепілдік берілген көлемі' },
    { title: 'Жиі қойылатын сұрақтар', href: '/kz/patients/faq', description: 'Науқастардың жиі қоятын сұрақтарына жауаптар' },
    { title: 'Өтініштер', href: '/kz/patients/appeals', description: 'Азаматтардың өтініш жасау тәртібі' },
    { title: 'Дәрігерлер кестесі', href: '/kz/patients/doctors-schedule', description: 'Мамандардың қабылдау кестесі' },
    { title: 'Дәрілік формуляр', href: '/kz/patients/drug-formulary', description: 'Дәрілік заттардың тізбесі' },
    { title: 'Медициналық көмек алу кезіндегі сіздің құқықтарыңыз бен міндеттеріңіз', href: '/kz/patients/rights', description: 'Науқастардың құқықтары мен міндеттері' },
    { title: 'Сұрақ-жауап', href: '/kz/patients/qna', description: 'Маманға сұрақ қойыңыз' },
    { title: 'Пациенттерді қолдау қызметі', href: '/kz/patients/support-service', description: 'Пациенттерді қолдау және ішкі аудит қызметі' },
];

export default function PatientsPage() {
    return (
        <div className="animate-fadeIn pb-10">
            <Breadcrumbs />
            <div className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
                    Науқастарға
                </h1>

                <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose mb-10">
                    <h2 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Құрметті сайтқа кірушілер!</h2>
                    <p>Біз сізді ресми сайттың беттерінде қарсы алуға қуаныштымыз!</p>
                    <p>Біздің сайтымыздың көмегімен сізге жақынырақ боламыз, медициналық қызметтер көрсету мәселелерінде сізбен өзара түсіністік табамыз және кері байланыс орнатамыз деп үміттенеміз.</p>
                    <p>Сіздің кез-келген өтінішіңіз назардан тыс қалмайды, сіздің ұсыныстарыңыз, ескертулеріңіз назарға алынады және медициналық көмек көрсетуді ұйымдастыруды жетілдіруге көмектеседі.</p>

                    <div className="text-right mt-6 italic">
                        <p>Баршаңызға зор денсаулық тілеймін!</p>
                        <p className="font-medium not-italic text-[var(--text-primary)]">Директор Рахменшеев С.Қ.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subpages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group p-5 rounded-xl border border-[var(--border)] bg-gray-50/50 hover:bg-white hover:border-[var(--primary)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all no-underline flex flex-col h-full"
                        >
                            <div className="font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors mb-2">
                                {page.title}
                            </div>
                            <div className="text-sm text-[var(--text-muted)] line-clamp-2">
                                {page.description}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
