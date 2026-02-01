
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react'; // Added icons for trust indicators
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 lg:pt-0">

      {/* Decorative Background Letter - Subtle "B" watermark */}
      <div className="absolute top-20 left-10 lg:left-20 text-[20rem] lg:text-[40rem] font-serif font-black text-gray-50 opacity-[0.03] select-none pointer-events-none z-0">
        B
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-center lg:h-screen">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-10 lg:pt-0 z-20"
          >

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.9] mb-8 lg:-mr-20 relative z-30">
              {t('hero.heading', 'VOYAGEZ\nAVEC\nCLASSE')}
            </h1>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md font-medium border-l-4 border-gray-100 pl-6">
              {t('hero.subtitle', 'L\'excellence du transport privé au Maroc. Chauffeurs professionnels, véhicules de prestige et service sur mesure.')}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <motion.a
                whileHover={{ scale: 1.02, paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group px-8 py-5 bg-gray-900 text-white rounded-none border border-gray-900 font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.ctaBooking', 'Réserver')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out"></div>
              </motion.a>

              <a href="#fleet" className="px-8 py-5 bg-transparent text-gray-900 border border-gray-200 font-bold text-sm tracking-widest uppercase hover:bg-gray-50 transition-colors">
                {t('hero.ctaFleet', 'Voir la flotte')}
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8 max-w-lg">
              <div>
                <Star className="text-gray-900 mb-2" size={20} />
                <p className="font-bold text-sm text-gray-900">5 Étoiles</p>
                <p className="text-[10px] text-gray-400 uppercase">Avis Clients</p>
              </div>
              <div>
                <Shield className="text-gray-900 mb-2" size={20} />
                <p className="font-bold text-sm text-gray-900">100% Sûr</p>
                <p className="text-[10px] text-gray-400 uppercase">Assurance</p>
              </div>
              <div>
                <Clock className="text-gray-900 mb-2" size={20} />
                <p className="font-bold text-sm text-gray-900">24/7</p>
                <p className="text-[10px] text-gray-400 uppercase">Support</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[50vh] lg:h-auto w-full flex items-center justify-center lg:justify-end z-10 translate-y-10 lg:translate-y-0"
          >
            {/* Abstract Geometric Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-gray-50 skew-x-12 rounded-l-[100px] z-0"></div>

            {/* The Van Image */}
            <div className="relative z-10 w-full lg:w-[130%] lg:-mr-32 transform hover:scale-105 transition-transform duration-700 ease-in-out">
              <img
                src="/premiere Van.png" // Using the high-quality van image
                alt="Luxury Van Mercedes"
                className="w-full h-auto drop-shadow-2xl object-contain"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-0 lg:left-10 z-20 bg-white/80 backdrop-blur-md p-6 rounded-none shadow-xl border border-white border-l-4 border-l-gray-900 max-w-[200px]"
            >
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Modèle Exclusif</p>
              <p className="font-serif text-xl font-bold text-gray-900 leading-tight">Mercedes Class V</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;