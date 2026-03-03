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
          <span className="text-[var(--text-primary)] line-clamp-1">Реестр государственных услуг</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Реестр государственных услуг
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Реестр государственных услуг		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:8436">
					Просмотров: 8436			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p ><strong><span ></span></strong></p>
<p >&nbsp;</p>
<h1 ><a href="../../../adilet.zan.kz/rus/docs/V2000019982.html">Об утверждении реестра государственных услуг</a></h1>
<p ><strong><span >&nbsp;можно скачать здесь!<br /></span></strong></p>
<p ><a href="../../../adilet.zan.kz/rus/docs/P1300000983.html"></a></p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
