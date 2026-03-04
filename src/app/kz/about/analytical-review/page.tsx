import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">
            Басты бет
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">АНАЛИТИЧЕСКИЙ ОБЗОР</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            АНАЛИТИЧЕСКИЙ ОБЗОР
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			АНАЛИТИЧЕСКИЙ ОБЗОР		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Егжей-тегжейі							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:2212">
					Қаралды: 2212			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p>&nbsp;</p>
<p ><strong><span ></span></strong></p>
<p ><a href="https://cpzalmaty.kz/images/otchet/Аналит._обзор_2022_год.docx"><strong><span > «О СОСТОЯНИИ&nbsp;</span></strong><strong><span >СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ»&nbsp;</span></strong><strong><span >2022 ГОД</span></strong></a></p>
<p ><a href="https://cpzalmaty.kz/images/Аналитический_обзор_2020г.doc"><strong><span ></span></strong></a></p>
<p ><a href="https://cpzalmaty.kz/images/Аналитический_обзор_2020г.doc"><strong><span > «О СОСТОЯНИИ</span></strong></a>&nbsp;<a href="https://cpzalmaty.kz/images/Аналитический_обзор_2020г.doc" ><strong><span >СЛУЖБЫ ОХРАНЫ ПСИХИЧЕСКОГО ЗДОРОВЬЯ Г.АЛМАТЫ ЗА 2019-2020 ГОД»</span></strong></a></p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
