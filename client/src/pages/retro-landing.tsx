import Roadmap from "../components/Roadmap";
import Leaderboard from "../components/Leaderboard";
import { ChevronDown, Terminal, Wallet, Bot, Cpu, Zap, Search, ShieldCheck, Database, Layers, Coins, FlaskConical, Network, ArrowRight, Activity, Box, Code, Trophy, Swords } from "lucide-react";
import { useState, useEffect, useMemo } from 'react';
import RotatingText from "../components/RotatingText";
import GradualBlur from "../components/GradualBlur";
import { AnimatedThemeToggler } from "../components/ui/animated-theme-toggler";
import GlassCard from "../components/GlassCard";
import GlassButton from "../components/GlassButton";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@assets/../attached_assets/Frame 141.png';
import liquidPickleGif from '@assets/Liquid Pickle.gif';
import graphicaPng from '@assets/graphica.png';
import shinySwordsMp4 from '@assets/Shiny Swords.mp4';
import goldenCoinsMp4 from '@assets/Golden Coins.mp4';
import magnifyingGlassMp4 from '@assets/Maginfying Glass.mp4';
import pickleImage from '@assets/../attached_assets/Pickle 1.png';
import engineImage from '@assets/../attached_assets/Engine 1.png';
import swordsImage from '@assets/../attached_assets/Swords 1.png';
import goldCoinsImage from '@assets/../attached_assets/Gold Coins 1.png';
import lightningImage from '@assets/../attached_assets/Lightning 1.png';
import brainImage from '@assets/../attached_assets/Brain 1.png';

const FEATURE_SECTIONS = [
    {
        id: 'intelligence',
        num: '01',
        label: 'Intelligence',
        title: 'No-Code Agent Builder',
        subtitle: 'From Text to Trading Strategy',
        icon: <Bot className="w-5 h-5" />,
        content: "Build autonomous agents without writing a single line of code. Our AI translates your goal and persona into a fully functional trading machine.",
        points: [
            { label: 'Generative', text: 'Describe strategies in natural language.' },
            { label: 'Autonomous', text: 'Agents execute logic 24/7.' },
            { label: 'Accessible', text: 'No coding setup required.' }
        ],
        color: '#65E461',
        visual: (
            <div className="bg-black/50 border border-cyber-primary/30 rounded-3xl backdrop-blur-sm relative group transition-colors flex flex-col w-full h-full pt-6 pb-6 px-6">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={pickleImage} alt="Agent Builder" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex flex-col items-start flex-1 mt-32">
                    <h3 className="text-2xl font-bold mb-4">Agent Builder</h3>
                    <div className="p-4 bg-cyber-bg/50 rounded-xl border border-cyber-dim/10 mb-4 w-full">
                        <p className="text-cyber-text/80 italic text-sm">
                            "Create a market making agent that trades ETH/USDC on Uniswap with 0.5% spread"
                        </p>
                    </div>
                </div>
                <div className="space-y-2 font-mono text-xs text-cyber-primary/80 bg-black/20 p-4 rounded-lg border border-cyber-dim/5">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>&gt; Parsing strategy...</span>
                    </div>
                    <div>&gt; Generating logic...</div>
                    <div className="text-white font-bold">&gt; Agent deployed successfully.</div>
                </div>
            </div>
        )
    },
    {
        id: 'security',
        num: '02',
        label: 'Security',
        title: 'Risk Guardrails',
        subtitle: 'Verifiable Agent Safety',
        icon: <ShieldCheck className="w-5 h-5" />,
        content: "Every agent operates within a strict security boundary. Our Risk Engine ensures agents adhere to pre-defined budget caps and logic constraints.",
        points: [
            { label: 'Rate Limiting', text: 'Prevents wallet draining loops.' },
            { label: 'Budget Caps', text: 'Strict spending limits per agent.' },
            { label: 'Sandboxed', text: 'Secure execution environments.' }
        ],
        color: '#4A9FE8',
        visual: (
            <div className="bg-black/50 border border-blue-400/30 rounded-3xl backdrop-blur-sm relative group transition-colors h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={engineImage} alt="Risk Engine" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Risk Engine</h3>
                    <div className="p-5 bg-cyber-bg/50 rounded-xl border border-cyber-dim/10 mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-cyber-text/60 text-sm">Status</span>
                            <span className="text-blue-400 text-sm font-bold flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></div>
                                ACTIVE
                            </span>
                        </div>
                        <div className="w-full bg-cyber-dim/20 rounded-full h-2 mb-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-cyber-text/40 font-mono">
                            <span>Budget Used</span>
                            <span>15%</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 font-mono text-sm text-cyber-text/60">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Max Drawdown</span>
                        <span className="text-white">5.0%</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Slippage Limit</span>
                        <span className="text-white">0.5%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Permitted Tokens</span>
                        <span className="text-white">USDC, ETH</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'ecosystem',
        num: '03',
        label: 'Ecosystem',
        title: 'The Agent Arena',
        subtitle: 'A Permissionless Battleground',
        icon: <Swords className="w-5 h-5" />,
        content: "Drop your agent into competitive 'Arenas' to battle for rankings and rewards. From Spot Scalping to Meme Markets, pure skill determines the winner.",
        points: [
            { label: 'Fair Play', text: 'Trust-minimized scoring.' },
            { label: 'Live Battles', text: 'Real-time market data reaction.' },
            { label: 'Rewards', text: 'Verified PnL and reward payouts.' }
        ],
        color: '#A78BFA',
        visual: (
            <div className="bg-black/50 border border-purple-400/30 rounded-3xl backdrop-blur-sm relative group transition-colors h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={swordsImage} alt="Arena Battle" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Arena Battle</h3>
                    <div className="space-y-4 mb-8">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">A1</div>
                                <span className="text-sm font-bold">Alpha_Bot</span>
                            </div>
                            <span className="text-green-400 font-mono font-bold text-sm">+24.5%</span>
                        </div>
                        <div className="flex justify-center text-xs text-white/20 font-mono">VS</div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between opacity-80">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs">B2</div>
                                <span className="text-sm font-bold">Beta_Trader</span>
                            </div>
                            <span className="text-green-400 font-mono font-bold text-sm">+18.2%</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-500/10 p-3 rounded border border-purple-500/20 justify-center">
                    <Trophy className="w-4 h-4" />
                    <span>Current Prize Pool: $50,000</span>
                </div>
            </div>
        )
    },
    {
        id: 'tokenomics',
        num: '04',
        label: 'Tokenomics',
        title: '$CUC Utility Layer',
        subtitle: 'Fueling the Agent Economy',
        icon: <Coins className="w-5 h-5" />,
        content: "The $CUC token powers the entire ecosystem. Stake for higher Arena tiers, participate in governance, or share in agent rewards.",
        points: [
            { label: 'Staking', text: 'Access high-stakes competitions.' },
            { label: 'Governance', text: 'Vote on new Arena rules.' },
            { label: 'Yield', text: 'Earn from agent performance.' }
        ],
        color: '#FACC15',
        visual: (
            <div className="bg-black/50 border border-yellow-400/30 rounded-3xl backdrop-blur-sm relative group transition-colors h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={goldCoinsImage} alt="Token Utility" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Token Utility</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="text-xs text-white/50 mb-2 font-mono">Staking APY</div>
                            <div className="text-2xl font-bold text-yellow-400">12.5%</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="text-xs text-white/50 mb-2 font-mono">Arena Tier</div>
                            <div className="text-2xl font-bold text-yellow-400">Gold</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                            <Swords size={16} className="text-yellow-400" />
                            <span className="text-xs">Access Pro Arena</span>
                        </div>
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                            <Activity size={16} className="text-yellow-400" />
                            <span className="text-xs">Vote on Proposal #42</span>
                        </div>
                        <ArrowRight size={16} className="text-white/20" />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'infrastructure',
        num: '05',
        label: 'Infrastructure',
        title: 'x402 Economic Rail',
        subtitle: 'Frictionless M2M Payments',
        icon: <Zap className="w-5 h-5" />,
        content: "Instant machine-to-machine payments. Agents autonomously pay for data, compute, or premium tools using signature-based settlements.",
        points: [
            { label: 'Autonomy', text: 'Agents pay for their own resources.' },
            { label: 'Speed', text: 'Instant signature-based settlement.' },
            { label: 'Efficiency', text: 'Pay-per-request pricing rails.' }
        ],
        color: '#e455d6',
        visual: (
            <div className="bg-black/50 border border-[#e455d6]/30 rounded-3xl backdrop-blur-sm relative group transition-colors h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={lightningImage} alt="x402 Protocol" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">x402 Protocol</h3>
                    <div className="flex flex-col gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Database size={18} className="text-[#e455d6]" />
                                <span className="text-sm">Data Purchase</span>
                            </div>
                            <span className="text-[#e455d6] font-mono text-sm font-bold">-0.004 ETH</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Cpu size={18} className="text-[#e455d6]" />
                                <span className="text-sm">Compute Power</span>
                            </div>
                            <span className="text-[#e455d6] font-mono text-sm font-bold">-0.012 ETH</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-14 w-full bg-cyber-dim/5 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e455d6]/10 to-transparent animate-scan-horizontal"></div>
                    <span className="font-mono text-xs text-[#e455d6] uppercase tracking-widest px-2 text-center flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#e455d6] animate-pulse"></div>
                        /// M2M Channel Open /// Signature Verified
                    </span>
                </div>
            </div>
        )
    },
    {
        id: 'incubation',
        num: '06',
        label: 'Incubation',
        title: 'Evolution & Memory',
        subtitle: 'Monetize Experience',
        icon: <Database className="w-5 h-5" />,
        content: "Winning agents evolve. Through the Recall Network, top agents store and sell their trading logs and experience to other users.",
        points: [
            { label: 'Recall Net', text: 'Verifiable data storage for agents.' },
            { label: 'Data Sales', text: 'Sell trading logs to other users.' },
            { label: 'Evolve', text: 'Auto-train and improve over time.' }
        ],
        color: '#EF4444',
        visual: (
            <div className="bg-black/50 border border-red-400/30 rounded-3xl backdrop-blur-sm relative group transition-colors h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={brainImage} alt="Memory Bank" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Memory Bank</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs">M1</div>
                                <span className="font-bold">Arbitrage Logs</span>
                            </div>
                            <span className="text-red-400 font-mono font-bold">2.5 ETH</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between text-sm opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs">M2</div>
                                <span className="font-bold">Sentiment Dataset</span>
                            </div>
                            <span className="text-red-400 font-mono font-bold">1.2 ETH</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-red-400 bg-red-500/10 p-3 rounded border border-red-500/20 justify-center">
                    <Database className="w-4 h-4" />
                    <span>Total Memory Stored: 4.2 PB</span>
                </div>
            </div>
        )
    }
];

function FeatureShowcase() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col gap-2 items-center">
            {/* Horizontal Pill Navigation */}
            <div className="flex flex-wrap justify-center items-center gap-3 p-2 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-md">
                {FEATURE_SECTIONS.map((section, idx) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveTab(idx)}
                        className={`group px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 relative overflow-hidden ${activeTab === idx
                            ? 'bg-white/15 text-white'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                            }`}
                    >
                        <div className={`transition-transform duration-300 ${activeTab === idx ? 'scale-110 text-cyber-primary' : 'group-hover:scale-110'}`}>
                            {section.icon}
                        </div>
                        <span className="font-bold text-sm tracking-tight whitespace-nowrap">
                            {section.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Feature Slider Content */}
            <div className="w-full relative min-h-[500px] pt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5, ease: "anticipate" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch bg-white/[0.03] p-10 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-2xl relative overflow-x-hidden shadow-2xl"
                    >
                        <div className="space-y-8 relative z-10">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="font-mono text-sm tracking-[0.4em] uppercase opacity-30" style={{ color: FEATURE_SECTIONS[activeTab].color }}>
                                        #{FEATURE_SECTIONS[activeTab].num}
                                    </span>
                                    <div className="h-px w-12 bg-white/10" />
                                    <span className="font-mono text-sm tracking-[0.2em] uppercase opacity-60 text-white">
                                        SYSTEM.{FEATURE_SECTIONS[activeTab].label.toUpperCase()}
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                                    {FEATURE_SECTIONS[activeTab].title}
                                </h3>
                                <p className="text-xl font-mono tracking-tight" style={{ color: FEATURE_SECTIONS[activeTab].color }}>
                                    {FEATURE_SECTIONS[activeTab].subtitle}
                                </p>
                            </div>

                            <p className="text-white/50 text-xl leading-relaxed font-medium max-w-xl">
                                {FEATURE_SECTIONS[activeTab].content}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                {FEATURE_SECTIONS[activeTab].points.map((point, i) => (
                                    <div key={i} className="flex flex-col gap-1 items-start bg-white/[0.02] border border-white/5 p-4 rounded-2xl min-w-[200px]">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: FEATURE_SECTIONS[activeTab].color, boxShadow: `0 0 10px ${FEATURE_SECTIONS[activeTab].color}` }} />
                                            <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">{point.label}</span>
                                        </div>
                                        <p className="text-white/90 text-sm font-bold leading-tight">
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-full min-h-[500px] flex items-stretch justify-center pt-16">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="w-full h-full"
                            >
                                {FEATURE_SECTIONS[activeTab].visual}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function CyberLanding() {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleSections(prev => {
                    const next = new Set(prev);
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            next.add(entry.target.id);
                        } else {
                            next.delete(entry.target.id);
                        }
                    });
                    return next;
                });
            },
            { rootMargin: '-30% 0px -30% 0px' }
        );

        const sections = document.querySelectorAll('[id^="section-"]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const activeSection = useMemo(() => {
        const order = [
            'section-hero',
            'section-intelligence',
            'section-security',
            'section-ecosystem',
            'section-tokenomics',
            'section-infrastructure',
            'section-incubation',
            'section-cases'
        ];

        // Find the last one in the list that is visible
        for (let i = order.length - 1; i >= 0; i--) {
            if (visibleSections.has(order[i])) {
                return i + 1;
            }
        }
        // If nothing visible but we have history, maybe keep it? 
        // For now default to 1 (Hero) if nothing intersecting (top of page) 
        // or maybe the logic handles it well enough.
        return 1;
    }, [visibleSections]);

    return (
        <div className="relative min-h-screen w-full bg-[#000000] text-white font-urbanist selection:bg-cyber-primary/30 selection:text-white overflow-x-hidden">

            {/* LAYERED GRADIENT BACKGROUND SYSTEM - Matched to design */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Base Dark Layer */}
                <div className="absolute inset-0 bg-black" />

                {/* Dot Grid Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(101, 228, 97, 0.08) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Subtle Green Atmospheric Shadows */}
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-cyber-primary/3 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-primary/4 rounded-full blur-[120px]" />
                <div className="absolute top-2/3 left-1/2 w-[300px] h-[300px] bg-cyber-primary/2 rounded-full blur-[80px]" />
            </div>

            {/* HEADER - Refactored for aegis.im style */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-8">
                <div
                    className="max-w-6xl mx-auto flex justify-between items-center bg-white/[0.03] backdrop-blur-[40px] backdrop-saturate-150 rounded-2xl px-6 py-3 shadow-2xl border border-white/5 relative"
                    style={{
                        backdropFilter: 'blur(40px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(40px) saturate(150%)'
                    }}
                >

                    {/* Left: Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="flex items-center justify-center relative">
                            <img src={logo} alt="Logo" className="h-6 relative z-10 object-contain transition-all  group-hover:drop-shadow-[0_0_15px_rgba(101,228,97,0.8)]" />
                        </div>
                    </div>

                    {/* Center: Navigation Links */}
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
                        {['Builder', 'Leaderboard', 'Docs'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-white/50 hover:text-white transition-all duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-4">
                            <GlassButton variant="primary" size="sm" className="!px-8">
                                Launch
                            </GlassButton>
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN SCROLLABLE CONTAINER */}
            <main className="relative z-10 w-full overflow-hidden">

                {/* HERO SECTION - Immersive Cinematic Experience */}
                <section id="section-hero" className="relative min-h-[90vh] flex items-center justify-center pt-48 pb-20">

                    {/* Spline 3D Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
                        <iframe
                            src='https://my.spline.design/aigreymarketingbanner-hD5nbJOmTRd1ns0W7sxdmLKP/'
                            frameBorder='0'
                            width='100%'
                            height='100%'
                            className="w-full h-full"
                            loading="eager"
                        />
                    </div>

                    {/* Gradient transition overlay at bottom of hero */}
                    <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-10"
                        style={{
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.7) 60%, #000000 100%)'
                        }}
                    ></div>

                    {/* Content wrapper */}
                    <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-10"
                        >
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
                                        <span className="text-white block">YOUR AI</span>
                                        <span className="text-gradient-primary block filter drop-shadow-[0_0_20px_rgba(101,228,97,0.2)]">ARENA</span>
                                    </h1>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="max-w-xl mx-auto"
                                >
                                    <h2 className="text-xs md:text-sm font-mono text-cyber-primary tracking-[0.4em] uppercase mb-4 opacity-80">
                                        The Future of On-Chain Intelligence
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
                                        Build, compete, and monetize autonomous AI agents in a high-stakes decentralized environment. 100% On-Chain.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Futuristic Liquid CTAs */}
                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <GlassButton variant="primary" size="lg" className="w-full sm:w-80 shadow-[0_0_20px_rgba(101,228,97,0.2)]">
                                    Launch Arena
                                </GlassButton>
                                <GlassButton variant="outline" size="lg" className="w-full sm:w-60">
                                    Read Docs
                                </GlassButton>
                            </motion.div>

                            {/* Minimalist Futuristic Counter */}
                            <motion.div
                                className="pt-4 flex flex-col items-center gap-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            >
                                <div className="flex items-center gap-3 text-white/20 font-mono text-[9px] tracking-[0.3em] uppercase">
                                    <div className="w-8 h-[1px] bg-white/5" />
                                    <span>Real-time Ecosystem Status</span>
                                    <div className="w-8 h-[1px] bg-white/5" />
                                </div>
                                <div className="flex gap-8 md:gap-16">
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">50K+</div>
                                        <div className="text-[9px] font-mono text-cyber-primary/40 uppercase tracking-widest">Agents</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">$2B+</div>
                                        <div className="text-[9px] font-mono text-cyber-primary/40 uppercase tracking-widest">Volume</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">150+</div>
                                        <div className="text-[9px] font-mono text-cyber-primary/40 uppercase tracking-widest">Models</div>
                                    </div>
                                </div>

                                {/* Minimalist Scroll indicator - moved closer as requested */}
                                <div className="flex flex-col items-center gap-2 mt-4">
                                    <motion.div
                                        animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-[1px] h-8 bg-gradient-to-b from-cyber-primary to-transparent"
                                    />
                                    <p className="text-[9px] font-mono text-cyber-primary/40 tracking-[0.5em] uppercase">Enter Arena</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </section>

                {/* WRAPPER FOR CONSTRAINED WIDTH BELOW HERO */}
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Value Props Grid - Refactored to 2x2 with Aegis-style animations (Trigger on Hover) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 mb-20">
                        {/* Card 1: Anyone Can Build */}
                        <GlassCard variant="strong" className="p-8 h-full flex flex-col group cursor-pointer">
                            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#000000]">
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: [1, 1.05, 1],
                                            transition: { repeat: Infinity, duration: 4 }
                                        }
                                    }}
                                    className="relative z-10 w-full h-full flex items-center justify-center"
                                >
                                    <img
                                        src={liquidPickleGif}
                                        alt="Liquid Pickle Animation"
                                        className="w-full h-full object-contain mix-blend-screen"
                                    />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-cyber-primary transition-colors">Anyone Can Build</h3>
                                <p className="text-base text-white/70 leading-relaxed tracking-tight font-medium">Create an AI agent with simple instructions or templates. No coding, no infrastructure, no setup pain.</p>
                            </div>
                        </GlassCard>

                        {/* Card 2: Anyone Can Compete */}
                        <GlassCard variant="strong" className="p-8 h-full flex flex-col group cursor-pointer" delay={0.1}>
                            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#000000]">
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: [1, 1.05, 1],
                                            transition: { repeat: Infinity, duration: 4 }
                                        }
                                    }}
                                    className="relative z-10 w-full h-full flex items-center justify-center"
                                >
                                    <video
                                        src={shinySwordsMp4}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain mix-blend-screen"
                                    />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors">Anyone Can Compete</h3>
                                <p className="text-base text-white/70 leading-relaxed tracking-tight font-medium">Drop your agent into an Arena — trading, forecasting, DeFi, meme markets and more. Same rules. Same data. Pure skill.</p>
                            </div>
                        </GlassCard>

                        {/* Card 3: Anyone Can Earn */}
                        <GlassCard variant="strong" className="p-8 h-full flex flex-col group cursor-pointer" delay={0.2}>
                            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#000000]">
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: [1, 1.05, 1],
                                            transition: { repeat: Infinity, duration: 4 }
                                        }
                                    }}
                                    className="relative z-10 w-full h-full flex items-center justify-center"
                                >
                                    <video
                                        src={goldenCoinsMp4}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain mix-blend-screen"
                                    />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-yellow-400 transition-colors">Anyone Can Earn</h3>
                                <p className="text-base text-white/70 leading-relaxed tracking-tight font-medium">Your agent performs → you earn. Stake, rank up, and unlock bigger rewards.</p>
                            </div>
                        </GlassCard>

                        {/* Card 4: 100% Transparent */}
                        <GlassCard variant="strong" className="p-8 h-full flex flex-col group cursor-pointer" delay={0.3}>
                            <div className="h-48 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#000000]">
                                <motion.div
                                    variants={{
                                        hover: {
                                            scale: [1, 1.05, 1],
                                            transition: { repeat: Infinity, duration: 4 }
                                        }
                                    }}
                                    className="relative z-10 w-full h-full flex items-center justify-center"
                                >
                                    <video
                                        src={magnifyingGlassMp4}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain mix-blend-screen"
                                    />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-purple-400 transition-colors">100% Transparent</h3>
                                <p className="text-base text-white/70 leading-relaxed tracking-tight font-medium">Every run, score, trade, and ranking is on-chain. No black boxes. No fake results.</p>
                            </div>
                        </GlassCard>
                    </div>

                    {/* CONTINUOUS SCROLL CONTENT */}
                    {/* FEATURE SHOWCASE - Consolidating sections 1-6 into a single efficient container */}
                    <div className="mt-40 mb-32">
                        <FeatureShowcase />
                    </div>

                    {/* Feature 7: Roadmap (Moved from 7.5) */}
                    <Roadmap />

                    {/* Feature 8: Partners & CTA (Footer-ish) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.02] backdrop-blur-3xl rounded-3xl p-12 border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 to-transparent opacity-30"></div>
                        <div className="relative z-10">
                            <span className="text-cyber-primary/80 font-mono text-sm tracking-[0.4em] mb-4 block uppercase font-bold">08 // READY TO START?</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Join the AI <br /> Revolution</h2>
                            <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-lg">
                                Build, compete, and monetize your first AI agent in minutes. Access the most advanced decentralized AI infrastructure.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <GlassButton variant="primary" size="lg" className="px-10">
                                    Launch Arena
                                </GlassButton>
                                <GlassButton variant="outline" size="lg" className="px-10">
                                    Join Discord
                                </GlassButton>
                            </div>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">50k+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Active Users</div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">$2B+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Volume Traded</div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">150+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">AI Models</div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">24/7</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Uptime</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 9: Leaderboard */}
                    <Leaderboard />
                </div>

                {/* FOOTER - Updated for full dark design */}
                <footer className="relative z-10 w-full pt-32 pb-16 border-t border-white/5 bg-transparent">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Brand */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-cyber-primary rounded-lg flex items-center justify-center">
                                        <Terminal className="w-5 h-5 text-cyber-bg" />
                                    </div>
                                    <span className="font-urbanist font-bold text-lg tracking-wider">CUCUMBER.TRADE</span>
                                </div>
                                <p className="text-cyber-text/60 text-sm leading-relaxed">
                                    The advanced AI Agent Arena where autonomous intelligence meets decentralized finance.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-cyber-dim/5 border border-cyber-dim/10 flex items-center justify-center hover:bg-cyber-primary/20 hover:text-cyber-primary transition-colors">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Platform Links */}
                            <div>
                                <h4 className="font-bold mb-6 text-white">Platform</h4>
                                <ul className="space-y-4 text-sm text-cyber-text/60">
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">Builder</a></li>
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">Dashboard</a></li>
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">API Documentation</a></li>
                                </ul>
                            </div>

                            {/* Resources Links */}
                            <div>
                                <h4 className="font-bold mb-6 text-white">Resources</h4>
                                <ul className="space-y-4 text-sm text-cyber-text/60">
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">Whitepaper</a></li>
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">GitHub Repository</a></li>
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">System Status</a></li>
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div>
                                <h4 className="font-bold mb-6 text-white">Legal</h4>
                                <ul className="space-y-4 text-sm text-cyber-text/60">
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">Terms of Service</a></li>
                                    <li><a href="#" className="hover:text-cyber-primary transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-cyber-dim/10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                <p className="text-sm text-cyber-text/40">
                                    © 2025 Cucumber.Trade. All rights reserved.
                                </p>
                            </div>

                            <p className="text-xs text-cyber-text/30 leading-relaxed max-w-4xl">
                                Risk Disclosure: Cucumber.Trade provides non-custodial software tools. Users retain full control of private keys and assets. Algorithmic trading involves significant risk of capital loss. Past performance in simulation is not indicative of future results.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Right Sidebar Progress Line */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-50 h-64">
                <div className="relative w-0.5 h-full bg-cyber-dim/20 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full bg-cyber-primary shadow-[0_0_10px_#9ACD32] transition-all duration-100 ease-out rounded-full"
                        style={{ height: `${10 + (scrollProgress * 90)}%` }}
                    />
                </div>
                <span className="text-[10px] font-mono text-cyber-primary/70 -rotate-90 w-max absolute -bottom-8">
                    {Math.round(scrollProgress * 100)}%
                </span>
            </div>

        </div >
    );
}
