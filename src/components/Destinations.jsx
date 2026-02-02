import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Destinations = () => {
    const { t } = useTranslation();

    const destinations = [
        {
            id: 1,
            name: "Marrakech",
            desc: t('destinations.marrakech'),
            image: "/marrakech_hd.png"
        },
        {
            id: 2,
            name: "Casablanca",
            desc: t('destinations.casablanca'),
            image: "/hero-casablanca.png"
        },
        {
            id: 3,
            name: "Tanger",
            desc: t('destinations.tanger'),
            image: "/tanger_hd.png"
        },
        {
            id: 4,
            name: "Agadir",
            desc: t('destinations.agadir'),
            image: "/agadir_hd.png"
        }
    ];

    return (
        <section id="destinations" className="relative py-24 bg-[#F2F2F0] text-gray-900 border-t border-gray-200 overflow-hidden">

            {/* Background Pattern - Moroccan */}
            <div className="absolute inset-0 pattern-moroccan opacity-[0.05] pointer-events-none mix-blend-multiply"></div>

            {/* Decorative ambient blobs */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-white/40 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

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
                            <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('destinations.subtitle')}</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
                            {t('destinations.title')}
                        </h2>
                    </div>

                    <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            {t('destinations.description')}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[500px]">
                    {destinations.map((city, index) => (
                        <motion.div
                            key={city.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative h-[400px] md:h-full overflow-hidden cursor-pointer rounded-[2rem] shadow-lg"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src={city.image}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    alt={city.name}
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-xs font-bold tracking-widest uppercase text-white/80 mb-2 block">{city.desc}</span>
                                    <h3 className="font-serif text-3xl font-bold text-white mb-4">{city.name}</h3>
                                    <div className="w-full h-px bg-white/30 group-hover:bg-white transition-colors mb-4"></div>
                                    <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span>{t('destinations.explore')}</span>
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Destinations;
