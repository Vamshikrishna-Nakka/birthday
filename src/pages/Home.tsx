import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Atmosphere } from "../components/Atmosphere";
import portraitSrc from "../assets/shravya-home.jpeg";

const titleEase = [0.22, 1, 0.36, 1] as const;

const wishWords = ["Happy", "Birthday"];

const loveNotes = [
  { text: "My forever doctor", delay: 1.55, x: -1 },
  { text: "You make ordinary days glow", delay: 1.75, x: 1 },
  { text: "Today is all yours, Bujjulu", delay: 1.95, x: -1 },
];

const petals = [
  { left: "8%", delay: "0s", dur: "11s", size: "14px", rot: "-20deg" },
  { left: "22%", delay: "1.8s", dur: "13s", size: "11px", rot: "18deg" },
  { left: "38%", delay: "0.6s", dur: "10s", size: "16px", rot: "-8deg" },
  { left: "55%", delay: "2.4s", dur: "12s", size: "12px", rot: "24deg" },
  { left: "70%", delay: "1.1s", dur: "14s", size: "15px", rot: "-14deg" },
  { left: "84%", delay: "3s", dur: "11s", size: "10px", rot: "10deg" },
  { left: "14%", delay: "4s", dur: "12.5s", size: "13px", rot: "6deg" },
  { left: "92%", delay: "2s", dur: "9.5s", size: "12px", rot: "-22deg" },
];

function Bouquet({ side }: { side: "left" | "right" }) {
  return (
    <div className={`bouquet bouquet-${side}`} aria-hidden="true">
      <span className="bouquet-stem" />
      <span className="bloom bloom-a" />
      <span className="bloom bloom-b" />
      <span className="bloom bloom-c" />
      <span className="bloom bloom-d" />
      <span className="bloom bloom-e" />
      <span className="leaf leaf-a" />
      <span className="leaf leaf-b" />
    </div>
  );
}

export function Home() {
  return (
    <section className="home">
      <div className="home-glow" aria-hidden="true" />
      <motion.div
        className="home-bloom"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 0.9, 0.6], scale: [0.6, 1.12, 1] }}
        transition={{ duration: 1.5, ease: titleEase }}
      />
      <Atmosphere />

      <div className="petal-rain" aria-hidden="true">
        {petals.map((p, i) => (
          <span
            key={i}
            className="petal"
              style={
                {
                  left: p.left,
                  "--delay": p.delay,
                  "--dur": p.dur,
                  "--size": p.size,
                  "--rot": p.rot,
                } as CSSProperties
              }
          />
        ))}
      </div>

      <div className="home-content">
        <motion.p
          className="home-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: titleEase }}
        >
          A little world made for you
        </motion.p>

        <motion.h1 className="wish-title" aria-label="Happy Birthday My Love">
          <span className="wish-main" aria-hidden="true">
            {wishWords.map((word, wi) => (
              <span key={word} className="wish-word">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${word}-${li}`}
                    className="wish-letter"
                    initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.08 + wi * 0.22 + li * 0.04,
                      duration: 0.6,
                      ease: titleEase,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>

          <motion.span
            className="wish-love"
            initial={{ opacity: 0, y: 24, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.8, ease: titleEase }}
          >
            <span className="wish-love-text">My Love</span>
            <motion.span
              className="wish-heart"
              aria-hidden="true"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.55, ease: titleEase }}
            >
              ♥
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.div
          className="home-hero"
          initial={{ opacity: 0, y: 36, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.05, duration: 0.9, ease: titleEase }}
        >
          <Bouquet side="left" />
          <div className="home-portrait-wrap">
            <div className="home-portrait-ring" aria-hidden="true" />
            <img
              src={portraitSrc}
              alt="A portrait for my love"
              className="home-portrait"
              draggable={false}
            />
          </div>
          <Bouquet side="right" />
        </motion.div>

        <motion.p
          className="home-lead"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.65, ease: titleEase }}
        >
          To my brilliant doctor — flowers, soft words, and every page that follows.
        </motion.p>

        <div className="love-notes">
          {loveNotes.map((note) => (
            <motion.p
              key={note.text}
              className={`love-note ${note.x < 0 ? "is-left" : "is-right"}`}
              initial={{ opacity: 0, x: note.x * 24, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: note.delay, duration: 0.65, ease: titleEase }}
            >
              {note.text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.55, ease: titleEase }}
        >
          <Link to="/letter" className="home-next-btn">
            Your letter awaits
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
