import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

const balloons = [
  { left: "3%", size: "48px", color: "#e8a0b4", delay: "0s", dur: "16s", drift: "28px" },
  { left: "11%", size: "36px", color: "#c45c7a", delay: "2.5s", dur: "20s", drift: "-22px" },
  { left: "19%", size: "56px", color: "#e8c9a0", delay: "1s", dur: "18s", drift: "16px" },
  { left: "28%", size: "42px", color: "#f2b8c8", delay: "4.5s", dur: "17s", drift: "-30px" },
  { left: "37%", size: "50px", color: "#d4789a", delay: "0.8s", dur: "21s", drift: "20px" },
  { left: "46%", size: "38px", color: "#c9a06a", delay: "3.2s", dur: "19s", drift: "-18px" },
  { left: "55%", size: "54px", color: "#e8a0b4", delay: "5.5s", dur: "22s", drift: "24px" },
  { left: "64%", size: "40px", color: "#f8d4dc", delay: "1.8s", dur: "16s", drift: "-26px" },
  { left: "73%", size: "46px", color: "#c45c7a", delay: "3.8s", dur: "20s", drift: "14px" },
  { left: "82%", size: "52px", color: "#e8c9a0", delay: "0.4s", dur: "18s", drift: "-20px" },
  { left: "90%", size: "34px", color: "#f2b8c8", delay: "6s", dur: "15s", drift: "12px" },
  { left: "96%", size: "44px", color: "#d4789a", delay: "2.2s", dur: "19s", drift: "-15px" },
];

const risingHearts = [
  { left: "8%", size: "1.1rem", delay: "0s", dur: "14s", drift: "20px" },
  { left: "16%", size: "0.85rem", delay: "2s", dur: "16s", drift: "-18px" },
  { left: "24%", size: "1.35rem", delay: "4.5s", dur: "13s", drift: "24px" },
  { left: "35%", size: "0.95rem", delay: "1.2s", dur: "15s", drift: "-22px" },
  { left: "42%", size: "1.2rem", delay: "5.5s", dur: "17s", drift: "16px" },
  { left: "52%", size: "0.75rem", delay: "3s", dur: "14s", drift: "-14px" },
  { left: "60%", size: "1.4rem", delay: "0.6s", dur: "18s", drift: "28px" },
  { left: "68%", size: "1rem", delay: "4s", dur: "15s", drift: "-20px" },
  { left: "76%", size: "1.15rem", delay: "2.8s", dur: "16s", drift: "12px" },
  { left: "84%", size: "0.9rem", delay: "1.5s", dur: "13s", drift: "-26px" },
  { left: "92%", size: "1.25rem", delay: "5s", dur: "17s", drift: "18px" },
  { left: "5%", size: "0.8rem", delay: "6.5s", dur: "14s", drift: "10px" },
];

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-7.2-4.6-9.5-8.4C.8 9.4 2.2 6 5.4 5.4c1.8-.3 3.5.5 4.6 1.8C11.1 5.9 12.8 5.1 14.6 5.4c3.2.6 4.6 4 2.9 7.2C19.2 16.4 12 21 12 21z" />
    </svg>
  );
}

export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      {balloons.map((b, i) => (
        <span
          key={`b-${i}`}
          className="balloon"
          style={
            {
              left: b.left,
              "--size": b.size,
              "--color": b.color,
              "--delay": b.delay,
              "--dur": b.dur,
              "--drift": b.drift,
            } as CSSProperties
          }
        />
      ))}
      {risingHearts.map((h, i) => (
        <span
          key={`h-${i}`}
          className="heart-rise"
          style={
            {
              left: h.left,
              "--size": h.size,
              "--delay": h.delay,
              "--dur": h.dur,
              "--drift": h.drift,
            } as CSSProperties
          }
        >
          <HeartIcon />
        </span>
      ))}
    </div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="page-stage"
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
