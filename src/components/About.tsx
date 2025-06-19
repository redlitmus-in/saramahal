import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, ArrowRight, MapPin, Users, Calendar } from "lucide-react";

const features = [
  "Traditional wedding ceremonies with authentic rituals",
  "Spacious mandapam with beautiful decorations",
  "State-of-the-art sound systems for traditional music",
  "Authentic South Indian cuisine with traditional service",
  "Experienced wedding coordinators familiar with local customs",
  "Professional photography capturing precious wedding moments"
];

const highlights = [
  { icon: Users, title: "500+ Guests Capacity", description: "Accommodates large families and communities" },
  { icon: Calendar, title: "15+ Years Experience", description: "Hosting traditional weddings in Coimbatore region" },
  { icon: MapPin, title: "Prime Location", description: "Easily accessible from Coimbatore, Tirupur & surrounding areas" }
];

// Wedding venue images with SEO-optimized alt text
const venueImages = [
  {
    src: "/timeline/welcome.jpg",
    fallback: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sara Mahal wedding venue entrance with traditional Tamil decoration and welcome setup in Kinathukadavu Coimbatore",
    title: "Traditional Wedding Welcome"
  },
  {
    src: "/timeline/vows.jpg", 
    fallback: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tamil wedding ceremony vows and saptapadi ritual at Sara Mahal marriage hall Coimbatore",
    title: "Sacred Wedding Vows"
  },
  {
    src: "/timeline/garlanding.jpg",
    fallback: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    alt: "Tamil wedding garlanding ceremony jaimala at Sara Mahal wedding venue Kinathukadavu",
    title: "Traditional Garlanding Ceremony"
  },
  {
    src: "/timeline/reception.jpg",
    fallback: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wedding reception hall setup at Sara Mahal with elegant lighting and decoration Coimbatore Tamil Nadu",
    title: "Elegant Reception Setup"
  }
];

const About = () => {
  return (
    <section className="py-16 bg-white overflow-hidden relative">
      {/* Background Wedding Sketched Designs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="text-primary">
          {/* Traditional Tamil Kolam Pattern */}
          <g transform="translate(100, 100)">
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M30 50 L70 50 M50 30 L50 70 M35 35 L65 65 M65 35 L35 65" stroke="currentColor" strokeWidth="0.8"/>
            <circle cx="35" cy="35" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="65" cy="35" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="35" cy="65" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            <circle cx="65" cy="65" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          </g>
          
          {/* Right Side Decorative Paisley */}
          <g transform="translate(1000, 150)">
            <path d="M50 0 Q80 20 70 50 Q60 80 30 70 Q0 60 10 30 Q20 0 50 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M50 10 Q70 25 60 45 Q50 65 30 55 Q10 45 20 25 Q30 10 50 10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="40" cy="25" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="35" cy="40" r="2" stroke="currentColor" strokeWidth="0.6" fill="none"/>
          </g>
          
          {/* Bottom Traditional Wedding Elements */}
          <g transform="translate(200, 600)">
            {/* Kalash/Sacred Pot */}
            <ellipse cx="40" cy="40" rx="15" ry="20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="40" cy="25" rx="8" ry="5" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="32" y1="30" x2="48" y2="30" stroke="currentColor" strokeWidth="0.8"/>
            <path d="M35 25 Q40 20 45 25" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Mango Leaves */}
            <path d="M25 15 Q20 10 15 15 Q20 20 25 15" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M30 12 Q25 7 20 12 Q25 17 30 12" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M50 12 Q55 7 60 12 Q55 17 50 12" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M55 15 Q60 10 65 15 Q60 20 55 15" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Corner Decorative Elements */}
          <g transform="translate(800, 400)">
            {/* Traditional Lamp */}
            <ellipse cx="30" cy="40" rx="12" ry="8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M18 40 Q15 35 18 30 Q21 35 18 40" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M42 40 Q45 35 42 30 Q39 35 42 40" stroke="currentColor" strokeWidth="1" fill="none"/>
            <ellipse cx="30" cy="48" rx="8" ry="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M27 25 Q30 20 33 25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="30" y1="20" x2="30" y2="25" stroke="currentColor" strokeWidth="0.8"/>
          </g>
          
          {/* Background Floral Vine */}
          <g transform="translate(50, 400)">
            <path d="M0 0 Q50 -20 100 0 Q150 20 200 0 Q250 -20 300 0" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="25" cy="-10" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="75" cy="10" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="125" cy="-8" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="175" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="225" cy="-10" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="275" cy="8" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Wedding Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary/8"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.9, 1.1, 0.9],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            {i % 3 === 0 && (
              // Lotus
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 35 Q15 30 10 25 Q15 20 20 15 Q25 20 30 25 Q25 30 20 35 Z" 
                      stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M20 35 Q18 30 16 25 Q18 20 20 15 Q22 20 24 25 Q22 30 20 35" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="20" cy="25" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 3 === 1 && (
              // Om Symbol
              <svg width="35" height="35" viewBox="0 0 35 35">
                <path d="M8 20 Q8 12 15 12 Q22 12 22 18 Q22 22 18 24 Q22 26 22 30 Q22 32 20 32 Q18 32 18 30" 
                      stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M8 20 Q6 18 8 16 Q10 18 8 20" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="25" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M23 10 Q27 8 30 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 3 === 2 && (
              // Traditional Flower
              <svg width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M15 8 Q18 12 15 15 Q12 12 15 8" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M22 15 Q18 18 15 15 Q18 12 22 15" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M15 22 Q12 18 15 15 Q18 18 15 22" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M8 15 Q12 12 15 15 Q12 18 8 15" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative Header Border */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-20">
            <svg width="200" height="20" viewBox="0 0 200 20" className="text-primary">
              <path d="M10 10 Q50 5 100 10 Q150 15 190 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <circle cx="30" cy="8" r="2" fill="currentColor" opacity="0.6"/>
              <circle cx="100" cy="12" r="2.5" fill="currentColor" opacity="0.7"/>
              <circle cx="170" cy="8" r="2" fill="currentColor" opacity="0.6"/>
              <path d="M20 6 Q25 3 30 6" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M95 14 Q100 17 105 14" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M165 6 Q170 3 175 6" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          
          <span className="uppercase text-primary font-semibold tracking-wider mb-2 inline-block">About Sara Mahal</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-5">Premier Wedding Venue in Coimbatore</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Kinathukadavu, Sara Mahal has been the preferred choice for traditional weddings in Coimbatore for over 15 years. We specialize in creating unforgettable experiences that honor cultural traditions and customs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Enhanced Decorative Background */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
            
            {/* Traditional Border Design */}
            <div className="absolute -top-6 -left-6 opacity-15">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-secondary">
                <path d="M10 10 Q30 0 50 10 Q70 20 90 10 Q110 0 110 20 Q100 40 110 60 Q120 80 100 100 Q80 110 60 100 Q40 90 20 100 Q0 110 0 90 Q10 70 0 50 Q-10 30 10 10" 
                      stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="30" cy="30" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                <circle cx="90" cy="30" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                <circle cx="90" cy="90" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                <circle cx="30" cy="90" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              </svg>
            </div>
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <motion.div 
                  className="h-64 rounded-2xl shadow-lg overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Decorative Overlay */}
                  <div className="absolute top-2 right-2 z-10 opacity-20">
                    <svg width="30" height="30" viewBox="0 0 30 30" className="text-white">
                      <path d="M15 25 Q10 20 8 15 Q8 10 12 10 Q15 12 15 15 Q15 12 18 10 Q22 10 22 15 Q20 20 15 25 Z" 
                            stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <img
                    src={venueImages[0].fallback}
                    alt={venueImages[0].alt}
                    title={venueImages[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== venueImages[0].fallback) {
                        target.src = venueImages[0].fallback;
                      }
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="h-40 rounded-2xl shadow-lg overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-2 left-2 z-10 opacity-25">
                    <svg width="25" height="25" viewBox="0 0 25 25" className="text-white">
                      <circle cx="12.5" cy="12.5" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12.5" cy="10" r="2" fill="currentColor"/>
                      <path d="M8 15 Q12.5 12 17 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <img
                    src={venueImages[1].fallback}
                    alt={venueImages[1].alt}
                    title={venueImages[1].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== venueImages[1].fallback) {
                        target.src = venueImages[1].fallback;
                      }
                    }}
                  />
                </motion.div>
              </div>
              
              <div className="mt-10 space-y-4">
                <motion.div 
                  className="h-40 rounded-2xl shadow-lg overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-2 right-2 z-10 opacity-20">
                    <svg width="28" height="28" viewBox="0 0 28 28" className="text-white">
                      <path d="M8 14 Q8 8 14 8 Q20 8 20 14 Q20 20 14 22 Q8 20 8 14 Z" 
                            stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M11 5 Q14 2 17 5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <img
                    src={venueImages[2].fallback}
                    alt={venueImages[2].alt}
                    title={venueImages[2].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== venueImages[2].fallback) {
                        target.src = venueImages[2].fallback;
                      }
                    }}
                  />
                </motion.div>
                <motion.div 
                  className="h-64 rounded-2xl shadow-lg overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-2 left-2 z-10 opacity-25">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="text-white">
                      <path d="M16 28 Q12 24 8 20 Q12 16 16 12 Q20 16 24 20 Q20 24 16 28 Z" 
                            stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M16 28 Q14 24 12 20 Q14 16 16 12 Q18 16 20 20 Q18 24 16 28" 
                            stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <img
                    src={venueImages[3].fallback}
                    alt={venueImages[3].alt}
                    title={venueImages[3].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== venueImages[3].fallback) {
                        target.src = venueImages[3].fallback;
                      }
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Enhanced Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full z-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg z-20 w-20 h-20 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              
              {/* Additional Decorative Corner */}
              <div className="absolute -bottom-6 -left-6 opacity-12">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-primary">
                  <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <path d="M25 40 L55 40 M40 25 L40 55" stroke="currentColor" strokeWidth="0.8"/>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Text Section Decorative Border */}
            <div className="absolute -top-8 -right-8 opacity-10">
              <svg width="100" height="100" viewBox="0 0 100 100" className="text-secondary">
                <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20" 
                      stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="35" cy="35" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="65" cy="35" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <circle cx="35" cy="65" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="65" cy="65" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif mb-5">Preserving Wedding Traditions</h3>
            
            <p className="text-gray-600 mb-6">
              Sara Mahal is more than just a wedding venue - we are custodians of wedding traditions. Located in Kinathukadavu, just 25 km from Coimbatore city, our venue combines the tranquility of rural Tamil Nadu with modern amenities, making it the perfect setting for your special celebration.
            </p>
            
            <div className="mb-8 grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center"
                >
                  <CheckCircle2 className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button size="default" asChild>
                <a href="#pricing">View Packages</a>
              </Button>
              <Button variant="outline" size="default" className="group" asChild>
                <a href="#gallery">
                  Photo Gallery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Section Background Decoration */}
          <div className="absolute inset-0 -z-5 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 800 200" className="text-primary">
              <path d="M50 100 Q200 50 400 100 Q600 150 750 100" stroke="currentColor" strokeWidth="3" fill="none"/>
              <circle cx="150" cy="80" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="400" cy="120" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="650" cy="80" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Decorative Design */}
              <div className="absolute top-0 right-0 opacity-8">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary">
                  <circle cx="45" cy="15" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M38 8 Q45 5 52 8" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="45" cy="15" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 