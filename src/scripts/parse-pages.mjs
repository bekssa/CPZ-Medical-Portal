// src/scripts/parse-pages.mjs

import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '../../..');

const OLD_SITE_DIR = path.join(projectRoot, 'CPZ/cpzalmaty.kz');
const NEW_SITE_DIR = path.join(projectRoot, 'medical-portal/src/app');

// Карта маршрутов: новый URL -> старый HTML файл
const pagesMapping = [
    // === О ЦЕНТРЕ ===
    {
        newPath: '/ru/about/mission',
        oldFile: 'ru/o-predpriyatij/2014-06-18-03-09-02.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/administration',
        oldFile: 'ru/o-predpriyatij/2014-06-18-03-09-39.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/location',
        oldFile: '', // Там внешняя ссылка на карту, нужно сделать заглушку
        lang: 'ru',
        isStub: true,
        title: 'Как нас найти'
    },
    {
        newPath: '/ru/about/supervisory-board',
        oldFile: 'ru/o-predpriyatij/nablyudatelnyj-sovet.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/strategic-plan',
        oldFile: 'ru/o-predpriyatij/strategicheskij-plan.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/ethics-code',
        oldFile: 'ru/o-predpriyatij/eticheskij-kodeks.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/anti-corruption',
        oldFile: 'ru/o-predpriyatij/protivodejstvie-korruptsii.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/charter',
        oldFile: 'ru/o-predpriyatij/ustav.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/analytical-review',
        oldFile: 'ru/o-predpriyatij/analiticheskij-obzor.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/procurement-announcements',
        oldFile: 'ru/o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-41.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/procurement-opening',
        oldFile: 'ru/o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-42.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/about/procurement-results',
        oldFile: 'ru/o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-43.html',
        lang: 'ru'
    },

    // === ПАЦИЕНТАМ ===
    {
        newPath: '/ru/patients/osms',
        oldFile: 'ru/2014-06-18-03-17-18/8-uncategorised.html', // Найдено поиском по старому сайту
        lang: 'ru',
        isStub: true,
        title: 'ОСМС'
    },
    {
        newPath: '/ru/patients/gobmp',
        oldFile: 'ru/2014-06-18-03-17-18/gobmp.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/faq',
        oldFile: 'ru/2014-06-18-03-17-18/chasto-zadovaemye-voprosy.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/appeals',
        oldFile: 'ru/2014-06-18-03-17-18/obrashcheniya.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/doctors-schedule',
        oldFile: 'ru/2014-06-18-03-17-18/grafik-vrachej.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/drug-formulary',
        oldFile: '', // Внешняя ссылка
        lang: 'ru',
        isStub: true,
        title: 'Лекарственный формуляр'
    },
    {
        newPath: '/ru/patients/rights',
        oldFile: 'ru/2014-06-18-03-17-18/prava-i-obyazannosti-patsientov.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/qna',
        oldFile: 'ru/2014-06-18-03-17-18/vopros-otvet.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/patients/support-service',
        oldFile: 'ru/2014-06-18-03-17-18/sluzhba-podderzhki-patsienta-i-vnutrennego-audita.html',
        lang: 'ru'
    },

    // === СИМВОЛЫ ===
    {
        newPath: '/ru/symbols/flag',
        oldFile: 'ru/2014-12-25-05-29-42/gosudarstvennyj-flag.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/symbols/emblem',
        oldFile: 'ru/2014-12-25-05-29-42/gosudarstvennyj-gerb.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/symbols/anthem',
        oldFile: 'ru/2014-12-25-05-29-42/gosudarstvennyj-gimn.html',
        lang: 'ru'
    },

    // === ГОСУСЛУГИ ===
    {
        newPath: '/ru/services/register',
        oldFile: 'ru/2014-12-25-05-36-16/2014-12-25-05-40-53.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/services/standards',
        oldFile: 'ru/2014-12-25-05-36-16/standarty-okazaniya-meditsinskikh-uslug.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/services/npa',
        oldFile: 'ru/2014-12-25-05-36-16/npa-po-gosudarstvennym-uslugam.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/services/reports',
        oldFile: 'ru/2014-12-25-05-36-16/otchety-po-gosudarstvennym-uslugam.html',
        lang: 'ru'
    },

    // === ПОЛЕЗНЫЕ ССЫЛКИ ===
    {
        newPath: '/ru/useful-links/history',
        oldFile: 'ru/poleznye-ssylki/istoriya-tsentra.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/useful-links/director-blog',
        oldFile: 'ru/poleznye-ssylki/blog-direktora.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/useful-links/director-biography',
        oldFile: 'ru/poleznye-ssylki/biografiya-direktora.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/useful-links/free-medicines',
        oldFile: '', // Внешняя ссылка
        lang: 'ru',
        isStub: true,
        title: 'Бесплатные и льготные лекарства'
    },
    {
        newPath: '/ru/useful-links/guaranteed-care',
        oldFile: '', // Внешняя ссылка
        lang: 'ru',
        isStub: true,
        title: 'Гарантированный объем медицинской помощи'
    },
    {
        newPath: '/ru/useful-links/financial-reports',
        oldFile: 'ru/poleznye-ssylki/finansovaya-otchetnost.html',
        lang: 'ru'
    },

    // === ПРОЧЕЕ ===
    {
        newPath: '/ru/contacts',
        oldFile: 'ru/kontakty.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/npa',
        oldFile: 'ru/npa.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/call-center',
        oldFile: 'ru/glavnaya/telefon-sall-tsentra-3000-103.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/narcological-service',
        oldFile: 'ru/narkologicheskaya-sluzhba.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/psychological-service',
        oldFile: 'ru/psikhologicheskaya-sluzhba.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/health-promotion',
        oldFile: 'ru/propaganda-zozh.html',
        lang: 'ru'
    },
    {
        newPath: '/ru/vacancies',
        oldFile: 'ru/vakansii-2.html',
        lang: 'ru'
    }
];

// Добавим те же маршруты для KZ, просто заменив ru на kz в путях
const kzMapping = pagesMapping.map(page => ({
    newPath: page.newPath.replace('/ru/', '/kz/'),
    oldFile: page.oldFile ? page.oldFile.replace('ru/', 'kz/') : '',
    lang: 'kz',
    isStub: page.isStub,
    title: page.title
}));

const allPages = [...pagesMapping, ...kzMapping];

function template(title, innerHtml, lang) {
    const processedHtml = (innerHtml || '')
        .replace(/src="\/images\//g, 'src="/images/old/')
        .replace(/src="images\//g, 'src="/images/old/')
        .replace(/src="\.\.\/images\//g, 'src="/images/old/')
        .replace(/class="([^"]*)"/g, (match, classes) => {
            if (classes.includes('pull-left') || classes.includes('custom') || classes.includes('item-page')) {
                return 'className="my-4"';
            }
            return 'className="' + classes + '"';
        })
        .replace(/style="([^"]*)"/g, () => '')
        .replace(/<br>/g, '<br />')
        .replace(/<img([^>]*)>/g, (m, attrs) => {
            if (!attrs.endsWith('/')) return '<img' + attrs + ' />';
            return m;
        })
        .replace(/<hr>/g, '<hr className="my-8 border-[var(--border)]" />');

    const strTitle = (title || 'Страница').replace(/"/g, '&quot;');
    const breadcrumbText = lang === 'ru' ? 'Главная' : 'Басты бет';

    return `import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/${lang}" className="hover:text-[var(--primary)] transition-colors no-underline">
            ${breadcrumbText}
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">${strTitle}</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            ${strTitle}
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: \`${processedHtml.replace(/`/g, '\\`').replace(/\$/g, '&#36;')}\` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
`;
}

async function processPages() {
    console.log('Начинаю парсинг и создание страниц...');
    let createdCount = 0;

    for (const page of allPages) {
        const newFilePath = path.join(NEW_SITE_DIR, page.newPath.replace('/ru/', 'ru/').replace('/kz/', 'kz/'), 'page.tsx');

        const dir = path.dirname(newFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        if (page.isStub) {
            const text = page.lang === 'ru'
                ? 'Данная страница ссылается на внешний ресурс или находится в разработке.'
                : 'Бұл бет сыртқы көзге сілтеме жасайды немесе әзірленуде.';
            const stubHtml = '<p className="text-center py-10">' + text + '</p>';
            fs.writeFileSync(newFilePath, template(page.title, stubHtml, page.lang));
            createdCount++;
            continue;
        }

        const oldFilePath = path.join(OLD_SITE_DIR, page.oldFile);

        if (fs.existsSync(oldFilePath)) {
            const html = fs.readFileSync(oldFilePath, 'utf8');
            const $ = cheerio.load(html);

            let title = $('.page-header h2').text().trim() ||
                $('.item-page h2').text().trim() ||
                $('h1').first().text().trim() ||
                $('title').text().trim();

            $('script, style, iframe, link, .header, .nav, .footer, #mmenu, #mmenu-btn, #header, #nav, #slider, .breadcrumbs, .moduletable, .icons, .item-separator, .print-icon, .email-icon').remove();

            let content = $('.item-page').html() || $('#content .white').html() || '';

            if (!title || title === '') {
                title = page.lang === 'ru' ? 'Информация' : 'Ақпарат';
            }

            fs.writeFileSync(newFilePath, template(title, content, page.lang));
            console.log('✅ Создано: ' + page.newPath);
            createdCount++;
        } else {
            console.log('❌ Не найден старый файл: ' + page.oldFile + ' (для ' + page.newPath + ')');
            const text = page.lang === 'ru'
                ? 'Информация на стадии переноса.'
                : 'Ақпарат тасымалдануда.';
            const stubHtml = '<p className="text-center py-10">' + text + '</p>';
            fs.writeFileSync(newFilePath, template('Страница в разработке', stubHtml, page.lang));
            createdCount++;
        }
    }

    console.log('\\nГотово! Создано страниц: ' + createdCount);
    console.log('Для картинок нужно поместить папку images в public/images/old/');
}

processPages().catch(console.error);
