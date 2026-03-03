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
          href="/ru/narcological-service/otdelenie-1"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №1 мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-2"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №2 женское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-3"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №3 - мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-4"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №4 - мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-5"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №5
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-6"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №6 - временной адаптации и детоксикации
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-7"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №7 - мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-8"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №8 - мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-10"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №9 - реанимации и интенсивной терапии
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/107-otdelenie-10-muzhskoe"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение №10 мужское
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/poliklinicheskoe-otdelenie"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Поликлиническое отделение
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/otdelenie-priemnogo-pokoya"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-white hover:bg-slate-50 text-slate-800 border border-slate-200"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение приемного покоя
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          href="/ru/narcological-service/platnye-uslugi"
          className="group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md bg-teal-500 hover:bg-teal-600 text-white"
        >
          <span className="text-lg md:text-xl font-medium">
            Отделение оказания платных медицинских услуг
          </span>
          <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
