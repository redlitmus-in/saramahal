import { useState, useEffect, useMemo, memo, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";

// Lazy load non-critical components for better performance
const About = lazy(() => import("./components/About"));
const EventTypes = lazy(() => import("./components/EventTypes"));
const Features = lazy(() => import("./components/Features"));
const Gallery = lazy(() => import("./components/Gallery"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));
const FAQ = lazy(() => import("./components/FAQ"));
const CeremonyTimeline = lazy(() => import("./components/CeremonyTimeline"));
const PricingTable = lazy(() => import("./components/PricingTable"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));
const Confetti = lazy(() => import("react-confetti"));

// Optimized loading spinner component
const LazyLoadSpinner = memo(() => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
));

// Memoized decorative element component for better performance
const DecorativeElement = memo(({ 
  type, 
  positions, 
  className 
}: { 
  type: 'heart' | 'flower' | 'star'; 
  positions: Array<{top: string; left: string; size: number; delay: number; duration?: number}>; 
  className: string;
}) => {
  return (
    <div className={className}>
      {positions.map((pos, index) => (
        <div
          key={`${type}-${index}`}
          className={type}
          style={{
            top: pos.top,
            left: pos.left,
            width: type === 'star' ? `${pos.size / 4}px` : `${pos.size}px`,
            height: type === 'star' ? `${pos.size / 4}px` : `${pos.size}px`,
            animationDuration: pos.duration ? `${pos.duration}s` : undefined,
            animationDelay: `${pos.delay}s`,
            fontSize: type === 'flower' ? `${pos.size * 2}px` : undefined,
            opacity: type === 'flower' ? 0.05 : undefined
          }}
        />
      ))}
    </div>
  );
});

// Generate random positions with memoization for better performance
const useDecorativePositions = () => {
  return useMemo(() => {
    const generateRandomPositions = (count: number) => {
      return Array.from({ length: count }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10
      }));
    };

    return {
      hearts: generateRandomPositions(8), // Reduced from 15 for mobile performance
      flowers: generateRandomPositions(4), // Reduced from 8 for mobile performance
      stars: generateRandomPositions(12) // Reduced from 20 for mobile performance
    };
  }, []);
};

// Optimized scroll handler with throttling
const useOptimizedScroll = () => {
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const animatedElements = document.querySelectorAll('.reveal-on-scroll');
          const windowHeight = window.innerHeight;
          
          animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 50) { // Reduced threshold for mobile
              element.classList.add('active');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check with reduced threshold
    handleScroll();
    
    // Passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { hearts, flowers, stars } = useDecorativePositions();
  
  // Use optimized scroll handler
  useOptimizedScroll();

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Reduced from 5s for mobile performance
  };

  return (
    <main className="relative overflow-x-hidden wedding-bg-pattern">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000, // Reduced for mobile
          style: {
            fontSize: '14px' // Mobile-friendly toast size
          }
        }}
      />
      
      {/* Lazy load confetti only when needed */}
      {showConfetti && (
        <Suspense fallback={null}>
          <Confetti 
            recycle={false} 
            onConfettiComplete={() => setShowConfetti(false)}
            numberOfPieces={100} // Reduced for mobile performance
            gravity={0.3} // Optimized for mobile
          />
        </Suspense>
      )}
      
      {/* Optimized decorative elements with reduced count for mobile */}
      <DecorativeElement 
        type="heart" 
        positions={hearts} 
        className="floating-hearts hidden sm:block" // Hide on mobile for performance
      />
      
      <DecorativeElement 
        type="star" 
        positions={stars} 
        className="star-bg hidden md:block" // Hide on small screens
      />
      
      <DecorativeElement 
        type="flower" 
        positions={flowers} 
        className="hidden lg:block" // Hide on mobile and tablet
      />
      
      {/* Critical above-the-fold content */}
      <Header />
      <Hero />
      
      {/* Lazy loaded sections with improved mobile spacing */}
      <Suspense fallback={<LazyLoadSpinner />}>
        <div className="section-divider" />
        
        <div id="about" className="corner-flourish">
          <About />
        </div>
        
        <div className="section-divider" />
        
        <div id="event-types">
          <EventTypes />
        </div>
        
        <div className="section-divider" />
        
        <div id="features">
          <Features />
        </div>
        
        <div className="section-divider" />
        
        <CeremonyTimeline />
        
        <div className="section-divider" />
        
        <PricingTable />
        
        <div className="section-divider" />
        
        <div id="gallery" className="corner-flourish">
          <Gallery />
        </div>
        
        <div className="section-divider" />
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div className="section-divider" />
        
        <CTA />
        
        <div className="section-divider" />
        
        <div id="faq">
          <FAQ />
        </div>
        
        <div className="section-divider" />
        
        <div id="contact" className="corner-flourish">
          <Contact onFormSubmit={handleConfetti} />
        </div>
        
        <Footer />
        
        {/* WhatsApp button - mobile optimized */}
        <WhatsAppButton phoneNumber="+919876543210" />
      </Suspense>
    </main>
  );
}

export default App;
