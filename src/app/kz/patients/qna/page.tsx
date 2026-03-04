import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="text-sm text-[var(--text-muted)] mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/kz" className="hover:text-[var(--primary)] transition-colors no-underline">
            Басты бет
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] line-clamp-1">Вниманию пациентов и их родственников:</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Вниманию пациентов и их родственников:
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	<meta itemprop="inLanguage" content="ru-RU">
	
		
			<div className="page-header">
		<h2 itemprop="headline">
			Вниманию пациентов и их родственников:		</h2>
							</div>
							

			
		
						<dl className="article-info muted">

		
			<dt className="article-info-term">
									Егжей-тегжейі							</dt>

			
			
			
			
			
		
					
			
										<dd className="hits">
					<span className="icon-eye-open" aria-hidden="true"></span>
					<meta itemprop="interactionCount" content="UserPageVisits:159386">
					Қаралды: 159386			</dd>						</dl>
	
	
		
								<div itemprop="articleBody">
		<p><a href="chasto-zadovaemye-voprosy.html"><strong>&nbsp;</strong></a></p>
<p ><span >Порядок обращения пациентов и их доверенных лиц по вопросам качества оказания медицинской помощи&nbsp; и нарушения прав пациентов при медицинском обслуживании</span></p>
<p ><span ><br /> При нарушении прав пациентов при медицинском обслуживании следует:</span></p>
<ul>
<li ><span >в период стационарного лечения – сделать запись с изложением сути претензии в «Журнале регистрации обращений и жалоб пациента», который находится на посту дежурного персонала и предоставляется пациентам по требованию;</span></li>
<li ><span >после выписки из стационара, при амбулаторном наблюдении – обращаться в приемную директора Центра психического здоровья, к секретарю;</span><span > </span><strong></strong></li>
<li ><strong><span >обратиться на наш электронную почту</span></strong><strong><span >&nbsp;- </span></strong><span id="cloak561fcb75b0eeefde52c3e08dbbaa3997">Этот адрес электронной почты защищён от спам-ботов. У вас должен быть включен JavaScript для просмотра.</span><span >,</span></li>
</ul>
<p><span >Есть телефоны «горячей линии»:</span><span > </span></p>
<p><span >Психиатрическая служба+7 727 376-56-60</span></p>
<p ><span >Наркологическая служба+7 727 382-34-62</span></p>
<p ><span >Телефон доверия <strong><span >13-03</span></strong></span></p>
<p ><span >Телефон доверия <strong><span >8 708 983 28 63</span></strong></span></p>
<p ><span >Анонимное обращение можно осуществить по вышеуказанным телефонам. Также в каждом отделении предусмотрен ящик для корреспонденции.&nbsp; Срок рассмотрения жалоб и получения ответа - согласно ст.99 Административного процедурного процессуального кодекса РК от 29 июня 2020 г. №350- 20 дней&nbsp;</span></p>
<p ><strong><span >Мы будем благодарны Вам за Ваши обращения, отзывы и пожелания, которые помогут нам улучшить качество оказания медицинской помощи нашим учреждением.</span></strong></p>
<p></p><form method="post" id="userForm" enctype="multipart/form-data" action="https://cpzalmaty.kz/ru/2014-06-18-03-17-18/vopros-otvet"><fieldset className="formFieldset">

<!-- Do not remove this ID, it is used to identify the page so that the pagination script can work correctly -->
<ol className="formContainer" id="rsform_1_page_0">
	<li className="rsform-block rsform-block-header">
		<div className="formCaption2"></div>
		<div className="formBody">Задать свой вопрос или написать жалобу<span className="formClr"></span></div>
		<div className="formDescription"></div>
	</li>
	<li className="rsform-block rsform-block-fullname">
		<div className="formCaption2">Ваше имя<strong className="formRequired">(*)</strong></div>
		<div className="formBody"><input type="text" value="" size="20" name="form[FullName]" id="FullName" className="rsform-input-box"><span className="formClr"><span id="component1" className="formNoError">Please type your full name.</span></span></div>
		<div className="formDescription"></div>
	</li>
	<li className="rsform-block rsform-block-email">
		<div className="formCaption2">E-mail<strong className="formRequired">(*)</strong></div>
		<div className="formBody"><input type="text" value="" size="20" name="form[Email]" id="Email" className="rsform-input-box"><span className="formClr"><span id="component3" className="formNoError">Invalid email address.</span></span></div>
		<div className="formDescription"></div>
	</li>
	<li className="rsform-block rsform-block-textarea">
		<div className="formCaption2">Текст письма<strong className="formRequired">(*)</strong></div>
		<div className="formBody"><textarea cols="50" rows="5" name="form[textarea]" id="textarea" className="rsform-text-box"></textarea><span className="formClr"><span id="component23" className="formNoError">Введен недействительный тип данных</span></span></div>
		<div className="formDescription"></div>
	</li>
	<li className="rsform-block rsform-block-captcha">
		<div className="formCaption2">Защита от спама<strong className="formRequired">(*)</strong></div>
		<div className="formBody"><img src="../component/rsform/index9220.html?task=captcha&amp;componentId=28&amp;tmpl=component&amp;sid=1927647693" id="captcha28" alt="Защита от спама " /><br /><input type="text" name="form[captcha]" value="" id="captchaTxt28"  className="rsform-captcha-box"><span className="formClr"><span id="component28" className="formNoError">Введен недействительный тип данных</span></span></div>
		<div className="formDescription"></div>
	</li>
	<li className="rsform-block rsform-block-submit">
		<div className="formCaption2"></div>
		<div className="formBody"><input type="submit" value="Отправить" name="form[Submit]" id="Submit" className="rsform-submit-button"><span className="formClr"></span></div>
		<div className="formDescription"></div>
	</li>
</ol>
</fieldset>
<input type="hidden" name="form[formId]" value="1"></form><p></p>
<p>&nbsp;</p> 	</div>

	
							` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
