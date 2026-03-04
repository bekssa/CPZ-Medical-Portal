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
          <span className="text-[var(--text-primary)] line-clamp-1">Наркологическая служба</span>
        </nav>

        <article className="bg-white rounded-2xl border border-[var(--border)] p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8 pb-4 border-b border-[var(--border-light)] leading-snug">
            Наркологическая служба
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
				Отделения Наркологической службы			</h2>
				
							
				<form action="https://cpzalmaty.kz/ru/narkologicheskaya-sluzhba" method="post" name="adminForm" id="adminForm" className="form-inline">

	<table className="category table table-striped table-bordered table-hover table-noheader">
		<caption className="hide">Список материалов в категории Отделения Наркологической службы</caption>
		<thead>
			<tr>
				<th scope="col" id="categorylist_header_title">
					<a href="#" onclick="Joomla.tableOrdering('a.title','asc','', document.getElementById('adminForm'));return false;" className="hasPopover" title="Заголовок" data-content="Нажмите для сортировки по этому столбцу" data-placement="top">Заголовок</a>				</th>
																											</tr>
		</thead>
		<tbody>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-1.html">
						Отделение №1 мужское 					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-2.html">
						Отделение №2 женское					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-3.html">
						Отделение №3 - мужское					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-4.html">
						Отделение №4 - мужское 					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-5.html">
						Отделение №5					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-6.html">
						Отделение №6 - временной адаптации и детоксикации					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-7.html">
						Отделение №7 - мужское					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-8.html">
						Отделение №8 - мужское					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-10.html">
						Отделение №9 - реанимации и интенсивной терапии					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="narkologicheskaya-sluzhba/107-otdelenie-10-muzhskoe.html">
						Отделение №10 мужское					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="poliklinicheskoe-otdelenie.html">
						Поликлиническое отделение					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row1">
						<td headers="categorylist_header_title" className="list-title">
									<a href="otdelenie-priemnogo-pokoya.html">
						Отделение приемного покоя 					</a>
																								</td>
																					</tr>
									<tr className="cat-list-row0">
						<td headers="categorylist_header_title" className="list-title">
									<a href="platnye-uslugi.html">
						 Отделение оказания платных медицинских услуг					</a>
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
