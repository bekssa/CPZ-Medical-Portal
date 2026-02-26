import Breadcrumbs from '@/components/ui/Breadcrumbs';
import DocumentCard from '@/components/ui/DocumentCard';

const documents = [
    { title: 'Закон РК "О психиатрической помощи и гарантиях прав граждан при ее оказании"', date: '2024', fileType: 'pdf' as const },
    { title: 'Закон РК "О наркотических средствах, психотропных веществах, прекурсорах и мерах противодействия их незаконному обороту и злоупотреблению ими"', date: '2024', fileType: 'pdf' as const },
    { title: 'Кодекс Республики Казахстан "О здоровье народа и системе здравоохранения"', date: '2024', fileType: 'pdf' as const },
    { title: 'Приказ "Об утверждении стандартов организации оказания психиатрической помощи"', date: '2023', fileType: 'pdf' as const },
    { title: 'Приказ "Об утверждении правил оказания наркологической помощи"', date: '2023', fileType: 'pdf' as const },
    { title: 'Приказ "Об утверждении правил проведения медицинского освидетельствования"', date: '2023', fileType: 'pdf' as const },
    { title: 'Приказ "О порядке диспансерного наблюдения"', date: '2022', fileType: 'pdf' as const },
    { title: 'Положение "О лекарственном формуляре"', date: '2021', fileType: 'pdf' as const },
];

export default function NpaPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Нормативные правовые акты (НПА)</h1>
                <p>
                    В данном разделе представлены нормативные правовые акты, регулирующие деятельность
                    Центра психического здоровья и оказание психиатрической и наркологической помощи населению.
                </p>
            </div>

            <div className="mt-8 space-y-3">
                {documents.map((doc, index) => (
                    <DocumentCard
                        key={index}
                        title={doc.title}
                        date={doc.date}
                        fileType={doc.fileType}
                        downloadUrl="#"
                    />
                ))}
            </div>
        </div>
    );
}
