import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KZ_DIR = 'c:/NextProj/CPZ2/CPZ-kz/cpzalmaty.kz/kz';
const OUTPUT_FILE = path.join(__dirname, '../src/data/content-kz.json');

// Mappings from semantic routes/slugs to the old KZ files
const routeMappings = {
    about: {
        'mission': '2014-06-18-07-03-14/2015-04-09-00-40-54.html',
        'administration': '2014-06-18-07-03-14/2014-06-18-08-01-15.html',
        'contacts': '2014-06-18-07-03-14/2015-04-09-00-42-59.html',
        'npa': '2014-06-18-07-03-14/2015-04-09-00-43-59.html',
        'charter': '2014-06-18-07-03-14/zhar-y.html',
        'supervisory-board': '2014-06-18-07-03-14/ba-ylau-ke-esi.html',
    },
    patients: {
        'kktmk': '2015-04-09-00-45-14/kktmk.html',
        'qna': '2015-04-09-00-45-14/2015-04-09-00-45-41.html',
        'appeals': '2015-04-09-00-45-14/2015-04-09-00-45-41/2015-04-09-00-47-08.html',
        'biography': '2015-04-09-00-45-14/2015-04-09-00-47-44.html',
        'faq': '2015-04-09-00-45-14/2015-04-09-00-47-45.html',
        'rights': '2015-04-09-00-45-14/densauly-sa-tau-salasynda-y-patsientterdi-y-tary-men-mindetteri.html',
        'support-service': '2015-04-09-00-45-14/ishki-audit-zhane-nau-astardy-oldau-yzymeti.html',
        'gobmp': 'pajdaly-siltemeler/garantirovannyj-ob-em-meditsinskoj-pomoshchi.html'
    },
    symbols: {
        'flag': '2015-04-09-00-48-56/2015-04-09-00-49-37.html',
        'emblem': '2015-04-09-00-48-56/2015-04-09-00-50-37.html',
        'anthem': '2015-04-09-00-48-56/2015-04-09-00-51-03.html',
    },
    services: {
        'register': '2015-04-09-00-52-35/2015-04-09-00-55-18.html',
        'standards': '2015-04-09-00-52-35/2015-04-09-00-56-08.html',
        'regulations': '2015-04-09-00-52-35/2015-04-09-00-56-49.html',
        'reports': '2015-04-09-00-52-35/memlekettik-yzymetter-bojynsha-esep.html',
    },
    'useful-links': {
        'history': 'pajdaly-siltemeler/ortaly-tarikhy.html',
        'director-blog': 'pajdaly-siltemeler/direktor-blogy.html',
        'director-biography': 'pajdaly-siltemeler/biografiya-direktora.html',
        'free-medicines': 'pajdaly-siltemeler/besplatnye-i-lgotnye-lekarstva.html',
        'financial-reports': 'pajdaly-siltemeler/finansovaya-otchetnost.html',
    },
    'root': {
        'contacts': 'bajlanystar.html'
    }
};

function extractContentSafe(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            return null;
        }

        const html = fs.readFileSync(filePath, 'utf-8');
        const root = parse(html);

        const pageTitleElement = root.querySelector('.page-header h2') ||
            root.querySelector('.item-page h2') ||
            root.querySelector('h1.page-title') ||
            root.querySelector('h2.item-title');

        const title = pageTitleElement ? pageTitleElement.text.trim() : 'Название не найдено';

        if (pageTitleElement) {
            pageTitleElement.remove();
        }

        const contentContainer = root.querySelector('[itemprop="articleBody"]') ||
            root.querySelector('.item-page') ||
            root.querySelector('#content .white');

        if (!contentContainer) {
            console.warn(`Could not find content container in ${filePath}`);
            return { title, htmlContent: '' };
        }

        // Clean up redundant elements
        contentContainer.querySelectorAll('.page-header').forEach(el => el.remove());
        contentContainer.querySelectorAll('.icons').forEach(el => el.remove());
        contentContainer.querySelectorAll('dl.article-info').forEach(el => el.remove());

        // Fix image paths
        contentContainer.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('/')) {
                // Remove relative climbing and normalize
                let fixedSrc = src.replace(/^(\.\.\/)+/, '/');
                if (!fixedSrc.startsWith('/images/')) {
                    fixedSrc = `/images/${fixedSrc.replace(/^\//, '')}`;
                }
                img.setAttribute('src', fixedSrc);
            }
        });

        // Clean inline styles safely
        contentContainer.querySelectorAll('*').forEach(el => {
            el.removeAttribute('style');
            const classAttr = el.getAttribute('class');
            if (classAttr) {
                const newClasses = classAttr.split(' ')
                    .filter(c => !c.includes('span') && !c.includes('style'))
                    .join(' ');
                el.setAttribute('class', newClasses);
            }
        });

        // Resolve table styles implicitly by providing clean HTML
        contentContainer.querySelectorAll('table').forEach(table => {
            table.setAttribute('class', 'w-full text-sm text-[var(--text-secondary)] my-4');
        });

        return {
            title,
            htmlContent: contentContainer.innerHTML.trim()
        };

    } catch (e) {
        console.error(`Error processing ${filePath}:`, e);
        return null;
    }
}

async function runMigration() {
    const extractedData = {};
    let totalPages = 0;

    for (const [route, slugs] of Object.entries(routeMappings)) {
        extractedData[route] = {};

        for (const [slug, relativePath] of Object.entries(slugs)) {
            const filePath = path.join(KZ_DIR, relativePath);
            const content = extractContentSafe(filePath);

            if (content) {
                extractedData[route][slug] = content;
                console.log(`Parsed ${slug}`);
                totalPages++;
            }
        }
    }

    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(extractedData, null, 2), 'utf-8');
    console.log(`Successfully extracted ${totalPages} pages to ${OUTPUT_FILE}`);
}

runMigration();
