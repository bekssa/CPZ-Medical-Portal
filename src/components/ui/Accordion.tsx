'use client';

import { useState, ReactNode } from 'react';

interface AccordionItem {
    title: string;
    content: ReactNode;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-[var(--border)] rounded-lg overflow-hidden transition-all"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors
              ${openIndex === index
                                ? 'bg-[var(--primary-light)] text-[var(--primary-dark)]'
                                : 'bg-white text-[var(--text-primary)] hover:bg-gray-50'
                            }
            `}
                    >
                        <span>{item.title}</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        >
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="px-4 py-3 text-sm text-[var(--text-secondary)] border-t border-[var(--border-light)]">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
