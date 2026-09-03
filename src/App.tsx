import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => (
  <Routes>
    <Route index element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/en/*" element={<AppRoutes />} />
            <Route path="/fr/*" element={<AppRoutes />} />
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
          <Analytics />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
