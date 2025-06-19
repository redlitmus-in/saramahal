import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeartHandshake, CalendarDays, Phone, Heart, MapPin, Star, Clock, Users } from "lucide-react";

const CTA = () => {
  const floatingCards = [
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Exceptional service",
      delay: 0.2
    },
    {
      icon: Users,
      title: "500+ Couples",
      description: "Trust us with their day",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here for you",
      delay: 0.6
    }
  ];

  return (
    <section className="relative min-h-screen-laptop flex items-center overflow-hidden section-spacing-lg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
          
          {/* Left Side - Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="aspect-[4/5] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Image Badge */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                    Dream Wedding Venue
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                className={`absolute bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg
                  ${index === 0 ? 'top-1/2 -right-4' : ''}
                  ${index === 1 ? 'bottom-20 -left-4' : ''}
                  ${index === 2 ? 'top-20 -right-8' : ''}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{card.title}</h4>
                    <p className="text-xs text-gray-600">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Content Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <HeartHandshake className="w-5 h-5" />
              <span className="font-medium">Your Perfect Wedding Awaits</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Begin Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Love Story
                </span>
                <br />
                at Sara Mahal
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transform your special day into an unforgettable celebration. 
                Where dreams meet reality and love stories begin their forever chapter.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: MapPin, text: "Premium Location" },
                { icon: Users, text: "Expert Planning" },
                { icon: Heart, text: "Personal Touch" },
                { icon: Star, text: "5-Star Service" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg group"
              >
                <a href="#contact" className="gap-2">
                  <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Schedule Your Visit
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white group"
                asChild
              >
                <a href="tel:+919876543210" className="gap-2">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call Now
                </a>
              </Button>
            </motion.div>

            {/* Urgency Message */}
            <motion.div 
              className="bg-amber-50 border border-amber-200 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-amber-800 font-medium text-center">
                ⚡ Limited dates available for 2025 wedding season
                <br />
                <span className="text-sm">Book your consultation today to secure your dream date</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default CTA; 