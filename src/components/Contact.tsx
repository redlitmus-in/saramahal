import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

interface ContactProps {
  onFormSubmit: () => void;
}

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    details: "+91 98765 43210",
    subtext: "Available 10 AM - 8 PM"
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    details: "info@saramahal.com",
    subtext: "We reply within 4 hours"
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Address",
    details: "Sara Mahal, Kinathukadavu",
    subtext: "Coimbatore District, Tamil Nadu 642109"
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Working Hours",
    details: "Monday - Saturday: 10:00 AM - 8:00 PM",
    subtext: "Sunday: By Appointment Only"
  }
];

const Contact = ({ onFormSubmit }: ContactProps) => {
  return (
    <section className="relative bg-white">
      {/* Decorative Wedding Stage Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 py-16">
        {/* Wedding Mandap/Stage Illustration */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            {/* Mandap Base */}
            <rect x="300" y="300" width="600" height="20" fill="currentColor" className="text-primary" />
            
            {/* Pillars */}
            <rect x="320" y="150" width="20" height="150" fill="currentColor" className="text-primary" />
            <rect x="860" y="150" width="20" height="150" fill="currentColor" className="text-primary" />
            <rect x="580" y="120" width="20" height="180" fill="currentColor" className="text-primary" />
            <rect x="600" y="120" width="20" height="180" fill="currentColor" className="text-primary" />
            
            {/* Mandap Roof */}
            <path d="M280 150 L920 150 L900 120 L300 120 Z" fill="currentColor" className="text-secondary" />
            <path d="M300 120 L600 80 L900 120 Z" fill="currentColor" className="text-primary" />
            
            {/* Decorative Elements */}
            <circle cx="600" cy="200" r="8" fill="currentColor" className="text-secondary" />
            <circle cx="580" cy="180" r="4" fill="currentColor" className="text-primary" />
            <circle cx="620" cy="180" r="4" fill="currentColor" className="text-primary" />
            
            {/* Hanging Decorations */}
            <line x1="340" y1="150" x2="340" y2="170" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="380" y1="150" x2="380" y2="165" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="420" y1="150" x2="420" y2="175" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="780" y1="150" x2="780" y2="175" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="820" y1="150" x2="820" y2="165" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            <line x1="860" y1="150" x2="860" y2="170" stroke="currentColor" strokeWidth="2" className="text-secondary" />
            
            {/* Flower Decorations */}
            <circle cx="340" cy="175" r="6" fill="currentColor" className="text-pink-400" />
            <circle cx="380" cy="170" r="5" fill="currentColor" className="text-pink-400" />
            <circle cx="420" cy="180" r="6" fill="currentColor" className="text-pink-400" />
            <circle cx="780" cy="180" r="6" fill="currentColor" className="text-pink-400" />
            <circle cx="820" cy="170" r="5" fill="currentColor" className="text-pink-400" />
            <circle cx="860" cy="175" r="6" fill="currentColor" className="text-pink-400" />
          </svg>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="uppercase text-primary font-semibold tracking-wider mb-2 inline-block">Contact Sara Mahal</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Book Your Wedding & Event Venue</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to celebrate your special day at Coimbatore's premier wedding venue? Contact us to check availability and discuss your dream celebration at Sara Mahal, Kinathukadavu.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Visit Sara Mahal</h3>
              <p className="text-gray-600 text-sm mb-4">
                Experience our beautiful wedding venue in person. We're located in the serene village of Kinathukadavu, just 25 km from Coimbatore city center.
              </p>
              <div className="text-sm text-primary font-medium">
                <p>📍 Easy access from Coimbatore-Palakkad Highway</p>
                <p>🚗 Free parking for 200+ vehicles</p>
                <p>🏛️ Traditional architecture with modern amenities</p>
              </div>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="p-3 bg-primary/10 rounded-xl mr-4 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                  <p className="text-gray-800 font-medium">{info.details}</p>
                  <p className="text-gray-500 text-sm">{info.subtext}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">Call for immediate assistance</span>
                </a>
                <a 
                  href="https://wa.me/919876543210?text=Hi! I'm interested in booking Sara Mahal for my Tamil wedding. Please share availability and packages." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                  </svg>
                  <span className="text-sm">WhatsApp for instant response</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=Sara+Mahal+Kinathukadavu+Coimbatore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Get directions on Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-serif mb-2">Send Us a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and our wedding planning team will get back to you within 4 hours with availability, pricing, and customized packages for your special celebration.
              </p>
            </div>
            <ContactForm onFormSubmit={onFormSubmit} />
            
            {/* Quick Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-semibold mb-3">What to Expect</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Response within 4 hours
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Free venue tour available
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Customized wedding packages
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Traditional wedding expertise
                </div>
              </div>
            </div>
            
            {/* Customer Testimonials Section */}
            <div className="mt-8 pt-6 border-t border-gray-100 relative">
              {/* Wedding Sketched Design - Decorative Border */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <svg width="60" height="20" viewBox="0 0 60 20" className="text-primary">
                  <path d="M5 10 Q15 5 25 10 Q35 15 45 10 Q50 8 55 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.3"/>
                  <circle cx="30" cy="12" r="1.5" fill="currentColor" opacity="0.4"/>
                  <circle cx="50" cy="8" r="2" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              
              <h4 className="font-semibold mb-4 text-center">What Our Couples Say</h4>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 relative overflow-hidden"
                >
                  {/* Wedding Ring Sketch */}
                  <div className="absolute top-2 right-2 opacity-10">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-primary">
                      <circle cx="15" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="25" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="15" cy="18" r="2" fill="currentColor"/>
                      <circle cx="25" cy="18" r="2" fill="currentColor"/>
                      <path d="M12 15 Q15 12 18 15" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M22 15 Q25 12 28 15" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary text-sm">❤️</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 italic mb-2">
                        "Sara Mahal made our Tamil wedding absolutely perfect! The traditional setup with modern amenities was exactly what we wanted."
                      </p>
                      <p className="text-xs text-gray-500 font-medium">- Priya & Rajesh, Chennai</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 relative overflow-hidden"
                >
                  {/* Lotus Flower Sketch */}
                  <div className="absolute top-2 right-2 opacity-10">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="text-secondary">
                      <path d="M20 30 Q15 25 12 20 Q15 15 20 10 Q25 15 28 20 Q25 25 20 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M20 30 Q18 25 16 20 Q18 15 20 10 Q22 15 24 20 Q22 25 20 30" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M17 17 L23 23 M23 17 L17 23" stroke="currentColor" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-secondary text-sm">⭐</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 italic mb-2">
                        "Excellent service and beautiful venue! The team handled everything perfectly for our 500+ guest wedding."
                      </p>
                      <p className="text-xs text-gray-500 font-medium">- Meera & Karthik, Coimbatore</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 relative overflow-hidden">
              {/* Decorative Wedding Elements */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 200 100" className="text-primary">
                  {/* Mandap Sketch */}
                  <rect x="50" y="60" width="100" height="4" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="60" y1="40" x2="60" y2="60" stroke="currentColor" strokeWidth="1"/>
                  <line x1="140" y1="40" x2="140" y2="60" stroke="currentColor" strokeWidth="1"/>
                  <path d="M45 40 L155 40 L150 30 L50 30 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  
                  {/* Hanging Flowers */}
                  <circle cx="70" cy="45" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  <circle cx="100" cy="47" r="2.5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  <circle cx="130" cy="45" r="3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                  
                  {/* Decorative Swirls */}
                  <path d="M20 20 Q25 15 30 20 Q35 25 40 20" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                  <path d="M160 20 Q165 15 170 20 Q175 25 180 20" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                </svg>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center relative z-10">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-600">Happy Couples</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.9</div>
                  <div className="text-xs text-gray-600">Rating ⭐⭐⭐⭐⭐</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Special Offer Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white text-center relative overflow-hidden"
            >
              {/* Wedding Bells Sketch */}
              <div className="absolute top-1 left-2 opacity-20">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-white">
                  <path d="M10 15 Q10 10 15 10 Q20 10 20 15 Q20 20 15 22 Q10 20 10 15 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="15" cy="20" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M12 8 Q15 5 18 8" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <line x1="15" y1="5" x2="15" y2="8" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              
              {/* Heart Garland Sketch */}
              <div className="absolute top-1 right-2 opacity-20">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-white">
                  <path d="M15 25 Q10 20 8 15 Q8 10 12 10 Q15 12 15 15 Q15 12 18 10 Q22 10 22 15 Q20 20 15 25 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="12" r="1" fill="currentColor"/>
                  <circle cx="20" cy="12" r="1" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 opacity-20">
                <svg width="100%" height="10" viewBox="0 0 300 10" className="text-white">
                  <path d="M0 5 Q50 2 100 5 Q150 8 200 5 Q250 2 300 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="50" cy="3" r="1" fill="currentColor"/>
                  <circle cx="150" cy="7" r="1" fill="currentColor"/>
                  <circle cx="250" cy="3" r="1" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <div className="text-sm font-semibold mb-1">🎉 Limited Time Offer</div>
                <div className="text-xs">Book now and get FREE mandap decoration worth ₹25,000!</div>
                <div className="text-xs opacity-90 mt-1">Valid for bookings made this month</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 