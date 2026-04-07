import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ManagedIT from "@/pages/services/ManagedIT";
import CyberSecurity from "@/pages/services/CyberSecurity";
import Connectivity from "@/pages/services/Connectivity";
import Mobile from "@/pages/services/Mobile";
import Microsoft365 from "@/pages/services/Microsoft365";
import Wifi from "@/pages/services/Wifi";
import PatTesting from "@/pages/services/PatTesting";
import AI from "@/pages/services/AI";
import AIReadiness from "@/pages/AIReadiness";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services/managed-it" component={ManagedIT} />
          <Route path="/services/cyber-security" component={CyberSecurity} />
          <Route path="/services/connectivity" component={Connectivity} />
          <Route path="/services/mobile" component={Mobile} />
          <Route path="/services/microsoft-365" component={Microsoft365} />
          <Route path="/services/wifi" component={Wifi} />
          <Route path="/services/pat-testing" component={PatTesting} />
          <Route path="/services/ai" component={AI} />
          <Route path="/ai-readiness" component={AIReadiness} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/resources" component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
