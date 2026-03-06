import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/ru" className="hover:text-[var(--primary)] transition-colors no-underline">
            Главная
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:3017">
					Просмотров: 3017			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><span ><a href="../../../adilet.zan.kz/rus/docs/Z1500000410.html">Закон РК от 18.11.2015 г.</a><strong><a href="../../../adilet.zan.kz/rus/docs/Z1500000410.html"> "О противодействии корупции" с изм. на 01.08.2019&nbsp; скачать&nbsp;</a></strong></span></p>
<p><span ><a href="../../../adilet.zan.kz/rus/docs/U1400000986.html">Указ Президента РК от 26.12.2014 г. №986</a><strong><a href="../../../adilet.zan.kz/rus/docs/U1400000986.html">&nbsp; "Об антикорупционной стратегии РК на 2015-2025г."&nbsp;</a></strong></span></p>
<p><span >Памятка<a href="/images/old/docs/%d0%bf%d0%b0%d0%bc%d1%8f%d1%82%d0%ba%d0%b0_%d0%be_%d0%ba%d0%be%d0%be%d1%80%d1%83%d0%bf%d1%86%d0%b8%d0%b8.jpg"><strong>"О борьбе с коррупцией"</strong></a></span></p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
