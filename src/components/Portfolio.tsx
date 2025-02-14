import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./portfolio.css";

interface Project {
  title: string;
  category: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
}

const projects: Project[] = [
  {
    title: "Application E-commerce",
    category: "Web Development",
    image: "/amatun.jpg",
    image1: "/amatun1.jpg",
    image2: "/amatun2.jpg",
    image3: "/amatun3.jpg",
  },
  {
    title: "Application Mobile",
    category: "Mobile Development",
    image: "/mobile.jpg",
    image1: "/mobile1.jpg",
    image2: "/mobile2.jpg",
    image3: "/mobile3.jpg",
  },
  {
    title: "Branding Corporate",
    category: "Design",
    image: "/brand.jpg",
    image1: "/brand1.png",
    image2: "/brand2.png",
    image3: "/brand3.jpg",
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false); // Track loading state

  const sliderImages = useMemo(
    () =>
      selectedProject
        ? [
            selectedProject.image1,
            selectedProject.image2,
            selectedProject.image3,
          ]
        : [],
    [selectedProject]
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  }, [sliderImages.length]);

  // Function to preload images before showing the modal
  const preloadImages = (project: Project) => {
    setLoading(true);

    const imageUrls = [
      project.image,
      project.image1,
      project.image2,
      project.image3,
    ];
    const imagePromises = imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    // Wait until all images are loaded before setting the project
    Promise.all(imagePromises).then(() => {
      setLoading(false);
      setSelectedProject(project);
    });
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-title">Our Achievements</h2>
        <p className="portfolio-description">Discover our latest projects</p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              onClick={() => preloadImages(project)} // Load all images when clicking
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {loading && (
          <div className="loading-overlay">
            <div className="spinner">Loading images...</div>
          </div>
        )}

        {selectedProject && !loading && (
          <motion.div
            className="portfolio-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="portfolio-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button className="prev-button" onClick={prevSlide}>
                &lt;
              </button>
              <motion.img
                src={sliderImages[currentSlide]}
                alt="Project Slide"
                className="slider-image"
                key={sliderImages[currentSlide]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <button className="next-button" onClick={nextSlide}>
                &gt;
              </button>
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
