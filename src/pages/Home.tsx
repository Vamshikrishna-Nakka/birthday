import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const titleEase = [0.22, 1, 0.36, 1] as const;

const wishWords = ["Happy", "Birthday"];

const floatingHearts = [
  { left: "6%", delay: "0s", dur: "11s", size: "1.1rem" },
  { left: "14%", delay: "2.2s", dur: "13s", size: "0.85rem" },
  { left: "28%", delay: "0.8s", dur: "10s", size: "1.25rem" },
  { left: "42%", delay: "3.1s", dur: "12s", size: "0.9rem" },
  { left: "58%", delay: "1.4s", dur: "14s", size: "1.15rem" },
  { left: "72%", delay: "2.7s", dur: "11s", size: "0.8rem" },
  { left: "84%", delay: "0.4s", dur: "13s", size: "1.05rem" },
  { left: "92%", delay: "3.8s", dur: "10s", size: "0.95rem" },
  { left: "20%", delay: "4.5s", dur: "12s", size: "0.75rem" },
  { left: "66%", delay: "5.2s", dur: "11s", size: "1rem" },
];

const sparkles = [
  { left: "12%", top: "18%", delay: "0s" },
  { left: "78%", top: "22%", delay: "0.8s" },
  { left: "18%", top: "68%", delay: "1.4s" },
  { left: "86%", top: "62%", delay: "0.4s" },
  { left: "48%", top: "12%", delay: "1.1s" },
  { left: "8%", top: "42%", delay: "1.8s" },
  { left: "92%", top: "40%", delay: "0.6s" },
];

export function Home() {
  return (
    <section className="home home-valentine">
      <div className="home-glow" aria-hidden="true" />
      <div className="home-veil" aria-hidden="true" />
      <div className="home-sheen" aria-hidden="true" />

      <motion.div
        className="home-bloom"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 0.95, 0.7], scale: [0.6, 1.15, 1] }}
        transition={{ duration: 1.7, ease: titleEase }}
      />
      <div className="home-bloom home-bloom-soft" aria-hidden="true" />
      <div className="home-orb home-orb-a" aria-hidden="true" />
      <div className="home-orb home-orb-b" aria-hidden="true" />

      <div className="home-sparkles" aria-hidden="true">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="home-sparkle-dot"
            style={
              {
                left: s.left,
                top: s.top,
                "--delay": s.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="home-hearts" aria-hidden="true">
        {floatingHearts.map((h, i) => (
          <span
            key={i}
            className="home-float-heart"
            style={
              {
                left: h.left,
                "--delay": h.delay,
                "--dur": h.dur,
                "--size": h.size,
              } as CSSProperties
            }
          >
            ♥
          </span>
        ))}
      </div>

      <div className="home-content">
        <motion.div
          className="home-card"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: titleEase }}
        >
          <span className="home-ornament home-ornament-tl" aria-hidden="true" />
          <span className="home-ornament home-ornament-tr" aria-hidden="true" />
          <span className="home-ornament home-ornament-bl" aria-hidden="true" />
          <span className="home-ornament home-ornament-br" aria-hidden="true" />

          <motion.p
            className="home-date"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: titleEase }}
          >
            With all my heart · 21 July
          </motion.p>

          <div className="home-divider" aria-hidden="true">
            <span />
            <i>♥</i>
            <span />
          </div>

          <motion.h1 className="wish-title" aria-label="Happy Birthday Bujjulu">
            <span className="wish-main" aria-hidden="true">
              {wishWords.map((word, wi) => (
                <span key={word} className="wish-word">
                  {word.split("").map((letter, li) => (
                    <motion.span
                      key={`${word}-${li}`}
                      className="wish-letter"
                      initial={{ opacity: 0, y: 28, filter: "blur(7px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.25 + wi * 0.22 + li * 0.04,
                        duration: 0.65,
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
              className="wish-name"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.7, ease: titleEase }}
            >
              <span className="wish-love-halo" aria-hidden="true" />
              <span className="wish-name-text">Bujjulu</span>
              <motion.span
                className="wish-heart"
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: titleEase }}
              >
                ♥
              </motion.span>
            </motion.span>
          </motion.h1>

          <div className="home-divider" aria-hidden="true">
            <span />
            <i>♥</i>
            <span />
          </div>

          <motion.blockquote
            className="home-quote-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7, ease: titleEase }}
          >
            <span className="home-quote-mark" aria-hidden="true">
              “
            </span>
            <p className="home-quote-text">
              To my brilliant doctor — today the whole world softens for you.
              Soft words, quiet love, and a letter written only for your heart.
            </p>
            <footer className="home-quote-sign">— Forever yours, Babes</footer>
          </motion.blockquote>

          <motion.div
            className="home-cta-wrap"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 0.55, ease: titleEase }}
          >
            <Link to="/letter" className="home-next-btn">
              Open your letter
              <span aria-hidden="true">→</span>
            </Link>
            <p className="home-cta-note">A story written only for you</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
