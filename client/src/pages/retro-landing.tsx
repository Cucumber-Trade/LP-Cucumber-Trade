import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Terminal, Cpu, Zap, Globe, Shield, Activity, BarChart3, Lock } from "lucide-react";

export default function CyberLanding() {
  const [started, setStarted] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const fullText = "INITIALIZING CUCUMBER PROTOCOL...";
  const [showPressKey, setShowPressKey] = useState(false);
  
  const section2Ref = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowPressKey(true), 500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Key press handler
  useEffect(() => {
    const handleStart = () => {
      if (!started && showPressKey) {
        setStarted(true);
        setTimeout(() => {
          section2Ref.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    
    const handleKeyPress = (e: KeyboardEvent) => {
      handleStart();
    };
    
    window.addEventListener("keydown", handleKeyPress);
    if (!started) {
      window.addEventListener("click", handleStart);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleStart);
    };
  }, [showPressKey, started]);

  return (
    <div className="relative min-h-screen w-full bg-cyber-bg text-cyber-text font-rajdhani selection:bg-cyber-primary selection:text-cyber-bg">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.03),transparent_70%)]" />
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-cyber-secondary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-cyber-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* SECTION 1: HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        {/* HUD Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-cyber-primary/30 rounded-tl-3xl" />
        <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-cyber-primary/30 rounded-tr-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-cyber-primary/30 rounded-bl-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-cyber-primary/30 rounded-br-3xl" />

        <div className="space-y-6 max-w-4xl mx-auto backdrop-blur-sm p-12 border border-cyber-primary/10 rounded-lg bg-cyber-dark/50 shadow-2xl relative">
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyber-primary" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyber-primary" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyber-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyber-primary" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-cyber-secondary tracking-[0.5em] text-sm font-bold">
              <span className="w-2 h-2 bg-cyber-secondary rounded-full animate-pulse" />
              SYSTEM ONLINE
              <span className="w-2 h-2 bg-cyber-secondary rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyber-primary text-glow-cyber mb-2">
              CUCUMBER
              <span className="text-cyber-primary">.TRADE</span>
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50 mb-6" />
          </motion.div>
          
          <div className="h-8 text-xl md:text-2xl text-cyber-dim font-mono tracking-wider">
            {loadingText}<span className="animate-pulse text-cyber-primary">_</span>
          </div>

          <AnimatePresence>
            {showPressKey && !started && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="mt-12"
              >
                <button 
                  className="group relative px-8 py-4 bg-transparent overflow-hidden"
                  onClick={() => setStarted(true)}
                >
                  <div className="absolute inset-0 w-full h-full bg-cyber-primary/10 group-hover:bg-cyber-primary/20 transition-all duration-300 clip-corner-br" />
                  <div className="absolute inset-0 w-full h-full border border-cyber-primary/50 group-hover:border-cyber-primary transition-all duration-300 clip-corner-br" />
                  
                  <span className="relative flex items-center gap-3 text-cyber-primary font-orbitron tracking-widest text-lg group-hover:text-white transition-colors">
                    INITIALIZE SEQUENCE
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Status Indicators */}
        <div className="absolute top-6 left-6 z-20 flex gap-4 text-xs font-mono text-cyber-dim">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyber-primary" />
            <span>CPU: 12%</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyber-secondary" />
            <span>NET: CONNECTED</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: FEATURES */}
      <div ref={section2Ref} className="relative z-10 min-h-screen p-8 md:p-20 bg-cyber-dark/80 backdrop-blur-md border-t border-cyber-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-cyber-primary/20 pb-6">
            <div>
              <div className="text-cyber-primary font-mono text-sm mb-2 tracking-widest">MODULES // V 2.0.4</div>
              <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
                CORE <span className="text-cyber-primary">SYSTEMS</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-cyber-dim font-mono mt-4 md:mt-0">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               ALL SYSTEMS OPERATIONAL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Terminal, title: "ALGO_TRADING", desc: "Automated high-frequency arbitrage across decentralized brine pools." },
              { icon: BarChart3, title: "CRUNCH_METRICS", desc: "Real-time acoustic analysis of texture integrity and snap coefficients." },
              { icon: Zap, title: "FLASH_PICKLING", desc: "Zero-latency fermentation protocols executed at the edge." },
              { icon: Globe, title: "GLOBAL_INDEX", desc: "Worldwide vegetable liquidity aggregation and market making." },
              { icon: Lock, title: "JAR_SECURITY", desc: "Quantum-resistant encryption for your digital preservation assets." },
              { icon: Shield, title: "ACID_DEFENSE", desc: "Proactive pH monitoring and contaminant neutralization systems." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-cyber-bg/50 border border-cyber-primary/10 hover:border-cyber-primary/50 transition-all duration-300 clip-corner-tl-br hover:bg-cyber-primary/5 hover:box-glow-cyber"
              >
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <feature.icon className="w-24 h-24 text-cyber-primary/10 -rotate-12" />
                </div>
                
                <div className="relative z-10">
                    <div className="w-12 h-12 mb-6 bg-cyber-primary/10 flex items-center justify-center rounded border border-cyber-primary/30 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-cyber-primary" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold mb-3 text-white group-hover:text-cyber-primary transition-colors">
                        {feature.title}
                    </h3>
                    <p className="text-cyber-dim group-hover:text-cyber-text leading-relaxed transition-colors">
                        {feature.desc}
                    </p>
                </div>
                
                {/* Tech decorations */}
                <div className="absolute bottom-4 right-4 w-8 h-1 bg-cyber-primary/20 group-hover:bg-cyber-primary/50 transition-colors" />
                <div className="absolute bottom-6 right-4 w-4 h-1 bg-cyber-primary/20 group-hover:bg-cyber-primary/50 transition-colors" />
              </motion.div>
            ))}
            
          </div>
          
           {/* CTA Section */}
           <div className="mt-20 flex justify-center">
              <button className="relative px-12 py-6 bg-cyber-primary text-cyber-dark font-orbitron font-black text-xl tracking-widest clip-corner-br hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                LAUNCH TERMINAL
              </button>
           </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 bg-cyber-dark border-t border-cyber-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <h4 className="font-orbitron text-2xl text-white mb-6">CUCUMBER<span className="text-cyber-primary">.TRADE</span></h4>
                <p className="text-cyber-dim max-w-sm mb-6">
                    The world's most advanced digital pickling infrastructure. Building the future of preserved assets.
                </p>
                <div className="flex gap-4">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 border border-cyber-primary/30 flex items-center justify-center hover:bg-cyber-primary hover:text-black cursor-pointer transition-all rounded-sm">
                            <Activity className="w-4 h-4" />
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
              <h5 className="font-mono text-cyber-primary mb-6 tracking-widest">PROTOCOL</h5>
              <ul className="space-y-4 text-cyber-dim font-rajdhani text-lg">
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Network Status</li>
                <li className="hover:text-white cursor-pointer transition-colors">Governance</li>
                <li className="hover:text-white cursor-pointer transition-colors">Audits</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-mono text-cyber-primary mb-6 tracking-widest">AGENCY</h5>
              <ul className="space-y-4 text-cyber-dim font-rajdhani text-lg">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Legal</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cyber-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center text-cyber-dim font-mono text-xs">
            <div>© 2025 CUCUMBER TRADE INC. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
                <span>PRIVACY_PROTOCOL</span>
                <span>TERMS_OF_EXECUTION</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
