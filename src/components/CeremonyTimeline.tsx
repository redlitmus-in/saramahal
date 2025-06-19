import { motion } from "framer-motion";
import { CheckCircle, Crown, Heart, Music, Camera, Utensils, Sparkles, Award } from "lucide-react";

const CeremonyTimeline = () => {
  const benefits = [
    {
      icon: <Crown className="w-8 h-8 text-white" />,
      title: "Premium Venues",
      description: "Handpicked luxurious halls with world-class amenities and elegant décor",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Personalized Service",
      description: "Dedicated wedding planners ensuring every detail reflects your unique love story",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: <Music className="w-8 h-8 text-white" />,
      title: "Entertainment & Audio",
      description: "State-of-the-art sound systems and lighting for unforgettable celebrations",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: <Camera className="w-8 h-8 text-white" />,
      title: "Photography Ready",
      description: "Picture-perfect settings with professional lighting and scenic backdrops",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <Utensils className="w-8 h-8 text-white" />,
      title: "Exquisite Catering",
      description: "Multi-cuisine options with traditional and contemporary dining experiences",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Complete Decor",
      description: "Stunning floral arrangements and themed decorations for every celebration",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Why Choose <span className="text-primary">Sara</span> <span className="text-secondary">Mahal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional benefits and premium services that make Sara Mahal the perfect choice for your special day.
          </p>
        </motion.div>

        {/* Zigzag Layout */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2 hidden lg:block"></div>
          
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-16 gap-8`}
            >
              {/* Content Card */}
              <div className="flex-1 max-w-lg">
                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-4 shadow-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        {benefit.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div 
                    className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden"
                    style={{ backgroundImage: `url(${benefit.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        {benefit.icon}
                        <span>{benefit.title}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating decorative elements */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary/10 rounded-full"
                    animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-primary flex items-center justify-center z-10 hidden lg:flex">
                <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Award className="w-6 h-6" />
            <span>Trusted by 200+ Happy Couples</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonyTimeline;