import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';
import vitoMain from '../assets/images/gallery/vito_main.png';

const About = () => {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Visual Side */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-50 rounded-none transform -rotate-2 z-0"></div>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/desert van.png"
              alt="About BM Transport"
              className="relative z-10 w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 z-20 hidden md:block shadow-2xl">
              <p className="font-serif text-6xl font-black mb-1">10+</p>
              <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">Années d'expérience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-black"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">À Propos de Nous</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
              {t('about.heading').replace(/<[^>]*>/g, '')}
            </h2>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light border-l-2 border-gray-200 pl-6">
              {t('about.description')}
            </p>

            <ul className="grid grid-cols-1 gap-4 mb-12">
              {Array.isArray(points) && points.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className="w-6 h-6 flex items-center justify-center bg-gray-100 group-hover:bg-black transition-colors rounded-full">
                    <Check size={12} className="text-black group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-900 font-bold text-sm tracking-wide uppercase">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-16 border-t border-gray-100 pt-8">
              <div>
                <span className="block font-serif text-4xl font-black text-gray-900">VIP</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-bold">Service</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-black text-gray-900">100%</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-bold">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;