import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pages = [
  {
    title: "My dearest Shravya",
    paragraphs: [
      "Happy birthday, my love. If these pages feel long, it is only because my heart has been collecting words for you for years — quiet ones, loud ones, the ones I whisper when you are asleep and the ones I rehearse when I am driving home to you.",
      "Today is your day, and I wanted more than a cake and a message. I wanted a place where time slows down, where you can sit with every feeling I have never quite finished saying out loud.",
      "So here it is — a letter stretched across these pages, written for the girl who turned my ordinary days into something worth celebrating.",
    ],
  },
  {
    title: "The way you changed everything",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Before you, I thought love was a quiet habit. With you, it became a language — soft glances, shared tea, the way your name sounds better than any song I have ever heard. Replace this paragraph with a real memory: the first time you laughed at something silly I said, the first time I knew I wanted forever.",
    ],
  },
  {
    title: "Little things I never want to forget",
    paragraphs: [
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
      "I love the way you light up a room without trying. I love your patience on hard days. I love how you remember the tiny details I forget about myself. Dummy text for now — swap these lines for the habits, jokes, and soft rituals that belong only to us.",
    ],
  },
  {
    title: "On the days that were heavy",
    paragraphs: [
      "Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus.",
      "Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis.",
      "Thank you for staying. Thank you for choosing us even when choosing felt like work. This page is reserved for the hard chapters — the ones that made our soon-to-be marriage feel earned, not borrowed.",
    ],
  },
  {
    title: "What forever looks like to me",
    paragraphs: [
      "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
      "Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Sed non ipsum. Donec vitae nisl. Mauris ac nisl at nunc malesuada ullamcorper.",
      "Soon we will stand somewhere beautiful and promise each other a lifetime. I already practice that promise in the small ways — making space for your dreams, holding your hand in crowded rooms, building a home that feels like both of us.",
    ],
  },
  {
    title: "A birthday wish with a wedding heartbeat",
    paragraphs: [
      "Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Suspendisse eu nisl. Nulla facilisi.",
      "Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.",
      "Happy birthday, Shravya. May this year wrap you in softness. May our wedding season arrive like dawn — slow, golden, and certain. May every candle on your cake remind you that you are deeply, ridiculously loved.",
    ],
  },
  {
    title: "Until I can say it in person",
    paragraphs: [
      "Phasellus fermentum, neque id porttitor feugiat, ligula mi venenatis enim, vitae tincidunt orci sapien at ipsum. Vivamus facilisis nisl rhoncus metus.",
      "Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce erat. Donec vitae dolor. Praesent viverra nisl sit amet leo. Donec euismod scelerisque lacus.",
      "These last pages are still waiting for your real letter — paste your full words here when you are ready. Until then, know this: I am already yours, and soon the world will know it too.",
    ],
  },
  {
    title: "Always, and then some",
    paragraphs: [
      "Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor.",
      "I hope when you finish reading, you feel held. I hope you smile at least once. I hope you know that marrying you is not the end of a love story — it is the beginning of the best one I will ever get to live.",
      "Happy birthday, my love. I cannot wait to call you my wife.",
    ],
    signOff: "Yours, forever —",
  },
];

export function Letter() {
  const [index, setIndex] = useState(0);
  const page = useMemo(() => pages[index], [index]);
  const total = pages.length;

  return (
    <section className="letter-page">
      <header className="letter-header">
        <h1>A letter for Shravya</h1>
        <p>
          {total} pages · written with love · replace the dummy text with yours
        </p>
      </header>

      <div className="letter-book">
        <AnimatePresence mode="wait">
          <motion.article
            key={index}
            className="letter-sheet"
            initial={{ opacity: 0, x: 40, rotateY: -6 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -40, rotateY: 6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1000 }}
          >
            <p className="sheet-num">
              Page {index + 1} of {total}
            </p>
            <h2>{page.title}</h2>
            {page.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            {"signOff" in page && page.signOff && (
              <p className="letter-sign">{page.signOff}</p>
            )}
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="letter-controls">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((v) => Math.max(0, v - 1))}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={index === total - 1}
          onClick={() => setIndex((v) => Math.min(total - 1, v + 1))}
        >
          Next page
        </button>
      </div>
    </section>
  );
}
