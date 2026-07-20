import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const frames = [
  {
    left: "8%",
    string: "72px",
    delay: "0s",
    dur: "5.5s",
    caption: "The day I knew",
    photo:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    left: "28%",
    string: "110px",
    delay: "0.4s",
    dur: "6.2s",
    caption: "Your soft smile",
    photo:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
  },
  {
    left: "48%",
    string: "64px",
    delay: "0.2s",
    dur: "5.8s",
    caption: "Us, becoming us",
    photo:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    left: "68%",
    string: "96px",
    delay: "0.6s",
    dur: "6.5s",
    caption: "Almost forever",
    photo:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
  },
];

export function Memories() {
  return (
    <section className="memories">
      <header className="memories-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hung with love
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65 }}
        >
          A little gallery of us — swap these placeholders with your favourite
          photos of Shravya and the moments that made you choose forever.
        </motion.p>
      </header>

      <div className="hanger">
        <div className="hanger-rail" aria-hidden="true" />
        {frames.map((frame, i) => (
          <motion.figure
            key={i}
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
            transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

      <p className="memories-note">
        Tip: replace image URLs in Memories.tsx with files from /public/photos
      </p>

      <div className="memories-finale">
        <p className="brand-mark">Happy Birthday, Shravya</p>
        <p>My love — soon my wife.</p>
      </div>
    </section>
  );
}
