import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение №1 мужское',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение №1 мужское', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Отделение №1 мужское 		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-93">
											<li> <a href="/ru/otdelenie-1?tmpl=component&amp;print=1" title="Распечатать материал < Отделение №1 мужское  >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=d3e89dc5e8180e2fe1d91e51a4a25b78b7592914" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 6485			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><strong><span>Отделение №1 мужское</span></strong></p>
<p><strong><span>Оказываемые услуги: </span></strong><span>Лечение абстинентных состояний, острых психозов вследствие употребления алкоголя и др. ПАВ, в т.ч. с суицидальными попытками, делириозными состояниями и судорожными синдромами.</span></p>
<p><strong><span>Телефон: </span></strong><span>382-36-48</span></p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="76" valign="top">
<p><span>1</span></p>
</td>
<td width="284" valign="top">
<p><span>Джагова Ирина Александровна </span></p>
</td>
<td width="248" valign="top">
<p><span>Заведующая отделением</span></p>
</td>
</tr>
<tr>
<td width="76" valign="top">
<p><span>2   </span></p>
</td>
<td width="284" valign="top">
<p><span>Абдукаримов   Мухит   Абукаримович </span></p>
</td>
<td width="248" valign="top">
<p><span>Врач- нарколог</span></p>
</td>
</tr>
<tr>
<td width="76" valign="top">
<p><span>3</span></p>
</td>
<td width="284" valign="top">
<p><span>Нарубаева Ася Баглановна </span></p>
</td>
<td width="248" valign="top">
<p><span>Врач- нарколог</span></p>
</td>
</tr>
<tr>
<td width="76" valign="top">
<p><span>4</span></p>
</td>
<td width="284" valign="top">
<p><span>Джапаралиева Молдир Ердековна </span></p>
</td>
<td width="248" valign="top">
<p><span>Старшая медсестра </span></p>
</td>
</tr>
</tbody>
</table>
<p><strong><span></span></strong></p>
<p><strong><span> <img src="/images/old/1otd.jpg" alt="1otd.jpg" /></span></strong></p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
