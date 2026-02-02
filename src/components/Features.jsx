import React from 'react';
import { CheckCircle, Award, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const featureKeys = [
  { id: "luxury", icon: CheckCircle },
  { id: "drivers", icon: Users },
  { id: "welcome", icon: Award },
  { id: "security", icon: BarChart },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#F2F2F0] relative overflow-hidden text-gray-900 border-t border-gray-200">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-20 left-0 w-1/3 h-64 bg-white/60 blur-3xl rounded-full transform -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">Excellence & Confort</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              <span dangerouslySetInnerHTML={{ __html: t('features.heading').replace(/<[^>]*>/g, '') }}></span>
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('features.description')}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Features Grid */}

            <div className="grid sm:grid-cols-2 gap-6">
              {featureKeys.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-[#F2F2F0] rounded-xl text-[#1A1A1A] group-hover:bg-black group-hover:text-white transition-colors">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#1A1A1A] font-bold mb-1 font-serif text-lg">{t(`features.items.${feature.id}.title`)}</h4>
                    <p className="text-gray-400 text-sm font-medium">{t(`features.items.${feature.id}.desc`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-gray-200 to-white opacity-50 blur-2xl rounded-[3rem]"></div>
            <img
              src="/premiere Van.png"
              alt="Luxury Car"
              className="relative rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px]"
            />

            {/* Floating Stat Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 -left-6 bg-black text-white p-6 rounded-[2rem] shadow-2xl max-w-xs hidden md:block z-20"
            >
              <div className="flex items-center justify-between mb-2 gap-4">
                <span className="text-4xl font-serif font-bold text-white">98%</span>
                <div className="bg-white/20 p-2 rounded-full">
                  <CheckCircle className="text-white w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{t('features.stat')}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;