import  { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./snap.css";

export function Hero() {
  const { scrollY } = useScroll();
  const [scale, setScale] = useState(1);
  const minScale = 0.4;
  const scaleSpeed = 300;

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      let newScale = 1 - latest / scaleSpeed;
      newScale = Math.max(minScale, Math.min(1, newScale));
      setScale(newScale);
    });
  }, [scrollY]);

  return (
    <section
      id="about"
      className="h-screen grid items-center justify-center bl backdrop-blur-lg border border-purple-500 border-t-0 "
    >
      {/* Animated Logo */}
      <motion.div
        style={{
          position: "fixed",
          top: "5%",
          left: "50%",
          x: "-50%",
          zIndex: 1000,
          scale: scale,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 360,
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            },
          },
        }}
      >
        <img
          src="public/ngd.png"
          alt="NGD Logo"
          className="h-44 w-auto origin-center"
        />
      </motion.div>

      {/* Content Section */}
      <div className="text-center max-w-4xl mx-auto px-4 pt-[20vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          New Generation of Developers{" "}
          <span className="text-purple-500 text-xl block mt-4">
            Transforming Ideas into Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          At NGD, we believe in shaping the future of technology by pushing the
          boundaries of innovation. Our mission is to equip developers with
          cutting-edge tools, knowledge, and opportunities to create
          groundbreaking solutions.
        </motion.p>

        <motion.a
          href="#portfolio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-purple-600 rounded-2xl text-lg font-semibold hover:bg-purple-500 transition-colors ">
            Discover Our Work!
          </button>
        </motion.a>
      </div>
    </section>
  );
}
