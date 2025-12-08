import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Terminal, Cpu, Zap, Globe, Shield } from "lucide-react";

export default function RetroLanding() {
  const [started, setStarted] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const fullText = "PICKLE AI INITIALIZED ...";
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
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Key press handler
  useEffect(() => {
    const handleStart = () => {
      if (!started && showPressKey) {
        setStarted(true);
        // Small delay to allow state update before scrolling
        setTimeout(() => {
          section2Ref.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };
    
    const handleKeyPress = (e: KeyboardEvent) => {
      handleStart();
    };
    
    window.addEventListener("keydown", handleKeyPress);
    // We only attach the global click listener if we haven't started yet
    if (!started) {
      window.addEventListener("click", handleStart);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleStart);
    };
  }, [showPressKey, started]);

  return (
    <div className="relative min-h-screen w-full bg-retro-bg text-retro-green font-vt323 overflow-x-hidden selection:bg-retro-green selection:text-retro-bg">
      {/* CRT Effects */}
      <div className="crt-scanline" />
      <div className="crt-overlay" />
      
      {/* SECTION 1: HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-press-start text-glow tracking-wider">
            CUCUMBER.TRADE v1.0
          </h1>
          
          <div className="h-8 text-2xl md:text-3xl text-retro-green-dim">
            {loadingText}<span className="animate-cursor-blink">_</span>
          </div>

          <AnimatePresence>
            {showPressKey && !started && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-16"
              >
                <div className="text-2xl md:text-4xl font-press-start text-retro-green animate-pulse mb-8">
                  PRESS ANY KEY TO CONTINUE
                </div>
                <div className="text-retro-green-dim text-sm animate-bounce">
                  <ChevronDown className="w-8 h-8 mx-auto" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Corner UI */}
        <div className="absolute top-4 left-4 z-20 font-press-start text-xs text-retro-green-dim">
          MEM: 64KB OK
        </div>
        <div className="absolute top-4 right-4 z-20 font-press-start text-xs text-retro-green-dim">
          SYS: READY
        </div>
      </div>

      {/* SECTION 2: FEATURES */}
      <div ref={section2Ref} className="relative z-10 min-h-screen p-8 md:p-20 bg-retro-bg border-t-2 border-retro-green-dim">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 border-b-2 border-retro-green pb-4 flex justify-between items-end">
            <h2 className="text-3xl md:text-5xl font-press-start text-glow">
              SYSTEM_FEATURES.EXE
            </h2>
            <span className="text-xl hidden md:inline-block">PAGE 01/01</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group">
              <div className="mb-4 text-retro-green group-hover:text-glow">
                <Terminal className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-press-start mb-4">ALGO_TRADING</h3>
              <p className="text-xl leading-relaxed text-retro-green-dim group-hover:text-retro-green transition-colors">
                Advanced cucumber arbitrage algorithms running on decentralized brining networks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group">
              <div className="mb-4 text-retro-green group-hover:text-glow">
                <Cpu className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-press-start mb-4">CRUNCH_ANALYSIS</h3>
              <p className="text-xl leading-relaxed text-retro-green-dim group-hover:text-retro-green transition-colors">
                Real-time texture monitoring and audible crunch verification protocols.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group">
              <div className="mb-4 text-retro-green group-hover:text-glow">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-press-start mb-4">FLASH_PICKLING</h3>
              <p className="text-xl leading-relaxed text-retro-green-dim group-hover:text-retro-green transition-colors">
                High-frequency fermentation execution. Zero-latency brine injection.
              </p>
            </div>

             {/* Feature 4 */}
             <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group">
              <div className="mb-4 text-retro-green group-hover:text-glow">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-press-start mb-4">GLOBAL_MARKET</h3>
              <p className="text-xl leading-relaxed text-retro-green-dim group-hover:text-retro-green transition-colors">
                Access to worldwide vegetable indices. Trade gherkins 24/7.
              </p>
            </div>

            {/* Feature 5 */}
             <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group">
              <div className="mb-4 text-retro-green group-hover:text-glow">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-press-start mb-4">SECURE_JAR</h3>
              <p className="text-xl leading-relaxed text-retro-green-dim group-hover:text-retro-green transition-colors">
                Vacuum-sealed encryption for your digital assets. Air-tight security.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="border-2 border-retro-green p-6 hover:bg-retro-green/10 transition-colors group flex items-center justify-center">
              <button className="w-full h-full flex flex-col items-center justify-center gap-4 py-8 border-2 border-dashed border-retro-green hover:border-solid hover:bg-retro-green hover:text-retro-bg transition-all">
                <span className="text-2xl font-press-start">START NOW</span>
                <span className="animate-pulse">_</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 py-12 bg-retro-bg border-t border-retro-green-dim text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-xl">
            <div className="flex flex-col gap-4">
              <h4 className="font-press-start text-retro-green mb-4">LINKS</h4>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Documentation</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">API Status</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Careers</a>
            </div>
            <div className="flex flex-col gap-4">
               <h4 className="font-press-start text-retro-green mb-4">LEGAL</h4>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Terms of Service</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Privacy Policy</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Cookie Policy</a>
            </div>
            <div className="flex flex-col gap-4">
               <h4 className="font-press-start text-retro-green mb-4">SOCIAL</h4>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Twitter / X</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">Discord</a>
              <a href="#" className="hover:text-retro-green-dim hover:underline decoration-retro-green">GitHub</a>
            </div>
          </div>
          <div className="border-t border-retro-green-dim pt-8 text-retro-green-dim font-sans text-sm">
            © 2025 CUCUMBER TRADE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
