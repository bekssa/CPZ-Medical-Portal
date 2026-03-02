import { notFound } from 'next/navigation';
import ContentLayout from '@/components/content/ContentLayout';
import contentRu from '@/data/content-ru.json';

// Define the valid routes from the JSON keys that we want to handle dynamically.
// Other static routes (like about/page.tsx) will still take precedence.
const validRoutes = Object.keys(contentRu);

export function generateStaticParams() {
    const params: { route: string; slug: string }[] = [];

    // Loop over the content JSON to generate static routes
    for (const [route, routeData] of Object.entries(contentRu)) {
        for (const slug of Object.keys(routeData)) {
            params.push({ route, slug });
        }
    }

    return params;
}

export default async function DynamicContentPage({ params }: { params: Promise<{ route: string; slug: string }> }) {
    const p = await params;
    const route = p.route;
    const slug = p.slug;

    // Check if the route is one we have content for
    if (!validRoutes.includes(route)) {
        notFound();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const routeData = (contentRu as any)[route];
    const pageData = routeData?.[slug];

    if (!pageData) {
        notFound();
    }

    return (
        <ContentLayout
            title={pageData.title}
            htmlContent={pageData.htmlContent}
        />
    );
}
