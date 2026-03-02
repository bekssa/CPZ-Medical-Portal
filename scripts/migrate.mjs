import fs from 'fs';
import path from 'path';

const OLD_SITE_DIR = 'c:/NextProj/CPZ2/CPZ/cpzalmaty.kz/ru';
const DATA_FILE = 'c:/NextProj/CPZ2/medical-portal/src/data/content-ru.json';

const mappings = [
    // О центре
    { route: 'about', slug: 'history', file: 'o-predpriyatij.html' },
    { route: 'about', slug: 'mission', file: 'o-predpriyatij/2014-06-18-03-09-02.html' },
    { route: 'about', slug: 'administration', file: 'o-predpriyatij/2014-06-18-03-09-39.html' },
    { route: 'about', slug: 'supervisory-board', file: 'o-predpriyatij/nablyudatelnyj-sovet.html' },
    { route: 'about', slug: 'strategic-plan', file: 'o-predpriyatij/strategicheskij-plan.html' },
    { route: 'about', slug: 'ethics-code', file: 'o-predpriyatij/eticheskij-kodeks.html' },
    { route: 'about', slug: 'anti-corruption', file: 'o-predpriyatij/protivodejstvie-korruptsii.html' },
    { route: 'about', slug: 'charter', file: 'o-predpriyatij/ustav.html' },
    { route: 'about', slug: 'analytical-review', file: 'o-predpriyatij/analiticheskij-obzor.html' },

    // Гос закупки
    { route: 'about', slug: 'procurement-announcements', file: 'o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-41.html' },
    { route: 'about', slug: 'procurement-opening', file: 'o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-42.html' },
    { route: 'about', slug: 'procurement-results', file: 'o-predpriyatij/2014-06-18-03-09-40/2014-06-18-03-09-43.html' },

    // Пациентам
    { route: 'patients', slug: 'gobmp', file: '2014-06-18-03-17-18/gobmp.html' },
    { route: 'patients', slug: 'faq', file: '2014-06-18-03-17-18/chasto-zadovaemye-voprosy.html' },
    { route: 'patients', slug: 'appeals', file: '2014-06-18-03-17-18/obrashcheniya.html' },
    { route: 'patients', slug: 'doctors-schedule', file: '2014-06-18-03-17-18/grafik-vrachej.html' },
    { route: 'patients', slug: 'rights', file: '2014-06-18-03-17-18/prava-i-obyazannosti-patsientov.html' },
    { route: 'patients', slug: 'qna', file: '2014-06-18-03-17-18/vopros-otvet.html' },
    { route: 'patients', slug: 'support-service', file: '2014-06-18-03-17-18/sluzhba-podderzhki-patsienta-i-vnutrennego-audita.html' },

    // Государственные символы
    { route: 'symbols', slug: 'flag', file: '2014-12-25-05-29-42/gosudarstvennyj-flag.html' },
    { route: 'symbols', slug: 'emblem', file: '2014-12-25-05-29-42/gosudarstvennyj-gerb.html' },
    { route: 'symbols', slug: 'anthem', file: '2014-12-25-05-29-42/gosudarstvennyj-gimn.html' },

    // Государственные услуги
    { route: 'services', slug: 'register', file: '2014-12-25-05-36-16/2014-12-25-05-40-53.html' },
    { route: 'services', slug: 'standards', file: '2014-12-25-05-36-16/standarty-okazaniya-meditsinskikh-uslug.html' },
    { route: 'services', slug: 'npa', file: '2014-12-25-05-36-16/npa-po-gosudarstvennym-uslugam.html' },
    { route: 'services', slug: 'reports', file: '2014-12-25-05-36-16/otchety-po-gosudarstvennym-uslugam.html' },

    // Полезные ссылки
    { route: 'useful-links', slug: 'history', file: 'poleznye-ssylki/istoriya-tsentra.html' },
    { route: 'useful-links', slug: 'director-blog', file: 'poleznye-ssylki/blog-direktora.html' },
    { route: 'useful-links', slug: 'director-biography', file: 'poleznye-ssylki/biografiya-direktora.html' },
    { route: 'useful-links', slug: 'financial-reports', file: 'poleznye-ssylki/finansovaya-otchetnost.html' },

    // Контакты & НПА
    { route: 'main', slug: 'contacts', file: 'kontakty.html' },
    { route: 'main', slug: 'npa', file: 'npa.html' },
];

const generatedData = {};

function extractContentSafe(content) {
    let title = '';
    const h2HeadlineStart = content.indexOf('<h2 itemprop="headline">');
    if (h2HeadlineStart !== -1) {
        const headlineEnd = content.indexOf('</h2>', h2HeadlineStart);
        title = content.substring(h2HeadlineStart + 24, headlineEnd).replace(/<[^>]+>/g, '').trim();
    }

    let body = '';
    const articleStartRegex = /<div itemprop="articleBody">/;
    const articleMatch = articleStartRegex.exec(content);
    if (articleMatch) {
        let startIdx = articleMatch.index + articleMatch[0].length;
        let endIdx = content.indexOf('</div>\n\t\n\t\n\t\t\t\t\t\t\t</div>', startIdx);
        if (endIdx === -1) endIdx = content.indexOf('<div class="social-share-wrap">', startIdx);
        if (endIdx === -1) endIdx = content.length;
        body = content.substring(startIdx, endIdx);
    } else {
        const itemPageStart = content.indexOf('<div class="item-page"');
        if (itemPageStart !== -1) {
            let endIdx = content.indexOf('<div id="section-2">', itemPageStart);
            if (endIdx === -1) endIdx = content.length;
            body = content.substring(itemPageStart, endIdx);
        }
    }

    // Attempt to drill down to .body.markup-format
    const innerBodyStart = body.indexOf('<div class="body markup-format"');
    if (innerBodyStart !== -1) {
        const skipDivStart = body.indexOf('>', innerBodyStart) + 1;
        // Find end which usually precedes social wrap or empty <p>s
        let innerEnd = body.indexOf('<p style="margin: 0px;', skipDivStart);
        if (innerEnd === -1) innerEnd = body.lastIndexOf('</div>');
        if (innerEnd !== -1) {
            body = body.substring(skipDivStart, innerEnd);
        }
    }

    // Clean html
    body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
    body = body.replace(/src="(?:\.\.\/)*images\//gi, 'src="/images/old_site_ru/');
    body = body.replace(/src="\/?images\//gi, 'src="/images/old_site_ru/');
    body = body.replace(/\sstyle="[^"]*"/g, '');

    return { title, htmlContent: body.trim() };
}

mappings.forEach(mapping => {
    try {
        const fullPath = path.join(OLD_SITE_DIR, mapping.file);
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            const data = extractContentSafe(content);
            if (data && data.htmlContent) {
                if (!generatedData[mapping.route]) generatedData[mapping.route] = {};
                generatedData[mapping.route][mapping.slug] = data;
                console.log(`Parsed ${mapping.slug}`);
            }
        } else {
            console.warn(`File missing: ${mapping.file}`);
        }
    } catch (e) {
        console.error(`Error on ${mapping.file}:`, e);
    }
});

fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
fs.writeFileSync(DATA_FILE, JSON.stringify(generatedData, null, 2), 'utf-8');
console.log(`Successfully extracted ${Object.keys(generatedData).reduce((acc, k) => acc + Object.keys(generatedData[k]).length, 0)} pages to ${DATA_FILE}`);
