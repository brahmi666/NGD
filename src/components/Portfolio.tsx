import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./portfolio.css";

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    category: string;
    image: string;
    image1: string;
    image2: string;
    image3: string;
    image4?: string;
  } | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedView, setExpandedView] = useState(false);

  // Reset slider index and expanded view whenever a new project is selected
  useEffect(() => {
    setCurrentSlide(0);
    setExpandedView(false);
  }, [selectedProject]);

  const projects = [
    {
      title: "Refonte E-commerce",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      image1: "public/amatun1.jpg",
      image2: "public/amatun2.jpg",
      image3: "public/amatun3.jpg",
      image4: "public/amatun4.jpg",
    },
    {
      title: "Application Mobile",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      image1: "public/mobile1.jpg",
      image2: "public/mobile2.jpg",
      image3: "public/mobile3.jpg",
    },
    {
      title: "Branding Corporate",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      image1: "public/brand1.jpg",
      image2: "public/brand4.jpg",
      image3: "public/brand3.jpg",
    },
  ];

  // Build an array of slider images from the selected project
  const sliderImages = selectedProject
    ? [selectedProject.image1, selectedProject.image2, selectedProject.image3]
    : [];

  // Handlers for slider navigation
  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-header"
        >
          <h2 className="portfolio-title">Nos Réalisations</h2>
          <p className="portfolio-description">
            Découvrez nos projets les plus marquants
          </p>
        </motion.div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="portfolio-card"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-category">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="portfolio-modal-content"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="slider">
                <motion.img
                  key={sliderImages[currentSlide]}
                  src={sliderImages[currentSlide]}
                  alt={`${selectedProject.title} slide ${currentSlide + 1}`}
                  className="slider-image"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="slider-controls">
                  <button className="prev-button" onClick={prevSlide}>
                    &lt;
                  </button>
                  <button className="next-button" onClick={nextSlide}>
                    &gt;
                  </button>
                </div>
                <button
                  className="expand-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedView(true);
                  }}
                >
                  Expand
                </button>
              </div>
              <div className="modal-description">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-category">{selectedProject.category}</p>
                {/* Additional description content can go here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedView && (
          <motion.div
            className="expanded-view-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpandedView(false)}
          >
            <motion.img
              src={sliderImages[currentSlide]}
              alt="Expanded view"
              className="expanded-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <button
              className="close-expanded-button"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedView(false);
              }}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
