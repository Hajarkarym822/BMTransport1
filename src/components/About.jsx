import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';
import vitoMain from '../assets/images/gallery/vito_main.png';

const About = () => {
  const { t } = useTranslation();
  const points = t('about.points', { returnObjects: true });

  return (
    <section id="about" className="relative py-32 bg-[#F2F2F0] overflow-hidden text-gray-900 border-t border-gray-200">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-20 left-0 w-1/3 h-64 bg-white/60 blur-3xl rounded-full transform -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Box Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative Glare */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('aboutSection.subtitle')}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              {t('about.heading').replace(/<[^>]*>/g, '')}
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('about.description')}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Visual Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <img
                src="/desert van.png"
                alt="About BM Transport"
                className="w-full rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-black text-white p-8 rounded-tl-[2rem] rounded-br-[2rem] shadow-2xl z-20 hidden md:block"
              >
                <p className="font-serif text-6xl font-black mb-1">10+</p>
                <p className="text-xs tracking-widest uppercase text-gray-400 font-bold">{t('aboutSection.yearsExp')}</p>
              </motion.div>
            </motion.div>

            {/* Background Shape behind image */}
            <div className="absolute top-4 -left-4 w-full h-full bg-white rounded-[2.5rem] border border-gray-100 z-0"></div>
          </div>

          {/* Content Side (Points & Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <ul className="grid grid-cols-1 gap-6 mb-12">
              {Array.isArray(points) && points.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-white border border-gray-100 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] group-hover:bg-black transition-colors rounded-full shrink-0">
                    <Check size={20} className="text-black group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-[#1A1A1A] font-bold text-lg tracking-wide uppercase">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-16 border-t border-gray-200 pt-10">
              <div>
                <span className="block font-serif text-5xl font-black text-[#1A1A1A]">VIP</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 mt-2 block font-bold">{t('aboutSection.service')}</span>
              </div>
              <div>
                <span className="block font-serif text-5xl font-black text-[#1A1A1A]">100%</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 mt-2 block font-bold">{t('aboutSection.satisfaction')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;