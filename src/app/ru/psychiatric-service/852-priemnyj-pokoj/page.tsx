import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Приемный покой',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/psychiatric-service' },
    { label: 'Приемный покой', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Приемный покой		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-852">
											<li> <a href="/ru/psikhologicheskaya-sluzhba/852-priemnyj-pokoj?tmpl=component&amp;print=1" title="Распечатать материал < Приемный покой >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=785e86e11c4dbbbe93ccfdbaae3ee1f7a5b2cdfd" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 2551			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p> </p>
<p><img src="/images/old/WhatsApp_Image_2023-10-11_at_09.57.25.jpeg" alt="WhatsApp Image 2023-10-11 at 09.57.25.jpeg" width="832" height="624" /></p>
<p> </p>
<p><span><strong><span>Приемное отделение психиатрической службы работает круглосуточно, принимает пациентов по триаж системе. Плановая и экстренная госпитализация.</span></strong></span></p>
<p> </p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
