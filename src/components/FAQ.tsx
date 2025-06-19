import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What types of events can be hosted at Sara Mahal?",
    answer: "We host Traditional Hindu Weddings, Civil Marriages, Interfaith Ceremonies, Reception and Engagement Functions, Naming Ceremonies, Puberty Ceremonies, Anniversary Celebrations, Birthday Parties, and Corporate Events."
  },
  {
    question: "Is the marriage legally registered through Sara Mahal?",
    answer: "Yes, our in-house celebrant is licensed and assists with all documentation for legal registration."
  },
  {
    question: "Can we bring our own caterers and decorators?",
    answer: "Yes, we are flexible with vendor choices, or you can use our curated list of trusted professionals."
  },
  {
    question: "Is there accommodation nearby for out-of-town guests?",
    answer: "Yes, several budget and premium hotels are within 3 km. We can assist in bulk bookings for your guests."
  },
  {
    question: "How early should we book our event?",
    answer: "We recommend booking at least 2 months in advance, especially during wedding seasons (November to February and April to June)."
  },
  {
    question: "Do you provide audio-visual setups for events?",
    answer: "Yes, we provide professional sound systems, microphones, projector setups, and lighting arrangements upon request."
  },
  {
    question: "Do you offer last-minute bookings?",
    answer: "Subject to availability, we can accommodate last-minute bookings with a special expedited preparation fee."
  },
  {
    question: "What parking facilities are available?",
    answer: "Yes, we have secure on-site parking available for up to 200 vehicles at no extra charge, with easy highway access."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="gradient-text">Frequently</span> Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about booking your wedding at Sara Mahal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* FAQ Column */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-6">
              {faqItems.slice(0, 5).map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${activeIndex === index ? 'ring-2 ring-primary' : ''}`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left p-6"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <HelpCircle className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">{item.question}</h3>
                    </div>
                    {activeIndex === index ? (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-gray-100">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-8"
            >
              <Button asChild variant="outline">
                <a href="#contact">Contact our wedding planning team</a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image Column */}
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div 
                  className="aspect-[4/5] bg-gradient-to-br from-primary/30 to-secondary/30"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
              
              {/* Stats card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-4xl font-bold gradient-text">500+</p>
                    <p className="text-gray-600">Happy Couples</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute top-6 -right-6 bg-white py-2 px-4 rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-sm font-medium text-primary">Since 2010</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 