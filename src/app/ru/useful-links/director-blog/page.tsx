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
          <span className="text-[var(--text-primary)] line-clamp-1">Блог Директора</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Блог Директора
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Блог Директора		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:6161">
					Просмотров: 6161			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p ><img src="/images/old/007.png" alt="007.png" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p ><strong><em>Уважаемые посетители сайта!</em></strong></p>
<p><em>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span >&nbsp;&nbsp;&nbsp;Я рад приветствовать Вас на официальном интернет-ресурсе "Центра психического здоровья" города Алматы!</span></em><br /><span ><em>&nbsp; &nbsp;Цели и задачи в Послании Главы государства Нурсултана Абишевича Назарбаева и в Государственной программе развития здравоохранения Республики Казахстан, являются основной политикой Центра психического здоровья.</em></span><br /><span ><em>&nbsp; &nbsp;Долгом каждого сотрудника Центра является охрана психического здоровья всех алматинцев!&nbsp;</em></span><br /><span ><em>&nbsp; &nbsp;На нашем сайте Вы найдете любую интересующую Вас информацию. Здесь Вы можете задать любой вопрос, на который получите ответ в кратчайшие сроки.</em></span><br /><span ><em>&nbsp; &nbsp;Также Вы можете сделать предложение по улучшению качества оказываемой специализированной помощи или поблагодарить сотрудника Центра.&nbsp;</em></span></p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
