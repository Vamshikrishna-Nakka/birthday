import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function U({ children }: { children: ReactNode }) {
  return <span className="letter-mark">{children}</span>;
}

type LetterPage = {
  kicker?: string;
  title: string;
  body: ReactNode;
  signOff?: string;
  isFinale?: boolean;
};

const pages: LetterPage[] = [
  {
    kicker: "For you, on your birthday",
    title: "My dear Bujjulu",
    body: (
      <>
        <p>
          Happy birthday. If these pages feel long, it is only because
          my heart has been collecting words for you — quiet ones, loud ones,
          the ones I rehearse when I am driving home thinking of you.
        </p>
        <p>
          Today is your day, and I wanted more than a cake and a message. I
          wanted a place where time slows down — where you can sit with every
          feeling I have never quite finished saying out loud.
        </p>
        <p>
          So here it is: our story, written with love — for the doctor who heals
          the world, and the woman who healed mine.
        </p>
      </>
    ),
  },
  {
    kicker: "17 May 2026 · 11:00 PM",
    title: "Every beautiful story has a beginning",
    body: (
      <>
        <p>
          Sometimes, life changes in the most unexpected ways. Not with grand
          moments or extraordinary events… but with something as simple as a{" "}
          <U>single click</U>.
        </p>
        <p>
          On <U>17th May 2026 at 11:00 PM</U>, I came across your profile on
          Matrimony. I don&apos;t know what made me stop scrolling that night,
          but something about you caught my attention.
        </p>
        <p>
          With a little hope in my heart, I sent you an interest — never
          imagining that one small decision would change my life forever, or
          become the beginning of the <U>most beautiful chapter</U> I would ever
          get to live.
        </p>
      </>
    ),
  },
  {
    kicker: "20 May 2026 · 10:44 PM",
    title: "Three days later",
    body: (
      <>
        <p>
          Three days later… on <U>20th May 2026 at 10:44 PM</U>, you accepted my
          interest.
        </p>
        <p>
          To everyone else, it was just another notification. To me, it became
          the <U>beginning of everything</U>.
        </p>
        <p>
          That same night, at <U>11:40 PM</U>, we exchanged our very first
          messages. Two strangers. Two different lives. Simply trying to know
          each other a little better.
        </p>
        <p>
          At first, it was only introductions and biodatas — nothing more. I
          shared that I am a <U>software engineer</U>. You shared that you are a{" "}
          <U>doctor</U>. Two different careers. Two different worlds… already
          sitting quietly side by side.
        </p>
        <p>
          That night ended there — with a smile, and a little curiosity about
          the person behind the profile. But little did we know… our real
          conversations were only just beginning.
        </p>
      </>
    ),
  },
  {
    kicker: "The next morning",
    title: "Hello became everything",
    body: (
      <>
        <p>
          The very next morning, our first proper conversation began — with a
          simple <U>&ldquo;Hello&rdquo;</U>.
        </p>
        <p>
          That one word turned into laughter, curiosity, and endless questions.
          For the first time, it didn&apos;t feel like reading biodatas. It felt
          like meeting a person.
        </p>
        <p>
          One topic I still remember clearly was food. You told me that you
          could cook… but you wouldn&apos;t touch non-vegetarian food. Because:
        </p>
        <p className="letter-quote">
          &ldquo;<U>Generally, I won&apos;t eat something which has lived.</U>
          &rdquo;
        </p>
        <p>So, with my usual mischievous side, I asked,</p>
        <p className="letter-quote">
          &ldquo;Touch cheyakunda cooking chesthava non-veg ithe?&rdquo;
        </p>
        <p>
          And before you could think too much, I quickly added…{" "}
          <U>&ldquo;Just kidding!&rdquo;</U>
        </p>
        <p>
          Your reaction made me laugh so much. That little conversation may have
          seemed ordinary — but today, it&apos;s one of my{" "}
          <U>favourite memories</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "Who you are",
    title: "Different worlds, one closeness",
    body: (
      <>
        <p>
          It was during those simple chats that I began to see the kind of
          person you truly are.
        </p>
        <p className="letter-list">
          <U>Kind.</U>
          <br />
          <U>Honest.</U>
          <br />
          <U>Pure-hearted.</U>
          <br />
          Someone who stood by her values with a beautiful smile.
        </p>
        <p>
          Looking back now, it&apos;s funny how one of our earliest conversations
          was between a <U>pure vegetarian</U> and a pure non-vegetarian — trying
          to understand each other&apos;s worlds.
        </p>
        <p>
          A <U>software engineer</U> and a <U>doctor</U>. Different rhythms.
          Different days. Different kinds of responsibility — yet somehow,
          every conversation brought us a little closer.
        </p>
        <p>
          And before I even realized it, the stranger I had just started talking
          to had already begun becoming <U>someone incredibly special</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "Growing closer",
    title: "Every conversation made me want to know you more",
    body: (
      <>
        <p>
          The days that followed became something I looked forward to every
          single day.
        </p>
        <p>
          Every notification from you made me smile. Every conversation somehow
          became longer than the previous one.
        </p>
        <p>
          Minutes quietly turned into hours. Questions became stories. Stories
          became laughter. And before I even realized it… talking to you had
          become my <U>favourite part of every day</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "25 May 2026 · 7:25 PM",
    title: "When everything felt more real",
    body: (
      <>
        <p>
          On <U>25th May 2026 at 7:25 PM</U>, we spoke on our very first phone
          call. I still remember wondering what your voice would sound like.
        </p>
        <p>
          The moment you answered…{" "}
          <U>everything suddenly felt more real.</U>
        </p>
        <p>
          And yet — I never felt like I was speaking to someone unknown. That
          usual first-call hesitation wasn&apos;t there. It was so{" "}
          <U>smooth</U>. Our vibes matched so naturally — filled with fun and
          laughter.
        </p>
        <p>
          There was something so comforting about talking to you. No pretending.
          No pressure. Just two people slowly getting to know each other — one
          conversation at a time.
        </p>
        <p>
          That feeling… I had <U>never felt with anyone</U> when I spoke for the
          first time. Before meeting you, I was excited to talk to you. After
          knowing you… <U>I couldn&apos;t wait to finally see you.</U>
        </p>
      </>
    ),
  },
  {
    kicker: "28 May 2026 · 7:43 PM",
    title: "The day I finally saw you",
    body: (
      <>
        <p>
          Then came the day I had been waiting for — <U>28th May 2026</U>.
        </p>
        <p>
          I was waiting outside your <U>hostel</U>. Excited. Nervous. Pretending
          to be calm. Minutes kept passing… and you still weren&apos;t coming.
          With every second, that excitement and nervousness only grew louder
          inside me.
        </p>
        <p>
          Then you called and asked, <U>&ldquo;Where are you?&rdquo;</U> I was
          looking towards the backside of your hostel — completely unaware that
          you were already standing <U>right next to my car</U>.
        </p>
        <p className="letter-pull">
          Then suddenly… <U>Knock… Knock…</U>
        </p>
        <p>
          At exactly <U>7:43 PM</U>, I turned towards the driver&apos;s side
          window. And there you were — for the very first time in front of me.
          Your <U>cute hair bangs</U>. Your <U>brown shirt</U>. Your{" "}
          <U>cream pant</U>. Those <U>little heels</U>. And that open, beautiful
          smile.
        </p>
        <p>
          For a few seconds… <U>everything else around me disappeared.</U>
        </p>
      </>
    ),
  },
  {
    kicker: "28 May 2026 · Cafe Ikigai",
    title: "Our first date · Table No. 6",
    body: (
      <>
        <p>
          Soon we found ourselves sitting at <U>Cafe Ikigai</U> —{" "}
          <U>Table No. 6</U>. Our <U>first date</U>.
        </p>
        <p>
          To everyone else… it was just another table. To me… it became one of
          my <U>favourite places in the world</U>.
        </p>
        <p>
          We talked. We laughed. We smiled. Time passed much faster than I
          wanted it to. And then you did something that turned an ordinary meal
          into a memory I still carry.
        </p>
        <p>
          For the first time in my life, I tried{" "}
          <U>vegetarian sushi</U> — because you looked at me and said it would
          be great, and that I should try it. Coming from you, that was enough.
        </p>
        <p>
          When the plate was nearly empty, you gave me a playful challenge: to
          drink the <U>sushi sauce</U> left behind.
        </p>
        <p>
          I never hesitated. Because you asked. In that small, laughing moment I
          only thought — I will do this, and prove that this meeting is meant to
          be a <U>meaningful, lifelong, memorable</U> one.
        </p>
      </>
    ),
  },
  {
    kicker: "After Table No. 6",
    title: "What that first date meant",
    body: (
      <>
        <p>
          That wasn&apos;t just coffee and conversation. That was the day two
          strangers from Matrimony became something real — sitting face to face,
          sharing food, laughter, and a quiet certainty I had never known before.
        </p>
        <p>
          It didn&apos;t feel like meeting someone for the first time. It felt
          like meeting someone I had somehow <U>known for years</U>.
        </p>
        <p className="letter-quote">
          &ldquo;The right person may arrive late, but when they do, they
          don&apos;t just change your life — they make it beautiful.&rdquo;
        </p>
        <p>
          As we said goodbye, I drove back home with a smile that refused to
          disappear. That evening I kept replaying every little moment — the
          knock on the car window, your bangs, your brown shirt, cream pant,
          little heels, vegetarian sushi, the sauce challenge,{" "}
          <U>Table No. 6</U>, and your open smile.
        </p>
        <p>
          That first date became one of the{" "}
          <U>most meaningful days of my life</U>. Not because everything was
          perfect — but because with you, I could simply be myself. And somehow,
          that was enough to know my heart had found its home.
        </p>
      </>
    ),
  },
  {
    kicker: "30 May 2026 · 3:20 PM",
    title: "Online pelli choopulu",
    body: (
      <>
        <p>
          Then, on <U>30th May 2026 at 3:20 PM</U>, came our first video call. I
          was excited. A little nervous. Trying my best not to show it.
        </p>
        <p>Then, with your beautiful smile, you asked,</p>
        <p className="letter-quote">
          &ldquo;Shall we do an <U>online pelli choopulu</U>?&rdquo;
        </p>
        <p>
          I still remember laughing. There was something so comforting about
          talking to you through that screen — your warmth, your ease, your
          smile making the distance feel smaller.
        </p>
        <p>
          Photos can capture someone&apos;s face. But only a live conversation
          can reveal someone&apos;s heart. And yours was already becoming home.
        </p>
      </>
    ),
  },
  {
    kicker: "Growing stronger",
    title: "Every meeting brought us closer",
    body: (
      <>
        <p>
          From that first date onward… our bond became stronger than ever.
        </p>
        <p>
          Every call. Every message. Every meeting. Brought us closer.
        </p>
        <p>
          Somewhere between all those conversations… you stopped being someone I
          was getting to know. You became someone I couldn&apos;t imagine my
          future without.
        </p>
      </>
    ),
  },
  {
    kicker: "A conversation that changed everything",
    title: "When you asked my opinion",
    body: (
      <>
        <p>
          Then came a moment when you asked for my opinion — about us, about
          moving forward. Before I answered, there was something I needed to
          share.
        </p>
        <p>
          I wanted you to know a past decision of mine — the decision of{" "}
          <U>cancelling my previous marriage</U>. The decision itself never felt
          wrong to me. But the talks around it… the weight it placed on my
          parents… those conversations used to leave a quiet heaviness in my
          heart.
        </p>
        <p>
          I shared that past with you carefully, expecting something heavier in
          return — more questions, more doubt, more silence.
        </p>
        <p>
          But you responded so simply. So gently. Almost as if you were saying —{" "}
          <U>why are you thinking so much about something this simple?</U>
        </p>
      </>
    ),
  },
  {
    kicker: "Your maturity",
    title: "You were wiser than I knew",
    body: (
      <>
        <p>
          The way you understood me that day impressed me like never before. I
          had always believed I was the more mature one. But on that day,{" "}
          <U>you were more mature than me</U>.
        </p>
        <p>
          Your calm. Your clarity. Your soft strength. It didn&apos;t just
          comfort me — it freed me.
        </p>
        <p>
          After that conversation, my heart was clear. I said{" "}
          <U>yes</U> — yes to moving forward, yes to the marriage proposal, yes
          to a future with you.
        </p>
        <p>
          And when I asked you… before I even finished carrying my own fear… you
          had already decided <U>yes</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "Abbai chala bagunnadu",
    title: "The words that made me smile",
    body: (
      <>
        <p>
          You had already told your mother —{" "}
          <U>&ldquo;Abbai chala bagunnadu.&rdquo;</U>
        </p>
        <p>
          Those words made me happier than I can fully explain. Until that
          moment, a quiet doubt lived in me — that maybe I was not a good fit,
          that maybe you would say no.
        </p>
        <p>
          But you were so different. So sure. So kind. Such a{" "}
          <U>good person</U> — not only in the way you loved, but in the way you
          made space for my past without making me feel smaller for it.
        </p>
        <p>
          That was the moment I knew: this wasn&apos;t only chemistry or comfort.
          This was someone who could walk with me through life — with maturity,
          softness, and truth.
        </p>
      </>
    ),
  },
  {
    kicker: "14 June 2026 · Second date",
    title: "Our first picture together",
    body: (
      <>
        <p>
          Then came our second date on <U>14th June 2026</U> — after that
          beautiful yes. This time, there was no hesitation left. I was simply{" "}
          <U>me</U> with you. Free. Easy. Real.
        </p>
        <p>
          That day, we both wore <U>black</U>. And that day, we took our{" "}
          <U>very first picture together</U>.
        </p>
        <p>
          Whenever I look at that photo today… I don&apos;t just see two smiling
          faces. I see <U>two hearts slowly finding their way to each other</U>.
        </p>
        <p>
          Time passed so easily… until <U>1:30 AM</U>. I never imagined hours
          could disappear like that — just talking, laughing, and being
          ourselves.
        </p>
      </>
    ),
  },
  {
    kicker: "After that night",
    title: "Made for each other",
    body: (
      <>
        <p>
          After that meet, the quote you wrote on me was amazing. Some feelings
          are hard to say out loud — and somehow, you wrote what the heart
          already knew. That little writing on the moment felt so{" "}
          <U>cute</U>, so true, so us.
        </p>
        <p>
          That day I thought it clearly for the first time — we are a{" "}
          <U>made-for-each-other</U> couple.
        </p>
        <p>
          Because so many things about us feel the same… same to same… like a{" "}
          <U>mirror image</U>. The way we feel. The way we understand. The way
          silence between us still feels full.
        </p>
        <p>
          Not every connection needs big words. Ours needed honesty, comfort,
          and that quiet feeling of — <U>this is home</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "12 July 2026 · Lagna Patrika",
    title: "A promise that felt so real",
    body: (
      <>
        <p>
          Then came another beautiful milestone — <U>12th July 2026</U>.
        </p>
        <p className="letter-pull">
          Our <U>Lagna Patrika</U>.
        </p>
        <p>
          Since we didn&apos;t have an engagement ceremony, this became the
          first time we officially sat together as a <U>couple</U> in front of
          both our families.
        </p>
        <p>
          That day, our marriage date was fixed too. Sitting there, blessed by
          everyone… it felt like <U>half a marriage</U> already — sacred,
          official, and unforgettable.
        </p>
        <p>
          Looking around… seeing everyone smiling… watching our families come
          together… all eyes on us… cameras capturing every moment… blessings
          falling on us like soft rain — made everything feel so real.
        </p>
      </>
    ),
  },
  {
    kicker: "That walk towards me",
    title: "You in that cute saree",
    body: (
      <>
        <p>
          And then came a moment I will never forget — the initial second when
          you walked in that <U>cute saree</U> to sit beside me.
        </p>
        <p>
          That walk. That grace. That quiet confidence. Watching you come and
          take your place next to me felt so good… like the world had finally
          arranged itself the way it was meant to.
        </p>
        <p>
          For the first time, we weren&apos;t just two people who loved each
          other in private conversations. We were <U>us</U> — in front of
          everyone who mattered.
        </p>
      </>
    ),
  },
  {
    kicker: "Photos of that day",
    title: "We already looked married",
    body: (
      <>
        <p>
          That day we also captured pictures — separately, together, in little
          frames of joy. And without even knowing it… in those pictures we
          already looked like a <U>married couple</U>.
        </p>
        <p>
          There was one moment I still smile about — when I pulled you closer
          for a photo. It happened with such ease… such comfort… no awkwardness,
          no hesitation. Just the natural pull of two people who already
          belonged beside each other.
        </p>
        <p>
          That kind of comfort doesn&apos;t come from practice. It comes from
          the heart recognising its person.
        </p>
        <p>
          We weren&apos;t just planning a wedding anymore. We were preparing for
          a <U>lifetime together</U>.
        </p>
      </>
    ),
  },
  {
    kicker: "Before the wedding",
    title: "What marriage means to me",
    body: (
      <>
        <p>
          As <U>16th August 2026</U> comes closer, I keep thinking about what
          marrying you truly means.
        </p>
        <p>
          It means choosing you on ordinary mornings. Sitting with you after
          long hospital days. Celebrating your wins as a doctor. Holding your
          hand when the world feels heavy.
        </p>
        <p>
          It means building a home where your laugh is the softest sound, where
          your peace matters as much as my own, and where love is not only said
          — it is shown, every day.
        </p>
        <p>
          Marriage, to me, is not a day. It is every day after — with you.
        </p>
      </>
    ),
  },
  {
    kicker: "16 August 2026 · 11:55 AM",
    title: "The moment I imagine",
    body: (
      <>
        <p>
          Sometimes I close my eyes and imagine that moment. Seeing you walk
          towards me in your wedding attire. Looking at you for the very first
          time as my <U>bride</U>.
        </p>
        <p>
          Waiting for <U>11:55 AM</U> — the moment I&apos;ll tie the{" "}
          <U>mangalsutra</U> around your neck. The moment I&apos;ll proudly call
          you… <U>my wife</U>.
        </p>
        <p>
          I know my heart will be full. Maybe my eyes too. Because every
          conversation, every call, every joke, every smile… has been leading us
          to that one sacred second.
        </p>
      </>
    ),
  },
  {
    kicker: "My promises to you",
    title: "What I vow, with love",
    body: (
      <>
        <p>Shravya, these are my promises — not for a wedding stage only, but for life:</p>
        <p className="letter-list">
          I promise to <U>love you loudly</U> on happy days, and gently on hard ones.
          <br />
          I promise to <U>respect you</U> — your work, your dreams, your voice.
          <br />
          I promise to <U>protect your smile</U>, and remind you how precious you are.
          <br />
          I promise to stand beside you as your partner, your friend, your home.
          <br />
          I promise to keep choosing you — again, and again, and again.
        </p>
        <p>
          When we disagree, I will still hold your hand. When we succeed, I will
          celebrate you first. When life gets quiet, I will still find ways to
          make you feel loved.
        </p>
      </>
    ),
  },
  {
    kicker: "One last thing",
    title: "Happy Birthday, my love",
    body: (
      <>
        <p>
          This birthday is so special because it&apos;s your{" "}
          <U>last one before we begin our life together</U>.
        </p>
        <p>
          Thank you… for accepting that interest request. For trusting me. For
          choosing me. For sitting beside me in that saree on Lagna Patrika day.
          And for making my life more beautiful than I ever imagined.
        </p>
        <p>
          I know life won&apos;t always be perfect. There will be happy days.
          Busy days. Difficult days. Days when we&apos;ll disagree.
        </p>
        <p>
          But no matter what life brings… I will be yours — fully, faithfully,
          forever.
        </p>
      </>
    ),
  },
  {
    kicker: "Forever begins",
    title: "The best part hasn't been written yet",
    body: (
      <>
        <p>
          The story you&apos;ve just read is how we found each other. But I
          truly believe… the best part of our story hasn&apos;t been written
          yet.
        </p>
        <p className="letter-pull">
          It begins on <U>16th August 2026 at 11:55 AM</U>.
        </p>
        <p>
          I can&apos;t wait to see you in your wedding attire. I can&apos;t wait
          to begin our forever. And I can&apos;t wait to call you…{" "}
          <U>my wife</U>.
        </p>
        <p>Happy Birthday once again, my love.</p>
        <p className="letter-pull">
          I love you.
          <br />
          Today. Tomorrow. Always.
        </p>
      </>
    ),
    signOff: "Forever Yours,\nBabes",
    isFinale: true,
  },
];

export function Letter() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const page = useMemo(() => pages[index], [index]);
  const total = pages.length;
  const progress = ((index + 1) / total) * 100;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    if (index === 0) {
      navigate("/");
      return;
    }
    setDirection(-1);
    setIndex((v) => Math.max(0, v - 1));
  }, [index, navigate]);

  const goNext = useCallback(() => {
    setDirection(1);
    if (index < total - 1) {
      setIndex((v) => v + 1);
      return;
    }
    navigate("/memories");
  }, [index, navigate, total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const dy = event.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <section
      className="letter-page"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="letter-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="letter-stage">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={index}
            className="letter-sheet"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 56 : -56 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="letter-meta">
              <span className="letter-count">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              {page.kicker && <span className="letter-kicker">{page.kicker}</span>}
            </div>

            <h2 className="letter-title">{page.title}</h2>
            <div className="letter-body">{page.body}</div>

            {page.signOff && (
              <p className="letter-sign">
                {page.signOff.split("\n").map((line) => (
                  <span key={line} className="letter-sign-line">
                    {line}
                  </span>
                ))}
              </p>
            )}
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="letter-nav">
        <button
          type="button"
          onClick={goPrev}
          className="letter-nav-btn letter-nav-back"
        >
          ← Back
        </button>

        {page.isFinale ? (
          <button
            type="button"
            onClick={goNext}
            className="letter-nav-btn letter-nav-next-cta"
          >
            Next — Photos →
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="letter-nav-btn letter-nav-forward"
          >
            Next →
          </button>
        )}
      </div>
    </section>
  );
}
