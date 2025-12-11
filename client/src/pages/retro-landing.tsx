import { ChevronDown, Terminal, Wallet, Bot, Cpu, Zap, Search, ShieldCheck, Database, Layers, Coins, FlaskConical, Network, ArrowRight, Activity, Box, Code } from "lucide-react";
import RotatingText from "../components/RotatingText";
import GradualBlur from "../components/GradualBlur";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import DotGrid from "../components/DotGrid";
import { AnimatedThemeToggler } from "../components/ui/animated-theme-toggler";
import robotHead from '@assets/generated_images/3d_futuristic_robot_head_with_glowing_face.png';

export default function CyberLanding() {
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

      {/* Fixed Background Grid Lines Overlay - Runs through entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full opacity-20">
          <div className="w-px h-full bg-cyber-dim/30"></div>
          <div className="w-px h-full bg-cyber-dim/30 hidden md:block"></div>
          <div className="w-px h-full bg-cyber-dim/30"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-dim/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
          <span className="font-urbanist text-xs text-cyber-dim tracking-wide uppercase">Operational</span>
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
                <a href="#" className="hover:text-cyber-primary transition-colors">Solutions</a>
                <a href="#" className="hover:text-cyber-primary transition-colors">Developers</a>
                <a href="#" className="hover:text-cyber-primary transition-colors">Community</a>
            </div>
            <AnimatedThemeToggler />
            <button className="flex items-center gap-2 px-6 py-2 bg-cyber-primary/10 hover:bg-cyber-primary/20 border border-cyber-primary/50 hover:border-cyber-primary rounded-full transition-all group">
                <Wallet className="w-4 h-4 text-cyber-primary group-hover:text-white" />
                <span className="font-urbanist text-sm font-bold text-cyber-primary group-hover:text-white">Connect Wallet</span>
            </button>
        </div>
      </header>

      {/* MAIN SCROLLABLE CONTAINER */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
        
        {/* SECTION 1: HERO */}
        <div className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            

            {/* Left Content */}
            <div className="flex flex-col items-start text-left space-y-10 z-20">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/20 rounded-md text-xs font-urbanist text-cyber-primary tracking-widest uppercase">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse shadow-[0_0_10px_#9ACD32]" />
                    Live Mainnet v0.0.1
                </div>

                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-urbanist font-black leading-[0.9] tracking-tight flex flex-col gap-2">
                        <span>Unleash the</span>
                        <span className="text-cyber-dim/50">Power of</span>
                        <RotatingText
                          texts={['Blockchain AI', 'Automated Trade', 'Smart Yields']}
                          mainClassName="px-0 bg-transparent text-cyber-primary overflow-hidden py-0 justify-start"
                          staggerFrom="last"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.025}
                          splitLevelClassName="overflow-visible pb-2"
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          rotationInterval={3000}
                        />
                    </h1>
                    
                    <p className="text-xl text-cyber-text/70 max-w-lg leading-relaxed border-l-2 border-cyber-primary/30 pl-6">
                        Your personal expert in all crypto & blockchain related topics. Deploy custom AI models on decentralized infrastructure.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 w-full">
                    <button className="px-8 py-4 bg-cyber-text text-cyber-bg font-urbanist font-bold text-lg rounded-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(154,205,50,0.2)]">
                        Launch DApp
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-cyber-dim/30 text-cyber-text font-urbanist font-bold text-lg rounded-xl hover:bg-cyber-dim/5 transition-all flex items-center gap-3">
                        Documentation
                    </button>
                </div>

            </div>

            {/* Right Visual - Sticky / Fixed feel */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md aspect-square animate-pulse-slow">
                    {/* Glowing ring behind */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/20 to-cyber-secondary/20 rounded-full blur-[80px] opacity-60"></div>
                    
                    {/* Robot Image */}
                    <img 
                        src={robotHead} 
                        alt="AI Mascot" 
                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(154,205,50,0.3)] hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-10 -right-10 bg-cyber-dark/80 backdrop-blur-md border border-cyber-dim/20 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-cyber-primary">ANALYZING CHAIN DATA...</span>
                    </div>
                    
                    <div className="absolute -bottom-5 -left-5 bg-cyber-dark/80 backdrop-blur-md border border-cyber-dim/20 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
                        <Cpu className="w-4 h-4 text-cyber-secondary" />
                        <span className="text-xs font-mono text-cyber-text">AI MODEL: ACTIVE</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Centered Bottom */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                 <div className="w-0.5 h-16 bg-gradient-to-b from-cyber-primary via-cyber-primary to-transparent shadow-[0_0_15px_#9ACD32]"></div>
                 <p className="text-xs font-mono text-cyber-primary font-bold tracking-[0.2em] uppercase mt-2 drop-shadow-[0_0_8px_rgba(154,205,50,0.8)] animate-pulse">SCROLL FOR MORE</p>
            </div>
        </div>

        {/* CONTINUOUS SCROLL CONTENT - NO HARD BREAKS */}
        <div className="space-y-40 mt-20 relative">
            <ScrollStack useWindowScroll={true} itemDistance={50} stackPosition="15%" itemStackDistance={30}>
            
            {/* Feature 1 */}
            <ScrollStackItem>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                     <div className="bg-cyber-dark/50 border border-cyber-dim/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyber-primary/30 transition-colors">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <Bot className="w-16 h-16 text-cyber-primary mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Cucumber Chatbot</h3>
                        <p className="text-cyber-text/60 leading-relaxed">
                            Reliable & Fast Source of Information. Ask Cucumber AI any question related to Blockchain and Crypto. The AI can answer general and technical questions.
                        </p>
                        <div className="mt-8 flex gap-2">
                             <div className="h-1 w-full bg-cyber-dim/10 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-cyber-primary/50"></div>
                             </div>
                        </div>
                     </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 pl-0 lg:pl-12">
                    <span className="text-cyber-primary font-mono text-sm tracking-widest mb-2 block">01 // INTELLIGENCE</span>
                    <h2 className="text-5xl font-bold mb-6">AI News & <br />Auto-Model</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        The future of Web3 news is here. Our advanced AI model scans the web and curates short articles on trending topics every 60 minutes.
                    </p>
                </div>
            </div>
            </ScrollStackItem>

             {/* Feature 2 */}
             <ScrollStackItem>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
                <div className="lg:col-span-7 pr-0 lg:pr-12">
                    <span className="text-yellow-400 font-mono text-sm tracking-widest mb-2 block">04 // TOKENOMICS</span>
                    <h2 className="text-5xl font-bold mb-6">$CUMB Token <br />Utility Layer</h2>
                    <p className="text-xl text-cyber-text/70 max-w-lg">
                        Powering the entire ecosystem. The $CUMB token is used for governance, staking rewards, and accessing premium AI features.
                    </p>
                    <div className="mt-8 flex gap-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">100M+</span>
                            <span className="text-sm text-cyber-text/50 uppercase tracking-wider">Staked</span>
                        </div>
                        <div className="w-px h-12 bg-cyber-dim/20"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">12%</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-cyber-bg/95 p-8 rounded-3xl border border-cyber-dim/10 backdrop-blur-xl">
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
                                <h4 className="font-bold text-white mb-1">Incubation Program</h4>
                                <p className="text-sm text-cyber-text/50">Seed funding & advisory</p>
                            </div>
                            <div className="p-4 bg-cyber-dim/5 rounded-xl border border-cyber-dim/10">
                                <h4 className="font-bold text-white mb-1">IDO Launchpad</h4>
                                <p className="text-sm text-cyber-text/50">Access to early-stage sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollStackItem>
            </ScrollStack>

            {/* Feature 7: Case Studies (Horizontal Scroll) */}
            <div className="w-full py-10">
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
                         <div className="text-3xl font-bold text-white mb-1">50k+</div>
                         <div className="text-sm text-cyber-text/50">Active Users</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-white mb-1">$2B+</div>
                         <div className="text-sm text-cyber-text/50">Volume Traded</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-white mb-1">150+</div>
                         <div className="text-sm text-cyber-text/50">AI Models</div>
                     </div>
                     <div className="text-center p-6 bg-cyber-bg/50 rounded-2xl border border-cyber-dim/10">
                         <div className="text-3xl font-bold text-white mb-1">24/7</div>
                         <div className="text-sm text-cyber-text/50">Uptime</div>
                     </div>
                </div>
            </div>


        </div>

      </main>

      {/* Right Sidebar Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-cyber-primary scale-125' : 'bg-cyber-dim/30'}`} />
          ))}
      </div>

    </div>
  );
}
