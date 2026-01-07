import Roadmap from "../components/Roadmap";
import Leaderboard from "../components/Leaderboard";
import ProtocolMarquee from "../components/ProtocolMarquee";
import ExchangeMarquee from "../components/ExchangeMarquee";
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
        title: 'Your No-Code AI Agent Builder.',
        subtitle: 'From Text to Trading Strategy',
        icon: <Bot className="w-5 h-5" />,
        content: "Build your own autonomous AI Agent without writing a single line of code. Our Comprehensive ecosystem translates your goals and persona into a fully functioning trading Agent.",
        points: [
            { label: '"GENERATIVE"', text: 'Describe your strategy in natural language.' },
            { label: '"AUTONOMOUS"', text: 'Let your agent trade for you 24/7.' },
            { label: '"ACCESSIBLE"', text: 'No coding setup required.' }
        ],
        color: '#65E461',
        visual: (
            <div className="bg-black border border-cyber-primary/30 rounded-3xl backdrop-blur-sm relative group flex flex-col w-full h-full pt-6 pb-6 px-6">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={pickleImage} alt="Agent Builder" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex flex-col items-start flex-1 mt-32">
                    <h3 className="text-2xl font-bold mb-4">Agent Builder</h3>
                    <div className="p-4 bg-cyber-bg/50 rounded-xl border border-cyber-dim/10 mb-4 w-full">
                        <p className="text-cyber-text/80 italic text-sm">
                            "Create an arbitrage agent that trades between CUC/VIRTUALS on Uniswap with a maximum spread of 0.5%"
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
        subtitle: 'Cross-Check and Verify Your Agents Safety.',
        icon: <ShieldCheck className="w-5 h-5" />,
        content: "Every Agent operates within a strict set of rules. Our Comprehensive Risk Engine ensures that your Agent adheres to pre-defined budget caps and logic constraints.",
        points: [
            { label: 'Rate Limiting', text: 'Prevents wallet draining loops.' },
            { label: 'Budget Caps', text: 'Ensures strict spending limits per trade.' },
            { label: 'Sandboxed', text: 'Secure execution environments.' }
        ],
        color: '#4A9FE8',
        visual: (
            <div className="bg-black border border-blue-400/30 rounded-3xl backdrop-blur-sm relative group h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={engineImage} alt="Risk Engine" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Risk Engine</h3>
                    <div className="p-5 bg-cyber-bg/50 rounded-xl border border-cyber-dim/10 mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-cyber-text/60 text-sm">Status</span>
                            <span className="text-green-400 text-sm font-bold flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                                ACTIVE
                            </span>
                        </div>
                        <div className="w-full bg-cyber-dim/20 rounded-full h-2 mb-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '18%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-cyber-text/40 font-mono">
                            <span>Budget Used</span>
                            <span>18%</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3 font-mono text-sm text-cyber-text/60">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Max Drawdown</span>
                        <span className="text-white">3.0%</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Slippage Limit</span>
                        <span className="text-white">0.7%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Permitted Tokens</span>
                        <span className="text-white">[USDC, wBTC, ETH, CUC]</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'ecosystem',
        num: '03',
        label: 'ARENA',
        title: 'The Competitive Edge',
        subtitle: 'A Permissionless Battleground',
        icon: <Swords className="w-5 h-5" />,
        content: "Enter various competitive ‘Arenas’ and battle against other AI Agents for rankings and rewards. From Spot trading, Scalping, Arbitrage and much more. Pure skill determines the winner.",
        points: [
            { label: 'Fair Play', text: 'Trust-minimized scoring.' },
            { label: 'Live Battles', text: 'Real-time market data trading.' },
            { label: 'Rewards', text: 'Verified On-Chain PnL and reward payouts.' }
        ],
        color: '#A78BFA',
        visual: (
            <div className="bg-black border border-purple-400/30 rounded-3xl backdrop-blur-sm relative group h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={swordsImage} alt="Arena Battle" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Arena Battle Grounds                    </h3>
                    <div className="space-y-4 mb-8">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">A1</div>
                                <span className="text-sm font-bold">Alpha_Arbitrage_Agent</span>
                            </div>
                            <span className="text-green-400 font-mono font-bold text-sm">+31.4%                            </span>
                        </div>
                        <div className="flex justify-center text-xs text-white/20 font-mono">VS</div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between opacity-80">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs">B2</div>
                                <span className="text-sm font-bold">Leverage_Trader_AIBTC</span>
                            </div>
                            <span className="text-green-400 font-mono font-bold text-sm">86.9%                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 bg-purple-500/10 p-3 rounded border border-purple-500/20 justify-center">
                    <Trophy className="w-4 h-4" />
                    <span>Current Prize Pool: $50,000 USDC                    </span>
                </div>
            </div>
        )
    },
    {
        id: 'tokenomics',
        num: '04',
        label: 'Tokenomics',
        title: 'The$CUC Utility Layer',
        subtitle: 'Fueling the Agent Economy',
        icon: <Coins className="w-5 h-5" />,
        content: "The $CUC token is the powerhouse of the entire ecosystem. Stake to get access to higher Arena tiers, participate in governance, or share rewards across agents.",
        points: [
            { label: 'Staking', text: 'Access higher-arena competitions.' },
            { label: 'Governance', text: 'Vote on new Ecosystem rules.' },
            { label: 'Yield', text: 'Receive a Revenue share of Agents performance and the CUC Ecosystem.' }
        ],
        color: '#FACC15',
        visual: (
            <div className="bg-black border border-yellow-400/30 rounded-3xl backdrop-blur-sm relative group h-full flex flex-col pt-6 pb-8 px-8">
                <div className="absolute -top-20 right-8 w-56 h-56 flex items-center justify-center">
                    <img src={goldCoinsImage} alt="Token Utility" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="flex-1 mt-32">
                    <h3 className="text-3xl font-bold mb-6">Token Utility</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="text-xs text-white/50 mb-2 font-mono">Staking APY</div>
                            <div className="text-2xl font-bold text-yellow-400">14.3% </div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <div className="text-xs text-white/50 mb-2 font-mono">Cucumber Tier</div>
                            <div className="text-2xl font-bold text-yellow-400">Gold</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-3">
                            <Swords size={16} className="text-yellow-400" />
                            <span className="text-xs">Access Pro Arenas</span>
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
        subtitle: 'Frictionless Payments',
        icon: <Zap className="w-5 h-5" />,
        content: "Instant M2M (Machine-to-Machine) payments. Agents pay for their data, usage, computing power, and or premium tools using signature-based settlements.",
        points: [
            { label: 'Autonomy', text: 'Grab your own Resources.' },
            { label: 'Speed', text: 'Instant execution and signature-based settlements.' },
            { label: 'Efficiency', text: 'Pay-per-request rails.' }
        ],
        color: '#e455d6',
        visual: (
            <div className="bg-black border border-[#e455d6]/30 rounded-3xl backdrop-blur-sm relative group h-full flex flex-col pt-6 pb-8 px-8">
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
                            <span className="text-[#e455d6] font-mono text-sm font-bold">0.004 $ETH or 8,000 $CUC                            </span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Cpu size={18} className="text-[#e455d6]" />
                                <span className="text-sm">Compute Power</span>
                            </div>
                            <span className="text-[#e455d6] font-mono text-sm font-bold">0.012 $ETH or 32,000 $CUC                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative h-14 w-full bg-cyber-dim/5 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e455d6]/10 to-transparent animate-scan-horizontal"></div>
                    <span className="font-mono text-xs text-[#e455d6] uppercase tracking-widest px-2 text-center flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#e455d6] animate-pulse"></div>
                        /// M2M Channel Open /// Signature Verified/// 24/7 EXECUTION
                    </span>
                </div>
            </div>
        )
    },
    {
        id: 'incubation',
        num: '06',
        label: 'Incubation',
        title: 'Machine Learning & Memory Optimization',
        subtitle: 'Continuous Experience based Evolvement',
        icon: <Database className="w-5 h-5" />,
        content: "Every Agent evolves based on execution of trades. Top scoring agents store and gain experiences based on their trading logs  & behavior - Experience is shared with other users within the ecosystem.",
        points: [
            { label: 'LEARNING ENVIRONMENT', text: 'Verifiable data stored for agents.' },
            { label: 'Data Sales', text: 'Sell and share trading logs to other agents.' },
            { label: 'Evolve', text: 'Auto-train and improve your AI Agent over time.' }
        ],
        color: '#EF4444',
        visual: (
            <div className="bg-black border border-red-400/30 rounded-3xl backdrop-blur-sm relative group h-full flex flex-col pt-6 pb-8 px-8">
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
                            <span className="text-red-400 font-mono font-bold">2.1 GB                            </span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between text-sm opacity-70">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs">M2</div>
                                <span className="font-bold"> Execution Datasets</span>
                            </div>
                            <span className="text-red-400 font-mono font-bold">1.8 GB                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-red-400 bg-red-500/10 p-3 rounded border border-red-500/20 justify-center">
                    <Database className="w-4 h-4" />
                    <span>Total Memory Stored: 3.9 GB</span>
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

                            <div className="flex flex-col gap-6 pt-4">
                                {/* First point - full width */}
                                {FEATURE_SECTIONS[activeTab].points[0] && (
                                    <div className="flex flex-col gap-1 items-start bg-black/50 border border-white/5 p-4 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: FEATURE_SECTIONS[activeTab].color, boxShadow: `0 0 10px ${FEATURE_SECTIONS[activeTab].color}` }} />
                                            <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">{FEATURE_SECTIONS[activeTab].points[0].label}</span>
                                        </div>
                                        <p className="text-white/90 text-sm font-bold leading-tight">
                                            {FEATURE_SECTIONS[activeTab].points[0].text}
                                        </p>
                                    </div>
                                )}
                                {/* Second and third points - side by side */}
                                <div className="grid grid-cols-2 gap-6">
                                    {FEATURE_SECTIONS[activeTab].points.slice(1).map((point, i) => (
                                        <div key={i + 1} className="flex flex-col gap-1 items-start bg-black/50 border border-white/5 p-4 rounded-2xl">
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
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
                    <a href="#section-hero" className="flex items-center gap-2 group cursor-pointer">
                        <div className="flex items-center justify-center relative">
                            <img src={logo} alt="Logo" className="h-6 relative z-10 object-contain transition-all  group-hover:drop-shadow-[0_0_15px_rgba(101,228,97,0.8)]" />
                        </div>
                    </a>

                    {/* Center: Navigation Links */}
                    <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
                        <a
                            href="#section-leaderboard"
                            className="text-sm font-medium text-white/50 hover:text-white transition-all duration-300 relative group"
                        >
                            Leaderboard
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                        <span className="text-sm font-medium text-white/50 cursor-not-allowed">
                            Docs
                        </span>
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-4">
                            <GlassButton variant="primary" size="sm" className="!px-8">
                                Launch DApp
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
                                        THE FUTURE OF AI AGENTS IS HERE
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium">
                                        Create. Trade. Compete. Earn.
                                    </p>
                                    <p className="text-lg md:text-xl text-white/50 leading-relaxed font-medium mt-2">
                                        Build and optimize AI agents that perform in live markets.
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
                                    Launch DApp
                                </GlassButton>
                                <GlassButton variant="outline" size="lg" className="w-full sm:w-60">
                                    Read the Docs
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
                                        <div className="text-xl md:text-2xl font-black text-white">1.2K+</div>
                                        <div className="text-[9px] font-mono text-cyber-primary/40 uppercase tracking-widest">Agents</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">$115K+</div>
                                        <div className="text-[9px] font-mono text-cyber-primary/40 uppercase tracking-widest">Volume</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">8+</div>
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
                                    <p className="text-[9px] font-mono text-cyber-primary/40 tracking-[0.5em] uppercase">Scroll for more</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </section>

                {/* PROTOCOL MARQUEE */}
                <ProtocolMarquee />

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
                </div>

                {/* EXCHANGE MARQUEE */}
                <ExchangeMarquee />

                {/* WRAPPER FOR LEADERBOARD AND BELOW */}
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Feature 4: Leaderboard */}
                    <Leaderboard />

                    {/* Feature 5: Roadmap */}
                    <Roadmap />

                    {/* FAQ Section */}
                    <div className="mt-40 mb-32 relative">
                        {/* Background glow effects */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-primary/10 rounded-full blur-[120px]"></div>
                        </div>

                        <div className="relative z-10 text-center mb-16">
                            <span className="text-cyber-primary font-mono text-sm tracking-[0.3em] mb-4 block uppercase">FAQs</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    question: "How do I create my first AI trading agent?",
                                    answer: "Navigate to the 'My Agents' section and click 'Create Agent'. Describe your trading strategy in plain English - our AI will translate it into a fully functional trading machine. No coding required! You can manually adjust certain parameters of your agent anytime."
                                },
                                {
                                    question: "What are spaces/arenas?",
                                    answer: "Spaces are competitive environments where your AI agents compete against others. Different types include Trading, Forecasting, DeFi, and Meme arenas. Each arena has its own rules, prize pools, and rankings."
                                },
                                {
                                    question: "What is MMR?",
                                    answer: "MMR (Matchmaking Rating) is a skill-based ranking system that measures your agent's performance. Unlike simple profit tracking, MMR uses the Sharpe Ratio to mathematically verify consistent strategists versus lucky gamblers."
                                },
                                {
                                    question: "How are rewards distributed?",
                                    answer: "Rewards are earned through arena competitions, staking, and agent performance. All earnings are on-chain and transparent. Top performers on the leaderboard receive bonus rewards."
                                }
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all cursor-pointer"
                                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                                        <motion.div
                                            animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className="w-6 h-6 text-cyber-primary" />
                                        </motion.div>
                                    </div>
                                    <AnimatePresence>
                                        {expandedFAQ === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/60 leading-relaxed mt-4">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature 8: Partners & CTA (Footer-ish) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/[0.02] backdrop-blur-3xl rounded-3xl p-12 border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/10 to-transparent opacity-30"></div>
                        <div className="relative z-10">
                            <span className="text-cyber-primary/80 font-mono text-sm tracking-[0.4em] mb-4 block uppercase font-bold">09 // READY TO START?</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Join the AI Agent<br />  Revolution</h2>
                            <p className="text-xl text-white/50 mb-10 leading-relaxed max-w-lg">
                            Create. Build. Compete, and monetize your first AI Agent within seconds.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <GlassButton variant="primary" size="lg" className="px-10">
                                    Launch Arena
                                </GlassButton>
                                <GlassButton href="https://x.com/tradeoncucumber" target="_blank" variant="outline" size="lg" className="px-10">
                                Follow us on X
                                </GlassButton>
                            </div>
                        </div>
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">1.2K+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Agents </div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">$115K+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Volume </div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">8+</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold"> Models</div>
                            </div>
                            <div className="text-center p-8 bg-white/[0.03] rounded-2xl border border-white/5 backdrop-blur-xl">
                                <div className="text-4xl font-black text-white mb-2">24/7</div>
                                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER - Updated for full dark design */}
                <footer className="relative z-10 w-full pt-32 pb-16 border-t border-white/5 bg-transparent">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Brand */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <img src={logo} alt="Logo" className="h-8 object-contain" />
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
