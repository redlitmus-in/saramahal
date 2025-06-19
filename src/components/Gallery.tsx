"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Main Hall Decorated",
    category: "Indoor"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Garden Setup",
    category: "Outdoor"
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Reception Area",
    category: "Indoor"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Night Lighting Setup",
    category: "Outdoor"
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Dining Area",
    category: "Indoor"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Stage Setup",
    category: "Indoor"
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Bridal Suite",
    category: "Indoor"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Outdoor Ceremony",
    category: "Outdoor"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Grand Ballroom",
    category: "Indoor"
  },
];

const filterCategories = ["All", "Indoor", "Outdoor"];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Background Wedding Sketched Designs */}
      <div className="absolute inset-0 opacity-4 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" className="text-primary">
          {/* Top Corner Traditional Camera/Photo Frame */}
          <g transform="translate(50, 50)">
            <rect x="10" y="15" width="80" height="60" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="45" r="12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="50" cy="45" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="45" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="70" y="25" width="8" height="5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Decorative Corner Flourishes */}
            <path d="M5 10 Q15 5 25 10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M75 10 Q85 5 95 10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M5 80 Q15 85 25 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M75 80 Q85 85 95 80" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Right Side Photo Album Sketches */}
          <g transform="translate(950, 100)">
            <rect x="0" y="0" width="60" height="80" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="10" y="15" width="40" height="25" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="15" y1="50" x2="45" y2="50" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="15" y1="55" x2="35" y2="55" stroke="currentColor" strokeWidth="0.6"/>
            <line x1="15" y1="60" x2="40" y2="60" stroke="currentColor" strokeWidth="0.6"/>
            
            {/* Album Pages */}
            <rect x="70" y="10" width="60" height="80" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="80" y="25" width="40" height="25" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="85" y1="60" x2="115" y2="60" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="85" y1="65" x2="105" y2="65" stroke="currentColor" strokeWidth="0.6"/>
            
            {/* Decorative Hearts */}
            <path d="M90 5 Q85 0 80 5 Q85 10 90 5 Q95 0 100 5 Q95 10 90 5" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Bottom Left Wedding Photo Frames */}
          <g transform="translate(100, 450)">
            {/* Ornate Frame 1 */}
            <rect x="0" y="0" width="70" height="90" rx="5" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <rect x="8" y="8" width="54" height="74" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M0 20 Q5 15 10 20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M60 20 Q65 15 70 20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M0 70 Q5 75 10 70" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M60 70 Q65 75 70 70" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Ornate Frame 2 - Tilted */}
            <g transform="rotate(15) translate(80, -20)">
              <rect x="0" y="0" width="60" height="80" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <rect x="6" y="6" width="48" height="68" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="45" cy="15" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="15" cy="65" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="45" cy="65" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            </g>
          </g>
          
          {/* Center Decorative Gallery Elements */}
          <g transform="translate(500, 200)">
            {/* Gallery Wall Mount */}
            <rect x="0" y="0" width="120" height="80" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="10" y="10" width="100" height="60" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Grid of Mini Photos */}
            <rect x="20" y="20" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="50" y="20" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="80" y="20" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="20" y="42" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="50" y="42" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <rect x="80" y="42" width="25" height="18" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Hanging Wire */}
            <line x1="40" y1="-10" x2="40" y2="0" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="80" y1="-10" x2="80" y2="0" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="30" y1="-15" x2="90" y2="-15" stroke="currentColor" strokeWidth="0.6"/>
          </g>
          
          {/* Top Right Corner Instant Camera */}
          <g transform="translate(1000, 80)">
            <rect x="0" y="20" width="80" height="50" rx="8" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <circle cx="50" cy="45" r="15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="45" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="10" y="10" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="65" y="30" width="8" height="6" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Photo Coming Out */}
            <rect x="25" y="70" width="30" height="40" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="30" y="75" width="20" height="15" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <line x1="32" y1="95" x2="48" y2="95" stroke="currentColor" strokeWidth="0.6"/>
            <line x1="32" y1="98" x2="45" y2="98" stroke="currentColor" strokeWidth="0.6"/>
            <line x1="32" y1="101" x2="47" y2="101" stroke="currentColor" strokeWidth="0.6"/>
          </g>
          
          {/* Bottom Right Memory Collage */}
          <g transform="translate(900, 400)">
            <path d="M0 0 Q30 -10 60 0 Q90 10 120 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="40" y="8" width="15" height="12" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M70 5 Q80 0 90 10 Q85 20 75 15 Q70 10 70 5" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="100" cy="12" r="6" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Memory Stars */}
            <path d="M30 35 L32 40 L37 40 L33 43 L35 48 L30 45 L25 48 L27 43 L23 40 L28 40 Z" 
                  stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M80 30 L81 33 L84 33 L82 35 L83 38 L80 36 L77 38 L78 35 L76 33 L79 33 Z" 
                  stroke="currentColor" strokeWidth="0.6" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Photo Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary/6"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.9, 1.2, 0.9],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{
              duration: 35 + Math.random() * 25,
              repeat: Infinity,
              delay: Math.random() * 20,
            }}
          >
            {i % 4 === 0 && (
              // Camera
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect x="5" y="12" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="20" cy="22" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="8" y="8" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 4 === 1 && (
              // Photo Frame
              <svg width="35" height="35" viewBox="0 0 35 35">
                <rect x="5" y="5" width="25" height="25" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="8" y="8" width="19" height="19" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M2 2 Q8 0 14 2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                <path d="M21 2 Q27 0 33 2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              </svg>
            )}
            {i % 4 === 2 && (
              // Heart Photo
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M16 28 Q10 22 6 18 Q6 12 10 12 Q13 12 16 16 Q19 12 22 12 Q26 12 26 18 Q22 22 16 28 Z" 
                      stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="12" y="14" width="8" height="6" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              </svg>
            )}
            {i % 4 === 3 && (
              // Gallery Grid
              <svg width="30" height="30" viewBox="0 0 30 30">
                <rect x="5" y="5" width="20" height="20" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <line x1="5" y1="12" x2="25" y2="12" stroke="currentColor" strokeWidth="0.8"/>
                <line x1="5" y1="18" x2="25" y2="18" stroke="currentColor" strokeWidth="0.8"/>
                <line x1="12" y1="5" x2="12" y2="25" stroke="currentColor" strokeWidth="0.8"/>
                <line x1="18" y1="5" x2="18" y2="25" stroke="currentColor" strokeWidth="0.8"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-2xl font-serif mb-4">Captivating Glimpses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the beauty and elegance of our venue through these stunning images
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Lightbox for gallery images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={galleryImages.map(img => ({ 
          src: img.src,
          alt: img.alt
        }))}
        plugins={[Thumbnails, Zoom, Fullscreen]}
      />
    </section>
  );
};

export default Gallery; 