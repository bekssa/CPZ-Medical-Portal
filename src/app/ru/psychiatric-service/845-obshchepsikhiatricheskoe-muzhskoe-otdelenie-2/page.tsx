import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: '3 общепсихиатрическое  мужское отделение',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/psychiatric-service' },
    { label: '3 общепсихиатрическое  мужское отделение', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			3 общепсихиатрическое  мужское отделение		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-845">
											<li> <a href="/ru/psikhologicheskaya-sluzhba/845-obshchepsikhiatricheskoe-muzhskoe-otdelenie-2?tmpl=component&amp;print=1" title="Распечатать материал < 3 общепсихиатрическое  мужское отделение >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=f6db5dda71c4a672efaa2e3665a4513cdde2ddd8" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 2484			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><img src="/images/old/WhatsApp_Image_2023-10-11_at_15.50.46.jpeg" alt="WhatsApp Image 2023-10-11 at 15.50.46.jpeg" /></p>
<p> </p>
<p><strong></strong></p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
