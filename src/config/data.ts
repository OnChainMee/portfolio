import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiSanity,
  SiStrapi,
  SiNestjs,
  SiCloudflare,
  SiRedux,
  SiSupabase,
  SiRemix,
  SiSass,
  SiBootstrap,
  SiContentful,
  SiRust,
  SiSolidity,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiVite,
  SiGit
} from "react-icons/si";

export const socialLinks = [
  {
    id: 5,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/OnChainMee",
  },
  {
    id: 6,
    priority: 2,
    title: "Twitter",
    url: "https://twitter.com/OnChainMee",
  },
  {
    id: 7,
    priority: 3,
    title: "Telegram",
    url: "https://t.me/OnChainMee",
  },
  // {
  //   id: 8,
  //   priority: 4,
  //   title: "Instagram",
  //   url: "https://www.instagram.com/imabhishek.dev/",
  // },
];

export const personalInfo = {
  name: "I am Dillon",
  title: "Blockchain Architect | Full-Stack DApps & DEXes (Solana + EVM) | AI Agents & NFT Systems | Web3 Infrastructure & DeFi",
  avatar: "/images/about/logo.png",
  email: "",
  location: "",
  description:
    "Architect of Tomorrow's Digital Realms. I build blockchain-powered worlds that turn everyday actions into extraordinary experiences. With 8 years as a solution architect and software engineer, I’ve created AI-driven fitness gamification, DeFi trackers, and resilient Web3 platforms. I thrive on solving uncharted challenges and delivering scalable, innovative solutions.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Fighters Unbound",
    position: "Blockchain AI Developer",
    period: "May 2025 - Present",
    shortDesc:
      "",
    bulletPoints: [
      "Built a Web3 fitness training platform that gamifies NFT fighter training through *real-world activities* (Strava running, yoga, meditation), dynamically upgrading fighter attributes stored off-chain in SQLite and generating OpenSea-compatible NFT metadata in *real-time* for *5,200+ fighters.*",
      "Designed and implemented a microservice architecture with *TypeScript/Express.js* backend for training data and *Strava API integration*, *Python/FastAPI AI trainer agent using LangGraph* for workflow orchestration, and *React/Next.js frontend with wallet connectivity via RainbowKit and wagmi.*",
      "Built an AI-powered training recommendation system using *LangGraph state machines*, three *ChromaDB vector databases* (Action Recording, Training Analysis, Knowledge Base) for semantic search of user actions and patterns, and *Ollama LLM integration* for generating personalized coach responses with distinct personality modes (Dead/Butch) based on strict prompt engineering rules. ",
      "Developed intelligent training analysis service that processes months of training history to identify undertrained fighter attributes, calculate consistency scores, analyze training patterns, and generate prioritized recommendations considering fighter training recency, *Strava mileage availability*, user goals, and consistency metrics.",
      "Optimized system performance with TTL-based in-memory caching (reducing database queries by ~70% and response times from ~100ms to ~10ms), *SQLAlchemy connection pooling*, parallel execution in LangGraph workflows, and real-time Strava API integration with activity filtering, daily sync limits, and monthly training cycle tracking.",
    ],
  },
  {
    company: "Mueller Health Foundation, Inc",
    position: "Full-stack Blockchain Developer",
    period: "August 2023 - May 2025",
    shortDesc:
      "",
    bulletPoints: [
      "Developed minting of on-chain NFTs to represent documents stored on the TBConnect app related to tuberculosis research and analysis",
      "Upgraded overall application from Node.js 8 to Node.js 16 and React 16 to React 17 in 2023",
      "Upgraded dependencies and cleared all errors to improve overall performance",
      "Deployed the upgraded back-end to an AWS EC2 instance, the front-end to an AWS S3 bucket, and various APIs to Amazon API Gateway. As a result, the application is now fast, scalable with resizable compute capacity, highly secure, and very efficient",
      "Upgraded the chat and virtual meeting functionality from Twilio Video to the Zoom Video SDK to enable group meetings instead of one-to-one sessions",
      "Updated the visual aesthetic of the front end to enhance the overall user experience, making it more intuitive, engaging, and visually appealing",
    ],
  },
  {
    company: "MintySwap, PTE LTD",
    position: "EVM Smart Contracts Developer",
    period: "May 2022 - June 2023",
    shortDesc:
      "",
    bulletPoints: [
      "Developed and deployed secure, scalable Ethereum-based smart contracts for the MintySwap platform, enabling NFT minting, token swaps, and DeFi interactions across multiple chains (ETH, BNB)",
      "Designed and implemented token upgrade mechanisms (V2 migration) with enhanced multisig wallet security and ownership of liquidity pools, maintaining low taxes while ensuring robust funding and liquidity management",
      "Integrated NFT marketplace functionalities, supporting creators and collectors with minting, trading, and managing digital assets on a decentralized platform",
      "Collaborated with front-end developers to provide seamless interaction between smart contracts and the user interface, ensuring real-time transaction tracking and optimized user experience",
      "Developed open APIs for third-party developers to interact with MintySwap smart contracts, promoting community collaboration and ecosystem growth",
      "Contributed to game-based blockchain applications, including NFT-based FPS and MMORPG games, enabling players to earn $MINTYS and $ETH through smart contract driven mechanics",
      "Conducted code audits and implemented best practices for security, gas optimization, and upgradeable contract architecture in a high-volume DeFi and NFT ecosystem",
    ],
  },
  {
    company: "Moduluc",
    position: "Solana Smart Contract Developer",
    period: "",
    shortDesc:
      "October 2020 - May 2022",
    bulletPoints: [
      "Developed and deployed new *Solana* programs to enhance the company’s blockchain ecosystem",
      "Collaborated with internal teams to design, build, and optimize Solana-based applications",
      "Led the development team, overseeing technical implementation and ensuring high-quality code delivery",
      "Directed end-to-end development of *Solana smart contracts* with *Anchor*, improving performance and reliability",
    ],
  },
  {
    company: "Marrybrown Sdn Bhd",
    position: "Full Stack Developer",
    period: "March 2018 - May 2020",
    shortDesc:
      "",
    bulletPoints: [
      "Migrated the back-end database from MySQL to MongoDB, significantly improving scalability, query performance, and handling of growing user and transaction volumes",
      "Designed and implemented a secure user authentication system, ensuring safe access and protection of sensitive customer information",
      "Integrated multiple payment gateways into a seamless payment processing system, enabling smooth and secure transactions for users",
      "Developed a real-time order tracking feature, enhancing customer engagement and satisfaction by allowing users to monitor their orders from preparation to delivery",
      "Ensured the platform was fully responsive and mobile-friendly, delivering a consistent and optimal user experience across desktops, tablets, and smartphones",
      "Built a scalable system architecture to support future expansion, additional features, and increased traffic demands",
    ],
  },
];

export const techStack = [
  // === FRONTEND ===
  { name: "Rust", icon: SiRust, color: "text-white", type: "Frontend" },
  { name: "Solidity", icon: SiSolidity, color: "text-teal-300", type: "Frontend" },
  { name: "Python", icon: SiPython, color: "text-sky-400", type: "Frontend" },
  { name: "C++", icon: SiCplusplus, color: "text-purple-300", type: "Frontend" },
  { name: "Docker", icon: SiDocker, color: "text-gray-600", type: "Frontend" },
  { name: "Vite", icon: SiVite, color: "text-pink-500", type: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "Remix", icon: SiRemix, color: "text-indigo-500", type: "Frontend" },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-700",
    type: "Frontend",
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    type: "Frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-600",
    type: "Frontend",
  },
  { name: "SCSS", icon: SiSass, color: "text-pink-600", type: "Frontend" },

  // === BACKEND & DATABASES ===
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "Backend & Databases",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
    type: "Backend & Databases",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-400",
    type: "Backend & Databases",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-green-400",
    type: "Backend & Databases",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
    type: "Backend & Databases",
  },

  // === TOOLS & DEVOPS ===
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & DevOps",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-400",
    type: "Tools & DevOps",
  },
];

export const projects = [
  {
    title: "Fighters Unbound",
    description:
      "A *Web3 fitness platform* that gamifies NFT fighter training through *real-world activities* like Strava running, yoga, and meditation, with an *AI-powered personal coach*.",
    image: "/images/projects/fighters.png",
    liveUrl: "https://fighters.unbound.games/",
    githubUrl: "https://github.com/Fighters-Unbound/fighters-unbound",
    techStack: ["Solidity", "Next.js", "Python", "Web3.js", "TypeScript", "Langgragh"]
  },
  {
    title: "Critters Quest ",
    description:
    "This project is a blockchain-based gaming and collectible platform built on *Solana*. Users can own, *stake*, and *trade* NFTs (digital collectibles), and possibly earn rewards through gameplay or participation.",
    image: "/images/projects/critters.quest.png",
    liveUrl: "https://critters.quest/",
    githubUrl: "https://github.com/OnChainMee/critters-quest",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind"]
    // techStack: techStack.filter((item) =>
    //   ["Next.js", "Rust", "TypeScript", "Tailwind"].includes(item.name)
    // ),
  },
  {
    title: "Nutmarket ",
    description:
    "Nut.market is a *crypto / DeFi marketplace platform* where users can list, trade, or interact with digital assets (i.e. tokens / NFTs). I contributed by building the frontend with Next.js and Tailwind, integrating smart contract calls via Web3.js / ethers, and ensuring smooth UX for listing & asset browsing",
    image: "/images/projects/nutmarket.png",
    liveUrl: "https://nut.market/",
    githubUrl: "https://github.com/OnChainMee/nut.market-marketplace",
    techStack: ["Next.js", "Rust", "Anchor", "Web3.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Luck.io",
    description:
      "Luck.io is a fully *non-custodial*, *privacy-first* *Solana gaming platform—connect* your wallet (Phantom, Solflare) and play instantly with no KYC required. Enjoy lightning-fast, low-fee transactions, provably fair on-chain games, offline testing mode, and a modern *JavaScript-enabled* web interface.",
    image: "/images/projects/luck.png",
    liveUrl: "https://luck.io/",
    githubUrl: "https://github.com/OnChainMee/Luck.io-casino-game",
    techStack: ["Rust", "Next.js", "Web3.js", "TypeScript", "Solana"]
  },
  {
    title: "Onchain-Experiments_V1",
    description:
      "This project is a *fully on-chain*, generative NFT platform where *artwork, metadata*, and logic are permanently generated and stored directly on the blockchain, without external servers, IPFS",
    image: "/images/projects/onchain.png",
    liveUrl: "https://www.onchainexperiments.xyz/",
    githubUrl: "https://github.com/2-rust/onchain-experiments-v1",
    techStack: ["Rust", "Next.js", "Web3.js", "TypeScript", "Solana"]
  },
  {
    title: "Floppylabs ",
    description:
      "FloppyLabs is a *non custodial staking* platform on *Solana*. It enables NFT projects to deploy staking functionalities in minutes — handling staking, escrow, rewards, analytics, and UI — with minimal fuss. They monetize via small transaction fees (e.g. 0.01 SOL per stake/unstake).",
    image: "/images/projects/floppylabs.png",
    liveUrl: "https://floppylabs.io/",
    githubUrl: "https://github.com/OnChainMee/floppylabs-nft-staking",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind", "Anchor", "Web3.js"]
  },
  {
    title: "Arcus  ",
    description:
      "Arcus is an *institutional-grade Bitcoin yield, lending protocal and credit infrastructure* platform. With MPC-based custody, permissioned access, and an API for lending/credit services, it enables institutions to safely deploy Bitcoin capital and generate yield.",
    image: "/images/projects/arcus.png",
    liveUrl: "https://arcusbtc.com/",
    githubUrl: "https://github.com/OnChainMee/arcus-app",
    techStack: ["React.js", "Bitcoin.js", "TypeScript", "Tailwind", "Node.js"]
  },
  {
    title: "InternetJpegs ",
    description:
      "InternetJPEG is a *digital art / Ordinal swap and trading* platform focusing on JPEG-based collectibles. It provides tools for minting, showcasing, and trading visual digital assets — blending internet culture with crypto art.",
    image: "/images/projects/internetjpeg.png",
    liveUrl: "https://internetjpeg.com/",
    githubUrl: "https://github.com/OnChainMee/internetjpegs-com/Frontend",
    techStack: ["Vite.js", "Bitcoin.js", "TypeScript", "Tailwind", "Nest.js"]
  },
  {
    title: "BMP BRC20",
    description:
      "Airdrop platform *to airdrop BRC20 tokens to Taproot addresses*. Supports Unisat, Leader, and XVerse wallets. Utilized `PSBT` & `bitcoinjs` for deploying & minting tokens.",
    image: "/images/projects/brc20.png",
    liveUrl: "https://bmpbrc.com/",
    githubUrl: "https://github.com/OnChainMee/BRC20-withdraw-Backend",
    techStack: ["React.js", "Bitcoin.js", "TypeScript", "Tailwind", "Node.js"]
  },
  {
    title: "HydraSwap",
    description:
      "*Cross-chain DEX with Hydra Market Maker* (HMM) smart pricing algorithm. Concentrated liquidity for better LP rewards & impermanent loss reduction.",
    image: "/images/projects/hydraswap.png",
    liveUrl: "https://hydraswap.io/",
    githubUrl: "https://github.com/OnChainMee/hydra-swap-HMM-dex",
    techStack: ["React", "Rust", "TypeScript", "Tailwind", "Anchor"]
  },
  {
    title: "DigiMonkz",
    description:
      "*EVM NFT staking platform* where users mint GEN111/GEN2 NFTs. Holders earn artifacts as rewards from staking.",
    image: "/images/projects/dizmonkz.jpg",
    liveUrl: "https://digimonkz.com/",
    githubUrl: "https://github.com/OnChainMee/DigiMonkz-Staking",
    techStack: ["React", "Solidity", "TypeScript", "Tailwind"]
  },
  {
    title: "Playzelo",
    description:
      "Deployed on *Bitcoin, Ethereum, Binance, and Solana*. Includes Scissors, Turtlerace, Mines, Dice, Plinko, Slot, Crash games. Supports native tokens & USDT, USDC for betting.",
    image: "/images/projects/playzelo.png",
    liveUrl: "https://playzelo.xyz/",
    githubUrl: "https://github.com/OnChainMee/scissors/tree/master/backend",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind", "Solidity"]
  },
  {
    title: "Seek Syndicate",
    description:
      "*P2E Game with SPL token rewards*. Built Smart Contracts using Anchor (Rust) & Next.js for frontend.",
    image: "/images/projects/seek.jpg",
    liveUrl: "https://www.seekersyndicate.com/",
    githubUrl: "https://github.com/OnChainMee/SPLFaucetSmartContract",
    techStack: ["Vite.js", "Rust", "TypeScript", "Tailwind"]
  },
  {
    title: "Yieldz Lending",
    description:
      "*DeFi Lending Protocol* offering real-yield mechanisms for investors. First multi-layered real-yield ecosystem providing stable passive income.",
    image: "/images/projects/yy.png",
    liveUrl: "https://yieldzprotocol.com/",
    githubUrl: "https://github.com/OnChainMee/360-Defi-SmartContract",
    techStack: ["React", "Solidity", "TypeScript", "Tailwind"]
  },
  {
    title: "Nyx Cipher",
    description:
      "Developing AI-driven blockchain *agents to automate financial and social intelligence on Ethereum(Base) & Solana*. Integrating smart contracts with AI processing to optimize blockchain interactions. Cut research time 90%, amplify productivity by 10x. Power smarter investment decisions..",
    image: "/images/projects/nyx.png",
    liveUrl: "https://nyxcipher.ai/",
    githubUrl: "https://github.com/OnChainMee/Nyx-Cipher-Agent",
    techStack: ["Next.js", "LLM", "TypeScript", "Tailwind", "Web3.js", "Birdeye"]
  },
  {
    title: "Free Games Hub",
    description:
      "A treasure trove of free *PC games and browser-based delights*. Discover thrilling titles ready for download and instant play.",
    image: "/images/projects/free-games-hub.webp",
    liveUrl: "https://www.freegameshub.xyz",
    githubUrl: "https://github.com/OnChainMee/FreeGamesHub",
    techStack: ["Next.js", "TypeScript", "Tailwind"]
  },
];

export const setupSpecs = [
  {
    title: "RGB PC Build",
    subTitle:
      "Custom rig with 10C/16T, RTX 4060 and 32GB RAM for performance in dev & gaming.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle:
      "Lenovo 1080p + MSI 2K, 27” screens for perfect mix of clarity and productivity.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle:
      "Redragon speakers, Cosmic Byte keyboard & headphones, plus earbuds & neckband for Dolby audio and ANC.",
    icon: FiHeadphones,
  },
  {
    title: "Gaming Chair",
    subTitle:
      "Ergonomic comfort for long coding sessions and all-night builds.",
    icon: HiOutlineDesktopComputer,
  },
];

export const certifications = [
  {
    title: "Al Fluency: Framework & Foundations - Anthropic",
    image: "/images/certifications/ai-fluency.webp",
    url: "https://verify.skilljar.com/c/ekmscej8qr5j",
  },
  {
    title: "Subject Matter Expert - AWS",
    image: "/images/certifications/sme-aws.webp",
    url: "/images/certifications/sme-aws.webp",
  },
  {
    title: "Next.js - Vercel",
    image: "/images/certifications/vercel-next.webp",
    url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=54220&certId=dashboard-app-54220-1746641465395",
  },
  {
    title: "Frontend Developer (React) - HackerRank",
    image: "/images/certifications/hacker-rank.webp",
    url: "https://www.hackerrank.com/certificates/0b0a9b79a4a1",
  },
  {
    title: "Fundamentals of AI and ML - AWS",
    image: "/images/certifications/ai-ml.webp",
    url: "/images/certifications/ai-ml.webp",
  },
  {
    title: "Model Context Protocol - Anthropic",
    image: "/images/certifications/mcp.webp",
    url: "https://verify.skilljar.com/c/9ecfwypeucvc",
  },
];

export const testimonials = [
  {
    name: "Berliner",
    company: "fightersunbound",
    linkedIn: "",
    position: "Founder",
    avatar: "/images/testimonials/berliner.jpg",
    testimonial:
      "Your work is impressive too. Great teamwork. And the speed was crazy.",
  },
  {
    name: "Kevin",
    company: "internetjpegs",
    linkedIn: "",
    position: "Founder",
    avatar: "/images/testimonials/Kevin.png",
    testimonial:
      "He’s a fast learner and strong problem solver, thriving in a high-velocity team. I’d gladly work with him again and recommend him to any employer seeking quick, effective contributors.",
  },
  {
    name: "Periwinkle",
    company: "glittrfi",
    linkedIn: "",
    position: "CTO",
    avatar: "/images/testimonials/Periwinkle.png",
    testimonial:
      "He is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];
