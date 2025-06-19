import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
  </svg>
);

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hi! I'm interested in booking Sara Mahal for my Tamil wedding. Please share availability and packages."
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // Format the phone number (remove any non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
  
  // Optimized popup handler with useCallback
  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);
  
  // Auto show popup every 20 seconds (increased for mobile UX)
  useEffect(() => {
    const timer = setInterval(() => {
      setShowPopup(true);
      // Auto hide after 6 seconds (reduced for mobile)
      setTimeout(() => setShowPopup(false), 6000);
    }, 20000); // Increased interval for mobile
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      {/* Mobile-Optimized Popup Message */}
      <motion.div
        className="fixed bottom-16 sm:bottom-20 right-2 sm:right-4 z-50 max-w-[280px] sm:max-w-xs"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ 
          opacity: showPopup ? 1 : 0,
          scale: showPopup ? 1 : 0.8,
          x: showPopup ? 0 : 20
        }}
        transition={{ 
          type: "spring",
          stiffness: 200, // Reduced for mobile performance
          damping: 25
        }}
        style={{ pointerEvents: showPopup ? 'auto' : 'none' }}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-3 sm:p-4 relative">
          {/* Close button - larger touch target for mobile */}
          <button
            onClick={handleClosePopup}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-1 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
            aria-label="Close popup"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
          </button>
          
          {/* Popup content - mobile optimized */}
          <div className="pr-5 sm:pr-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-800 text-xs sm:text-sm">Sara Mahal</span>
            </div>
            
            <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
              🎉 <strong>Special Offer!</strong><br/>
              Book now & get <span className="text-green-600 font-semibold">FREE mandap decoration</span> worth ₹25,000!
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                📍 Kinathukadavu, CBE
              </div>
              <div className="bg-green-100 text-green-700 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                Limited Time
              </div>
            </div>
          </div>
          
          {/* Speech bubble arrow - adjusted for mobile */}
          <div className="absolute bottom-0 right-6 sm:right-8 transform translate-y-full">
            <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 sm:border-l-8 sm:border-r-8 sm:border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      </motion.div>

      {/* Mobile-Responsive WhatsApp Button */}
      <motion.div
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 200, // Reduced for mobile performance
          damping: 20,
          delay: 1.5 // Reduced delay for mobile
        }}
      >
        {/* Reduced pulse animations for mobile performance */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 hidden sm:block" // Hide on mobile
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400 hidden sm:block" // Hide on mobile
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Mobile-responsive button sizes */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-lg sm:shadow-2xl overflow-hidden group touch-manipulation"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -4, 0], // Reduced movement for mobile
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          aria-label="Chat on WhatsApp - Book your celebration at Sara Mahal"
        >
          {/* Simplified background for mobile performance */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-700 hidden sm:block"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10, // Slower for mobile performance
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Button Content - responsive icon sizes */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: isHovered ? [0, -8, 8, -8, 0] : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          </div>
          
          {/* Simplified shine effect for mobile */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -skew-x-12 hidden sm:block"
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        </motion.a>
        
        {/* Desktop-only tooltip */}
        <motion.div
          className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-xl hidden sm:block"
          initial={{ opacity: 0, x: 6, scale: 0.8 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 6,
            scale: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          Quick Booking!
          {/* Arrow */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-2 border-transparent border-l-gray-900"></div>
        </motion.div>
      </motion.div>

      {/* Reduced particles for mobile performance */}
      <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 pointer-events-none hidden sm:block">
        {[...Array(2)].map((_, i) => ( // Reduced from 4 to 2
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full opacity-50"
            style={{
              left: Math.random() * 50 - 25,
              top: Math.random() * 50 - 25,
            }}
            animate={{
              y: [0, -25, -50],
              opacity: [0.5, 0.2, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default WhatsAppButton; 