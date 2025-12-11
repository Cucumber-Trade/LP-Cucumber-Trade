import { ChevronDown, Terminal, Wallet, Bot, Cpu, Zap, Search, ShieldCheck } from "lucide-react";
import RotatingText from "../components/RotatingText";
import GradualBlur from "../components/GradualBlur";
import { AnimatedThemeToggler } from "../components/ui/animated-theme-toggler";
import robotHead from '@assets/generated_images/3d_futuristic_robot_head_with_glowing_face.png';

export default function CyberLanding() {
  return (
    <div className="relative min-h-screen w-full bg-cyber-bg text-cyber-text font-urbanist selection:bg-cyber-primary selection:text-cyber-bg overflow-x-hidden">
      
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
        </div>

        {/* CONTINUOUS SCROLL CONTENT - NO HARD BREAKS */}
        <div className="space-y-40 mt-20 relative">
            
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

             {/* Feature 2 */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
            
            {/* Scroll Indicator at bottom */}
            <div className="flex flex-col items-center justify-center pt-20 pb-10 opacity-50">
                 <p className="text-sm font-mono mb-4 text-cyber-dim">SCROLL FOR MORE</p>
                 <div className="w-px h-16 bg-gradient-to-b from-cyber-primary to-transparent"></div>
            </div>

        </div>

      </main>

      {/* Right Sidebar Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
          {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-cyber-primary scale-125' : 'bg-cyber-dim/30'}`} />
          ))}
      </div>

    </div>
  );
}
