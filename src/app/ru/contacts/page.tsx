import Link from 'next/link';

const leadership = [
  {
    title: 'Директор',
    name: 'Рахменшеев Сапар Куттыбаевич',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [
      { label: 'Психиатрическая служба', number: '8(727) 376-55-75' },
      { label: 'Наркологическая служба', number: '8(727) 382-36-44' },
    ],
  },
  {
    title: 'Приемная директора',
    name: '',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [
      { label: 'Психиатрическая служба', number: '8(727) 376-55-95' },
      { label: 'Наркологическая служба', number: '8(727) 382-36-44' },
    ],
  },
  {
    title: 'Зам. директора по психиатрической службе',
    name: 'Жолдыбаева Жанна Сагатовна',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 376-55-93' }],
  },
  {
    title: 'Зам. директора по наркологической службе',
    name: 'Татиева Роза Жексембаевна',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 382-35-33' }],
  },
  {
    title: 'Зам. директора по качеству оказываемых услуг',
    name: 'Худаир Жанна Рафхатовна',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 376-55-31' }],
  },
  {
    title: 'Зам. директора по противоэпидемической службе',
    name: 'Аскаров Марат Амиршеевич',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 390-16-61' }],
  },
  {
    title: 'Главная медсестра',
    name: 'Алимжанова Батыркуль Сатыбалдиевна',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 376-55-91' }],
  },
  {
    title: 'Врач-эксперт',
    name: 'Ротманова Екатерина Александровна',
    schedule: '08:00 – 17:00, обед 13:00–14:00',
    phones: [{ number: '+7(727) 376-55-84' }],
  },
];

const clinics = [
  {
    title: 'Регистратура — Психиатрическая служба',
    schedule: 'Пн–Пт 08:00–17:00, Сб до 15:00, Вс — выходной',
    phones: [
      '+7(727) 376-55-86',
      '+7(727) 390-74-88',
      '8 705 191 02 57',
      '+7(727) 376-55-81 (заведующая взрослой поликлиники)',
    ],
  },
  {
    title: 'Детская регистратура',
    schedule: '08:00–17:00',
    phones: [
      '+7 747 496-64-20',
      '+7(727) 338-77-73',
    ],
  },
  {
    title: 'Регистратура — Наркологическая служба',
    schedule: '',
    phones: ['+7(727) 382-34-19'],
  },
  {
    title: 'Аптека — Психиатрическая служба',
    schedule: 'Пн–Пт 08:00–17:00, обед 13:00–14:00, Сб 09:00–13:00',
    phones: ['+7(727) 376-54-84'],
  },
  {
    title: 'Рентген кабинет',
    schedule: 'Пн–Пт 08:00–15:00, обед 13:00–14:00',
    phones: ['+7(727) 390-16-61'],
  },
];

const emergencyServices = [
  {
    title: 'Платное отделение — Психиатрическая служба',
    schedule: 'Пн–Пт 08:00–17:00',
    phones: ['+7(727) 376-54-40'],
  },
  {
    title: 'Платное отделение — Наркологическая служба',
    schedule: 'Пн–Пт 08:00–17:00',
    phones: ['+7(727) 382-36-81', '8 705 778 97 17'],
  },
  {
    title: 'Приемный покой — Психиатрическая служба',
    schedule: 'Круглосуточно 24/7',
    phones: ['+7(727) 229-11-06'],
  },
  {
    title: 'Приемный покой — Наркологическая служба',
    schedule: 'Круглосуточно 24/7',
    phones: ['+7(727) 382-36-21'],
  },
  {
    title: 'Отделение специализированной неотложной скорой помощи',
    schedule: 'Круглосуточно 24/7',
    phones: ['+7(727) 376-55-96', '+7(727) 376-55-94'],
  },
  {
    title: 'Экспертиза',
    schedule: 'Круглосуточно 24/7',
    phones: ['+7(727) 382-33-68', '+7(727) 382-34-62'],
  },
];

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">Контакты</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 pb-4 border-b border-[var(--border-light)] leading-snug">
            Контакты
          </h1>

          <div className="text-center mb-8">
            <p className="text-lg font-bold text-[var(--text-primary)]">
              Коммунальное государственное предприятие на праве хозяйственного ведения
            </p>
            <p className="text-lg font-bold text-[var(--primary)]">
              «Центр психического здоровья»
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Управления общественного здравоохранения города Алматы
            </p>
          </div>

          {/* Hotlines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200">
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Телефон доверия</div>
              <div className="text-2xl font-bold text-red-700">13-03</div>
              <div className="text-sm text-red-600 mt-1">8 708 983 28 63</div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">ЕКЦ</div>
              <div className="text-2xl font-bold text-blue-700">14-14</div>
              <div className="text-sm text-blue-600 mt-1">Республиканский: 3580</div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-1">Психиатрическая служба</div>
              <div className="text-lg font-bold text-teal-700">8 727 376-56-60</div>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200">
              <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-1">Наркологическая служба</div>
              <div className="text-lg font-bold text-amber-700">+7 727 382-34-62</div>
            </div>
            <div className="sm:col-span-2 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200">
              <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">Поликлиника детского отделения</div>
              <div className="text-lg font-bold text-purple-700">8 747 496 64 20</div>
            </div>
          </div>

          {/* Leadership */}
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 pb-3 border-b border-[var(--border-light)] flex items-center gap-2">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full inline-block" />
            Руководство
          </h2>
          <div className="space-y-3 mb-10">
            {leadership.map((person) => (
              <div key={person.title} className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[var(--text-primary)]">{person.title}</div>
                    {person.name && (
                      <div className="text-sm text-[var(--text-secondary)] mt-0.5">{person.name}</div>
                    )}
                    {person.schedule && (
                      <div className="text-xs text-[var(--text-muted)] mt-1">🕐 {person.schedule}</div>
                    )}
                  </div>
                  <div className="shrink-0 space-y-1">
                    {person.phones.map((phone) => (
                      <div key={phone.number} className="text-sm">
                        <a href={`tel:${phone.number.replace(/[\s()-]/g, '')}`} className="font-medium text-[var(--primary)] no-underline hover:underline">
                          {phone.number}
                        </a>
                        {'label' in phone && phone.label && (
                          <span className="text-xs text-[var(--text-muted)] ml-1">({phone.label})</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Polyclinics */}
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 pb-3 border-b border-[var(--border-light)] flex items-center gap-2">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full inline-block" />
            Поликлиника
          </h2>
          <div className="space-y-3 mb-10">
            {clinics.map((clinic) => (
              <div key={clinic.title} className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                <div className="font-semibold text-[var(--text-primary)]">{clinic.title}</div>
                {clinic.schedule && (
                  <div className="text-xs text-[var(--text-muted)] mt-1">🕐 {clinic.schedule}</div>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  {clinic.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[\s()-]/g, '')}`} className="text-sm font-medium text-[var(--primary)] no-underline hover:underline">
                      📞 {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency & Special Services */}
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 pb-3 border-b border-[var(--border-light)] flex items-center gap-2">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full inline-block" />
            Службы и экстренная помощь
          </h2>
          <div className="space-y-3">
            {emergencyServices.map((service) => (
              <div key={service.title} className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors">
                <div className="font-semibold text-[var(--text-primary)]">{service.title}</div>
                {service.schedule && (
                  <div className="text-xs text-[var(--text-muted)] mt-1">🕐 {service.schedule}</div>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  {service.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/[\s()-]/g, '')}`} className="text-sm font-medium text-[var(--primary)] no-underline hover:underline">
                      📞 {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust hotline highlight */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 text-white text-center">
            <div className="text-sm font-medium opacity-90 mb-1">Телефон доверия в кризисных ситуациях</div>
            <div className="text-3xl font-bold tracking-wide">+7(727) 376-56-60</div>
            <div className="text-lg font-semibold mt-1">8 708 983 28 63</div>
            <div className="text-sm opacity-80 mt-2">Call center: <strong>13-03</strong> — Круглосуточно 24/7</div>
          </div>
        </article>
      </div>
    </div>
  );
}
