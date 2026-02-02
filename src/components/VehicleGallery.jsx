import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';
import vitoMain from '../assets/images/gallery/vito_main.png';
import vitoSide from '../assets/images/gallery/vito_side.png';
import vitoInterior from '../assets/images/gallery/vito_interior.png';

const VehicleGallery = () => {
    const { t } = useTranslation();

    return (
        <section className="relative py-24 bg-[#F2F2F0] overflow-hidden text-gray-900 border-t border-gray-200">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            {/* Decorative ambient blobs */}
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
                            <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('gallery.subtitle') || 'EXCELLENCE'}</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
                            Mercedes-Benz Vito <span className="font-light text-gray-400">Black Edition</span>
                        </h2>
                    </div>

                    <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            {t('gallery.description') || 'Experience the ultimate comfort and style with our premium fleet.'}
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[800px] md:h-[600px]">
                    {/* Main Large Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:col-span-2 h-[300px] md:h-[350px] relative group overflow-hidden rounded-[2.5rem] shadow-xl"
                    >
                        <img
                            src={vitoMain}
                            alt="Mercedes Vito Black Edition"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-10 text-white">
                            <h3 className="text-3xl font-serif font-bold mb-2">Premium Exterior</h3>
                            <p className="text-gray-200 font-medium tracking-wide">Elegant design for every occasion</p>
                        </div>
                    </motion.div>

                    {/* Bottom Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="relative h-full group overflow-hidden rounded-[2.5rem] shadow-xl"
                    >
                        <img
                            src={vitoSide}
                            alt="Mercedes Vito Side View"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-10 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-2">Urban Agility</h3>
                            <p className="text-gray-200 font-medium tracking-wide">Perfect for city transfers</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="relative h-full group overflow-hidden rounded-[2.5rem] shadow-xl"
                    >
                        <img
                            src={vitoInterior}
                            alt="Mercedes Vito Interior"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-8 left-10 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-2">First Class Interior</h3>
                            <p className="text-gray-200 font-medium tracking-wide">Leather seats & ambient lighting</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VehicleGallery;
