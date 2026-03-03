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
          <span className="text-[var(--text-primary)] line-clamp-1">Психологическая служба</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Психологическая служба
          </h1>

          <div className="prose prose-blue max-w-none text-[var(--text-secondary)] leading-loose">
            <div dangerouslySetInnerHTML={{ __html: `
										<div className="col-xs-3">
								
			
	
					</div>
										<div className="col-xs-9">
						<div id="news">
							
						</div>
						<div id="system-message-container">
	</div>

						<div className="category-list list_style">

<div>
	<div className="content-category list_style">
		
					<h2>
				Отделения Психиатрической службы			</h2>
				
							
				<form action="https://cpzalmaty.kz/ru/psikhologicheskaya-sluzhba" method="post" name="adminForm" id="adminForm" className="form-inline">

	<table className="category table table-striped table-bordered table-hover table-noheader">
		<caption className="hide">Список материалов в категории Отделения Психиатрической службы</caption>
		<thead>
			<tr>
				<th scope="col" id="categorylist_header_title">
					<a href="#" onclick="Joomla.tableOrdering('a.title','asc','', document.getElementById('adminForm'));return false;" className="hasPopover" title="Заголовок" data-content="Нажмите для сортировки по этому столбцу" data-placement="top">Заголовок</a>				</th>
																											</tr>
		</thead>
		<tbody>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/843-obshchepsikhiatricheskoe-muzhskoe-otdelenie.html">
						1 общепсихиатрическое мужское отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/844-obshchepsikhiatricheskoe-zhenskoe-otdelenie.html">
						2 общепсихиатрическое женское отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/845-obshchepsikhiatricheskoe-muzhskoe-otdelenie-2.html">
						3 общепсихиатрическое  мужское отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/846-obshchepsikhiatricheskoe-zhenskoe-otdelenie-2.html">
						4 общепсихиатрическое женское отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/847-detskoe-psikhiatricheskoe-otdelenie.html">
						5 детское психиатрическое отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/848-obshchepsikhiatricheskoe-muzhskoe-otdelenie-3.html">
						6 общепсихиатрическое мужское отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/849-otdelenie-psikhosamaticheskikh-rasstrojstv.html">
						7 отделение психосоматических расстройств					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/850-administrativno-khozyajstvennyj-otdel.html">
						Административно-хозяйственный отдел					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/851-platnoe-otdelenie.html">
						Платное отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/852-priemnyj-pokoj.html">
						Приемный покой					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="psikhologicheskaya-sluzhba/853-skoraya-pomoshch.html">
						Скорая помощь					</a>
																								</td>
																					</tr>
				</tbody>
	</table>


	</form>

			</div>
</div>


</div>
											</div>
									` }} />
          </div>
        </article>
      </div>
    </div>
  );
}
