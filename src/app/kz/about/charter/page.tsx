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
          <span className="text-[var(--text-primary)] line-clamp-1">Жарғы</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Жарғы
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Жарғы		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Егжей-тегжейі							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:4652">
					Қаралды: 4652			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p></p><div className="aridoc-container aridoc-loading "><div className="aridoc-loading-message">Loading...</div></div><p></p>
<p>&nbsp;</p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
