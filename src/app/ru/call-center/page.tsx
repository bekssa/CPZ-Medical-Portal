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
          <span className="text-[var(--text-primary)] line-clamp-1">Телефон Сall – центра: 3000 – 103.</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Телефон Сall – центра: 3000 – 103.
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
	
	<form action="https://cpzalmaty.kz/ru/glavnaya/telefon-sall-tsentra-3000-103?a_id=0" method="post" name="adminForm" id="adminForm" className="form-validate form-vertical">
		<fieldset>
			

<div className="tab-content" id="com-content-formContent">
			
<div id="editor" className="tab-pane active">
				<div className="control-group">
			<div className="control-label"><label id="jform_title-lbl" for="jform_title" className="hasPopover required" title="Заголовок" data-content="Заголовок материала">
	Заголовок<span className="star">&nbsp;*</span></label>
</div>
		<div className="controls"><input type="text" name="jform[title]" id="jform_title" value="" className="inputbox required" size="30" required="" aria-required="true">
</div>
</div>

									<div className="control-group">
			<div className="control-label"><label id="jform_alias-lbl" for="jform_alias" className="hasPopover" title="Алиас" data-content="Алиас (псевдоним) применяется для создания сокращённой URL-ссылки (SEF URL). Если оставить это поле пустым, Joomla! заполнит его значением по умолчанию, созданным на основе заголовка объекта. Это значение будет зависеть от установленных на сайте параметров SEO (Общие настройки -> Сайт).<br /> В случае использования адресов страниц в формате Unicode, Алиас будет состоять из символов того же языка, что и заголовок. При желании можно вручную ввести любые символы в кодировке UTF-8 (т.е. создавать адреса на русском языке, как в Wiki), но следует помнить, что пробелы и некоторые другие служебные символы при этом будут заменены на дефисы.<br /> По умолчанию, без использования Unicode, Алиас генерируется из символов заголовка, переведённых в нижний регистр. Пробелы при этом также заменяются на тире. Можно ввести Алиас вручную, латинскими символами, используя строчные буквы и дефисы без пробелов. Допускается вводить символ подчёркивания. Если заголовок состоит не из латинских букв, значение алиаса будет состоять из текущей даты и времени." data-placement="bottom">
	Алиас</label>
</div>
		<div className="controls"><input type="text" name="jform[alias]" id="jform_alias" value="" className="inputbox" size="45" placeholder="Автоматически создавать из заголовка">
</div>
</div>
				
				<div className="editor wf-editor-container">  <div className="wf-editor-header"></div>  <textarea spellcheck="false" id="jform_articletext" name="jform[articletext]" cols="" rows=""  className="wf-editor" wrap="off"></textarea></div><div id="editor-xtd-buttons" className="my-4" role="toolbar" aria-label="Панель инструментов">
								<a className="btn modal-button" title="JoomImage" href="https://cpzalmaty.kz/index.php?option=com_joomgallery&amp;view=mini&amp;format=raw&amp;e_name=jform_articletext&amp;catid=0&amp;extended=1" rel="{handler: 'iframe', size: {x: 620, y: 550}}">
		<span className="icon-picture" aria-hidden="true"></span> JoomImage	</a>
							<a className="btn btn-jeditor-jform_articletext-aridocsviewer" title="Embed doc" href="https://cpzalmaty.kz/#" rel="">
		<span className="icon-link btn-jeditor-marker-jform_articletext-aridocsviewer" aria-hidden="true"></span> Embed doc	</a>
							<a className="btn modal-button" title="Материал" href="https://cpzalmaty.kz/index.php?option=com_content&amp;view=articles&amp;layout=modal&amp;tmpl=component&amp;c960c6acf2f65ff2a6e455319c29c909=1&amp;editor=jform_articletext" rel="{handler: 'iframe', size: {x: 800, y: 500}}">
		<span className="icon-file-add" aria-hidden="true"></span> Материал	</a>
							<a className="btn modal-button" title="Изображение" href="https://cpzalmaty.kz/index.php?option=com_media&amp;view=images&amp;tmpl=component&amp;e_name=jform_articletext&amp;asset=com_content&amp;author=" rel="{handler: 'iframe', size: {x: 800, y: 500}}">
		<span className="icon-pictures" aria-hidden="true"></span> Изображение	</a>
							<a className="btn modal-button" title="Разрыв страницы" href="https://cpzalmaty.kz/index.php?option=com_content&amp;view=article&amp;layout=pagebreak&amp;tmpl=component&amp;e_name=jform_articletext" rel="{handler: 'iframe', size: {x: 500, y: 300}}">
		<span className="icon-copy" aria-hidden="true"></span> Разрыв страницы	</a>
							<a className="btn" title="Подробнее..." href="https://cpzalmaty.kz/#" onclick="insertReadmore('jform_articletext');return false;" rel="">
		<span className="icon-arrow-down" aria-hidden="true"></span> Подробнее...	</a>
			</div>

							
</div>
			
			
			
<div id="publishing" className="tab-pane">
				<div className="control-group">
			<div className="control-label"><label id="jform_catid-lbl" for="jform_catid" className="hasTooltip required" title="<strong>Категория</strong>">
	Категория<span className="star">&nbsp;*</span></label>
</div>
		<div className="controls"><select id="jform_catid" name="jform[catid]" className="inputbox required" required="" aria-required="true">
	<option value="25">- Фотогалерея (ru-RU)</option>
	<option value="29">Отчет о доходах и расходах </option>
</select>
</div>
</div>
				<div className="control-group">
			<div className="control-label"><label id="jform_tags-lbl" for="jform_tags" className="hasPopover" title="Метки" data-content="Добавление и удаление меток.">
	Метки</label>
</div>
		<div className="controls"><select id="jform_tags" name="jform[tags][]" className="inputbox" size="45" multiple="">
</select>
</div>
</div>
				<div className="control-group">
			<div className="control-label"><label id="jform_note-lbl" for="jform_note" className="hasPopover" title="Note" data-content="An optional note to display in the article list.">
	Note</label>
</div>
		<div className="controls"><input type="text" name="jform[note]" id="jform_note" value="" className="inputbox" size="40" maxlength="255">
</div>
</div>
													<div className="control-group">
			<div className="control-label"><label id="jform_created_by_alias-lbl" for="jform_created_by_alias" className="hasPopover" title="Псевдоним автора" data-content="Подменяет имя автора при отображении материала">
	Псевдоним автора</label>
</div>
		<div className="controls"><input type="text" name="jform[created_by_alias]" id="jform_created_by_alias" value="" className="inputbox" size="20">
</div>
</div>
												<div className="control-group">
			<div className="control-label"><label id="jform_access-lbl" for="jform_access" className="hasPopover" title="Доступ" data-content="Уровень доступа для данной страницы">
	Доступ</label>
</div>
		<div className="controls"><select id="jform_access" name="jform[access]" className="inputbox" size="1">
	<option value="4">Comment</option>
	<option value="1" selected="selected">Public</option>
	<option value="2">Registered</option>
	<option value="3">Special</option>
</select>
</div>
</div>
									<div className="control-group">
						<div className="control-label">
						</div>
						<div className="controls">
							Порядок:<br />Новая статья по умолчанию занимает первую позицию в категории. Порядок можно потом изменить.						</div>
					</div>
							
</div>
			
<div id="language" className="tab-pane">
				<div className="control-group">
			<div className="control-label"><label id="jform_language-lbl" for="jform_language" className="hasPopover" title="Язык" data-content="Назначить язык этому материалу.">
	Язык</label>
</div>
		<div className="controls"><select id="jform_language" name="jform[language]" className="inputbox">
	<option value="*">Все</option>
	<option value="en-GB">English (UK)</option>
	<option value="kz-KZ">Қазақша</option>
	<option value="ru-RU" selected="selected">Русский</option>
</select>
</div>
</div>
			
</div>
							
<div id="metadata" className="tab-pane">
					<div className="control-group">
			<div className="control-label"><label id="jform_metadesc-lbl" for="jform_metadesc" className="hasPopover" title="Мета-тег Description" data-content="Необязательный текст для использования в качестве описания HTML-страницы. Как правило, этот текст используется поисковыми системами для показа описания страницы в результатах поиска.">
	Мета-тег Description</label>
</div>
		<div className="controls"><textarea name="jform[metadesc]" id="jform_metadesc" cols="50" rows="5" className="inputbox"></textarea></div>
</div>
					<div className="control-group">
			<div className="control-label"><label id="jform_metakey-lbl" for="jform_metakey" className="hasPopover" title="Мета-тег Keywords" data-content="Слова и фразы, разделённые запятыми, которые будут выведены в мета-теге Keywords HTML-страницы.">
	Мета-тег Keywords</label>
</div>
		<div className="controls"><textarea name="jform[metakey]" id="jform_metakey" cols="50" rows="5" className="inputbox"></textarea></div>
</div>
				
</div>			
			
</div>
			<input type="hidden" name="task" value="">
			<input type="hidden" name="return" value="">
			<input type="hidden" name="c960c6acf2f65ff2a6e455319c29c909" value="1">		</fieldset>
		<div className="btn-toolbar">
			<div className="btn-group">
				<button type="button" className="btn btn-primary" onclick="Joomla.submitbutton('article.save')">
					<span className="icon-ok"></span>Сохранить				</button>
			</div>
			<div className="btn-group">
				<button type="button" className="btn" onclick="Joomla.submitbutton('article.cancel')">
					<span className="icon-cancel"></span>Отмена				</button>
			</div>
					</div>
	</form>
` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
