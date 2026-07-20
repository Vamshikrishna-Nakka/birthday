import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const moments = [
  {
    left: "2%",
    string: "64px",
    delay: "0s",
    dur: "5.5s",
    caption: "17 May 2026 · Interest",
    note: "One late-night click",
    photo: `${base}photos/story-01-interest.png`,
  },
  {
    left: "18%",
    string: "96px",
    delay: "0.3s",
    dur: "6s",
    caption: "The food joke",
    note: "Just kidding!",
    photo: `${base}photos/story-02-food-joke.png`,
  },
  {
    left: "34%",
    string: "58px",
    delay: "0.15s",
    dur: "5.8s",
    caption: "25 May 2026 · First call",
    note: "When her voice felt real",
    photo: `${base}photos/story-03-first-call.png`,
  },
  {
    left: "50%",
    string: "88px",
    delay: "0.45s",
    dur: "6.3s",
    caption: "30 May 2026 · Video call",
    note: "She asked with a smile",
    photo: `${base}photos/story-04-video-call.png`,
  },
  {
    left: "66%",
    string: "70px",
    delay: "0.2s",
    dur: "5.6s",
    caption: "28 May 2026 · Knock knock",
    note: "Outside her hostel",
    photo: `${base}photos/story-05-first-meet.png`,
  },
  {
    left: "82%",
    string: "102px",
    delay: "0.55s",
    dur: "6.4s",
    caption: "Cafe Ikigai · Table 6",
    note: "A favourite place forever",
    photo: `${base}photos/story-06-cafe.png`,
  },
  {
    left: "10%",
    string: "72px",
    delay: "0.1s",
    dur: "5.7s",
    caption: "14 June 2026 · First photo",
    note: "Two hearts finding each other",
    photo: `${base}photos/story-07-second-date.jpeg`,
  },
  {
    left: "40%",
    string: "90px",
    delay: "0.35s",
    dur: "6.1s",
    caption: "12 July 2026 · Lagna Patrika",
    note: "One beautiful family",
    photo: `${base}photos/story-08-lagna.jpeg`,
  },
];

export function Memories() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [unlocked, setUnlocked] = useState<number[]>([]);
  const [focus, setFocus] = useState<number | null>(null);

  const unlockTile = (i: number) => {
    setUnlocked((prev) => (prev.includes(i) ? prev : [...prev, i]));
    setFocus(i);
  };

  const allDone = unlocked.length === moments.length;

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
          <span className="memories-hint-desk">
            Hung with love — from one late-night interest to forever.
          </span>
          <span className="memories-hint-mobile">
            {opened
              ? allDone
                ? "Every memory unlocked — our whole journey."
                : "Tap each sealed tile to unlock a memory."
              : "A sealed box of us — open it to begin."}
          </span>
        </motion.p>
      </header>

      {/* Desktop hanger */}
      <div className="hanger hanger-desk">
        <div className="hanger-rail" aria-hidden="true" />
        {moments.slice(0, 6).map((frame, i) => (
          <motion.figure
            key={frame.caption}
            className="frame"
            style={
              {
                left: frame.left,
                "--string": frame.string,
                animationDelay: frame.delay,
                animationDuration: frame.dur,
              } as CSSProperties
            }
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="frame-string" style={{ height: frame.string }} />
            <div className="frame-body">
              <div
                className="frame-photo"
                style={{ backgroundImage: `url(${frame.photo})` }}
                role="img"
                aria-label={frame.caption}
              />
              <figcaption className="frame-caption">{frame.caption}</figcaption>
            </div>
          </motion.figure>
        ))}
      </div>

      <div className="memories-grid hanger-desk">
        {moments.slice(6).map((frame, i) => (
          <motion.figure
            key={frame.caption}
            className="memory-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.1, duration: 0.6 }}
          >
            <div
              className="memory-card-photo"
              style={{ backgroundImage: `url(${frame.photo})` }}
              role="img"
              aria-label={frame.caption}
            />
            <figcaption>{frame.caption}</figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Mobile puzzle / box reveal */}
      <div className="memories-mobile">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="box"
              className="memory-box"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <div className="memory-box-lid" aria-hidden="true" />
              <div className="memory-box-body">
                <p className="memory-box-label">8 sealed memories</p>
                <p className="memory-box-sub">Tap to open our story box</p>
                <button
                  type="button"
                  className="memory-box-btn"
                  onClick={() => setOpened(true)}
                >
                  Open the box
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="puzzle"
              className="memory-puzzle"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="puzzle-progress">
                {unlocked.length} / {moments.length} unlocked
              </p>

              <div className="puzzle-grid">
                {moments.map((m, i) => {
                  const isOn = unlocked.includes(i);
                  return (
                    <button
                      key={m.caption}
                      type="button"
                      className={`puzzle-tile ${isOn ? "is-open" : ""}`}
                      onClick={() => unlockTile(i)}
                      aria-label={isOn ? m.caption : `Unlock memory ${i + 1}`}
                    >
                      <span className="puzzle-face puzzle-back">
                        <span className="puzzle-num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="puzzle-lock">Tap</span>
                      </span>
                      <span
                        className="puzzle-face puzzle-front"
                        style={{ backgroundImage: `url(${m.photo})` }}
                      />
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {focus !== null && unlocked.includes(focus) && (
                  <motion.div
                    key={focus}
                    className="puzzle-focus"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                  >
                    <div
                      className="puzzle-focus-photo"
                      style={{ backgroundImage: `url(${moments[focus].photo})` }}
                    />
                    <div className="puzzle-focus-copy">
                      <strong>{moments[focus].caption}</strong>
                      <span>{moments[focus].note}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {allDone && (
                <motion.p
                  className="puzzle-done"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Every piece of us is open now.
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
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
