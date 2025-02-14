import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./snap.css";

export function Hero() {
  const [scale, setScale] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const minScale = 0.4;
  const scaleSpeed = 300;

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const newScale = 1 - window.scrollY / scaleSpeed;
        setScale(Math.max(minScale, Math.min(1, newScale)));
      });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate image size based on the window width
  const imageSize = windowWidth < 768 ? "h-32" : "h-44"; // Adjust size on smaller screens

  return (
    <section
      id="about"
      className="h-screen grid items-center justify-center bl backdrop-blur-sm border-t-0"
    >
      {/* Animated Logo (Position Kept) */}
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/ngd.png"
          alt="NGD Logo"
          className={`${imageSize} w-auto origin-center`}
          loading="lazy"
        />
      </motion.div>

      {/* Content Section */}
      <div className="text-center max-w-4xl mx-auto px-4 pt-20 md:pt-[20vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6"
        >
          <p>New Generation</p>
          <p>of Developers</p>
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
          <button className="px-8 py-4 bg-purple-600 rounded-2xl text-lg font-semibold hover:bg-purple-500 transition-colors">
            Discover Our Work!
          </button>
        </motion.a>
      </div>
    </section>
  );
}
