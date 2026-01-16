import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Dillon Portfolio",
        title:
            "Dillon | Blockchain Architect",
        description:
            "Discover OnChainMee, Blockchain Architect | Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
        images: [
            {
                url: "/logo.webp",
                alt: "OnChainMee | Blockchain Architect | Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Dillon | Blockchain Architect | Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
    description:
        "Discover OnChainMee, Blockchain Architect | Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
    keywords:
        "OnChainMee, Blockchain Architect, Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.png",
    },
    authors: {
        name: "OnChainMee",
        url: "https://github.com/OnChainMee",
    },
};
