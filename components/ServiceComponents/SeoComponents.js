import Head from 'next/head'
import React from 'react'

const SeoComponents = (title, desc, url, banner) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <meta name="robots" content="index,follow"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="canonical" href={desc} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={title} />
            <meta property="article:modified_time" content="2023-07-06T15:35:40+00:00" />
            <meta property="og:image" content={banner} />
            <meta name="twitter:card" content="summary_large_image" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </Head>
    )
}

export default SeoComponents
