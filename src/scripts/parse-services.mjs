import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OLD_SITE_DIR = path.join(__dirname, '../../../CPZ/cpzalmaty.kz');
const NEW_SITE_DIR = path.join(__dirname, '../../');
const APP_DIR = path.join(NEW_SITE_DIR, 'src/app');
const PUBLIC_IMG_DIR = path.join(NEW_SITE_DIR, 'public/images/old');

// Вспомогательная функция для скачивания HTML по URL
function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
                return;
            }
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    resolve(rawData);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (e) => reject(e));
    });
}

// Вспомогательная функция для скачивания бинарного файла (картинки)
function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        // Убедимся, что папка существует
        fs.mkdirSync(path.dirname(destPath), { recursive: true });

        if (fs.existsSync(destPath)) {
            resolve(); // Уже скачано
            return;
        }

        const file = fs.createWriteStream(destPath);
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                fs.unlink(destPath, () => reject(new Error(`Failed to download ${url}: ${res.statusCode}`)));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(destPath, () => reject(err));
        });
    });
}

const servicesToParse = [
    {
        lang: 'ru',
        oldFile: 'ru/psikhologicheskaya-sluzhba.html',
        liveUrl: 'https://cpzalmaty.kz/ru/psikhologicheskaya-sluzhba',
        newPath: 'psychiatric-service',
        title: 'Психиатрическая служба',
        baseUrl: 'https://cpzalmaty.kz/ru/'
    },
    {
        lang: 'kz',
        oldFile: 'kz/psikhologicheskaya-sluzhba.html',
        liveUrl: 'https://cpzalmaty.kz/kz/psikhologicheskaya-sluzhba',
        newPath: 'psychiatric-service',
        title: 'Психиатриялық қызмет',
        baseUrl: 'https://cpzalmaty.kz/kz/'
    },
    {
        lang: 'ru',
        oldFile: 'ru/narkologicheskaya-sluzhba.html',
        liveUrl: 'https://cpzalmaty.kz/ru/narkologicheskaya-sluzhba',
        newPath: 'narcological-service',
        title: 'Наркологическая служба',
        baseUrl: 'https://cpzalmaty.kz/ru/'
    },
    {
        lang: 'kz',
        oldFile: 'kz/narkologicheskaya-sluzhba.html',
        liveUrl: 'https://cpzalmaty.kz/kz/narkologicheskaya-sluzhba',
        newPath: 'narcological-service',
        title: 'Наркологиялық қызмет',
        baseUrl: 'https://cpzalmaty.kz/kz/'
    }
];

function cleanHtmlContent($, root) {
    root.find('*').removeAttr('style');
    root.find('*').removeAttr('class');
    root.find('*').removeAttr('id');
    root.find('script').remove();
    root.find('style').remove();
    root.find('meta').remove();
    root.find('link').remove();

    return root.html();
}

async function processService(service) {
    let html = '';

    if (service.oldFile) {
        const localFilePath = path.join(OLD_SITE_DIR, service.oldFile);
        if (fs.existsSync(localFilePath)) {
            html = fs.readFileSync(localFilePath, 'utf8');
            console.log(`Using local file: ${localFilePath}`);
        }
    }

    // Если локальный файл не найден, пробуем загрузить с живого сайта (главную страницу службы)
    if (!html) {
        if (service.liveUrl) {
            try {
                console.log(`Fetching main service page from ${service.liveUrl}`);
                html = await fetchHtml(service.liveUrl);
            } catch (e) {
                console.error(`Failed to fetch ${service.liveUrl}`);
                return;
            }
        } else {
            console.log(`No local file and no liveUrl for ${service.title}`);
            return;
        }
    }

    const $ = cheerio.load(html);

    const titleText = $('h2').first().text().trim() || service.title;
    service.title = titleText;

    const departments = [];

    $('table.category tbody tr').each((i, el) => {
        const a = $(el).find('td.list-title a');
        const deptTitle = a.text().trim();
        let href = a.attr('href');

        if (deptTitle && href) {
            if (href.startsWith('/')) {
                href = href.substring(1);
            }

            let slug = href.split('/').pop().replace('.html', '');

            departments.push({
                title: deptTitle,
                oldHref: href,
                slug: slug
            });
        }
    });

    console.log(`Found ${departments.length} departments for ${service.title} (${service.lang})`);

    // Проходимся по каждому отделению, качаем страницу 
    for (const dept of departments) {
        console.log(`  Downloading ${dept.title}...`);
        const liveUrl = `${service.baseUrl}${dept.oldHref}`.replace('.html', '');

        try {
            const pageHtml = await fetchHtml(liveUrl);
            const $page = cheerio.load(pageHtml);

            // Ищем основной контент (старый joomla article)
            const contentDiv = $page('.item-page');

            if (contentDiv.length === 0) {
                console.log(`    ! No .item-page found for ${liveUrl}`);
                continue;
            }

            // Обработка картинок: скачиваем и меняем пути
            const images = contentDiv.find('img');
            for (let i = 0; i < images.length; i++) {
                const img = images.eq(i);
                let src = img.attr('src');
                if (src) {
                    // Если src = /images/что-то
                    if (src.startsWith('/')) {
                        src = src.substring(1);
                    }

                    if (src.startsWith('images/')) {
                        const imgUrl = `https://cpzalmaty.kz/${src}`;
                        const localImgPath = path.join(PUBLIC_IMG_DIR, src.replace('images/', '')); // public/images/old/...
                        await downloadFile(imgUrl, localImgPath);
                        img.attr('src', `/images/old/${src.replace('images/', '')}`);
                    }
                }
            }

            // Удаляем лишнее
            const cleanedHtml = cleanHtmlContent($page, contentDiv);

            // Создаем TSX страницу отделения
            const pageDir = path.join(APP_DIR, service.lang, service.newPath, dept.slug);
            fs.mkdirSync(pageDir, { recursive: true });

            // Преобразуем HTML в JSX-совместимый
            let jsxHtml = cleanedHtml
                .replace(/class=/g, 'className=')
                .replace(/for=/g, 'htmlFor=')
                .replace(/<img(.*?)>/g, (match) => {
                    if (match.endsWith('/>')) return match;
                    return match.replace(/>$/, ' />');
                })
                .replace(/<br>/g, '<br />')
                .replace(/<hr>/g, '<hr />')
                .replace(/&nbsp;/g, '\u00A0');

            const pageContent = `import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: '${dept.title.replace(/'/g, "\\'")}',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: '${service.lang === 'ru' ? 'Главная' : 'Бастапқы'}', href: '/${service.lang}' },
    { label: '${service.title.replace(/'/g, "\\'")}', href: '/${service.lang}/${service.newPath}' },
    { label: '${dept.title.replace(/'/g, "\\'")}', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: \`${jsxHtml.replace(/`/g, '\\`')}\` }} />
          </div>
      </div>
    </div>
  );
}
`;
            fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
            console.log(`    Created page for ${dept.slug}`);

        } catch (e) {
            console.error(`    Error downloading ${liveUrl}:`, e);
        }
    }

    // Создаем главную страницу Службы со списком отделений
    const mainPageDir = path.join(APP_DIR, service.lang, service.newPath);
    fs.mkdirSync(mainPageDir, { recursive: true });

    const colors = [
        'bg-teal-500 hover:bg-teal-600 text-white',
        'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200'
    ];

    let buttonsJsx = departments.map((dept, idx) => {
        const colorClass = colors[idx % 2];
        return `
        <Link 
          href="/${service.lang}/${service.newPath}/${dept.slug}"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md ${colorClass}"
        >
          <span className="text-lg md:text-xl font-medium">
            ${dept.title}
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>`;
    }).join('');

    const mainPageContent = `import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: '${service.title.replace(/'/g, "\\'")}',
};

export default function ServicePage() {
  const breadcrumbs = [
    { label: '${service.lang === 'ru' ? 'Главная' : 'Бастапқы'}', href: '/${service.lang}' },
    { label: '${service.title.replace(/'/g, "\\'")}', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
          ${service.title.replace(/'/g, "\\'")}
        </h1>
        <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="flex flex-col gap-4">
${buttonsJsx}
      </div>
    </div>
  );
}
`;

    fs.writeFileSync(path.join(mainPageDir, 'page.tsx'), mainPageContent);
    console.log(`Created Main Service Page for ${service.newPath} (${service.lang})`);
}

async function run() {
    console.log('Starting Service Parser...');
    for (const service of servicesToParse) {
        await processService(service);
    }
    console.log('Done!');
}

run();
