import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Star, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Wedding Sketched Background Designs */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 600" className="text-white">
          {/* Large Mandap Structure */}
          <g transform="translate(50, 100)">
            <rect x="0" y="150" width="200" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="20" y1="80" x2="20" y2="150" stroke="currentColor" strokeWidth="2"/>
            <line x1="180" y1="80" x2="180" y2="150" stroke="currentColor" strokeWidth="2"/>
            <line x1="100" y1="60" x2="100" y2="150" stroke="currentColor" strokeWidth="2"/>
            <path d="M-10 80 L210 80 L190 50 L10 50 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M10 50 L100 20 L190 50 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            
            {/* Hanging Flower Garlands */}
            <path d="M30 80 Q35 85 40 80 Q45 85 50 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M70 80 Q75 85 80 80 Q85 85 90 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M110 80 Q115 85 120 80 Q125 85 130 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M150 80 Q155 85 160 80 Q165 85 170 80" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Decorative Flowers */}
            <circle cx="35" cy="90" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="75" cy="92" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="115" cy="89" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="155" cy="91" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Corner Decorative Elements */}
          <g transform="translate(600, 50)">
            {/* Lotus Pattern */}
            <path d="M50 50 Q40 40 30 50 Q40 60 50 50 Q60 40 70 50 Q60 60 50 50" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M45 45 L55 55 M55 45 L45 55" stroke="currentColor" strokeWidth="0.8"/>
          </g>
          
          {/* Bottom Right Wedding Bells */}
          <g transform="translate(650, 450)">
            <path d="M20 30 Q20 20 30 20 Q40 20 40 30 Q40 40 30 45 Q20 40 20 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="30" cy="42" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M25 15 Q30 10 35 15" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="30" y1="10" x2="30" y2="15" stroke="currentColor" strokeWidth="1"/>
            
            {/* Second Bell */}
            <path d="M50 35 Q50 25 60 25 Q70 25 70 35 Q70 45 60 50 Q50 45 50 35 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="60" cy="47" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M55 20 Q60 15 65 20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="60" y1="15" x2="60" y2="20" stroke="currentColor" strokeWidth="1"/>
          </g>
          
          {/* Left Side Decorative Vine */}
          <g transform="translate(20, 200)">
            <path d="M0 0 Q10 20 20 0 Q30 20 40 0 Q50 20 60 0" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="10" cy="15" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="30" cy="15" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="50" cy="15" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Traditional Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            {i % 4 === 0 && (
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path d="M15 25 Q10 20 8 15 Q8 10 12 10 Q15 12 15 15 Q15 12 18 10 Q22 10 22 15 Q20 20 15 25 Z" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 4 === 1 && (
              <svg width="25" height="25" viewBox="0 0 25 25">
                <circle cx="12.5" cy="12.5" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="12.5" cy="10" r="2" fill="currentColor"/>
              </svg>
            )}
            {i % 4 === 2 && (
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M10 18 Q6 14 4 10 Q6 6 10 2 Q14 6 16 10 Q14 14 10 18 Z" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 4 === 3 && (
              <svg width="28" height="28" viewBox="0 0 28 28">
                <path d="M8 14 Q8 8 14 8 Q20 8 20 14 Q20 20 14 22 Q8 20 8 14 Z" 
                      stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1">
        <svg width="100%" height="20" viewBox="0 0 1200 20" className="text-primary">
          <path d="M0 10 Q100 5 200 10 Q300 15 400 10 Q500 5 600 10 Q700 15 800 10 Q900 5 1000 10 Q1100 15 1200 10" 
                stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="100" cy="8" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="300" cy="12" r="1.5" fill="currentColor" opacity="0.7"/>
          <circle cx="500" cy="8" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="700" cy="12" r="1.5" fill="currentColor" opacity="0.7"/>
          <circle cx="900" cy="8" r="2" fill="currentColor" opacity="0.6"/>
          <circle cx="1100" cy="12" r="1.5" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative Corner Design */}
              <div className="absolute -top-2 -left-2 opacity-20">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                  <path d="M5 20 Q10 10 20 15 Q30 20 35 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="25" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Star size={20} className="text-white" fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white">Sara Mahal</h3>
                  <p className="text-sm text-primary">Premium Wedding Venue</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Creating magical wedding moments in the heart of Kinathukadavu.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Decorative Side Design */}
              <div className="absolute -right-2 top-4 opacity-15">
                <svg width="30" height="100" viewBox="0 0 30 100" className="text-secondary">
                  <path d="M15 10 Q20 20 15 30 Q10 40 15 50 Q20 60 15 70 Q10 80 15 90" 
                        stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="18" cy="25" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <circle cx="12" cy="45" r="1.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <circle cx="18" cy="65" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Phone/Contact Decorative Design */}
              <div className="absolute -top-1 -right-1 opacity-15">
                <svg width="35" height="35" viewBox="0 0 35 35" className="text-primary">
                  <circle cx="17.5" cy="17.5" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M12 12 Q17.5 8 23 12 Q27 17.5 23 23 Q17.5 27 12 23 Q8 17.5 12 12" 
                        stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="17.5" cy="17.5" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">Kinathukadavu, Coimbatore</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-primary text-sm transition-colors">
                    +91 9876543210
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <a href="mailto:info@saramahal.com" className="text-gray-300 hover:text-primary text-sm transition-colors">
                    info@saramahal.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Newsletter Decorative Design */}
              <div className="absolute -top-2 -left-2 opacity-15">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-secondary">
                  <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M8 14 L20 22 L32 14" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <circle cx="28" cy="8" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <path d="M10 6 Q15 4 20 6 Q25 4 30 6" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get wedding tips and exclusive offers.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                />
                <motion.button
                  className="w-full px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 relative">
          {/* Bottom Decorative Border */}
          <div className="absolute top-0 left-0 right-0">
            <svg width="100%" height="6" viewBox="0 0 1200 6" className="text-primary/30">
              <path d="M0 3 Q200 1 400 3 Q600 5 800 3 Q1000 1 1200 3" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="200" cy="2" r="1" fill="currentColor"/>
              <circle cx="600" cy="4" r="1" fill="currentColor"/>
              <circle cx="1000" cy="2" r="1" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 py-6">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 text-center sm:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Sara Mahal. All rights reserved.
                </p>
                <div className="hidden sm:flex items-center gap-2 text-gray-500">
                  <span>•</span>
                  <span className="text-xs">Crafted with</span>
                  <Heart size={12} className="text-red-400" fill="currentColor" />
                  <span className="text-xs">for your special day</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 