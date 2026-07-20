import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const petals = Array.from({ length: 14 }, (_, i) => ({
  left: `${6 + ((i * 7) % 88)}%`,
  delay: `${(i % 7) * 0.7}s`,
  dur: `${9 + (i % 5)}s`,
  color: i % 3 === 0 ? "#e8c9a0" : i % 2 === 0 ? "#c45c7a" : "#f2b8c8",
  size: `${12 + (i % 4) * 4}px`,
}));

const scenes = [
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
    next: "See our next dream",
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
    next: "And then… our escape",
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
    next: "Hold every moment",
  },
] as const;

const fade = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
};

export function Forever() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  // 0 ready, 1..3 scenes, 4 closing, 5 come down
  const [yesHits, setYesHits] = useState(0);
  const [yesPos, setYesPos] = useState<{ top: string; left: string } | null>(
    null,
  );
  const [noTease, setNoTease] = useState(false);

  const jumpYes = () => {
    setYesPos({
      top: `${10 + Math.random() * 68}%`,
      left: `${4 + Math.random() * 72}%`,
    });
  };

  const handleYes = () => {
    if (yesHits < 3) {
      setYesHits((n) => n + 1);
      jumpYes();
      return;
    }
    setStep(1);
  };

  const handleNo = () => {
    setNoTease(true);
    window.setTimeout(() => setNoTease(false), 1200);
  };

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
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="ready"
              className="forever-ready"
              {...fade}
              transition={{ duration: 0.55 }}
            >
              <p className="forever-eyebrow">A question for my love</p>
              <h1 className="forever-title">Are you ready for the day?</h1>
              <p className="forever-sub">
                Shravya… our forever is waiting on the other side of this yes.
              </p>

              <div className={`forever-choice ${yesPos ? "is-playful" : ""}`}>
                <motion.button
                  type="button"
                  className={`forever-yes ${yesPos ? "is-dodging" : ""}`}
                  style={
                    yesPos
                      ? { top: yesPos.top, left: yesPos.left }
                      : undefined
                  }
                  onClick={handleYes}
                  animate={yesPos ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                  transition={{ duration: 0.28 }}
                >
                  Yes
                </motion.button>

                <button
                  type="button"
                  className={`forever-no ${noTease ? "is-tease" : ""}`}
                  onClick={handleNo}
                >
                  No
                </button>
              </div>

              <p
                className={`forever-tease ${noTease || yesHits > 0 ? "is-on" : ""}`}
                aria-live="polite"
              >
                {noTease
                  ? "Nice try… forever only opens with Yes."
                  : yesHits > 0 && yesHits < 3
                    ? "Catch me if you can…"
                    : yesHits >= 3
                      ? "Okay, okay — one more Yes."
                      : "\u00a0"}
              </p>
            </motion.div>
          )}

          {step >= 1 && step <= 3 && (
            <motion.div
              key={scenes[step - 1].id}
              className="forever-scene"
              {...fade}
              transition={{ duration: 0.55 }}
            >
              <p className="forever-eyebrow">{scenes[step - 1].kicker}</p>
              <h1 className="forever-title">{scenes[step - 1].title}</h1>

              <figure className="forever-photo-wrap">
                <div
                  className="forever-photo"
                  style={{
                    backgroundImage: `url(${scenes[step - 1].photo})`,
                  }}
                  role="img"
                  aria-label={scenes[step - 1].caption}
                />
                <figcaption>{scenes[step - 1].caption}</figcaption>
              </figure>

              <div className="wedding-day">
                {scenes[step - 1].body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <button
                type="button"
                className="forever-yes"
                onClick={() => setStep(step + 1)}
              >
                {scenes[step - 1].next}
              </button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="closing"
              className="forever-closing"
              {...fade}
              transition={{ duration: 0.55 }}
            >
              <p className="forever-eyebrow">All of it, with you</p>
              <h1 className="forever-title">I can’t wait for us</h1>
              <p className="forever-sub">
                Marriage. Guruvayur. Lakshadweep. And every quiet forever after.
              </p>

              <ul className="future-list">
                <li>
                  <strong>16 August 2026 · 11:55 AM</strong>
                  <span>
                    Our wedding — mangalsutra, vows, and the first day you are
                    my wife.
                  </span>
                </li>
                <li>
                  <strong>Guruvayur temple</strong>
                  <span>
                    A sacred second wedding of the heart — prayer, blessing, and
                    us before God again.
                  </span>
                </li>
                <li>
                  <strong>Honeymoon · Lakshadweep</strong>
                  <span>
                    Blue lagoons, soft nights, and the beginning of our married
                    story — just us.
                  </span>
                </li>
              </ul>

              <p className="forever-copy">
                From one late-night interest to Cafe Ikigai, from Lagna Patrika
                to this beautiful future — every page was leading here.
                Different careers. One forever. And I can’t wait to live every
                moment of it with you, Shravya.
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

              <button
                type="button"
                className="forever-yes"
                onClick={() => setStep(5)}
              >
                One last surprise
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="comedown"
              className="forever-comedown"
              {...fade}
              transition={{ duration: 0.55 }}
            >
              <p className="forever-eyebrow">Right now</p>
              <h1 className="forever-title">Come down, Bujjulu</h1>
              <p className="forever-sub">
                I am waiting to share the 12th hour with you.
              </p>

              <div className="wedding-day">
                <p>
                  After all these dreams — our wedding, Guruvayur, Lakshadweep —
                  this night is real. Midnight is almost here, and your birthday
                  begins with me standing downstairs, below your hostel,
                  waiting for you.
                </p>
                <p>
                  No big stage. No rush. Just Babes, looking up, hoping you will
                  come down so we can step into your birthday together — one
                  shared smile, one shared minute, one more memory before
                  forever.
                </p>
                <p className="forever-come-line">I’m here. I’m waiting. Come.</p>
              </div>

              <button
                type="button"
                className="forever-home-link"
                onClick={() => navigate("/")}
              >
                Back to her birthday wish
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
