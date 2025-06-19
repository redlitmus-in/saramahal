import { motion } from "framer-motion";
import { Heart, Users, Calendar, Sparkles, Camera, Gift } from "lucide-react";

const eventTypes = [
  {
    icon: Heart,
    title: "Wedding Ceremony",
    description: "Traditional & modern wedding ceremonies",
    features: ["Sacred rituals", "Mandapam setup", "Priest arrangements"],
    color: "from-rose-500 to-pink-500",
    seoTerms: "wedding venues Coimbatore"
  },
  {
    icon: Sparkles,
    title: "Engagement",
    description: "Memorable engagement celebrations", 
    features: ["Ring ceremony", "Family gathering", "Photography"],
    color: "from-purple-500 to-violet-500",
    seoTerms: "engagement venues Coimbatore"
  },
  {
    icon: Users,
    title: "Reception",
    description: "Grand reception parties",
    features: ["Dance floor", "Catering service", "Entertainment"],
    color: "from-blue-500 to-indigo-500",
    seoTerms: "reception halls Coimbatore"
  },
  {
    icon: Gift,
    title: "Naming Ceremony",
    description: "Traditional naming celebrations",
    features: ["Sacred rituals", "Family blessings", "Cultural customs"],
    color: "from-green-500 to-emerald-500",
    seoTerms: "naming ceremony venues"
  },
  {
    icon: Camera,
    title: "Puberty Ceremony",
    description: "Coming-of-age celebrations",
    features: ["Traditional rites", "Family gathering", "Cultural significance"],
    color: "from-orange-500 to-amber-500",
    seoTerms: "ceremony venues Tamil Nadu"
  },
  {
    icon: Calendar,
    title: "Anniversary",
    description: "Milestone anniversary celebrations",
    features: ["Special decorations", "Family reunion", "Memory making"],
    color: "from-teal-500 to-cyan-500",
    seoTerms: "anniversary venues Coimbatore"
  }
];

const EventTypes = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-primary">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Celebration Venues in Coimbatore
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Perfect Venue for Every <span className="text-primary">Celebration</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sara Mahal hosts diverse celebrations in Kinathukadavu, Coimbatore. From traditional ceremonies to modern events, 
            our venue accommodates all cultural customs with 500+ guest capacity and premium amenities.
          </p>
        </motion.div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {event.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${event.color} rounded-full mr-2 flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* SEO keyword (hidden but indexed) */}
                <span className="sr-only">{event.seoTerms}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-serif text-gray-800 mb-3">
            Ready to Book Your Celebration?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Contact Sara Mahal today to check availability for your special event. Located in Kinathukadavu, 
            just 25 km from Coimbatore city, with easy highway access and premium facilities.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-gray-500">Guest Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-xs text-gray-500">Parking Spaces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-xs text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">AC</div>
              <div className="text-xs text-gray-500">Climate Control</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Check Availability
            </a>
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary/20 rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventTypes; 