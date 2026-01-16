import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "T-rustdev Portfolio",
        title:
            "T-rustdev | Software Developer",
        description:
            "Discover T-rustdev, Passionate and seasoned solution architect and software engineer with a robust expertise in web and blockchain technologies. Over the past eight years, I've effectively leveraged technology to craft innovative digital solutions. I thrive on embracing new challenges and navigating through obstacles to deliver impactful results. Excited about pushing the boundaries of technology and contributing to the ever-evolving landscape of digital solutions.",
        images: [
            {
                url: "/logo.webp",
                alt: "T-rustdev | Software Developer | React, Next.js, Nest.js",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "T-rustdev | Software Developer | React, Next.js, Nest.js",
    description:
        "Discover T-rustdev, Discover T-rustdev, Passionate and seasoned solution architect and software engineer with a robust expertise in web and blockchain technologies. Over the past eight years, I've effectively leveraged technology to craft innovative digital solutions. I thrive on embracing new challenges and navigating through obstacles to deliver impactful results. Excited about pushing the boundaries of technology and contributing to the ever-evolving landscape of digital solutions.",
    keywords:
        "T-rustdev, Blockchain and Full-Stack Developer, Solana Developer, EVM developer, Bitcoin Developer, ReactJS Developer, NextJS Developer, NestJS Developer, Remix Developer, Shopify Apps, AI Innovation, Web Development, Portfolio, React developer, Next js developer, Nest js developer, PostgreSQL, Strapi, Sanity, Supabase, TailwindCSS",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.png",
    },
    authors: {
        name: "T-rustdev",
        url: "https://github.com/OnChainMee",
    },
};
