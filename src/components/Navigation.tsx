import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./snap.css";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const email = "contact@ngd.com";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
      setIsDropdownOpen(false);
    }, 1000);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-8"
          >
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
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
            <a href="#team" className="hover:text-purple-400 transition-colors">
              Team
            </a>

            {/* Contact Button & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                Contact
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64  bg-black/50 text-white shadow-lg rounded-lg p-5 border border-purple-600 shadow-purple-500/50"
                  >
                    <p className="text-white font-bold">📞 (+216) 20250297</p>
                    <hr className="my-2 border-gray-500" />
                    <p className="text-white font-bold">📧 {email}</p>
                    <button
                      onClick={handleCopyEmail}
                      className={`mt-2 w-full px-4 py-2 rounded-2xl transition-colors ${
                        isCopied
                          ? "bg-green-600"
                          : "bg-purple-600 hover:bg-purple-500"
                      } text-white`}
                    >
                      {isCopied ? "Copied ✅" : "Copy Email"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
            >
              Contact
            </button>

            {/* Mobile Dropdown */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-16 right-4 w-64  bg-black/50 text-white shadow-lg rounded-lg p-5 border border-purple-600 shadow-purple-500/50"
                >
                  <p className="text-white font-bold">📞 (+216) 20250297</p>
                  <hr className="my-2 border-gray-500" />
                  <p className="text-white font-bold">📧 {email}</p>
                  <button
                    onClick={handleCopyEmail}
                    className={`mt-2 w-full px-4 py-2 rounded-2xl transition-colors ${
                      isCopied
                        ? "bg-green-600"
                        : "bg-purple-600 hover:bg-purple-500"
                    } text-white`}
                  >
                    {isCopied ? "Copied ✅" : "Copy Email"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
