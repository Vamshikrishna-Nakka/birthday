import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const petals = Array.from({ length: 14 }, (_, i) => ({
  left: `${6 + ((i * 7) % 88)}%`,
  delay: `${(i % 7) * 0.7}s`,
  dur: `${9 + (i % 5)}s`,
  color: i % 3 === 0 ? "#e8c9a0" : i % 2 === 0 ? "#c45c7a" : "#f2b8c8",
  size: `${12 + (i % 4) * 4}px`,
}));

export function Forever() {
  return (
    <section className="forever">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={
            {
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.dur,
              background: p.color,
              width: p.size,
              height: `calc(${p.size} * 0.7)`,
            } as CSSProperties
          }
          aria-hidden="true"
        />
      ))}

      <div className="forever-inner">
        <motion.p
          className="forever-eyebrow"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 0.8 }}
        >
          For my doctor, my love
        </motion.p>

        <motion.h1
          className="forever-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          We are getting married
        </motion.h1>

        <motion.p
          className="forever-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.7 }}
        >
          Soon, Shravya — you become my forever, and I become yours.
        </motion.p>

        <motion.div
          className="ring-stage"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <div className="ring" aria-hidden="true">
            <span className="ring-diamond" />
          </div>
        </motion.div>

        <motion.p
          className="forever-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
        >
          You spend your days healing others — tonight, let this gift remind you
          that you are deeply cared for too. This birthday is also our soft
          countdown to forever: new vows, new home, and mornings that begin with
          your laugh.
        </motion.p>

        <motion.div
          className="promise-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65 }}
        >
          <div className="promise">
            <strong>One heart</strong>
            <span>Two names</span>
          </div>
          <div className="promise">
            <strong>One home</strong>
            <span>Endless stories</span>
          </div>
          <div className="promise">
            <strong>One forever</strong>
            <span>Starting soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
