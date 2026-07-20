import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SurpriseGateProps = {
  onOpened: () => void;
};

const burstItems = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  angle: (i / 28) * 360,
  dist: 90 + (i % 5) * 38,
  size: 10 + (i % 4) * 5,
  delay: (i % 8) * 0.04,
  kind: i % 3 === 0 ? "heart" : "petal",
  color: i % 4 === 0 ? "#e8c9a0" : i % 2 === 0 ? "#e85a8a" : "#f2b8c8",
}));

export function SurpriseGate({ onOpened }: SurpriseGateProps) {
  const [opening, setOpening] = useState(false);
  const [burst, setBurst] = useState(false);

  const particles = useMemo(() => burstItems, []);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setBurst(true), 280);
    window.setTimeout(() => onOpened(), 2100);
  };

  return (
    <motion.section
      className="surprise"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="surprise-glow" aria-hidden="true" />

      <motion.p
        className="surprise-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55 }}
      >
        A little surprise for you
      </motion.p>

      <motion.h1
        className="surprise-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.6 }}
      >
        Open your gift
      </motion.h1>

      <motion.button
        type="button"
        className={`surprise-box${opening ? " is-opening" : ""}`}
        onClick={handleOpen}
        disabled={opening}
        aria-label="Open the surprise box"
        initial={{ opacity: 0, scale: 0.86, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 140, damping: 16 }}
        whileHover={opening ? undefined : { scale: 1.04, y: -4 }}
        whileTap={opening ? undefined : { scale: 0.98 }}
      >
        <span className="surprise-lid">
          <span className="surprise-bow" aria-hidden="true" />
        </span>
        <span className="surprise-body">
          <span className="surprise-ribbon-v" aria-hidden="true" />
          <span className="surprise-ribbon-h" aria-hidden="true" />
        </span>
      </motion.button>

      <AnimatePresence>
        {burst && (
          <div className="surprise-burst" aria-hidden="true">
            {particles.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * p.dist;
              const y = Math.sin(rad) * p.dist - 40;
              return (
                <motion.span
                  key={p.id}
                  className={`surprise-particle is-${p.kind}`}
                  style={{
                    width: p.size,
                    height: p.kind === "heart" ? p.size : p.size * 1.25,
                    background: p.color,
                    color: p.color,
                  }}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.2, rotate: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x,
                    y: y - 80,
                    scale: [0.2, 1.15, 1, 0.7],
                    rotate: p.angle * 0.4,
                  }}
                  transition={{
                    duration: 1.55,
                    delay: p.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {p.kind === "heart" ? "♥" : null}
                </motion.span>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <motion.p
        className="surprise-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 0 : [0.45, 0.9, 0.45] }}
        transition={
          opening
            ? { duration: 0.3 }
            : { delay: 0.9, duration: 2.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {opening ? "For you…" : "Tap the box to open"}
      </motion.p>
    </motion.section>
  );
}
