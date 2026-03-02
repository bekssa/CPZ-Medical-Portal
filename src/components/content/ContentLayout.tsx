import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface ContentLayoutProps {
    title: string;
    htmlContent: string;
}

export default function ContentLayout({ title, htmlContent }: ContentLayoutProps) {
    return (
        <div className="animate-fadeIn w-full max-w-4xl mx-auto py-6">
            <div className="mb-6">
                <Breadcrumbs />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="px-6 py-8 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8 tracking-tight">
                        {title}
                    </h1>

                    <div
                        className="article-content"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </div>
            </div>
        </div>
    );
}
