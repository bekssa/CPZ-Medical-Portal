import fs from 'fs';
import path from 'path';

const ruDir = path.join(process.cwd(), 'src/app/ru/about');
const kzDir = path.join(process.cwd(), 'src/app/kz/about');

const translations = {
    'Миссия, Цель и Ценности': 'Миссия, Мақсат және Құндылықтар',
    'Администрация': 'Әкімшілік',
    'Как нас найти': 'Бізді қалай табуға болады',
    'Наблюдательный совет': 'Бақылау кеңесі',
    'Стратегический план': 'Стратегиялық жоспар',
    'Этический кодекс': 'Этикалық кодекс',
    'Противодействие коррупции': 'Сыбайлас жемқорлыққа қарсы саясат',
    'Устав': 'Жарғы',
    'Аналитический обзор': 'Аналитикалық шолу',
    'Объявления госзакупок': 'Мемлекеттік сатып алу хабарландырулары',
    'Протоколы вскрытия': 'Ашу хаттамалары',
    'Протоколы итогов': 'Қорытынды хаттамалар',
    'Государственные закупки': 'Мемлекеттік сатып алу',
    'Подробности': 'Егжей-тегжейі',
    'Просмотров:': 'Қаралды:'
};

function translateText(text) {
    let result = text;
    for (const [ru, kz] of Object.entries(translations)) {
        // use function to replace all occurences
        result = result.split(ru).join(kz);
    }
    return result;
}

const subpages = [
    'mission', 'administration', 'location', 'supervisory-board',
    'strategic-plan', 'ethics-code', 'anti-corruption', 'charter',
    'analytical-review', 'procurement-announcements', 'procurement-opening',
    'procurement-results'
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
