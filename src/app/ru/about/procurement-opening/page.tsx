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
          <span className="text-[var(--text-primary)] line-clamp-1">Протокол вскрытия</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Протокол вскрытия
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Протокол вскрытия		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:19421">
					Просмотров: 19421			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<center>
<div >
<h4 className="class1"><img src="../../../images/GZ/protokol_vsk_page-0001.jpg" alt="protokol vsk page 0001" /><img src="../../../images/GZ/protokol_vsk_page-0002.jpg" alt="protokol vsk page 0002" /><img src="../../../images/GZ/protokol_vsk_page-0003.jpg" alt="protokol vsk page 0003" />&nbsp;</h4>
</div>
</center> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
