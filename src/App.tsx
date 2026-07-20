import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { PageNav } from "./components/PageNav";
import { PageTransition } from "./components/Atmosphere";
import { Home } from "./pages/Home";
import { Forever } from "./pages/Forever";
import { Letter } from "./pages/Letter";
import { Memories } from "./pages/Memories";

export default function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <PageNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/forever"
            element={
              <PageTransition>
                <Forever />
              </PageTransition>
            }
          />
          <Route
            path="/letter"
            element={
              <PageTransition>
                <Letter />
              </PageTransition>
            }
          />
          <Route
            path="/memories"
            element={
              <PageTransition>
                <Memories />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
