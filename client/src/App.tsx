import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import RetroLanding from "@/pages/retro-landing";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EntranceLoader from "@/components/EntranceLoader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={RetroLanding} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [entranceComplete, setEntranceComplete] = useState(false);

  useEffect(() => {
    // Check if entrance has been seen in this session
    const hasSeenEntrance = sessionStorage.getItem('cucumber-entrance-seen');
    if (hasSeenEntrance === 'true') {
      setShowEntrance(false);
      setEntranceComplete(true);
    }
  }, []);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
    sessionStorage.setItem('cucumber-entrance-seen', 'true');
    setTimeout(() => {
      setEntranceComplete(true);
    }, 300); // Wait for exit animation
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
              <Router />
            </motion.div>
          )}
        </TooltipProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
}

export default App;
