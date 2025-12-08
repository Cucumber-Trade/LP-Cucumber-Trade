import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RetroLanding() {
  const [started, setStarted] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const fullText = "PICKLE AI INITIALIZED ...";
  const [showPressKey, setShowPressKey] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const menuItems = ["START GAME", "HIGH SCORES", "SETTINGS", "CREDITS"];

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
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!started && showPressKey) {
        setStarted(true);
        return;
      }

      if (started) {
        if (e.key === "ArrowDown") {
          setSelectedIndex((prev) => (prev + 1) % menuItems.length);
        } else if (e.key === "ArrowUp") {
          setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        } else if (e.key === "Enter") {
          // Handle selection
          console.log("Selected:", menuItems[selectedIndex]);
        }
      }
    };
    
    // Click handler for "Press Any Key"
    const handleClick = () => {
      if (!started && showPressKey) {
        setStarted(true);
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, [showPressKey, started, selectedIndex]);

  return (
    <div className={`relative min-h-screen w-full bg-retro-bg text-retro-green font-vt323 overflow-hidden select-none ${!started ? 'cursor-none' : ''}`}>
      {/* CRT Effects */}
      <div className="crt-scanline" />
      <div className="crt-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <AnimatePresence mode="wait">
          {!started ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-press-start text-glow tracking-wider">
                CUCUMBER.TRADE v1.0
              </h1>
              
              <div className="h-8 text-2xl md:text-3xl text-retro-green-dim">
                {loadingText}<span className="animate-cursor-blink">_</span>
              </div>

              {showPressKey && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="mt-16 text-2xl md:text-4xl font-press-start text-retro-green animate-pulse"
                >
                  PRESS ANY KEY TO CONTINUE
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-2xl border-4 border-retro-green p-8 bg-retro-bg/90 backdrop-blur-sm shadow-[0_0_20px_var(--color-retro-green)]"
            >
              <div className="flex justify-between items-center mb-8 border-b-2 border-retro-green pb-4">
                <h2 className="text-3xl font-press-start">MAIN MENU</h2>
                <span className="animate-pulse">● ONLINE</span>
              </div>

              <div className="grid gap-6 text-left text-2xl font-press-start">
                {menuItems.map((item, index) => (
                  <button 
                    key={item}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`group flex items-center gap-4 p-4 transition-colors ${
                      index === selectedIndex ? 'bg-retro-green text-retro-bg' : 'hover:bg-retro-green hover:text-retro-bg'
                    }`}
                  >
                    <span className={`opacity-0 ${index === selectedIndex ? 'opacity-100' : 'group-hover:opacity-100'}`}>▶</span>
                    {item}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 text-sm text-retro-green-dim text-center font-sans uppercase tracking-widest">
                © 1972 ATARI INC. ALL RIGHTS RESERVED.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Corner UI */}
      <div className="absolute top-4 left-4 z-20 font-press-start text-xs text-retro-green-dim">
        MEM: 64KB OK
      </div>
      <div className="absolute bottom-4 right-4 z-20 font-press-start text-xs text-retro-green-dim animate-pulse">
        INSERT COIN
      </div>
    </div>
  );
}
