import fs from 'fs';
import path from 'path';

const ruDir = path.join(process.cwd(), 'src/app/ru/patients');
const kzDir = path.join(process.cwd(), 'src/app/kz/patients');

const translations = {
    'Пациентам': 'Науқастарға',
    'ОСМС': 'МӘМС',
    'Обязательное социальное медицинское страхование': 'Міндетті әлеуметтік медициналық сақтандыру',

    'ГОБМП': 'ТМККК',
    'Гарантированный объем бесплатной медицинской помощи': 'Тегін медициналық көмектің кепілдік берілген көлемі',

    'Часто задаваемые вопросы': 'Жиі қойылатын сұрақтар',
    'Ответы на частые вопросы пациентов': 'Науқастардың жиі қоятын сұрақтарына жауаптар',

    'Обращения': 'Өтініштер',
    'Порядок обращения граждан': 'Азаматтардың өтініш жасау тәртібі',

    'График врачей': 'Дәрігерлер кестесі',
    'Расписание приёма специалистов': 'Мамандардың қабылдау кестесі',

    'Лекарственный формуляр': 'Дәрілік формуляр',

    'Права и обязанности пациентов в области здравоохранения': 'Денсаулық сақтау саласындағы пациенттердің құқықтары мен міндеттері',
    'Права и обязанности пациентов': 'Пациенттердің құқықтары мен міндеттері',

    'Вопрос-ответ': 'Сұрақ-жауап',

    'Служба поддержки пациента и внутреннего аудита': 'Пациенттерді қолдау және ішкі аудит қызметі',
    'Служба поддержки пациента': 'Пациенттерді қолдау қызметі',

    'Подробности': 'Егжей-тегжейі',
    'Просмотров:': 'Қаралды:'
};

function translateText(text) {
    let result = text;
    for (const [ru, kz] of Object.entries(translations)) {
        result = result.split(ru).join(kz);
    }
    return result;
}

const subpages = [
    'osms', 'gobmp', 'faq', 'appeals',
    'doctors-schedule', 'drug-formulary', 'rights', 'qna',
    'support-service'
];

let count = 0;

subpages.forEach(subpage => {
    const ruFile = path.join(ruDir, subpage, 'page.tsx');
    const kzFile = path.join(kzDir, subpage, 'page.tsx');

    if (fs.existsSync(ruFile)) {
        let content = fs.readFileSync(ruFile, 'utf8');

        // Change link /ru to /kz
        content = content.replace(/href="\/ru"/g, 'href="/kz"');
        content = content.replace(/Главная/g, 'Басты бет');

        // Translate known titles
        content = translateText(content);

        // Write to kz
        const dir = path.dirname(kzFile);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(kzFile, content);
        console.log('Copied and translated:', subpage);
        count++;
    }
});

console.log('Done! Copied ' + count + ' subpages to KZ.');
