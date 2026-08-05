import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;
const ease = [0.22, 1, 0.36, 1] as const;

const floatingHearts = [
  { left: "8%", delay: "0s", dur: "12s", size: "1rem" },
  { left: "22%", delay: "2s", dur: "14s", size: "0.8rem" },
  { left: "48%", delay: "1s", dur: "11s", size: "1.15rem" },
  { left: "70%", delay: "3s", dur: "13s", size: "0.85rem" },
  { left: "88%", delay: "0.6s", dur: "12s", size: "1rem" },
  { left: "35%", delay: "4s", dur: "15s", size: "0.75rem" },
];

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
      <div className="forever-glow" aria-hidden="true" />
      <div className="forever-veil" aria-hidden="true" />

      <div className="forever-hearts" aria-hidden="true">
        {floatingHearts.map((h, i) => (
          <span
            key={i}
            className="forever-float-heart"
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

      <div className="forever-inner forever-scroll">
        <motion.header
          className="forever-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="forever-hero-card">
            <span className="forever-ornament forever-ornament-tl" aria-hidden="true" />
            <span className="forever-ornament forever-ornament-tr" aria-hidden="true" />
            <span className="forever-ornament forever-ornament-bl" aria-hidden="true" />
            <span className="forever-ornament forever-ornament-br" aria-hidden="true" />

            <p className="forever-eyebrow">Our forever, with you</p>
            <div className="forever-divider" aria-hidden="true">
              <span />
              <i>♥</i>
              <span />
            </div>
            <h1 className="forever-title">Three dreams. One love.</h1>
            <div className="forever-divider" aria-hidden="true">
              <span />
              <i>♥</i>
              <span />
            </div>
            <p className="forever-sub">
              Marriage. Guruvayur. Lakshadweep — every quiet forever after.
            </p>
          </div>
        </motion.header>

        <div className="forever-dreams">
          {dreams.map((dream, i) => (
            <motion.article
              key={dream.id}
              className={`forever-dream forever-dream-${i % 2 === 0 ? "a" : "b"}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.65, ease }}
            >
              <div className="forever-dream-card">
                <span className="forever-dream-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="forever-dream-copy">
                  <p className="forever-eyebrow">{dream.kicker}</p>
                  <h2 className="forever-dream-title">{dream.title}</h2>
                  <div className="forever-title-flourish" aria-hidden="true">
                    <span />
                    <i>♥</i>
                    <span />
                  </div>
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
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="forever-finale"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="forever-finale-card">
            <span className="forever-finale-heart" aria-hidden="true">
              ♥
            </span>
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

            <p className="forever-love-line">
              I love you.
              <br />
              Today. Tomorrow. Always.
            </p>

            <button
              type="button"
              className="forever-home-link"
              onClick={() => navigate("/")}
            >
              Back to her birthday wish
            </button>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
