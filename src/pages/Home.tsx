import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Atmosphere } from "../components/Atmosphere";

function Cake() {
  return (
    <div className="cake-stage" aria-hidden="true">
      <div className="cake">
        <div className="cake-layer top">
          <div className="frosting" />
          <span className="candle">
            <span className="flame" />
          </span>
          <span className="candle">
            <span className="flame" />
          </span>
          <span className="candle">
            <span className="flame" />
          </span>
        </div>
        <div className="cake-layer bottom">
          <div className="frosting" />
        </div>
        <div className="cake-plate" />
      </div>
    </div>
  );
}

function GiftBox({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 1100);
  };

  return (
    <button
      type="button"
      className={`gift-box ${opening ? "is-opening" : ""}`}
      onClick={handleOpen}
      aria-label="Open gift"
    >
      <span className="gift-lid">
        <span className="gift-bow" />
      </span>
      <span className="gift-body">
        <span className="gift-ribbon-v" />
        <span className="gift-ribbon-h" />
      </span>
      <span className="gift-hint">{opening ? "Opening…" : "Tap to open"}</span>
    </button>
  );
}

export function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <motion.div
        className="home-photo"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1.04 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="home-veil" aria-hidden="true" />
      <Atmosphere />

      <div className="home-content">
        <motion.h1
          className="wish-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="wish-line">Happy Birthday</span>
          <span className="wish-line wish-love">My Love</span>
          <span className="wish-line wish-name">Shravya</span>
        </motion.h1>

        <motion.p
          className="home-lead"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
        >
          To my brilliant doctor — the hands that heal the world, and the heart
          that healed mine. Today is all yours.
        </motion.p>

        <motion.div
          className="gift-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.38, duration: 0.65, type: "spring", stiffness: 140 }}
        >
          <GiftBox onOpen={() => navigate("/memories")} />
        </motion.div>
      </div>

      <Cake />
    </section>
  );
}
