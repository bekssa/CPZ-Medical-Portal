import fs from 'fs';
import path from 'path';

const ruDir = path.join(process.cwd(), 'src/app/ru/symbols');
const kzDir = path.join(process.cwd(), 'src/app/kz/symbols');

const translations = {
    'Государственные символы': 'Мемлекеттік рәміздер',
    'Государственный Флаг': 'Мемлекеттік Ту',
    'Государственный Герб': 'Мемлекеттік Елтаңба',
    'Государственный Гимн': 'Мемлекеттік Әнұран',
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

const subpages = ['flag', 'emblem', 'anthem'];

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
