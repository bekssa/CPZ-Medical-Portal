export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

// Казахская навигация (основана на старом сайте)
export const kazakhNavigation: NavItem[] = [
  {
    title: 'Басты бет',
    href: '/kz/',
    children: [
      { title: 'Call-орталық телефоны: 3000-103', href: '/kz/call-center' },
    ],
  },
  {
    title: 'Орталық туралы',
    href: '/kz/about',
    children: [
      { title: 'Мақсаттары мен міндеттері', href: '/kz/about/mission' },
      { title: 'Әкімшілік', href: '/kz/about/administration' },
      { title: 'Бізбен байланыс', href: '/kz/about/location' },
      { title: 'Бақылау кеңесі', href: '/kz/about/supervisory-board' },
      { title: 'Стратегиялық жоспар', href: '/kz/about/strategic-plan' },
      { title: 'Этика кодексі', href: '/kz/about/ethics-code' },
      { title: ' сыбайлас жемқорлыққа қарсы күрес', href: '/kz/about/anti-corruption' },
      { title: 'Жарғы', href: '/kz/about/charter' },
      { title: 'Аналитикалық шолу', href: '/kz/about/analytics' },
      {
        title: 'Мемлекеттік сатып алулар',
        href: '/kz/about/procurement',
        children: [
          { title: 'Мемлекеттік сатып алулар жарияланымдары', href: '/kz/about/procurement/announcements' },
          { title: 'Ашу хаттамалары', href: '/kz/about/procurement/opening-protocols' },
          { title: 'Нәтижелер хаттамалары', href: '/kz/about/procurement/results-protocols' },
        ],
      },
    ],
  },
  {
    title: 'Қонақ',
    href: '/kz/patients',
    children: [
      { title: 'ККТМК', href: '/kz/patients/kktmk' },
      { title: 'МӘМС', href: '/kz/patients/osms' },
      { title: 'Сұрақ-жауап', href: '/kz/patients/qa', children: [
        { title: 'Жолданымдар', href: '/kz/patients/appeals' },
      ]},
      { title: 'Өмірбаяны', href: '/kz/patients/bio' },
      { title: 'Жиі қойылатын сұрақтар', href: '/kz/patients/faq' },
      { title: 'Денсаулық сақтау саласындағы пациенттердің құқықтары мен міндеттері', href: '/kz/patients/rights' },
      { title: 'ОСМС', href: '/kz/patients/osms' },
      { title: 'ГОБМП', href: '/kz/patients/gobmp' },
      { title: 'Обращения', href: '/kz/patients/appeals' },
      { title: 'График врачей', href: '/kz/patients/doctors-schedule' },
      { title: 'Лекарственный формуляр', href: '/kz/patients/drug-formulary' },
      { title: 'Права и обязанности пациентов', href: '/kz/patients/rights' },
      { title: 'Вопрос-ответ', href: '/kz/patients/qa' },
      { title: 'Служба поддержки пациента', href: '/kz/patients/support-service' },
    ],
  },
  {
    title: 'Мемлекеттік рәміздер',
    href: '/kz/symbols',
    children: [
      { title: 'Мемлекеттік Ту', href: '/kz/symbols/flag' },
      { title: 'Мемлекеттік Елтаңба', href: '/kz/symbols/emblem' },
      { title: 'Мемлекеттік Әнұран', href: '/kz/symbols/anthem' },
    ],
  },
  {
    title: 'Мемлекеттік қызметтер',
    href: '/kz/services',
    children: [
      { title: 'Мемлекеттік қызметтер тізілімі', href: '/kz/services/registry' },
      { title: 'Мемлекеттік қызметтер стандарттары', href: '/kz/services/standards' },
      { title: 'Мемлекеттік қызметтер бойынша НПА', href: '/kz/services/npa' },
      { title: 'Мемлекеттік қызметтер бойынша есептер', href: '/kz/services/reports' },
    ],
  },
  {
    title: 'Пайдалы сілтемелер',
    href: '/kz/links',
    children: [
      { title: 'Орталық тарихы', href: '/kz/links/history' },
      { title: 'Директор блогы', href: '/kz/links/director-blog' },
      { title: 'Директор өмірбаяны', href: '/kz/links/director-bio' },
      { title: 'Тегін және жеңілдікпен берілетін дәрі-дәрмектер', href: '/kz/links/free-medicines' },
      { title: 'Кепілдендірілген медициналық көмек көлемі', href: '/kz/links/guaranteed-care' },
      { title: 'Қаржылық есептілік', href: '/kz/links/financial-reports' },
    ],
  },
  {
    title: 'Байланыстар',
    href: '/kz/contacts',
  },
  {
    title: 'НПА',
    href: '/kz/npa',
  },
];

export const kazakhAdditionalSections = [
  { title: 'Хабарлама', href: '/kz/news' },
  { title: 'Жарияланымдар', href: '/kz/announcements' },
  { title: 'Наркологиялық қызмет', href: '/kz/narcological-service' },
  { title: 'Психологиялық қызмет', href: '/kz/psychological-service' },
  { title: 'Денсаулықты насихаттау', href: '/kz/health-promotion' },
  { title: 'Бос орындар', href: '/kz/vacancies' },
  { title: 'Журналдар', href: '/kz/journals' },
];
