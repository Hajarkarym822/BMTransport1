import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';
import vitoMain from '../assets/images/gallery/vito_main.png';
import vitoSide from '../assets/images/gallery/vito_side.png';
import vitoInterior from '../assets/images/gallery/vito_interior.png';

const VehicleGallery = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-bold tracking-widest uppercase mb-3 text-sm"
                    >
                        {t('gallery.subtitle') || 'EXCELLENCE'}
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-dark mb-6"
                    >
                        Mercedes-Benz Vito <span className="text-secondary">Black Edition</span>
                    </motion.h2>
                    <p className="text-neutral max-w-2xl mx-auto text-lg">
                        {t('gallery.description') || 'Experience the ultimate comfort and style with our premium fleet.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[800px] md:h-[600px]">
                    {/* Main Large Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 h-[300px] md:h-[350px] relative group overflow-hidden rounded-3xl shadow-lg"
                    >
                        <img
                            src={vitoMain}
                            alt="Mercedes Vito Black Edition"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-2xl font-bold mb-1">Premium Exterior</h3>
                            <p className="text-gray-200">Elegant design for every occasion</p>
                        </div>
                    </motion.div>

                    {/* Bottom Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-full group overflow-hidden rounded-3xl shadow-lg"
                    >
                        <img
                            src={vitoSide}
                            alt="Mercedes Vito Side View"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold mb-1">Urban Agility</h3>
                            <p className="text-gray-200">Perfect for city transfers</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-full group overflow-hidden rounded-3xl shadow-lg"
                    >
                        <img
                            src={vitoInterior}
                            alt="Mercedes Vito Interior"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-8 text-white">
                            <h3 className="text-xl font-bold mb-1">First Class Interior</h3>
                            <p className="text-gray-200">Leather seats & ambient lighting</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VehicleGallery;
