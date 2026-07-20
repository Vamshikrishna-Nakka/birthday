import { motion } from "framer-motion";
import { Atmosphere } from "../components/Atmosphere";

const teddySrc = `${import.meta.env.BASE_URL}teddy-cake.png?v=8`;

export function Home() {
  return (
    <section className="home">
      <div className="home-glow" aria-hidden="true" />
      <Atmosphere />

      <div className="home-content">
        <motion.h1
          className="wish-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="wish-main">Happy Birthday</span>
          <span className="wish-love">My Love ♥</span>
        </motion.h1>

        <motion.p
          className="home-lead"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65 }}
        >
          To my brilliant doctor — today is all yours.
        </motion.p>

        <motion.div
          className="teddy-stage"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={teddySrc}
            alt="Teddy bear holding a birthday cake"
            className="teddy-img"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
