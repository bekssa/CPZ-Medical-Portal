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
          <span className="text-[var(--text-primary)] line-clamp-1">График работы врачей психиатров и наркологов диспансерных отделений.</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            График работы врачей психиатров и наркологов диспансерных отделений.
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			График работы врачей психиатров и наркологов диспансерных отделений.		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Егжей-тегжейі							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:3831">
					Қаралды: 3831			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p>&nbsp;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img src="../../images/galerey/grafik_psih.png" alt="" width="1086" height="927" /></p>
<p><img src="../../images/BNDO.jpg" alt="BNDO.jpg" width="1156" height="641" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ol>
<li><span ><strong><span >Алмалинский район-ГП№8, ул Туркебаева,д 40 , 125каб</span></strong></span></li>
<li><span ><strong><span >Ауэзовский район-ГП№10,мкр Аксай-4,д 17&nbsp;101-104 каб</span></strong></span></li>
<li><span ><strong><span >Жетысуский район-ГП№11, мкр Айнабулак-3,улЖумабаева д 87</span></strong></span></li>
<li><span ><strong><span >Медеуский район-ГП№33,ул Калдаякова&nbsp; д 74 2эт 211 каб.</span></strong></span></li>
<li><span ><strong><span >Бостандыкский район- ЦПЗ ул А.Кекилбайулы117А</span></strong></span></li>
<li><span ><strong><span >Наурызбайский&nbsp; район- ЦПЗ ул А.Кекилбайулы117А</span></strong></span></li>
<li><span ><strong><span >Турксибский район- ЦПЗ ул А.Кекилбайулы117А</span></strong></span></li>
<li><span ><strong><span >Алатауский район- ЦПЗ ул А.Кекилбайулы117А</span></strong></span></li>
</ol>
<p>&nbsp;</p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
