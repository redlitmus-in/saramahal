import { motion } from "framer-motion";
import { CalendarDays, CheckCircle, ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const [showOffer, setShowOffer] = useState(true);
  const [formData, setFormData] = useState({
    date: '',
    eventType: '',
    guests: ''
  });
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    date: string;
    eventType: string;
  } | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // List of booked dates - update this when you get new bookings
  const bookedDates = [
    '2024-02-14', // Valentine's Day - booked
    '2024-03-15', // Wedding - booked
    '2024-04-20', // Reception - booked
    '2024-05-01', // May Day event - booked
    '2024-06-15', // Corporate event - booked
    '2024-07-28', // Traditional wedding - booked
    '2024-08-10', // Engagement - booked
    '2024-09-22', // Anniversary celebration - booked
    '2024-10-05', // Birthday celebration - booked
    '2024-11-18', // Naming ceremony - booked
    '2024-12-25', // Christmas celebration - booked
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear previous result when user changes input
    if (availabilityResult) {
      setAvailabilityResult(null);
    }
  };

  const handleAvailabilityCheck = async () => {
    if (!formData.date || !formData.eventType) {
      alert('Please select both date and event type');
      return;
    }

    setIsChecking(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const isAvailable = !bookedDates.includes(formData.date);
    const selectedDate = new Date(formData.date);
    const formattedDate = selectedDate.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    setAvailabilityResult({
      available: isAvailable,
      date: formattedDate,
      eventType: formData.eventType
    });
    
    setIsChecking(false);
  };

  const getAlternativeDates = () => {
    const selectedDate = new Date(formData.date);
    const alternatives = [];
    
    // Check next 7 days for alternatives
    for (let i = 1; i <= 7; i++) {
      const nextDate = new Date(selectedDate);
      nextDate.setDate(selectedDate.getDate() + i);
      const dateString = nextDate.toISOString().split('T')[0];
      
      if (!bookedDates.includes(dateString)) {
        alternatives.push(nextDate.toLocaleDateString('en-IN', { 
          month: 'short', 
          day: 'numeric' 
        }));
      }
      
      if (alternatives.length >= 3) break;
    }
    
    return alternatives;
  };

  return (
    <>
      <Helmet>
        <title>Sara Mahal - Premier Marriage Hall in Coimbatore | Wedding Venues Tamil Nadu</title>
        <meta name="description" content="Book Sara Mahal - the finest wedding venue in Kinathukadavu, Coimbatore. Premium marriage halls with AC, 500+ capacity, parking. Best wedding venues in Tamil Nadu for your dream celebration." />
        <meta name="keywords" content="Sara Mahal, wedding venues Coimbatore, marriage halls Tamil Nadu, Kinathukadavu wedding venue, wedding venues, marriage hall booking, wedding reception halls, AC marriage halls Coimbatore, best wedding venues Tamil Nadu, engagement venues Coimbatore, celebration halls" />
        <meta property="og:title" content="Sara Mahal - Premier Marriage Hall in Coimbatore | Wedding Venues Tamil Nadu" />
        <meta property="og:description" content="Book Sara Mahal - the finest wedding venue in Kinathukadavu, Coimbatore. Premium marriage halls with AC, 500+ capacity, parking." />
        <meta property="og:image" content="/hero-background.jpg" />
        <link rel="canonical" href="https://saramahal.com" />
      </Helmet>
      
      <section className="relative overflow-hidden min-h-screen flex items-center pt-16">
        {/* Beautiful Wedding Sketched Designs Background */}
        <div className="absolute inset-0 -z-5 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1400 900" className="text-white">
            {/* Top Corner Mandap Design */}
            <g transform="translate(100, 50)">
              <rect x="0" y="120" width="160" height="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <line x1="15" y1="60" x2="15" y2="120" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="145" y1="60" x2="145" y2="120" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="80" y1="45" x2="80" y2="120" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M-5 60 L165 60 L150 35 L10 35 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M10 35 L80 15 L150 35 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              
              {/* Decorative Garlands */}
              <path d="M25 60 Q30 65 35 60 Q40 65 45 60" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <path d="M55 60 Q60 65 65 60 Q70 65 75 60" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <path d="M85 60 Q90 65 95 60 Q100 65 105 60" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <path d="M115 60 Q120 65 125 60 Q130 65 135 60" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              
              {/* Hanging Flowers */}
              <circle cx="30" cy="70" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="60" cy="72" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="90" cy="69" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="120" cy="71" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            </g>
            
            {/* Right Side Large Paisley */}
            <g transform="translate(1150, 200)">
              <path d="M60 0 Q95 25 85 60 Q75 95 40 85 Q5 75 15 40 Q25 5 60 0" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M60 12 Q85 30 75 55 Q65 80 40 70 Q15 60 25 35 Q35 12 60 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="50" cy="30" r="4" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="42" cy="50" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <path d="M35 25 Q45 20 55 25" stroke="currentColor" strokeWidth="1" fill="none"/>
            </g>
            
            {/* Bottom Left Traditional Elements */}
            <g transform="translate(50, 650)">
              {/* Sacred Kalash */}
              <ellipse cx="50" cy="50" rx="18" ry="25" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              <ellipse cx="50" cy="30" rx="10" ry="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <line x1="40" y1="36" x2="60" y2="36" stroke="currentColor" strokeWidth="1"/>
              <path d="M42 30 Q50 25 58 30" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Sacred Mango Leaves */}
              <path d="M30 18 Q25 12 20 18 Q25 24 30 18" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M35 15 Q30 9 25 15 Q30 21 35 15" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M65 15 Q70 9 75 15 Q70 21 65 15" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M70 18 Q75 12 80 18 Q75 24 70 18" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              
              {/* Coconut */}
              <ellipse cx="50" cy="10" rx="8" ry="12" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M45 5 Q50 0 55 5" stroke="currentColor" strokeWidth="1" fill="none"/>
            </g>
            
            {/* Center Decorative Lotus Chain */}
            <g transform="translate(500, 400)">
              {/* Main Lotus */}
              <path d="M50 70 Q40 60 30 50 Q40 40 50 30 Q60 40 70 50 Q60 60 50 70 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M50 70 Q47 60 44 50 Q47 40 50 30 Q53 40 56 50 Q53 60 50 70" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
              
              {/* Side Lotuses */}
              <path d="M20 50 Q15 45 10 40 Q15 35 20 30 Q25 35 30 40 Q25 45 20 50 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="20" cy="40" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              
              <path d="M80 50 Q85 45 90 40 Q85 35 80 30 Q75 35 70 40 Q75 45 80 50 Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="80" cy="40" r="4" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              
              {/* Connecting Vines */}
              <path d="M30 40 Q40 35 50 40" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M50 40 Q60 35 70 40" stroke="currentColor" strokeWidth="1" fill="none"/>
            </g>
            
            {/* Top Right Corner Wedding Bells */}
            <g transform="translate(1200, 100)">
              <path d="M25 40 Q25 28 35 28 Q45 28 45 40 Q45 52 35 58 Q25 52 25 40 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              <circle cx="35" cy="54" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M30 20 Q35 15 40 20" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <line x1="35" y1="15" x2="35" y2="20" stroke="currentColor" strokeWidth="1"/>
              
              {/* Second Bell */}
              <path d="M55 45 Q55 33 65 33 Q75 33 75 45 Q75 57 65 63 Q55 57 55 45 Z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
              <circle cx="65" cy="59" r="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <path d="M60 25 Q65 20 70 25" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <line x1="65" y1="20" x2="65" y2="25" stroke="currentColor" strokeWidth="1"/>
              
              {/* Connecting Ribbon */}
              <path d="M45 35 Q50 30 55 35" stroke="currentColor" strokeWidth="1" fill="none"/>
            </g>
            
            {/* Bottom Right Decorative Vine */}
            <g transform="translate(1000, 750)">
              <path d="M0 0 Q30 -15 60 0 Q90 15 120 0 Q150 -15 180 0" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="20" cy="-8" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="50" cy="8" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="80" cy="-6" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="110" cy="9" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="140" cy="-8" r="3" stroke="currentColor" strokeWidth="0.8" fill="none"/>
              <circle cx="170" cy="6" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Falling Light Animation - Even Slower */}
        <div className="absolute inset-0 -z-5">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`light-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
              }}
              animate={{
                y: ['0vh', '110vh'],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 12,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating Traditional Wedding Elements */}
        <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`traditional-${i}`}
              className="absolute text-white/8"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.3, 0.8],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{
                duration: 30 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 15,
              }}
            >
              {i % 5 === 0 && (
                // Om Symbol
                <svg width="45" height="45" viewBox="0 0 45 45">
                  <path d="M10 25 Q10 15 18 15 Q26 15 26 22 Q26 28 22 30 Q26 32 26 38 Q26 40 24 40 Q22 40 22 38" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 25 Q8 23 10 21 Q12 23 10 25" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="30" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M28 13 Q32 11 35 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
              {i % 5 === 1 && (
                // Lotus
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <path d="M25 45 Q18 38 12 30 Q18 22 25 15 Q32 22 38 30 Q32 38 25 45 Z" 
                        stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M25 45 Q22 38 19 30 Q22 22 25 15 Q28 22 31 30 Q28 38 25 45" 
                        stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="25" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
              {i % 5 === 2 && (
                // Traditional Flower
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M20 10 Q24 16 20 20 Q16 16 20 10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M30 20 Q24 24 20 20 Q24 16 30 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M20 30 Q16 24 20 20 Q24 24 20 30" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M10 20 Q16 16 20 20 Q16 24 10 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
              {i % 5 === 3 && (
                // Paisley
                <svg width="35" height="35" viewBox="0 0 35 35">
                  <path d="M25 5 Q30 15 25 25 Q20 30 15 25 Q10 20 15 15 Q20 10 25 5" 
                        stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
              )}
              {i % 5 === 4 && (
                // Traditional Lamp
                <svg width="38" height="38" viewBox="0 0 38 38">
                  <ellipse cx="19" cy="25" rx="10" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M9 25 Q7 22 9 19 Q11 22 9 25" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M29 25 Q31 22 29 19 Q27 22 29 25" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <ellipse cx="19" cy="31" rx="6" ry="3" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M16 15 Q19 12 22 15" stroke="currentColor" strokeWidth="1.8" fill="none"/>
                  <line x1="19" y1="12" x2="19" y2="15" stroke="currentColor" strokeWidth="1"/>
                </svg>
              )}
            </motion.div>
          ))}
        </div>

                 {/* Background image/gradient - with purple overlay */}
         <div className="absolute inset-0 -z-10">
           <img
             src="/hero-background.jpg"
             alt="Sara Mahal wedding venue exterior view with traditional Tamil architecture and beautiful landscaping in Kinathukadavu Coimbatore"
             className="absolute inset-0 w-full h-full object-cover"
             style={{ objectPosition: 'center' }}
             loading="eager"
             onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.style.display = 'none';
               // Fallback to gradient background
               const parent = target.parentElement;
               if (parent) {
                 parent.style.background = 'linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%)';
               }
             }}
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-purple-950/85 to-slate-950/90" />
         </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="grid md:grid-cols-12 gap-6 items-center min-h-[calc(100vh-8rem)]">
            {/* Text Content */}
            <motion.div 
              className="md:col-span-7 text-white flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-5 leading-tight text-white drop-shadow-lg">
                Your <span className="text-secondary font-bold">Dream</span> Celebration <br />
                <span className="text-primary font-bold">Starts</span> at Sara Mahal
              </h1>
              <p className="text-base md:text-lg text-white mb-6 max-w-2xl drop-shadow-md">
                Premier marriage hall in Kinathukadavu, Coimbatore - where traditional celebrations meet modern elegance. Experience the perfect blend of culture and comfort for your special day.
              </p>

              {/* Features List - Updated with broader appeal */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Traditional wedding ceremonies & rituals",
                  "Fully air-conditioned halls (500+ capacity)",
                  "Premium sound & lighting systems",
                  "Authentic South Indian catering",
                  "Spacious parking for 200+ vehicles",
                  "Professional event photography"
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx + 0.5, duration: 0.5 }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm text-white drop-shadow">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 text-base px-8 py-3"
                  asChild
                >
                  <a href="#contact">
                    Book Your Event Date <CalendarDays className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-base px-8 py-3"
                  asChild
                >
                  <a href="#gallery">
                    View Our Venue <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Location Badge */}
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Located in Kinathukadavu, Coimbatore - Tamil Nadu</span>
              </div>
            </motion.div>

            {/* Availability Checker */}
            <motion.div 
              className="md:col-span-5 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-serif text-white mb-6 text-center">Check Date Availability</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select ceremony type</option>
                      <option value="engagement" className="bg-gray-800 text-white">Engagement</option>
                      <option value="wedding" className="bg-gray-800 text-white">Wedding Ceremony</option>
                      <option value="reception" className="bg-gray-800 text-white">Reception</option>
                      <option value="puberty" className="bg-gray-800 text-white">Puberty Ceremony</option>
                      <option value="naming" className="bg-gray-800 text-white">Naming Ceremony</option>
                      <option value="anniversary" className="bg-gray-800 text-white">Anniversary Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Expected Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 [&>option]:bg-gray-800 [&>option]:text-white"
                    >
                      <option value="" className="bg-gray-800 text-white">Select guest count</option>
                      <option value="50-100" className="bg-gray-800 text-white">50-100 guests</option>
                      <option value="100-200" className="bg-gray-800 text-white">100-200 guests</option>
                      <option value="200-300" className="bg-gray-800 text-white">200-300 guests</option>
                      <option value="300-400" className="bg-gray-800 text-white">300-400 guests</option>
                      <option value="400-500" className="bg-gray-800 text-white">400-500 guests</option>
                      <option value="500+" className="bg-gray-800 text-white">500+ guests</option>
                    </select>
                  </div>

                  <Button 
                    onClick={handleAvailabilityCheck}
                    disabled={isChecking || !formData.date || !formData.eventType}
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    {isChecking ? "Checking..." : "Check Availability"}
                  </Button>
                </div>

                {/* Availability Result */}
                {availabilityResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl border-2"
                    style={{
                      backgroundColor: availabilityResult.available ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      borderColor: availabilityResult.available ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                    }}
                  >
                    <div className="flex items-center mb-2">
                      {availabilityResult.available ? (
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mr-2" />
                      )}
                      <span className="font-semibold text-white">
                        {availabilityResult.available ? "Available!" : "Not Available"}
                      </span>
                    </div>
                    
                    <p className="text-white text-sm mb-3">
                      {availabilityResult.date} - {availabilityResult.eventType}
                    </p>
                    
                    {availabilityResult.available ? (
                      <div className="space-y-2">
                        <Button size="sm" className="w-full" asChild>
                          <a href="#contact">Book This Date</a>
                        </Button>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 bg-white/10 text-white border-white/30" asChild>
                            <a href="tel:+919876543210">
                              <Phone className="h-4 w-4 mr-1" />
                              Call Now
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-white/10 text-white border-white/30" asChild>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white text-sm mb-2">Alternative dates available:</p>
                        <div className="flex flex-wrap gap-2">
                          {getAlternativeDates().map((date, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/20 rounded text-white text-xs">
                              {date}
                            </span>
                          ))}
                        </div>
                        <Button size="sm" className="w-full mt-3" asChild>
                          <a href="#contact">Contact for Alternative Dates</a>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 