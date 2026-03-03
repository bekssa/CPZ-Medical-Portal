import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata = {
  title: 'Отделение №4 - мужское',
};

export default function DepartmentPage() {
  const breadcrumbs = [
    { label: 'Главная', href: '/ru' },
    { label: 'ЦЕНТР ПСИХИЧЕСКОГО ЗДОРОВЬЯ', href: '/ru/narcological-service' },
    { label: 'Отделение №4 - мужское', href: '#' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs items={breadcrumbs} className="mb-8" />
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none hover:prose-a:text-teal-600 prose-img:rounded-xl prose-img:shadow-sm prose-headings:text-slate-800 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl">
             <div dangerouslySetInnerHTML={{ __html: `
	
	
		
			<div>
		<h2 itemprop="headline">
			Отделение №4 - мужское 		</h2>
							</div>
							
<div>
	
					<div>
				<button type="button" aria-label="Инструменты пользователя" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
								<ul aria-labelledby="dropdownMenuButton-101">
											<li> <a href="/ru/otdelenie-4?tmpl=component&amp;print=1" title="Распечатать материал < Отделение №4 - мужское  >" onclick="window.open(this.href,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=640,height=480,directories=no,location=no'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		Печать	</a> </li>
																<li> <a href="/ru/component/mailto/?tmpl=component&amp;template=gncmsk&amp;link=6598f0b8232174b00908fb00ad7860c5b98a6d22" title="Отправить ссылку другу" onclick="window.open(this.href,'win2','width=400,height=450,menubar=yes,resizable=yes'); return false;" rel="nofollow">			<span aria-hidden="true"></span>
		E-mail	</a> </li>
														</ul>
			</div>
		
	</div>
			
		
						<dl>

		
			<dt>
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd>
					<span aria-hidden="true"></span>
					
					Просмотров: 4577			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><strong>Отделение №4 мужское</strong></p>
<p><strong><span>Оказываемые услуги: </span></strong><i><span>лечение <span>лиц с психическими и поведенческими расстройствами (заболеваниями), связанными с употреблением психоактивных веществ принудительного характера по решению районного суда</span>.</span></i></p>
<p><strong><span>Телефон: </span></strong><span>382-34-01</span></p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="28" valign="top">
<p><span>1</span></p>
</td>
<td width="359" valign="top">
<p><span>Асанов Азиз Насырдинович </span></p>
</td>
<td width="217" valign="top">
<p><span>Заведующий отделением</span></p>
</td>
</tr>
<tr>
<td width="28" valign="top">
<p><span>2. </span></p>
</td>
<td width="359" valign="top">
<p><span>Алимбекова Роза Бекбаевна </span></p>
</td>
<td width="217" valign="top">
<p><span>Врач психиатр-нарколог</span></p>
</td>
</tr>
<tr>
<td width="28" valign="top">
<p><span>3.</span></p>
</td>
<td width="359" valign="top">
<p><span>Бейсембиева Бакытгуль Танирбергеновна </span></p>
</td>
<td width="217" valign="top">
<p><span>Старшая медсестра</span></p>
</td>
</tr>
<tr>
<td width="28" valign="top">
<p><span>4.</span></p>
</td>
<td width="359" valign="top">
<p><span>Носова Наталья Николаевна</span></p>
</td>
<td width="217" valign="top">
<p><span>Сестра-хозяйка</span></p>
</td>
</tr>
</tbody>
</table>
<p> </p>
<p><img src="/images/old/WhatsApp_Image_2023-05-17_at_14.55.41.jpeg" alt="WhatsApp Image 2023-05-17 at 14.55.41.jpeg" /></p>
<p> </p>
<p> </p>
<p><br /> </p>
<p> </p>
<p> </p> 	</div>

	
							` }} />
          </div>
      </div>
    </div>
  );
}
