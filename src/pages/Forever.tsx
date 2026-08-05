import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const petals = Array.from({ length: 16 }, (_, i) => ({
  left: `${5 + ((i * 6) % 90)}%`,
  delay: `${(i % 8) * 0.65}s`,
  dur: `${10 + (i % 5)}s`,
  color: i % 3 === 0 ? "#e8c9a0" : i % 2 === 0 ? "#c45c7a" : "#f2b8c8",
  size: `${12 + (i % 4) * 4}px`,
}));

const dreams = [
  {
    id: "wedding",
    kicker: "16 August 2026 · 11:55 AM",
    title: "We are getting married",
    photo: `${base}photos/story-09-wedding.png`,
    caption: "The moment forever begins",
    body: [
      "Yes, my love — this is our day. Soft morning light, our families smiling, and you walking toward me.",
      "At 11:55 AM I will tie the mangalsutra and call you my wife. Not for a day. For every sunrise after.",
    ],
  },
  {
    id: "guruvayur",
    kicker: "A promise we already hold",
    title: "Again in Guruvayur",
    photo: `${base}photos/story-10-guruvayur.png`,
    caption: "Where our hearts say I do, once more",
    body: [
      "After our wedding, I dream of standing with you again — this time in the sacred calm of Guruvayur temple.",
      "Two souls, one prayer, flowers in the air, and a second vow whispered only for us. A blessing to seal the forever we already chose.",
    ],
  },
  {
    id: "lakshadweep",
    kicker: "Just us, nowhere else",
    title: "Honeymoon in Lakshadweep",
    photo: `${base}photos/story-11-lakshadweep.png`,
    caption: "Blue water. Soft sand. Your hand in mine.",
    body: [
      "I can’t wait for the quiet after the celebrations — turquoise water, warm wind, and evenings that belong only to us.",
      "No rush. No world. Just Shravya and Babes, learning the first pages of married life under a soft island sky.",
    ],
  },
] as const;

export function Forever() {
  const navigate = useNavigate();

  return (
    <section className="forever forever-single">
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

      <div className="forever-inner forever-scroll">
        <motion.header
          className="forever-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="forever-eyebrow">Our forever, with you</p>
          <h1 className="forever-title">Three dreams. One love.</h1>
          <p className="forever-sub">
            Marriage. Guruvayur. Lakshadweep — every quiet forever after.
          </p>
        </motion.header>

        <div className="forever-dreams">
          {dreams.map((dream, i) => (
            <motion.article
              key={dream.id}
              className={`forever-dream forever-dream-${i % 2 === 0 ? "a" : "b"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="forever-dream-copy">
                <p className="forever-eyebrow">{dream.kicker}</p>
                <h2 className="forever-dream-title">{dream.title}</h2>
                {dream.body.map((line) => (
                  <p key={line} className="forever-dream-text">
                    {line}
                  </p>
                ))}
              </div>

              <figure className="forever-photo-wrap">
                <div
                  className="forever-photo"
                  style={{ backgroundImage: `url(${dream.photo})` }}
                  role="img"
                  aria-label={dream.caption}
                />
                <figcaption>{dream.caption}</figcaption>
              </figure>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="forever-finale"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="forever-copy">
            From one late-night interest to Cafe Ikigai, from Lagna Patrika to
            this beautiful future — every page was leading here. Different
            careers. One forever. And I can’t wait to live every moment of it
            with you, Shravya.
          </p>

          <div className="promise-row">
            <div className="promise">
              <strong>Wedding</strong>
              <span>16 Aug 2026</span>
            </div>
            <div className="promise">
              <strong>Guruvayur</strong>
              <span>Our blessing</span>
            </div>
            <div className="promise">
              <strong>Lakshadweep</strong>
              <span>Honeymoon</span>
            </div>
          </div>

          <p className="forever-love-line">I love you. Today. Tomorrow. Always.</p>

          <button
            type="button"
            className="forever-home-link"
            onClick={() => navigate("/")}
          >
            Back to her birthday wish
          </button>
        </motion.footer>
      </div>
    </section>
  );
}
