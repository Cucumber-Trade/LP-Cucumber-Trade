import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import RetroLanding from "@/pages/retro-landing";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import EntranceLoader from "@/components/EntranceLoader";
import MusicButton from "@/components/MusicButton";
import arenaMusic from '@assets/../attached_assets/arenaMusic.mp3';

function Router({ isPlaying, toggleMusic }) {
  return (
    <Switch>
      <Route path="/">
        <RetroLanding isPlaying={isPlaying} toggleMusic={toggleMusic} />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route path="/terms-and-conditions">
        <TermsAndConditions />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [entranceComplete, setEntranceComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio(arenaMusic);
    audioRef.current.loop = true;

    // Check if entrance has been seen in this session
    const hasSeenEntrance = sessionStorage.getItem('cucumber-entrance-seen');
    if (hasSeenEntrance === 'true') {
      setShowEntrance(false);
      setEntranceComplete(true);
    }

    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEntranceComplete = () => {
    setShowEntrance(false);
    sessionStorage.setItem('cucumber-entrance-seen', 'true');
    setTimeout(() => {
      setEntranceComplete(true);
    }, 500); // Wait for exit animation
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />

          {/* Show entrance loader if not yet seen in this session */}
          {!entranceComplete && showEntrance && (
            <EntranceLoader onComplete={handleEntranceComplete} />
          )}

          {/* Show main content after entrance completes */}
          {entranceComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Router isPlaying={isPlaying} toggleMusic={toggleMusic} />
            </motion.div>
          )}

          {/* Music Button - Always visible */}
          {entranceComplete && <MusicButton isPlaying={isPlaying} toggleMusic={toggleMusic} />}
        </TooltipProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
}

export default App;
