import Head from 'next/head';

export default function SEO({title}) {
    const siteName = 'Star Wars Directory';

    return (
        <Head>
            <title>{title ? `${title} | ${siteName}` : siteName}</title>
        </Head>
    );
}
