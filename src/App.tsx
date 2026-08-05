import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PageTransition } from "./components/Atmosphere";
import { SurpriseGate } from "./components/SurpriseGate";
import { Home } from "./pages/Home";
import { Forever } from "./pages/Forever";
import { Letter } from "./pages/Letter";

const SURPRISE_KEY = "birthday-surprise-opened";

export default function App() {
  const location = useLocation();
  const [opened, setOpened] = useState(
    () => sessionStorage.getItem(SURPRISE_KEY) === "1",
  );

  const showSurprise = !opened;

  const handleOpened = () => {
    sessionStorage.setItem(SURPRISE_KEY, "1");
    setOpened(true);
  };

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        {showSurprise ? (
          <SurpriseGate key="surprise" onOpened={handleOpened} />
        ) : (
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
            <Route path="/memories" element={<Navigate to="/forever" replace />} />
          </Routes>
        )}
      </AnimatePresence>
    </div>
  );
}
