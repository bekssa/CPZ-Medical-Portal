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
          <span className="text-[var(--text-primary)] line-clamp-1">Пропоганда ЗОЖ</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Пропоганда ЗОЖ
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Пропоганда ЗОЖ		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Подробности							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:9092">
					Просмотров: 9092			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<table border="1"  cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td  valign="top" width="36">
<p ><span >№</span></p>
</td>
<td  valign="top" width="333">
<p ><span ></span></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >1</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Alkogol_buklQ.pdf">Количество выпитого алкоголя не повод для гордости</a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >2</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/2EnergyQ.pdf"><span >Впереди экзаменационная сессия, сдача спортивных нормативов, вечеринка и тебе необходимо получить заряд энергии? </span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >3</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Pitanie_BuklQ.pdf"><span >Питание школьника</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >4</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Gepatit_PlakatIIQ.pdf"><span >Вирусные гепатиты</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >5</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Gepatiti_BukQ.pdf"><span >Вирусные гепатиты</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >6</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/RPGQ.pdf"><span >Что нужно знать о раке предстательной железы</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >7</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/A5_NikotinQ.pdf"><span >Никотиновая зависимость</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >8</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Kur_smesiQ.pdf"><span >Курительные смес «отправляют» в точку НЕвозврата</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >9</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/vichQ.pdf"><span >СПИД не выбирает. Выбираем МЫ!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >10</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/listovka_spidQ.pdf"><span >Профилактика ВИЧ- инфекции:</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >11</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/IPP_bukletQ.pdf"><span >Защита от инфекции, передаваемых половым путем – в твоих руках!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >12</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/A3_MifQ.pdf"><span >4 февраля – Всемирный день Борьбы против рака! </span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >13</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/listovka_Q.pdf"><span >Защитить свою дочь от рака в моих силах!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >14</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/ozindi_korga.pdf"><span >Защити себя</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >15</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/bukl_beremQ.pdf"><span >Маршрут беременной женщины</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >16</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/pasportSD.pdf"><span >Паспорт пациента с сахарным диабетом</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >17</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/listovka A6_detiQ.pdf"><span >Советы дядюшки светофора юному пешеходу!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >18</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Kashel_buklQ.pdf"><span >Защити себя от туберкулеза</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >19</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="../../almatyzoj.kz/doc/plak%20tybQ.jpg"><span >Защити себя от туберкулеза</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >20</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Kashel_listQ.pdf"><span >Этикет кашля</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >21</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Fiz_kalendQ.pdf"><span >Быть здоровым под силу каждому!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >22</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Fiz_listQ.pdf"><span >Быть здоровым под силу каждому!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >23</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Pl_Bud zdorovQ.pdf"><span >Пройдите обучение в школах здоровья!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >24</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Grip_A3Qplakat.pdf"><span >Как защитить себя и окружающих</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >25</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Grip_A5Q.pdf"><span >Как защитить себя и окружающих</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >26</span></p>
</td>
<td  valign="top" width="333">
<p ><span ><a href="http://almatyzoj.kz/doc/insult.pdf">Возможно это - инсульт</a></span></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >27</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/A3_OkiQ.pdf"><span >Советы отдыхающим по профилактике Пищевых отравлений!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >28</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Oki_BuklQ.pdf"><span >Советы по предупреждению острых кишечных инфекций</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >29</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/OKI_rus.pdf"><span >Еще раз об острых заболеваниях и мерах их профилактики у детей</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >30</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/travmatizm.pdf"><span >Автомобиль, Дорога, Жизнь!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >31</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/zhol.pdf"><span >Ради жизни на земле изучаем ПДД</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >32</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Kalen priv_R.pdf"><span >Национальный календарь прививок РК</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >33</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Koronar_sind_listQ.pdf"><span >Острый коронарный синдром</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >34</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Bukl_MCZ_RusQ.pdf"><span >Обратись в Молодежный центр здоровья</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >35</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Skrining_PlakatQ.pdf"><span >Скрининг</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >36</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/SkriningQ.pdf"><span >Адресное приглашение на скрининг</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >37</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Glaukom_listQ.pdf"><span >Глаукома</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >38</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Fest_zdorov_plakatQ.pdf"><span >С активным отпразднуем столетие!</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >39</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Asbuka zd_Bukl2Q.pdf"><span >Азбука здоровья</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >40</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/Narko_buklQ.pdf"><span >Чуть ли не каждый день мы слышим подобные фразы «Наркотики – вред», «Наркотики – зло». Тогда почему их все кто – то употребляет?</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >41</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/NarkoA3Q.pdf"><span >Как тебе поступить, если предлагают наркотик?</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >42</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/PechcenQ.pdf"><span >Что необходимо знать о раке печени и как предупредить эту болезнь?</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >43</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/onesh_askazan.pdf"><span >Что необходимо знать о раке пищевода и раке желудка</span></a></p>
</td>
</tr>
<tr>
<td  valign="top" width="36">
<p ><span >44</span></p>
</td>
<td  valign="top" width="333">
<p ><a href="http://almatyzoj.kz/doc/rak_rus.pdf"><span >Что нужно знать о раке толстой кишки</span></a></p>
</td>
</tr>
</tbody>
</table> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
