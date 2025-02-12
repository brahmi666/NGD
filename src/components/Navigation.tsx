import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./snap.css";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="h-8"
          >
            <img
              src="/5b3cc4d8-256a-4d9b-80f5-10a5493c2ad5.jpg"
              alt="NGD Logo"
              className="h-full w-auto"
            />
          </motion.div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                À propos
              </a>
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-purple-400 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#team"
                className="hover:text-purple-400 transition-colors"
              >
                Équipe
              </a>
              <button className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
