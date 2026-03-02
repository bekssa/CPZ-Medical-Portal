export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

// Базовая структура навигации без префиксов языка
const baseNavigation: NavItem[] = [
  {
    title: 'Главная',
    href: '/',
    children: [
      { title: 'Телефон Call-центра: 3000-103', href: '/call-center' },
    ],
  },
  {
    title: 'О центре',
    href: '/about',
    children: [
      { title: 'Миссия, Цель и Ценности', href: '/about/mission' },
      { title: 'Администрация', href: '/about/administration' },
      { title: 'Как нас найти', href: '/about/location' },
      { title: 'Наблюдательный совет', href: '/about/supervisory-board' },
      { title: 'Стратегический план', href: '/about/strategic-plan' },
      { title: 'Этический кодекс', href: '/about/ethics-code' },
      { title: 'Противодействие коррупции', href: '/about/anti-corruption' },
      { title: 'Устав', href: '/about/charter' },
      { title: 'Аналитический обзор', href: '/about/analytical-review' },
      {
        title: 'Государственные закупки',
        href: '/about/procurement',
        children: [
          { title: 'Объявления госзакупок', href: '/about/procurement-announcements' },
          { title: 'Протоколы вскрытия', href: '/about/procurement-opening' },
          { title: 'Протоколы итогов', href: '/about/procurement-results' },
        ],
      },
    ],
  },
  {
    title: 'Пациентам',
    href: '/patients',
    children: [
      { title: 'ОСМС', href: '/patients/osms' },
      { title: 'ГОБМП', href: '/patients/gobmp' },
      { title: 'Часто задаваемые вопросы', href: '/patients/faq' },
      { title: 'Обращения', href: '/patients/appeals' },
      { title: 'График врачей', href: '/patients/doctors-schedule' },
      { title: 'Лекарственный формуляр', href: '/patients/drug-formulary' },
      { title: 'Права и обязанности пациентов', href: '/patients/rights' },
      { title: 'Вопрос-ответ', href: '/patients/qna' },
      { title: 'Служба поддержки пациента', href: '/patients/support-service' },
    ],
  },
  {
    title: 'Государственные символы',
    href: '/symbols',
    children: [
      { title: 'Государственный Флаг', href: '/symbols/flag' },
      { title: 'Государственный Герб', href: '/symbols/emblem' },
      { title: 'Государственный Гимн', href: '/symbols/anthem' },
    ],
  },
  {
    title: 'Государственные услуги',
    href: '/services',
    children: [
      { title: 'Реестр государственных услуг', href: '/services/register' },
      { title: 'Стандарты государственных услуг', href: '/services/standards' },
      { title: 'НПА по государственным услугам', href: '/services/npa' },
      { title: 'Отчеты по государственным услугам', href: '/services/reports' },
    ],
  },
  {
    title: 'Полезные ссылки',
    href: '/useful-links',
    children: [
      { title: 'История центра', href: '/useful-links/history' },
      { title: 'Блог Директора', href: '/useful-links/director-blog' },
      { title: 'Биография Директора', href: '/useful-links/director-biography' },
      { title: 'Бесплатные и льготные лекарства', href: '/useful-links/free-medicines' },
      { title: 'Гарантированный объем медицинской помощи', href: '/useful-links/guaranteed-care' },
      { title: 'Финансовая отчетность', href: '/useful-links/financial-reports' },
    ],
  },
  {
    title: 'Контакты',
    href: '/contacts',
  },
  {
    title: 'НПА',
    href: '/npa',
  },
];

// Казахская базовая структура навигации
const baseNavigationKz: NavItem[] = [
  {
    title: 'Бастапқы',
    href: '/',
    children: [
      { title: 'Call орталық телефоны: 3000-103', href: '/call-center' },
    ],
  },
  {
    title: 'Орталық туралы',
    href: '/about',
    children: [
      { title: 'Миссиясы, Мақсаты және Құндылықтары', href: '/about/mission' },
      { title: 'Әкімшілік', href: '/about/administration' },
      { title: 'Бізді қалай табуға болады', href: '/about/location' },
      { title: 'Бақылау кеңесі', href: '/about/supervisory-board' },
      { title: 'Стратегиялық жоспар', href: '/about/strategic-plan' },
      { title: 'Этикалық кодекс', href: '/about/ethics-code' },
      { title: 'Сыбайлас жемқорлыққа қарсы іс-қимыл', href: '/about/anti-corruption' },
      { title: 'Жарғы', href: '/about/charter' },
      { title: 'Аналитикалық шолу', href: '/about/analytical-review' },
      {
        title: 'Мемлекеттік сатып алулар',
        href: '/about/procurement',
        children: [
          { title: 'Мемлекеттік сатып алулар хабарландырулары', href: '/about/procurement-announcements' },
          { title: 'Ашу хаттамалары', href: '/about/procurement-opening' },
          { title: 'Қорытынды хаттамалар', href: '/about/procurement-results' },
        ],
      },
    ],
  },
  {
    title: 'Науқастарға',
    href: '/patients',
    children: [
      { title: 'МӘМС', href: '/patients/osms' },
      { title: 'КМКК', href: '/patients/gobmp' },
      { title: 'Жиі қойылатын сұрақтар', href: '/patients/faq' },
      { title: 'Өтініштер', href: '/patients/appeals' },
      { title: 'Дәрігерлер кестесі', href: '/patients/doctors-schedule' },
      { title: 'Дәрілік формуляр', href: '/patients/drug-formulary' },
      { title: 'Науқастардың құқықтары мен міндеттері', href: '/patients/rights' },
      { title: 'Сұрақ-жауап', href: '/patients/qna' },
      { title: 'Науқастарды қолдау қызметі', href: '/patients/support-service' },
    ],
  },
  {
    title: 'Мемлекеттік рәміздер',
    href: '/symbols',
    children: [
      { title: 'Мемлекеттік Ту', href: '/symbols/flag' },
      { title: 'Мемлекеттік Елтаңба', href: '/symbols/emblem' },
      { title: 'Мемлекеттік Әнұран', href: '/symbols/anthem' },
    ],
  },
  {
    title: 'Мемлекеттік қызметтер',
    href: '/services',
    children: [
      { title: 'Мемлекеттік қызметтер тізілімі', href: '/services/register' },
      { title: 'Мемлекеттік қызметтер стандарттары', href: '/services/standards' },
      { title: 'Мемлекеттік қызметтер бойынша НҚА', href: '/services/npa' },
      { title: 'Мемлекеттік қызметтер есептері', href: '/services/reports' },
    ],
  },
  {
    title: 'Пайдалы сілтемелер',
    href: '/useful-links',
    children: [
      { title: 'Орталық тарихы', href: '/useful-links/history' },
      { title: 'Директор блогы', href: '/useful-links/director-blog' },
      { title: 'Директор өмірбаяны', href: '/useful-links/director-biography' },
      { title: 'Тегін және жеңілдікті дәрілер', href: '/useful-links/free-medicines' },
      { title: 'Кепілдендірілген медициналық көмек', href: '/useful-links/guaranteed-care' },
      { title: 'Қаржылық есептілік', href: '/useful-links/financial-reports' },
    ],
  },
  {
    title: 'Байланыстар',
    href: '/contacts',
  },
  {
    title: 'НҚА',
    href: '/npa',
  },
];

// Дополнительные разделы (русские)
const baseAdditionalSections = [
  { title: 'Новости', href: '/news' },
  { title: 'Объявления', href: '/announcements' },
  { title: 'Наркологическая служба', href: '/narcological-service' },
  { title: 'Психологическая служба', href: '/psychological-service' },
  { title: 'Пропаганда ЗОЖ', href: '/health-promotion' },
  { title: 'Вакансии', href: '/vacancies' },
  { title: 'Журналы', href: '/journals' },
];

// Дополнительные разделы (казахские)
const baseAdditionalSectionsKz = [
  { title: 'Жаңалықтар', href: '/news' },
  { title: 'Хабарландырулар', href: '/announcements' },
  { title: 'Наркологиялық қызмет', href: '/narcological-service' },
  { title: 'Психологиялық қызмет', href: '/psychological-service' },
  { title: 'ДСӨ насихаты', href: '/health-promotion' },
  { title: 'Бос орындар', href: '/vacancies' },
  { title: 'Журналдар', href: '/journals' },
];

// Функция для добавления языкового префикса ко всем ссылкам
function addLanguagePrefix(items: NavItem[], prefix: string): NavItem[] {
  return items.map(item => ({
    ...item,
    href: `${prefix}${item.href}`,
    children: item.children ? addLanguagePrefix(item.children, prefix) : undefined,
  }));
}

// Русская навигация
export const navigation: NavItem[] = addLanguagePrefix(baseNavigation, '/ru');
export const additionalSections = addLanguagePrefix(baseAdditionalSections, '/ru');

// Казахская навигация
export const kazakhNavigation: NavItem[] = addLanguagePrefix(baseNavigationKz, '/kz');
export const kazakhAdditionalSections = addLanguagePrefix(baseAdditionalSectionsKz, '/kz');
