import React from 'react';
import { motion } from 'framer-motion';
import { Car, Key, Briefcase, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'driver',
      title: t('servicesSection.driverTitle'),
      desc: t('servicesSection.driverDesc'),
      icon: Car,
      link: "#contact"
    },
    {
      id: 'concierge',
      title: t('servicesSection.conciergeTitle'),
      desc: t('servicesSection.conciergeDesc'),
      icon: Key,
      link: "#contact"
    },
    {
      id: 'corporate',
      title: t('servicesSection.corpTitle'),
      desc: t('servicesSection.corpDesc'),
      icon: Briefcase,
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="relative py-32 bg-[#F2F2F0] overflow-hidden text-gray-900 border-t border-gray-200">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-white/40 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Box Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative Glare inside header */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('servicesSection.subtitle')}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              {t('servicesSection.title')} <span className="font-light text-gray-400">{t('servicesSection.titleHighlight')}</span>
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('servicesSection.description')}
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="bg-white p-10 lg:p-12 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="mb-10 inline-flex items-center justify-center w-16 h-16 bg-[#F2F2F0] rounded-2xl group-hover:bg-black transition-colors duration-500 relative z-10">
                <service.icon size={28} className="text-[#1A1A1A] group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                {service.title}
              </h3>

              <div className="w-12 h-px bg-gray-200 mb-6 group-hover:w-full group-hover:bg-black transition-all duration-700 relative z-10"></div>

              <p className="text-gray-500 mb-10 leading-relaxed font-light flex-grow relative z-10">
                {service.desc}
              </p>

              <a href={service.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A1A1A] group-hover:text-black hover:opacity-70 transition-opacity relative z-10">
                {t('servicesSection.learnMore')} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;