import { motion } from "framer-motion";
import { Heart, Users, Music, Utensils, Sparkles, Camera, Car, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  trending: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Traditional Wedding Ceremonies",
    description: "Authentic wedding rituals and customs conducted by experienced priests with proper traditional ceremonies for all cultural backgrounds.",
    trending: "Wedding rituals Coimbatore"
  },
  {
    icon: Users,
    title: "500+ Guest Capacity",
    description: "Spacious air-conditioned halls to accommodate large families and communities. Perfect for grand celebrations with comfortable seating arrangements.",
    trending: "Large wedding venues Coimbatore"
  },
  {
    icon: Utensils,
    title: "Authentic South Indian Cuisine",
    description: "Traditional South Indian vegetarian feast served on banana leaves with sambar, rasam, varieties of curries, and authentic regional delicacies.",
    trending: "Wedding catering Coimbatore"
  },
  {
    icon: Music,
    title: "Traditional Music & Sound",
    description: "Traditional wedding music with professional musicians and artists. Complete sound system for all ceremony and celebration requirements.",
    trending: "Traditional wedding music Tamil Nadu"
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Capture every precious moment of your special celebration with our network of experienced photographers specializing in South Indian weddings and events.",
    trending: "Wedding photography Coimbatore"
  },
  {
    icon: Car,
    title: "Ample Parking Space",
    description: "Free parking for 200+ vehicles with security. Easy access for guests coming from Coimbatore, Tirupur, Erode, and surrounding areas.",
    trending: "Wedding venues with parking Tamil Nadu"
  },
  {
    icon: Sparkles,
    title: "Traditional Decoration",
    description: "Beautiful traditional mandapam with fresh flowers, decorative elements, and authentic wedding decorations including traditional patterns and arrangements.",
    trending: "Traditional mandapam decoration Coimbatore"
  },
  {
    icon: MapPin,
    title: "Prime Kinathukadavu Location",
    description: "Conveniently located in Kinathukadavu, easily accessible via Coimbatore-Palakkad highway. Serene environment perfect for sacred ceremonies and celebrations.",
    trending: "Wedding venues Kinathukadavu Coimbatore"
  }
];

const Features = () => {

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden relative">
      {/* Background Wedding Sketched Designs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1400 800" className="text-primary">
          {/* Top Left Tamil Wedding Elements */}
          <g transform="translate(80, 80)">
            {/* Nadaswaram */}
            <rect x="10" y="20" width="100" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="5" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="115" cy="24" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="20" y1="16" x2="20" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="30" y1="16" x2="30" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="40" y1="16" x2="40" y2="32" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="16" x2="50" y2="32" stroke="currentColor" strokeWidth="1"/>
            
            {/* Tavil Drum */}
            <ellipse cx="50" cy="60" rx="20" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="50" cy="55" rx="18" ry="8" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="35" y1="60" x2="32" y2="70" stroke="currentColor" strokeWidth="1.2"/>
            <line x1="65" y1="60" x2="68" y2="70" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="32" cy="72" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="68" cy="72" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Top Right Service Icons */}
          <g transform="translate(1100, 120)">
            {/* Catering Service */}
            <rect x="0" y="0" width="40" height="25" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="30" cy="8" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="5" y1="15" x2="35" y2="15" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="8" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="0.6"/>
            
            {/* Photography */}
            <rect x="0" y="40" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="15" cy="50" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="15" cy="50" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="22" y="44" width="4" height="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Music Notes */}
            <circle cx="50" cy="45" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor"/>
            <line x1="53" y1="45" x2="53" y2="25" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="60" cy="40" r="3" stroke="currentColor" strokeWidth="1.2" fill="currentColor"/>
            <line x1="63" y1="40" x2="63" y2="20" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M53 25 Q58 22 63 25" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          </g>
          
          {/* Center Large Traditional Elements */}
          <g transform="translate(600, 200)">
            {/* Large Kolam Pattern */}
            <circle cx="0" cy="0" r="40" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <circle cx="0" cy="0" r="30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="0" cy="0" r="20" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Radiating Lines */}
            <line x1="-40" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1"/>
            <line x1="0" y1="-40" x2="0" y2="40" stroke="currentColor" strokeWidth="1"/>
            <line x1="-28" y1="-28" x2="28" y2="28" stroke="currentColor" strokeWidth="1"/>
            <line x1="28" y1="-28" x2="-28" y2="28" stroke="currentColor" strokeWidth="1"/>
            
            {/* Corner Dots */}
            <circle cx="-25" cy="-25" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="25" cy="-25" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="25" cy="25" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="-25" cy="25" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Petals */}
            <path d="M0 -20 Q-8 -30 -16 -20 Q-8 -10 0 -20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M0 20 Q8 30 16 20 Q8 10 0 20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M-20 0 Q-30 -8 -20 -16 Q-10 -8 -20 0" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M20 0 Q30 8 20 16 Q10 8 20 0" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Bottom Left Wedding Services */}
          <g transform="translate(100, 550)">
            {/* Parking */}
            <rect x="0" y="0" width="50" height="30" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="5" y="5" width="40" height="20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="15" cy="30" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="35" cy="30" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="18" y="8" width="14" height="10" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Guest Seating */}
            <rect x="70" y="10" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="85" y="10" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="100" y="10" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <line x1="70" y1="5" x2="112" y2="5" stroke="currentColor" strokeWidth="1"/>
            
            {/* Decoration */}
            <path d="M130 5 Q140 0 150 10 Q140 20 130 15 Q135 10 130 5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="140" cy="10" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M135 25 Q140 30 145 25" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Bottom Right Traditional Patterns */}
          <g transform="translate(1000, 600)">
            {/* Banana Leaf Pattern */}
            <path d="M0 0 Q20 -10 40 0 Q30 20 20 30 Q10 20 0 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M5 5 Q20 0 35 5 Q30 15 20 20 Q10 15 5 5" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="10" y1="8" x2="30" y2="12" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="8" y1="15" x2="32" y2="18" stroke="currentColor" strokeWidth="0.6"/>
            
            {/* Flower Garland */}
            <circle cx="60" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="75" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="90" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="105" cy="15" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M60 10 Q67 12 75 15 Q82 12 90 10 Q97 12 105 15" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Small decorative elements */}
            <circle cx="70" cy="30" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="85" cy="28" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <circle cx="100" cy="32" r="2" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          </g>
          
          {/* Top Center Decorative Border */}
          <g transform="translate(400, 50)">
            <path d="M0 10 Q50 5 100 10 Q150 15 200 10 Q250 5 300 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="50" cy="8" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="150" cy="12" r="2" fill="currentColor" opacity="0.7"/>
            <circle cx="250" cy="8" r="2" fill="currentColor" opacity="0.6"/>
            <path d="M40 6 Q50 3 60 6" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M140 14 Q150 17 160 14" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M240 6 Q250 3 260 6" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Service Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary/8"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.3, 0.8],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 40 + Math.random() * 30,
              repeat: Infinity,
              delay: Math.random() * 25,
            }}
          >
            {i % 6 === 0 && (
              // Music Note
              <svg width="35" height="35" viewBox="0 0 35 35">
                <circle cx="8" cy="25" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                <line x1="12" y1="25" x2="12" y2="8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="22" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
                <line x1="26" y1="20" x2="26" y2="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8 Q19 5 26 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            )}
            {i % 6 === 1 && (
              // Heart with Decoration
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M16 28 Q10 22 6 18 Q6 12 10 12 Q13 12 16 16 Q19 12 22 12 Q26 12 26 18 Q22 22 16 28 Z" 
                      stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="20" cy="16" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 6 === 2 && (
              // Traditional Lamp
              <svg width="30" height="30" viewBox="0 0 30 30">
                <ellipse cx="15" cy="18" rx="8" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M7 18 Q5 16 7 14 Q9 16 7 18" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M23 18 Q25 16 23 14 Q21 16 23 18" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <ellipse cx="15" cy="23" rx="5" ry="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M13 10 Q15 8 17 10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                <line x1="15" y1="8" x2="15" y2="10" stroke="currentColor" strokeWidth="1"/>
              </svg>
            )}
            {i % 6 === 3 && (
              // Users/Guests
              <svg width="38" height="38" viewBox="0 0 38 38">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M2 30 Q2 22 12 22 Q22 22 22 30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="26" cy="10" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M18 28 Q18 22 26 22 Q34 22 34 28" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
            )}
            {i % 6 === 4 && (
              // Camera
              <svg width="35" height="35" viewBox="0 0 35 35">
                <rect x="5" y="12" width="25" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="17.5" cy="20" r="5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <circle cx="17.5" cy="20" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 6 === 5 && (
              // Traditional Flower
              <svg width="28" height="28" viewBox="0 0 28 28">
                <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M14 6 Q17 10 14 14 Q11 10 14 6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M22 14 Q18 17 14 14 Q18 11 22 14" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M14 22 Q11 18 14 14 Q17 18 14 22" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M6 14 Q10 11 14 14 Q10 17 6 14" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
            )}
                </motion.div>
              ))}
            </div>

      <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-primary font-semibold tracking-wider mb-2 inline-block">Why Choose Sara Mahal</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Complete Wedding & Event Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sara Mahal offers everything you need for an authentic celebration in Coimbatore. 
            From traditional ceremonies to modern amenities, we ensure your special day is perfect in every way.
          </p>
              </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
              
              {/* SEO Keywords */}
              <div className="text-xs text-primary/60 font-medium">
                #{feature.trending.replace(/\s+/g, '').toLowerCase()}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif mb-4">Additional Services for All Celebrations</h3>
            <p className="text-gray-600">Comprehensive event solutions for families across Tamil Nadu</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-semibold">🕉️</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Priest Arrangements</h4>
              <p className="text-xs text-gray-600">Experienced priests for authentic ceremonies of all traditions</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-semibold">🌺</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Fresh Flower Decoration</h4>
              <p className="text-xs text-gray-600">Jasmine, roses, and traditional wedding flowers for all celebrations</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-semibold">🎭</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Cultural Programs</h4>
              <p className="text-xs text-gray-600">Traditional music and dance performances for all events</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-semibold">🍽️</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Custom Catering</h4>
              <p className="text-xs text-gray-600">Multi-cuisine options and traditional South Indian specialties</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mt-8">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">15+</span>
              </div>
              <span className="text-gray-700">Years of wedding & event expertise</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">500+</span>
              </div>
              <span className="text-gray-700">Successful celebrations hosted</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold">25</span>
              </div>
              <span className="text-gray-700">km from Coimbatore city</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 