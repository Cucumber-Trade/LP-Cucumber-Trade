import { ChevronDown, Terminal, Wallet } from "lucide-react";
import RotatingText from "../components/RotatingText";
import LiquidEther from "../components/LiquidEther";

export default function CyberLanding() {
  return (
    <div className="relative min-h-screen w-full bg-cyber-bg text-cyber-text font-rajdhani selection:bg-cyber-primary selection:text-cyber-bg overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#020406]" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-cyber-bg/50 border-b border-cyber-dim/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
          <span className="font-mono text-xs text-cyber-dim tracking-wide uppercase">Operational</span>
        </div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="w-8 h-8 bg-cyber-primary rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyber-bg" />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-wider hidden md:inline">CUCUMBER.TRADE</span>
        </div>

        <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-5 py-2 text-cyber-text hover:text-white font-orbitron text-sm font-bold transition-colors">
                Open DApp
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-cyber-primary/10 hover:bg-cyber-primary/20 border border-cyber-primary/50 hover:border-cyber-primary rounded-full transition-all group">
                <Wallet className="w-4 h-4 text-cyber-primary group-hover:text-white" />
                <span className="font-orbitron text-sm font-bold text-cyber-primary group-hover:text-white">Connect Wallet</span>
            </button>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <div className="relative z-10 min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
            <LiquidEther
                colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
            />
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="flex flex-col items-start text-left space-y-10 z-20 max-w-2xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/20 rounded-md text-xs font-mono text-cyber-primary tracking-widest uppercase">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse shadow-[0_0_10px_#9ACD32]" />
                    Live Mainnet v0.0.1
                </div>

                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-orbitron font-black leading-[0.9] text-white tracking-tight flex items-center gap-4 whitespace-nowrap">
                        <span>Your</span>
                        <RotatingText
                          texts={['AI.', 'Arena.', 'Earnings.']}
                          mainClassName="px-3 sm:px-3 md:px-4 bg-cyber-primary text-black overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-lg"
                          staggerFrom="last"
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-120%" }}
                          staggerDuration={0.025}
                          splitLevelClassName="overflow-hidden pb-1"
                          transition={{ type: "spring", damping: 30, stiffness: 400 }}
                          rotationInterval={2000}
                        />
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-orbitron font-medium text-cyber-text/90 tracking-wide">
                        Build. Compete. Earn. — AI Agents, On-chain.
                    </h2>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 w-full">
                    <button className="px-8 py-4 bg-white text-black font-orbitron font-bold text-lg rounded-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                        Launch Your Agent
                        <ChevronDown className="w-5 h-5 -rotate-90" />
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-orbitron font-bold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center gap-3">
                        Explore Agents
                    </button>
                </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end pointer-events-none">
            </div>
        </div>
      </div>
    </div>
  );
}
