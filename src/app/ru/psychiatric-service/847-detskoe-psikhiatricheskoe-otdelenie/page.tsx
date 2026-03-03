import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: '5 детское психиатрическое отделение',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/psychiatric-service' },
    { label: '5 детское психиатрическое отделение', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			5 детское психиатрическое отделение		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-847">
											<li> <a href="/ru/psikhologicheskaya-sluzhba/847-detskoe-psikhiatricheskoe-otdelenie?tmpl=component&amp;print=1" title="Распечатать материал < 5 детское психиатрическое отделение >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=d21b73bf633559c98e9cf61684a83ab141d414ab" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 3719			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><img src="/images/old/картинки/5/лллд.jpg" alt="лллд" /></p>
<p><strong>Заведующая детского стационарного отделения Александрова О.А.</strong></p>
<p><img src="/images/old/картинки/5/detstvooo8.jpg" alt="detstvooo8" /></p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
