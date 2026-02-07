import { Metadata } from "next";

export const getMetaData = (): Metadata => {
    return {
        title: {
            default: 'Jeesan Abbas – Full Stack Developer',
            template: '%s | Jeesan Abbas',
        },
        description: 'Full Stack Developer specializing in Next.js, React, and Node.js.',
        keywords: [
            'Jeesan Abbas',
            'Next.js developer',
            'React developer',
            'Full stack developer portfolio'
        ],
        authors: [{ name: 'Jeesan Abbas' }],
        openGraph: {
            title: 'Jeesan Abbas – Full Stack Developer',
            description: 'Next.js & React developer portfolio',
            url: 'https://jeesanabbas.in',
            siteName: 'jeesanabbas',
            images: ['/og.png'],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
        },
        robots: {
            index: true,
            follow: true,
        }
    }
}