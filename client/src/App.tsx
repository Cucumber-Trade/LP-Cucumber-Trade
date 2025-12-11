import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import NotFound from "@/pages/not-found";
import RetroLanding from "@/pages/retro-landing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={RetroLanding} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
}

export default App;
