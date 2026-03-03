import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение №2 женское',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение №2 женское', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Отделение №2 женское		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-94">
											<li> <a href="/ru/otdelenie-2?tmpl=component&amp;print=1" title="Распечатать материал < Отделение №2 женское >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=a07151e37230f7ce1f76281c9e02c0ea297eab7a" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 7107			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p> </p>
<p><strong><span>Отделение №2 женское </span></strong></p>
<p><strong><span>Оказываемые услуги: </span></strong><span>Лечение пациентов с острыми алкогольными психозами, наркоманией и токсикоманией, и для принудительного лечения женщин, страдающих алкоголизмом, наркоманией и токсикоманией.</span></p>
<p><strong><span> Телефон: </span></strong><span>382-34-14</span></p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="38" valign="top">
<p><span>1</span></p>
</td>
<td width="246" valign="top">
<p><span>Суюнбеков Данияр Сапарович</span></p>
</td>
<td width="217" valign="top">
<p><span>Заведующий отделением</span></p>
</td>
</tr>
<tr>
<td width="38" valign="top">
<p><span>2   </span></p>
</td>
<td width="246" valign="top">
<p><span>Альпеисова Назым Жакипбековна </span></p>
</td>
<td width="217" valign="top">
<p><span>Врач-нарколог</span></p>
</td>
</tr>
<tr>
<td width="38" valign="top">
<p><span>3</span></p>
</td>
<td width="246" valign="top">
<p><span>Емелина Светлана Викторовна </span></p>
</td>
<td width="217" valign="top">
<p><span>Старшая медсестра</span></p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<p><img src="/images/old/2otd.jpg" alt="2otd.jpg" /></p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
