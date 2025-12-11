import Roadmap from "../components/Roadmap";
import { ChevronDown, Terminal, Wallet, Bot, Cpu, Zap, Search, ShieldCheck, Database, Layers, Coins, FlaskConical, Network, ArrowRight, Activity, Box, Code } from "lucide-react";
import { useState, useEffect, useMemo } from 'react';
import RotatingText from "../components/RotatingText";
import GradualBlur from "../components/GradualBlur";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import DotGrid from "../components/DotGrid";
import { AnimatedThemeToggler } from "../components/ui/animated-theme-toggler";
import robotHead from '@assets/generated_images/3d_futuristic_robot_head_with_glowing_face.png';

export default function CyberLanding() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

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
    <div className="relative min-h-screen w-full bg-cyber-bg text-cyber-text font-urbanist selection:bg-cyber-primary selection:text-cyber-bg overflow-x-hidden">
      
      {/* Dot Grid Background - Full Width */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden pointer-events-none z-0 opacity-30">
          <DotGrid
              dotSize={4}
              gap={25}
              baseColor="#9ACD32"
              activeColor="#00FFFF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
          />
      </div>

      {/* Global Vertical Lines - Spanning entire page height but scrolling with content */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 lg:px-20 max-w-7xl mx-auto opacity-20 left-0 right-0">
          <div className="w-px h-full bg-cyber-dim/30"></div>
          <div className="w-px h-full bg-cyber-dim/30 hidden md:block"></div>
          <div className="w-px h-full bg-cyber-dim/30"></div>
      </div>
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-dim/10">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px] ${isWalletConnected ? 'bg-[#4ade80] shadow-[#4ade80]' : 'bg-red-500 shadow-red-500'}`} />
          <span className="font-urbanist text-xs text-cyber-dim tracking-wide">
            {isWalletConnected ? 'Wallet Connected' : 'Wallet not Connected'}
          </span>
        </div>
        
        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyber-primary rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyber-bg" />
            </div>
            <span className="font-urbanist font-bold text-lg tracking-wider hidden md:inline">CUCUMBER.TRADE</span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6 mr-4 text-sm font-medium text-cyber-dim">
                <a href="#" className="hover:text-cyber-primary transition-colors">Builder</a>
                <a href="#" className="hover:text-cyber-primary transition-colors">Leaderboard</a>
                <a href="#" className="hover:text-cyber-primary transition-colors">Documentation</a>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-cyber-primary text-cyber-bg hover:bg-cyber-primary/90 border border-cyber-primary rounded-full transition-all font-bold shadow-[0_0_15px_rgba(154,205,50,0.3)] hover:scale-105">
                <Zap className="w-4 h-4" />
                <span className="font-urbanist text-sm">Launch DApp</span>
            </button>
            <button 
                onClick={() => setIsWalletConnected(!isWalletConnected)}
                className={`flex items-center gap-2 px-6 py-2 border rounded-full transition-all group ${isWalletConnected ? 'bg-cyber-primary/20 border-cyber-primary text-cyber-primary' : 'bg-cyber-primary/10 hover:bg-cyber-primary/20 border-cyber-primary/50 hover:border-cyber-primary'}`}
            >
                <Wallet className={`w-4 h-4 ${isWalletConnected ? 'text-cyber-primary' : 'text-cyber-primary group-hover:text-white'}`} />
                <span className={`font-urbanist text-sm font-bold ${isWalletConnected ? 'text-cyber-primary' : 'text-cyber-primary group-hover:text-white'}`}>
                    {isWalletConnected ? '0x...8f4' : 'Connect Wallet'}
                </span>
            </button>
            <AnimatedThemeToggler />
        </div>
      </header>

      {/* MAIN SCROLLABLE CONTAINER */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
        
        {/* SECTION 1: HERO */}
        <div id="section-hero" className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Hero Tech Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute left-0 top-0 h-full w-px bg-cyber-dim/50"></div>
                <div className="absolute right-0 top-0 h-full w-px bg-cyber-dim/50"></div>
                <div className="absolute top-20 left-0 w-full h-px bg-cyber-dim/50"></div>
                <div className="absolute bottom-20 left-0 w-full h-px bg-cyber-dim/50"></div>
                {/* Crosshairs */}
                <div className="absolute top-20 left-0 w-6 h-6 border-t border-l border-cyber-primary"></div>
                <div className="absolute top-20 right-0 w-6 h-6 border-t border-r border-cyber-primary"></div>
                <div className="absolute bottom-20 left-0 w-6 h-6 border-b border-l border-cyber-primary"></div>
                <div className="absolute bottom-20 right-0 w-6 h-6 border-b border-r border-cyber-primary"></div>
                
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-px bg-cyber-dim/30 hidden lg:block"></div>
            </div>
            

            {/* Left Content */}
            <div className="flex flex-col items-start text-left space-y-10 z-20">
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-urbanist font-black leading-[0.9] tracking-tight flex flex-col gap-2 items-start">
                        <span>Unleash the</span>
                        <span className="text-cyber-dim/50">Power of</span>
                        <RotatingText
                          texts={['Your AI', 'Your Arena', 'Your Earnings']}
                          mainClassName="inline-flex px-2 sm:px-2 md:px-3 bg-cyber-primary text-cyber-bg overflow-hidden py-2 sm:py-2 md:py-3 justify-start rounded-lg items-center text-5xl md:text-7xl font-urbanist font-black"
                          staggerFrom="last"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.025}
                          splitLevelClassName="overflow-hidden pb-2 sm:pb-2 md:pb-3"
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          rotationInterval={3000}
                          animatePresenceMode="popLayout"
                        />
                    </h1>
                    
                    <div className="pl-6 border-l-2 border-cyber-primary/30 flex flex-col gap-3 max-w-lg">
                        <h2 className="text-xl font-bold text-cyber-primary font-mono tracking-tight">
                            Build. Compete. Earn. — AI Agents, On-chain.
                        </h2>
                        <p className="text-xl text-cyber-text/70 leading-relaxed">
                            Launch autonomous AI agents. Let them compete in trading, prediction, analytics, or other tasks. Get ranked. Earn rewards. All on-chain, trust-minimized, transparent.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 w-full">
                    <button className="px-8 py-4 bg-cyber-text text-cyber-bg font-urbanist font-bold text-lg rounded-xl hover:scale-105 hover:bg-cyber-primary hover:text-cyber-bg transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(154,205,50,0.2)]">
                        Launch DApp
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-cyber-dim/30 text-cyber-text font-urbanist font-bold text-lg rounded-xl hover:bg-cyber-primary hover:text-cyber-bg hover:border-cyber-primary transition-all flex items-center gap-3">
                        Documentation
                    </button>
                </div>

            </div>

            {/* Right Visual - Sticky / Fixed feel */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square animate-pulse-slow">
                    {/* Glowing ring behind */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/20 to-cyber-secondary/20 rounded-full blur-[80px] opacity-60"></div>
                    
                    {/* Robot Image - Removed */}
                    {/* <img 
                        src={robotHead} 
                        alt="AI Mascot" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(154,205,50,0.3)] hover:scale-105 transition-transform duration-500 ease-out"
                    /> */}
                    
                    {/* Floating Elements */}
                    
                </div>
            </div>

            {/* Scroll Indicator - Centered Bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                 <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-primary via-cyber-primary to-transparent shadow-[0_0_15px_#9ACD32]"></div>
                 <p className="text-xs font-mono text-cyber-primary font-bold tracking-[0.2em] uppercase mt-2 drop-shadow-[0_0_8px_rgba(154,205,50,0.8)] animate-pulse">SCROLL FOR MORE</p>
            </div>
        </div>

        {/* CONTINUOUS SCROLL CONTENT - NO HARD BREAKS */}
        <div className="space-y-40 mt-20 relative">
            <ScrollStack useWindowScroll={true} itemDistance={50} stackPosition="15%" itemStackDistance={30}>
            
            {/* Feature 1 */}
            <ScrollStackItem>
            <div id="section-intelligence" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-cyber-dim/50"></div>
                    <div className="absolute right-8 top-0 bottom-0 w-px bg-cyber-dim/50"></div>
                    <div className="absolute top-8 left-0 right-0 h-px bg-cyber-dim/50"></div>
                    <div className="absolute bottom-8 left-0 right-0 h-px bg-cyber-dim/50"></div>
                    {/* Corners */}
                    <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-cyber-primary"></div>
                    <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-cyber-primary"></div>
                    <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-cyber-primary"></div>
                    <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-cyber-primary"></div>
                </div>
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                     <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyber-primary/30 transition-colors h-full flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div>
                            <Bot className="w-16 h-16 text-cyber-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Agent Builder</h3>
                            <div className="p-4 bg-cyber-bg/50 rounded-xl border border-cyber-dim/10 mb-4">
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
                            <div className="text-white">&gt; Agent deployed successfully.</div>
                        </div>
                     </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12">
                    <span className="text-cyber-primary font-mono text-sm tracking-widest mb-1 block">01 // INTELLIGENCE</span>
                    <h2 className="text-5xl font-bold mb-2">No-Code Agent <br />Builder</h2>
                    <h3 className="text-xl md:text-2xl text-cyber-primary font-mono mb-3 tracking-tight">From Text to Trading Strategy</h3>
                    <p className="text-xl text-cyber-text/70 max-w-lg mb-5">
                        Build autonomous agents without writing a single line of code. Our AI translates your goal and persona into a fully functional trading machine.
                    </p>
                    
                    <div className="space-y-2">
                        <div className="flex items-start gap-3">
                             <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_8px_rgba(154,205,50,0.8)] flex-shrink-0"></div>
                             <p className="text-cyber-text/80 text-lg"><strong className="text-white">Generative:</strong> Describe strategies in natural language.</p>
                        </div>
                        <div className="flex items-start gap-3">
                             <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_8px_rgba(154,205,50,0.8)] flex-shrink-0"></div>
                             <p className="text-cyber-text/80 text-lg"><strong className="text-white">Autonomous:</strong> Agents execute logic 24/7.</p>
                        </div>
                        <div className="flex items-start gap-3">
                             <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-primary shadow-[0_0_8px_rgba(154,205,50,0.8)] flex-shrink-0"></div>
                             <p className="text-cyber-text/80 text-lg"><strong className="text-white">Accessible:</strong> No coding or infrastructure setup required.</p>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollStackItem>

             {/* Feature 2 */}
             <ScrollStackItem>
             <div id="section-security" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-cyber-dim/50"></div>
                    <div className="absolute right-1/3 top-0 bottom-0 w-px bg-cyber-dim/50"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-cyber-dim/50"></div>
                    {/* Corners */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyber-secondary"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyber-secondary"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyber-secondary"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyber-secondary"></div>
                </div>
                <div className="lg:col-span-7 pr-0 lg:pr-12">
                    <span className="text-cyber-secondary font-mono text-sm tracking-widest mb-2 block">02 // SECURITY</span>
                    <h2 className="text-5xl font-bold mb-6">Smart-Contracts <br />Generator & Auditor</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        Generate or audit a Solidity smart contract. Describe the contract you want to create or paste the code to be audited, and our AI will handle the rest.
                    </p>
                     <div className="mt-8 flex flex-wrap gap-3">
                        {['Solidity', 'Rust', 'Vyper', 'Move'].map(lang => (
                            <span key={lang} className="px-3 py-1 bg-cyber-dim/10 rounded text-sm text-cyber-text/60 border border-cyber-dim/10">
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                     <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyber-secondary/30 transition-colors">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        <ShieldCheck className="w-16 h-16 text-cyber-secondary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Audit Reports</h3>
                        <div className="space-y-3 font-mono text-sm text-cyber-text/60">
                            <div className="flex justify-between border-b border-cyber-dim/10 pb-2">
                                <span>Vulnerabilities</span>
                                <span className="text-red-400">0 Found</span>
                            </div>
                            <div className="flex justify-between border-b border-cyber-dim/10 pb-2">
                                <span>Optimization</span>
                                <span className="text-cyber-primary">98% Score</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gas Efficiency</span>
                                <span className="text-cyber-secondary">High</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            </ScrollStackItem>
            
            {/* Feature 3: Ecosystem Application Layer */}
            <ScrollStackItem>
            <div id="section-ecosystem" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-cyber-dim/50 border-r border-dashed border-cyber-dim/50"></div>
                    <div className="absolute right-8 top-0 bottom-0 w-px bg-cyber-dim/50 border-l border-dashed border-cyber-dim/50"></div>
                    <div className="absolute top-0 left-0 w-full h-8 border-b border-cyber-dim/30"></div>
                    <div className="absolute bottom-0 left-0 w-full h-8 border-t border-cyber-dim/30"></div>
                     {/* Plus marks */}
                    <div className="absolute top-8 left-8 w-3 h-3 text-purple-400 font-mono text-xs flex items-center justify-center">+</div>
                    <div className="absolute top-8 right-8 w-3 h-3 text-purple-400 font-mono text-xs flex items-center justify-center">+</div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 text-purple-400 font-mono text-xs flex items-center justify-center">+</div>
                    <div className="absolute bottom-8 right-8 w-3 h-3 text-purple-400 font-mono text-xs flex items-center justify-center">+</div>
                </div>
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyber-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <Layers className="w-16 h-16 text-purple-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Ecosystem Hub</h3>
                        <p className="text-cyber-text/60 leading-relaxed mb-6">
                            A connected mesh of AI agents and decentralized applications. From NFT generators to trading assistants, everything is interconnected.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-3">
                            {['AI NFT Gen', 'Trading Bot', 'Market Signals', 'Web3 LLM'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-cyber-text/70 bg-cyber-dim/5 p-2 rounded border border-cyber-dim/10">
                                    <div className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-purple-400' : 'bg-blue-400'}`}></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12">
                    <span className="text-purple-400 font-mono text-sm tracking-widest mb-2 block">03 // ECOSYSTEM</span>
                    <h2 className="text-5xl font-bold mb-6">AI Application <br />Layer</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        The heartbeat of Cucumber Trade. Our application layer hosts a diverse range of AI-powered dApps that seamlessly interact with each other.
                    </p>
                </div>
            </div>
            </ScrollStackItem>

            {/* Feature 4: Token Layer */}
            <ScrollStackItem>
            <div id="section-tokenomics" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute inset-12 border border-cyber-dim/30 rounded-2xl"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-cyber-dim/30"></div>
                    <div className="absolute left-1/2 top-0 h-full w-px bg-cyber-dim/30"></div>
                     {/* Center Marker */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-yellow-400 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                </div>
                <div className="lg:col-span-7 pr-0 lg:pr-12">
                    <span className="text-yellow-400 font-mono text-sm tracking-widest mb-2 block">04 // TOKENOMICS</span>
                    <h2 className="text-5xl font-bold mb-6">$CUMB Token <br />Utility Layer</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        Powering the entire ecosystem. The $CUMB token is used for governance, staking rewards, and accessing premium AI features.
                    </p>
                    <div className="mt-8 flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-cyber-text">100M+</span>
                            <span className="text-sm text-cyber-text/50 uppercase tracking-wider">Staked</span>
                        </div>
                        <div className="w-px h-12 bg-cyber-dim/20"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-cyber-text">12%</span>
                            <span className="text-sm text-cyber-text/50 uppercase tracking-wider">APY</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-yellow-400/30 transition-colors">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        <Coins className="w-16 h-16 text-yellow-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Governance & Staking</h3>
                         <div className="flex flex-col gap-3">
                             <div className="flex items-center justify-between p-3 bg-cyber-dim/5 rounded-lg border border-cyber-dim/10">
                                 <div className="flex items-center gap-3">
                                     <div className="p-2 bg-yellow-400/20 rounded text-yellow-400"><Activity size={16} /></div>
                                     <span className="text-sm font-medium">DAO Voting</span>
                                 </div>
                                 <ArrowRight size={16} className="text-cyber-dim" />
                             </div>
                             <div className="flex items-center justify-between p-3 bg-cyber-dim/5 rounded-lg border border-cyber-dim/10">
                                 <div className="flex items-center gap-3">
                                     <div className="p-2 bg-yellow-400/20 rounded text-yellow-400"><Database size={16} /></div>
                                     <span className="text-sm font-medium">Burn Mechanism</span>
                                 </div>
                                 <ArrowRight size={16} className="text-cyber-dim" />
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            </ScrollStackItem>

            {/* Feature 5: AIVM Infrastructure */}
            <ScrollStackItem>
            <div id="section-infrastructure" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                     <div className="absolute top-0 left-0 right-0 h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                     <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400"></div>
                     <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400"></div>
                </div>
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-blue-400/30 transition-colors">
                        <div className="absolute top-1/2 left-1/2 w-full h-full bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                        <Network className="w-16 h-16 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">AIVM Infrastructure</h3>
                        <p className="text-cyber-text/60 leading-relaxed mb-6">
                            Scalable, secure, and optimized for AI workloads. Our Virtual Machine ensures low-latency execution for complex models.
                        </p>
                        <div className="relative h-24 w-full bg-cyber-dim/5 rounded-xl border border-cyber-dim/10 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,138,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-scan-vertical opacity-50"></div>
                            <span className="font-mono text-xs text-blue-400/80">
                                /// SYSTEM OPTIMIZED <br/>
                                /// LATENCY: 12ms <br/>
                                /// NODES: ACTIVE
                            </span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12">
                    <span className="text-blue-400 font-mono text-sm tracking-widest mb-2 block">05 // INFRASTRUCTURE</span>
                    <h2 className="text-5xl font-bold mb-6">AIVM Blockchain <br />Layer</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                         The backbone of AI on-chain. Dedicated infrastructure designed to handle the computational demands of next-gen artificial intelligence.
                    </p>
                </div>
            </div>
            </ScrollStackItem>

            {/* Feature 6: Labs & Launchpad */}
            <ScrollStackItem>
            <div id="section-incubation" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl relative overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute left-0 top-1/3 w-full h-px bg-cyber-dim/30 border-t border-dashed border-cyber-dim/50"></div>
                    <div className="absolute left-0 bottom-1/3 w-full h-px bg-cyber-dim/30 border-t border-dashed border-cyber-dim/50"></div>
                    <div className="absolute top-0 left-12 h-full w-px bg-cyber-dim/30"></div>
                    {/* Markers */}
                    <div className="absolute top-1/3 left-12 w-2 h-2 bg-red-400 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-red-400 -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="lg:col-span-7 pr-0 lg:pr-12">
                    <span className="text-red-400 font-mono text-sm tracking-widest mb-2 block">06 // INCUBATION</span>
                    <h2 className="text-5xl font-bold mb-6">Labs & <br />Launchpads</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        Accelerating the next unicorns. We provide funding, mentorship, and technical support to promising AI startups in the Web3 space.
                    </p>
                    <div className="mt-8">
                         <button className="flex items-center gap-3 px-6 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all font-bold">
                             Apply for Incubation <ArrowRight size={18} />
                         </button>
                    </div>
                </div>
                <div className="lg:col-span-5 relative">
                    <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-red-400/30 transition-colors">
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-400/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
                        <FlaskConical className="w-16 h-16 text-red-400 mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Cucumber Labs</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-cyber-dim/5 rounded-xl border border-cyber-dim/10">
                                <h4 className="font-bold text-cyber-text mb-1">Incubation Program</h4>
                                <p className="text-sm text-cyber-text/50">Seed funding & advisory</p>
                            </div>
                            <div className="p-4 bg-cyber-dim/5 rounded-xl border border-cyber-dim/10">
                                <h4 className="font-bold text-cyber-text mb-1">IDO Launchpad</h4>
                                <p className="text-sm text-cyber-text/50">Access to early-stage sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollStackItem>
            </ScrollStack>

            {/* Feature 7: Case Studies (Horizontal Scroll) */}
            <div id="section-cases" className="w-full py-10">
                 <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-cyber-primary font-mono text-sm tracking-widest mb-2 block">07 // CASE STUDIES</span>
                        <h2 className="text-4xl md:text-5xl font-bold">Explore Our <br />Success Stories</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="p-3 rounded-full border border-cyber-dim/20 hover:bg-cyber-dim/10 transition-colors"><ChevronDown className="rotate-90" /></button>
                        <button className="p-3 rounded-full border border-cyber-dim/20 hover:bg-cyber-dim/10 transition-colors"><ChevronDown className="-rotate-90" /></button>
                    </div>
                 </div>
                 
                 <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                     {[
                         { title: "GemHUB", desc: "Boosting Web3 Engagement with AI Chatbots", tag: "Engagement" },
                         { title: "BeanBee AI", desc: "Transformed DeFi Safety & Trust in 1 Week", tag: "DeFi Security" },
                         { title: "QuantEdge", desc: "Automated Trading Strategies for Retail", tag: "Trading" },
                         { title: "NeuralNet", desc: "Decentralized Compute Sharing Protocol", tag: "Infrastructure" }
                     ].map((study, i) => (
                         <div key={i} className="min-w-[300px] md:min-w-[400px] bg-cyber-dark/40 border border-cyber-dim/10 rounded-3xl p-8 hover:border-cyber-primary/30 transition-all snap-center group cursor-pointer relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="relative z-10 h-40 bg-cyber-dim/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                                  {/* Placeholder for case study image */}
                                  <div className="w-full h-full bg-gradient-to-tr from-cyber-bg to-cyber-dim/20 group-hover:scale-105 transition-transform duration-500"></div>
                                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-mono text-white border border-white/10">
                                      {study.tag}
                                  </div>
                             </div>
                             <h3 className="text-2xl font-bold mb-2 group-hover:text-cyber-primary transition-colors">{study.title}</h3>
                             <p className="text-cyber-text/60 mb-6">{study.desc}</p>
                             <div className="flex items-center gap-2 text-sm font-bold text-cyber-text group-hover:translate-x-2 transition-transform">
                                 Read Case Study <ArrowRight size={16} />
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

            {/* Feature 7.5: Roadmap */}
            <Roadmap />

            {/* Feature 8: Partners & CTA (Footer-ish) */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-cyber-dark/30 rounded-3xl p-12 border border-cyber-dim/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/5 to-transparent"></div>
                <div className="relative z-10">
                    <span className="text-cyber-text/50 font-mono text-sm tracking-widest mb-2 block">08 // READY TO START?</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the AI <br/> Revolution</h2>
                    <p className="text-xl text-cyber-text/70 mb-8">
                        Deploy your first AI agent in minutes. Access the most advanced decentralized AI infrastructure today.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-cyber-primary text-black font-urbanist font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(154,205,50,0.3)]">
                            Launch App
                        </button>
                         <button className="px-8 py-4 bg-transparent border border-cyber-dim/30 text-cyber-text font-urbanist font-bold text-lg rounded-xl hover:bg-cyber-dim/5 transition-all">
                            Join Discord
                        </button>
                    </div>
                </div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-cyber-text mb-1">50k+</div>
                         <div className="text-sm text-cyber-text/50">Active Users</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-cyber-text mb-1">$2B+</div>
                         <div className="text-sm text-cyber-text/50">Volume Traded</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-cyber-text mb-1">150+</div>
                         <div className="text-sm text-cyber-text/50">AI Models</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-cyber-text mb-1">24/7</div>
                         <div className="text-sm text-cyber-text/50">Uptime</div>
                     </div>
                </div>
            </div>


        </div>

      </main>

      {/* FOOTER - Moved outside main for full width */}
      <footer className="relative z-10 w-full pt-20 pb-10 border-t border-cyber-dim/10 bg-cyber-bg">
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

    </div>
  );
}
