import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Testimonials = () => {
  const { t } = useTranslation();
  const feedback = t('testimonials.items', { returnObjects: true });
  const displayTestimonials = Array.isArray(feedback) ? feedback : [];

  return (
    <section id="reviews" className="relative py-24 bg-[#F2F2F0] overflow-hidden border-t border-gray-200">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 left-0 w-1/3 h-64 bg-white/40 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Box Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative Glare */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('testimonialsSection.subtitle')}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              {t('testimonialsSection.title')}
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('testimonialsSection.description')}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-white p-10 relative group rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <Quote className="absolute top-8 right-8 text-gray-100 group-hover:text-black/10 transition-colors w-12 h-12" />

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-black text-black" />
                ))}
              </div>

              <p className="text-xl font-serif leading-relaxed mb-8 text-gray-700">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold font-serif shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A1A1A] uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 font-bold mt-0.5">{testimonial.role}</p>
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