import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

export const metadata = {
  title: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ',
};

export default function ServicePage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 drop-shadow-sm">
          ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ
        </h1>
        <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-8"></div>
      </div>

      <div className="flex flex-col gap-4">

        <Link 
          href="/ru/psychiatric-service/843-obshchepsikhiatricheskoe-muzhskoe-otdelenie"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            1 общепсихиатрическое мужское отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/844-obshchepsikhiatricheskoe-zhenskoe-otdelenie"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            2 общепсихиатрическое женское отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/845-obshchepsikhiatricheskoe-muzhskoe-otdelenie-2"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            3 общепсихиатрическое  мужское отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/846-obshchepsikhiatricheskoe-zhenskoe-otdelenie-2"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            4 общепсихиатрическое женское отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/847-detskoe-psikhiatricheskoe-otdelenie"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            5 детское психиатрическое отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/848-obshchepsikhiatricheskoe-muzhskoe-otdelenie-3"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            6 общепсихиатрическое мужское отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/849-otdelenie-psikhosamaticheskikh-rasstrojstv"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            7 отделение психосоматических расстройств
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/850-administrativno-khozyajstvennyj-otdel"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Административно-хозяйственный отдел
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/851-platnoe-otdelenie"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Платное отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/852-priemnyj-pokoj"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Приемный покой
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/psychiatric-service/853-skoraya-pomoshch"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Скорая помощь
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
