import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение №8 - мужское',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение №8 - мужское', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Отделение №8 - мужское		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-105">
											<li> <a href="/ru/otdelenie-8?tmpl=component&amp;print=1" title="Распечатать материал < Отделение №8 - мужское >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=5989f8b4720f21f106e11ab570a7e1fc1e031596" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 5858			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p>Отделение №8- мужское </p>
<p>Оказываемые услуги: Лечение больных алкоголизмом, наркоманией, токсикоманией , осложненными соматическими расстройствами</p>
<p>тел: 382-34-14</p>
<p>Количество коек: 35 коек</p>
<p>Часы приема: 8,00 - 15,25</p>
<p> </p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="47">1</td>
<td width="279">Суюнбеков Данияр Сапарович</td>
<td width="269">Заведующий отделением врач высшей категорий                                                        </td>
</tr>
<tr>
<td>2</td>
<td>Канаева Камиля Маратовна</td>
<td width="269">врач нарколог</td>
</tr>
<tr>
<td>3</td>
<td>Ахметова Жанар Нургазиевна              </td>
<td width="269">Старшая медсестра отделения                                                     </td>
</tr>
</tbody>
</table>
<p> </p>
<p> </p>
<p><img src="/images/old/8otd.JPG" alt="" /></p>
<p> </p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
