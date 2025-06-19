"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Priya & Rahul",
    role: "Wedding, March 2023",
    comment: "Our wedding at Sara Mahal was nothing short of magical. The venue staff took care of every little detail, and our guests are still talking about how beautiful everything was!",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    role: "Engagement Party, May 2023",
    comment: "We held our engagement ceremony here and were blown away by the exceptional service. The decorations were stunning and exactly what we had envisioned.",
    rating: 5
  },
  {
    name: "Vikram & Neha",
    role: "Wedding Reception, January 2023",
    comment: "The team at Sara Mahal helped us create the perfect winter wedding reception. The hall was beautifully decorated, and the catering was outstanding.",
    rating: 4
  },
  {
    name: "Arjun Patel",
    role: "Corporate Event, April 2023",
    comment: "We chose Sara Mahal for our annual company gala, and it was a huge success. The venue is versatile and accommodated all our specific requirements.",
    rating: 5
  },
];

const TestimonialCard = ({ name, role, comment, rating, image }: TestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-lg group h-full relative"
  >
    <div className="absolute top-6 right-8 text-primary">
      <Quote size={40} className="opacity-20" />
    </div>
    
    <div className="flex items-center mb-6 gap-4">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center text-primary font-serif text-xl">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ))}
    </div>
    
    <p className="text-gray-700 mb-6">{comment}</p>
    
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="uppercase text-primary font-semibold tracking-wider mb-2 inline-block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read about experiences from couples who celebrated their special day at Sara Mahal
          </p>
        </motion.div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <TestimonialCard {...testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 