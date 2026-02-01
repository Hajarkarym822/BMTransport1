import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Testimonials = () => {
  const { t } = useTranslation();
  const feedback = t('testimonials.items', { returnObjects: true });
  const displayTestimonials = Array.isArray(feedback) ? feedback : [];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-black"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Ce qu'ils disent</span>
            <div className="h-px w-8 bg-black"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Avis Clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-10 relative group hover:bg-black hover:text-white transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-gray-200 group-hover:text-gray-800 transition-colors w-12 h-12" />

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-black text-black group-hover:fill-white group-hover:text-white transition-colors" />
                ))}
              </div>

              <p className="text-xl font-serif leading-relaxed mb-8 text-gray-800 group-hover:text-gray-200 transition-colors">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 font-bold font-serif group-hover:bg-white transition-colors">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-white transition-colors uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;