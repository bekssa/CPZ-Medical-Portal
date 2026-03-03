import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение оказания платных медицинских услуг',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение оказания платных медицинских услуг', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			 Отделение оказания платных медицинских услуг		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-393">
											<li> <a href="/ru/platnye-uslugi?tmpl=component&amp;print=1" title="Распечатать материал <  Отделение оказания платных медицинских услуг >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=f9384148e5369454415f0a4f4d7142202655b9fb" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 7403			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p>Оказываемые услуги: Лечение больных алкоголизмом, наркоманией, токсикоманией-стационарно амбулатория.</p>
<p>Режим работы: круглосуточно, без выходных и перерывов.</p>
<p>Количество коек: 15 коек, имеется  VIP  палата</p>
<p>Тел: 382-36-81</p>
<p> </p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="47">1</td>
<td width="279">Сулейменова Асель Табысовна</td>
<td width="269">Зав отделением врач высшей категории</td>
</tr>
<tr>
<td>2</td>
<td> </td>
<td width="269">Врач нарколог  врач высшей категории                     <wbr>                              <wbr>              </td>
</tr>
<tr>
<td>3</td>
<td width="279">Кыдырбаева Бану Ахановна</td>
<td width="269">Старшая медсестра отделения высшей категории                                                     </td>
</tr>
</tbody>
</table>
<p> </p>
<p><img src="/images/old/XR_narko.jpeg" alt="XR narko.jpeg" /> </p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
