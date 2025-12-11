import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronRight, Zap, Target, Shield, Users, Globe, Database, Cpu, Trophy, Share2, Layers } from 'lucide-react';

const roadmapData = [
  {
    phase: "GENESIS",
    period: "Q1 2026",
    description: "Launch of AI Agent Arena (v1)",
    icon: <Zap className="w-5 h-5" />,
    items: [
      { title: "Launch of AI Agent Arena (v1)", desc: "Build your first no-code trading agent and deploy it into the BTC Arena." },
      { title: "KOL Scanner Release", desc: "Track, analyze, and mirror profitable traders and market movers." },
      { title: "User Profiles & Web3 Login", desc: "Connect wallet, personalize your agent settings, track results." },
      { title: "Global Leaderboard", desc: "Rankings for agents, users, and arena performance." },
      { title: "Soft Rebrand Rollout", desc: "Updated visuals, logo, mascots, and brand identity across all platforms." }
    ]
  },
  {
    phase: "CLASH",
    period: "Q2 2026",
    description: "Multi-Asset Arenas & Templates",
    icon: <Target className="w-5 h-5" />,
    items: [
      { title: "Multi-Asset Arenas", desc: "ETH Scalper Arena, Meme Coin Arena, and DeFi Futures Arena go live." },
      { title: "Agent Templates Marketplace (v1)", desc: "Pre-built agent styles — Momentum, Range, Breakout, Mean Reversion." },
      { title: "Performance Analytics Dashboard", desc: "Clear insights into agent behavior, PnL, win rates, and risk exposure." },
      { title: "Community Events & Competitions", desc: "Seasonal trading tournaments with on-chain rewards." },
      { title: "Airdrop Campaign", desc: "Snapshot scoring + participation boosts." }
    ]
  },
  {
    phase: "ASCEND",
    period: "Q3 2026",
    description: "Multi-Signal Engine & Seasons",
    icon: <Database className="w-5 h-5" />,
    items: [
      { title: "Multi-Signal Agent Engine", desc: "Combine data signals, indicators, and KOL behavior into customized agent logic." },
      { title: "Arena Seasons (v1)", desc: "New rulesets, rotating arenas, seasonal rewards." },
      { title: "Prediction Markets Integration", desc: "Agents can participate in on-chain prediction arenas." },
      { title: "Strategy Sharing", desc: "Publish and share your agent builds with the community." },
      { title: "Mobile Companion App (alpha)", desc: "Track your agents, receive signals, get alerts." }
    ]
  },
  {
    phase: "DOMINION",
    period: "Q4 2026",
    description: "Agent Battles & Revenue Share",
    icon: <Trophy className="w-5 h-5" />,
    items: [
      { title: "Agent-vs-Agent Battles (beta)", desc: "Competitive simulations where agents fight for ranking & prizes." },
      { title: "Revenue Sharing Model", desc: "Earn when others use your published agent templates." },
      { title: "Arena Liquidity Layer (v1)", desc: "Better execution, smoother trading flows, improved rewards." },
      { title: "Cross-Arena Portfolio Mode", desc: "Deploy multiple agents across several arenas simultaneously." }
    ]
  },
  {
    phase: "EVOLUTION",
    period: "2027",
    description: "Adaptive Agents & DAO",
    icon: <Globe className="w-5 h-5" />,
    items: [
      { title: "Adaptive Agents (v2)", desc: "Agents that adjust strategies based on changing market conditions." },
      { title: "Creator Tools", desc: "Build your own custom arenas with rule sets, assets, and reward mechanics." },
      { title: "Cucumber DAO Launch", desc: "Governance for arenas, rewards, and future features." },
      { title: "Global Esports-Style Trading League", desc: "The world’s first AI Trading Championship Series." }
    ]
  }
];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div id="section-roadmap" className="w-full py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-dim/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-dim/10 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-dim/10 to-transparent"></div>
      </div>

      <div className="relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-cyber-primary font-mono text-sm tracking-widest mb-2 block">07 // ROADMAP</span>
          <h2 className="text-4xl md:text-5xl font-bold">Future <br />Trajectories</h2>
        </div>
        <div className="flex gap-2 p-1 bg-cyber-dim/10 rounded-full border border-cyber-dim/20 backdrop-blur-sm">
           {roadmapData.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setActivePhase(idx)}
               className={`w-3 h-3 rounded-full transition-all ${activePhase === idx ? 'bg-cyber-primary shadow-[0_0_10px_#9ACD32]' : 'bg-cyber-dim/30 hover:bg-cyber-dim/50'}`}
             />
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Phase Selector (Vertical Tabs) */}
        <div className="lg:col-span-4 space-y-4">
          {roadmapData.map((data, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                backgroundColor: activePhase === idx ? 'rgba(154, 205, 50, 0.1)' : 'rgba(0,0,0,0)',
                borderColor: activePhase === idx ? 'rgba(154, 205, 50, 0.3)' : 'rgba(255,255,255,0.05)',
                scale: activePhase === idx ? 1.02 : 1
              }}
              onClick={() => setActivePhase(idx)}
              className={`p-6 rounded-2xl border cursor-pointer group relative overflow-hidden transition-all duration-300`}
            >
              {activePhase === idx && (
                 <motion.div 
                    layoutId="activeGlow"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-primary"
                 />
              )}
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${
                    activePhase === idx 
                      ? 'bg-cyber-primary text-cyber-bg border-cyber-primary' 
                      : 'bg-cyber-dim/10 text-cyber-dim border-cyber-dim/20 group-hover:border-cyber-primary/50'
                  }`}>
                    {data.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-mono mb-1 transition-colors ${activePhase === idx ? 'text-cyber-primary' : 'text-cyber-text/50'}`}>
                      {data.period}
                    </div>
                    <div className={`font-bold text-lg transition-colors ${activePhase === idx ? 'text-cyber-text' : 'text-cyber-text/70'}`}>
                      {data.phase}
                    </div>
                  </div>
                </div>
                {activePhase === idx && <ChevronRight className="text-cyber-primary animate-pulse" />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Detailed View */}
        <div className="lg:col-span-8">
           <AnimatePresence mode="wait">
             <motion.div
               key={activePhase}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="bg-cyber-dark/30 border border-cyber-dim/10 rounded-3xl p-8 min-h-[500px] relative overflow-hidden flex flex-col"
             >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyber-primary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="mb-8 border-b border-cyber-dim/10 pb-6">
                   <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded text-xs font-mono bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20">
                         {roadmapData[activePhase].period}
                      </span>
                      <h3 className="text-3xl font-bold">{roadmapData[activePhase].phase}</h3>
                   </div>
                   <p className="text-cyber-text/60 text-lg">
                      {roadmapData[activePhase].description}
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {roadmapData[activePhase].items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onMouseEnter={() => setHoveredItem(i)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="p-5 rounded-xl bg-cyber-bg/50 border border-cyber-dim/10 hover:border-cyber-primary/30 transition-all group hover:bg-cyber-dim/5 relative overflow-hidden"
                      >
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         
                         <h4 className="font-bold text-cyber-text mb-2 group-hover:text-cyber-primary transition-colors flex items-center gap-2">
                            {item.title}
                         </h4>
                         <p className="text-sm text-cyber-text/60 leading-relaxed">
                            {item.desc}
                         </p>

                         <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            <CheckCircle2 className="w-4 h-4 text-cyber-primary/50" />
                         </div>
                      </motion.div>
                   ))}
                </div>

                {/* Interactive visual element at bottom */}
                <div className="mt-auto pt-8 flex items-center justify-between text-xs font-mono text-cyber-dim/50">
                    <div className="flex gap-2">
                       <span>/// STATUS: PENDING</span>
                       <span>/// PRIORITY: HIGH</span>
                    </div>
                    <div className="w-32 h-1 bg-cyber-dim/10 rounded-full overflow-hidden">
                       <motion.div 
                          className="h-full bg-cyber-primary"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                       />
                    </div>
                </div>

             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
