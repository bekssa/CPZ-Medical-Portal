import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function AnthemPage() {
    return (
        <div className="animate-fadeIn">
            <Breadcrumbs />
            <div className="article-content">
                <h1>Государственный Гимн Республики Казахстан</h1>
                <p>
                    Государственный Гимн Республики Казахстан — торжественная патриотическая песня,
                    являющаяся одним из главных символов государства. Утверждён 7 января 2006 года.
                </p>
                <p>
                    Авторы текста: Жумекен Нажмеденов, Нурсултан Назарбаев. Композитор: Шамши Калдаяков.
                </p>

                <h2>Текст Гимна</h2>
                <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border-light)] my-4">
                    <p className="italic text-center">
                        Алтын күн аспаны,<br />
                        Алтын дән даласы,<br />
                        Ерліктің дастаны,<br />
                        Еліме қарашы!<br />
                        <br />
                        Ежелден ер деген,<br />
                        Даңқымыз шықты ғой.<br />
                        Намысын бермеген,<br />
                        Қазағым мықты ғой!<br />
                        <br />
                        <strong>Қайырмасы:</strong><br />
                        Менің елім, менің елім,<br />
                        Гүлің болып егілемін,<br />
                        Жырың болып төгілемін, елім!<br />
                        Туған жерім менің — Қазақстаным!
                    </p>
                </div>
            </div>
        </div>
    );
}
