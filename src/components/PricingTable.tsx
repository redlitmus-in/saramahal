import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PricingFeature {
  name: string;
  basic: boolean | string;
  classic: boolean | string;
  premium: boolean | string;
}

const pricingFeatures: PricingFeature[] = [
  {
    name: "Hall Usage Time",
    basic: "2 Hours",
    classic: "4 Hours",
    premium: "Full Day"
  },
  {
    name: "Guest Capacity",
    basic: "150",
    classic: "300",
    premium: "500"
  },
  {
    name: "Stage Décor Included",
    basic: false,
    classic: true,
    premium: "Premium"
  },
  {
    name: "Celebrant & Legal Docs",
    basic: true,
    classic: true,
    premium: true
  },
  {
    name: "Sound System",
    basic: false,
    classic: "Basic",
    premium: "Professional"
  },
  {
    name: "Photography Coordination",
    basic: false,
    classic: false,
    premium: true
  },
  {
    name: "Dining Setup",
    basic: "Basic",
    classic: "Standard",
    premium: "Premium"
  },
  {
    name: "Bridal Room Access",
    basic: false,
    classic: "2 Hours",
    premium: "Full Day"
  }
];

const PricingTable = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Wedding Sketched Designs */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 700" className="text-primary">
          {/* Top Left Price Tag Design */}
          <g transform="translate(80, 80)">
            <path d="M10 10 L50 10 L60 20 L50 30 L10 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="18" cy="20" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <line x1="25" y1="16" x2="35" y2="16" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="25" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="25" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="0.8"/>
            
            {/* Currency Symbol */}
            <path d="M15 45 Q15 40 20 40 Q25 40 25 45 Q25 50 20 50 Q15 50 15 45" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <line x1="12" y1="42" x2="28" y2="42" stroke="currentColor" strokeWidth="1"/>
            <line x1="12" y1="48" x2="28" y2="48" stroke="currentColor" strokeWidth="1"/>
            <line x1="20" y1="35" x2="20" y2="55" stroke="currentColor" strokeWidth="1.2"/>
          </g>
          
          {/* Top Right Package Icons */}
          <g transform="translate(1000, 100)">
            {/* Premium Crown */}
            <path d="M20 15 L25 5 L30 10 L35 5 L40 15 L45 20 L15 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="30" cy="8" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="40" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="15" y="20" width="30" height="4" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Classic Ring */}
            <circle cx="70" cy="35" r="12" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <circle cx="70" cy="35" r="8" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M62 35 Q65 30 70 32 Q75 30 78 35" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="70" cy="32" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Basic Package Symbol */}
            <rect x="100" y="25" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M105 30 L110 35 L115 30" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="110" cy="38" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Center Decorative Pricing Elements */}
          <g transform="translate(500, 180)">
            {/* Ornate Price Frame */}
            <rect x="-40" y="-30" width="80" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <rect x="-35" y="-25" width="70" height="50" rx="5" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Corner Decorations */}
            <path d="M-40 -15 Q-35 -20 -30 -15" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M30 -15 Q35 -20 40 -15" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M-40 15 Q-35 20 -30 15" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M30 15 Q35 20 40 15" stroke="currentColor" strokeWidth="1" fill="none"/>
            
            {/* Inner Pattern */}
            <circle cx="0" cy="0" r="15" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M-10 -10 L10 10 M10 -10 L-10 10" stroke="currentColor" strokeWidth="0.8"/>
            <circle cx="0" cy="0" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Bottom Left Service Features */}
          <g transform="translate(120, 450)">
            {/* Feature Checkmarks */}
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M5 10 L8 13 L15 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            
            <circle cx="10" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M5 30 L8 33 L15 26" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            
            <circle cx="10" cy="50" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M5 50 L8 53 L15 46" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            
            {/* Feature Lines */}
            <line x1="25" y1="10" x2="80" y2="10" stroke="currentColor" strokeWidth="1"/>
            <line x1="25" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="1"/>
            <line x1="25" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1"/>
            
            {/* Decorative Elements */}
            <path d="M90 20 Q95 15 100 20 Q95 25 90 20" stroke="currentColor" strokeWidth="1" fill="none"/>
            <circle cx="95" cy="40" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          </g>
          
          {/* Bottom Right Package Comparison */}
          <g transform="translate(900, 500)">
            {/* Comparison Chart */}
            <rect x="0" y="0" width="20" height="40" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="25" y="-10" width="20" height="50" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <rect x="50" y="-20" width="20" height="60" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            
            {/* Chart Labels */}
            <line x1="5" y1="45" x2="15" y2="45" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="30" y1="45" x2="40" y2="45" stroke="currentColor" strokeWidth="0.8"/>
            <line x1="55" y1="45" x2="65" y2="45" stroke="currentColor" strokeWidth="0.8"/>
            
            {/* Star Ratings */}
            <path d="M10 50 L12 55 L17 55 L13 58 L15 63 L10 60 L5 63 L7 58 L3 55 L8 55 Z" 
                  stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M35 50 L37 55 L42 55 L38 58 L40 63 L35 60 L30 63 L32 58 L28 55 L33 55 Z" 
                  stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M60 50 L62 55 L67 55 L63 58 L65 63 L60 60 L55 63 L57 58 L53 55 L58 55 Z" 
                  stroke="currentColor" strokeWidth="0.8" fill="none"/>
          </g>
          
          {/* Top Center Decorative Border */}
          <g transform="translate(300, 40)">
            <path d="M0 10 Q100 5 200 10 Q300 15 400 10 Q500 5 600 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="100" cy="8" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="300" cy="12" r="2.5" fill="currentColor" opacity="0.7"/>
            <circle cx="500" cy="8" r="2" fill="currentColor" opacity="0.6"/>
            
            {/* Decorative Price Tags */}
            <path d="M80 5 L90 5 L95 10 L90 15 L80 15 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M280 12 L290 12 L295 17 L290 22 L280 22 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M480 5 L490 5 L495 10 L490 15 L480 15 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
          
          {/* Mid-Section Floating Elements */}
          <g transform="translate(200, 300)">
            {/* Discount Tag */}
            <path d="M0 0 L40 0 L50 10 L40 20 L0 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M15 6 Q25 4 35 6" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M15 10 Q20 8 30 10" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M15 14 Q22 12 28 14" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            
            {/* Value Badge */}
            <circle cx="80" cy="10" r="15" stroke="currentColor" strokeWidth="1.8" fill="none"/>
            <path d="M70 5 L75 0 L80 5 L85 0 L90 5 L90 15 L70 15 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <circle cx="80" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Floating Pricing Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-secondary/8"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.9, 1.2, 0.9],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 45 + Math.random() * 35,
              repeat: Infinity,
              delay: Math.random() * 30,
            }}
          >
            {i % 5 === 0 && (
              // Price Tag
              <svg width="35" height="35" viewBox="0 0 35 35">
                <path d="M5 8 L25 8 L30 15 L25 22 L5 22 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="10" cy="15" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="0.8"/>
                <line x1="16" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="0.8"/>
              </svg>
            )}
            {i % 5 === 1 && (
              // Crown
              <svg width="32" height="32" viewBox="0 0 32 32">
                <path d="M6 18 L10 8 L16 12 L22 8 L26 18 L28 22 L4 22 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="8" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="16" cy="10" r="2.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="24" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 5 === 2 && (
              // Package Box
              <svg width="28" height="28" viewBox="0 0 28 28">
                <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M4 12 L14 4 L24 12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1"/>
                <path d="M9 16 Q14 14 19 16" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 5 === 3 && (
              // Value Star
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path d="M15 3 L18 12 L27 12 L20 18 L23 27 L15 21 L7 27 L10 18 L3 12 L12 12 Z" 
                      stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="15" cy="15" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
            {i % 5 === 4 && (
              // Percentage
              <svg width="26" height="26" viewBox="0 0 26 26">
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <line x1="6" y1="6" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="18" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="gradient-text">Packages</span> & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your special day. All packages can be customized to suit your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className={`rounded-2xl overflow-hidden shadow-lg border ${
              selectedPackage === 'basic' ? 'border-primary' : 'border-gray-200'
            }`}
            onClick={() => setSelectedPackage('basic')}
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Basic Ceremony</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">₹15,000</span>
                <span className="text-gray-500 ml-2">/ event</span>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for small ceremonies with basic requirements.
              </p>
              <Button className="w-full" variant="outline">Select Package</Button>
            </div>
            <div className="bg-gray-50 p-8">
              <ul className="space-y-3">
                {pricingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    {feature.basic ? (
                      <>
                        <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>
                          {feature.name}: {typeof feature.basic === 'string' ? feature.basic : ''}
                        </span>
                      </>
                    ) : (
                      <>
                        <XIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature.name}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Classic Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className={`rounded-2xl overflow-hidden shadow-xl border-2 transform scale-105 z-10 bg-white ${
              selectedPackage === 'classic' ? 'border-primary' : 'border-gray-200'
            }`}
            onClick={() => setSelectedPackage('classic')}
          >
            <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-center text-sm font-semibold">
              MOST POPULAR
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Classic Wedding</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">₹30,000</span>
                <span className="text-gray-500 ml-2">/ event</span>
              </div>
              <p className="text-gray-600 mb-6">
                The perfect balance of features for a traditional wedding ceremony.
              </p>
              <Button className="w-full">Select Package</Button>
            </div>
            <div className="bg-gray-50 p-8">
              <ul className="space-y-3">
                {pricingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    {feature.classic ? (
                      <>
                        <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>
                          {feature.name}: {typeof feature.classic === 'string' ? feature.classic : ''}
                        </span>
                      </>
                    ) : (
                      <>
                        <XIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature.name}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className={`rounded-2xl overflow-hidden shadow-lg border ${
              selectedPackage === 'premium' ? 'border-primary' : 'border-gray-200'
            }`}
            onClick={() => setSelectedPackage('premium')}
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Premium Celebration</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">₹55,000</span>
                <span className="text-gray-500 ml-2">/ event</span>
              </div>
              <p className="text-gray-600 mb-6">
                The ultimate wedding experience with all premium services included.
              </p>
              <Button className="w-full" variant="outline">Select Package</Button>
            </div>
            <div className="bg-gray-50 p-8">
              <ul className="space-y-3">
                {pricingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    {feature.premium ? (
                      <>
                        <CheckIcon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>
                          {feature.name}: {typeof feature.premium === 'string' ? feature.premium : ''}
                        </span>
                      </>
                    ) : (
                      <>
                        <XIcon className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature.name}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">
            Looking for something specific? We offer custom packages tailored to your needs.
          </p>
          <Button variant="outline" size="lg">
            Request Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable; 