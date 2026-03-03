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
          <span className="text-[var(--text-primary)] line-clamp-1">Отчеты по государственным услугам</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Отчеты по государственным услугам
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Отчеты по государственным услугам		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:2648">
					Просмотров: 2648			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p>&nbsp;</p>
<p><a href="https://cpzalmaty.kz/images/2020.docx"><span >Информация по государственным услугам за 2020 год.</span></a></p>
<p><a href="otchety-po-gosudarstvennym-uslugam/2-russkij/dlya-patsientov/uncategorised/1160-informatsiya-po-gosudarstvennym-uslugam-za-2021-god.html"><span >Информация по государственным услугам за 2021 год.</span></a></p>
<p><a href="otchety-po-gosudarstvennym-uslugam/10-aza-sha/khabarlama/vse/1161-otchet-po-gosudarstvennym-uslugam-za-2022-god.html"><span >Информация по государственным услугам за 2022 год.</span></a></p>
<p><a href="https://cpzalmaty.kz/images/otchet/Годовой_отчет_2022год_в_сравнении_с_2021г.docx"><strong ><span >Отчет о работе КГП на ПХВ «Центр психического здоровья»&nbsp;</span></strong><strong ><span >УОЗ г.Алматы за 12 месяцев 2022 года&nbsp;</span></strong><strong ><span >в сравнении с аналогичным периодом 2021 года.</span></strong></a></p>
<p ><a href="https://cpzalmaty.kz/images/otchet/Годовой_отчет_2022год_в_сравнении_с_2021г.docx"></a></p>
<p><a href="https://cpzalmaty.kz/images/2021.docx"><span ></span></a></p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
