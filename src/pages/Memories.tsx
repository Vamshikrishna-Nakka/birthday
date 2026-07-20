import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const moments = [
  {
    caption: "17 May 2026 · Interest",
    note: "One late-night click",
    photo: `${base}photos/story-01-interest.png`,
  },
  {
    caption: "The food joke",
    note: "Just kidding!",
    photo: `${base}photos/story-02-food-joke.png`,
  },
  {
    caption: "25 May 2026 · First call",
    note: "When her voice felt real",
    photo: `${base}photos/story-03-first-call.png`,
  },
  {
    caption: "30 May 2026 · Video call",
    note: "She asked with a smile",
    photo: `${base}photos/story-04-video-call.png`,
  },
  {
    caption: "28 May 2026 · Knock knock",
    note: "Outside her hostel",
    photo: `${base}photos/story-05-first-meet.png`,
  },
  {
    caption: "Cafe Ikigai · Table 6",
    note: "A favourite place forever",
    photo: `${base}photos/story-06-cafe.png`,
  },
  {
    caption: "14 June 2026 · First photo",
    note: "Two hearts finding each other",
    photo: `${base}photos/story-07-second-date.jpeg`,
  },
  {
    caption: "12 July 2026 · Lagna Patrika",
    note: "One beautiful family",
    photo: `${base}photos/story-08-lagna.jpeg`,
  },
];

export function Memories() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState<number[]>([]);

  const openMemory = (i: number) => {
    setOpened((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  const unlocked = opened.length;
  const allDone = unlocked === moments.length;

  return (
    <section className="memories">
      <header className="memories-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our story in frames
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
        >
          {allDone
            ? "Every memory is open — our whole journey."
            : `Tap each frame to open · ${unlocked} / ${moments.length}`}
        </motion.p>
      </header>

      <div className="memories-mobile">
        <div className="memory-reel">
          {moments.map((m, i) => {
            const isOpen = opened.includes(i);
            return (
              <motion.article
                key={m.caption}
                className={`memory-reel-card${isOpen ? " is-open" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(i * 0.04, 0.2),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <button
                  type="button"
                  className="memory-reel-toggle"
                  onClick={() => openMemory(i)}
                  aria-expanded={isOpen}
                  aria-label={isOpen ? m.caption : `Tap to open memory ${i + 1}`}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="open"
                        className="memory-reel-opened"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="memory-reel-meta">
                          <span className="memory-reel-num">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="memory-reel-copy">
                            <strong>{m.caption}</strong>
                            <span>{m.note}</span>
                          </div>
                        </div>
                        <div
                          className="memory-reel-photo"
                          style={{ backgroundImage: `url(${m.photo})` }}
                          role="img"
                          aria-label={m.caption}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sealed"
                        className="memory-reel-sealed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="memory-reel-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="memory-reel-sealed-title">A sealed memory</span>
                        <span className="memory-reel-sealed-hint">Tap to open</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="memories-finale">
        <button
          type="button"
          className="memories-next"
          onClick={() => navigate("/forever")}
        >
          Continue to forever
        </button>
      </div>
    </section>
  );
}
