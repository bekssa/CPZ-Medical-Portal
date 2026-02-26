interface DocumentCardProps {
    title: string;
    date?: string;
    fileType?: 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx';
    downloadUrl?: string;
    size?: string;
}

const fileIcons: Record<string, { color: string; label: string }> = {
    pdf: { color: '#E53E3E', label: 'PDF' },
    doc: { color: '#3182CE', label: 'DOC' },
    docx: { color: '#3182CE', label: 'DOCX' },
    xls: { color: '#38A169', label: 'XLS' },
    xlsx: { color: '#38A169', label: 'XLSX' },
};

export default function DocumentCard({
    title,
    date,
    fileType = 'pdf',
    downloadUrl = '#',
    size,
}: DocumentCardProps) {
    const icon = fileIcons[fileType] || fileIcons.pdf;

    return (
        <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all no-underline"
        >
            {/* File icon */}
            <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xs"
                style={{ backgroundColor: icon.color }}
            >
                {icon.label}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors truncate">
                    {title}
                </div>
                <div className="flex items-center gap-3 mt-1 text-xs text-[var(--text-muted)]">
                    {date && <span>{date}</span>}
                    {size && <span>{size}</span>}
                </div>
            </div>

            {/* Download icon */}
            <div className="flex-shrink-0 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </a>
    );
}
