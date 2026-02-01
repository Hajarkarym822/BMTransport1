import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        name: "Marrakech",
        desc: "La Perle du Sud",
        image: "/marrakech_hd.png"
    },
    {
        id: 2,
        name: "Casablanca",
        desc: "Cœur Économique",
        image: "/hero-casablanca.png"
    },
    {
        id: 3,
        name: "Tanger",
        desc: "Porte de l'Afrique",
        image: "/tanger_hd.png"
    },
    {
        id: 4,
        name: "Agadir",
        desc: "Perle de l'Océan",
        image: "/agadir_hd.png"
    }
];

const Destinations = () => {
    return (
        <section id="destinations" className="py-24 bg-white text-gray-900 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px w-8 bg-black"></div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Voyagez partout au Maroc</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            Nos Destinations
                        </h2>
                    </div>
                    <p className="md:max-w-md text-gray-500 font-light border-l border-gray-200 pl-6">
                        Découvrez le Royaume sous son meilleur jour. Nos chauffeurs experts vous emmènent dans les lieux les plus prestigieux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                    {destinations.map((city, index) => (
                        <motion.div
                            key={city.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full overflow-hidden cursor-pointer"
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
                                        <span>Explorer</span>
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
