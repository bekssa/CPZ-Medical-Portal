import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение №5',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение №5', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Отделение №5		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-102">
											<li> <a href="/ru/otdelenie-5?tmpl=component&amp;print=1" title="Распечатать материал < Отделение №5 >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=d6295cde66be9c0a31d37f3ffdfe90fe5e296f08" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 6703			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><span><strong>Отделение №5</strong></span><span><strong> </strong></span></p>
<p><strong><span>Оказываемая услуга: </span></strong><span>Психотерапия и реабилитация больных алкоголизмом, наркоманий и токсикоманий. </span></p>
<p><strong><span>Телефон:</span></strong><span> 246 - 30 -31 </span></p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="57" valign="top">
<p><span>1 </span></p>
</td>
<td width="326" valign="top">
<p><span>Сулейменова Роза Сарваровна </span></p>
</td>
<td width="193" valign="top">
<p><span>Заведующая отделением </span></p>
</td>
</tr>
<tr>
<td width="57" valign="top">
<p><span>2 </span></p>
</td>
<td width="326" valign="top">
<p><span>Мырзахметова Меруерт Жармаевна </span></p>
</td>
<td width="193" valign="top">
<p><span>Врач - психотерапевт </span></p>
</td>
</tr>
<tr>
<td width="57" valign="top">
<p><span>3 </span></p>
</td>
<td width="326" valign="top">
<p><span>Карынбаева Гулиям Жумабековна </span></p>
</td>
<td width="193" valign="top">
<p><span>Врач - нарколог </span></p>
</td>
</tr>
<tr>
<td width="57" valign="top">
<p><span>4 </span></p>
</td>
<td width="326" valign="top">
<p><span>Шаймуратова Назира Советхановна </span></p>
</td>
<td width="193" valign="top">
<p><span>Старшая медсестра</span></p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<p><img src="/images/old/5otd.jpg" alt="5otd.jpg" /></p>
<p> </p>
<p> </p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
