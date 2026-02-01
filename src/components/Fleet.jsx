import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Maximize2, Users, Briefcase, X, Check, ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const fleet = [
  {
    name: "Mercedes-Benz V-Class",
    image: "/vclass_lux.png",
    seats: "7 Places",
    luggage: "6 Valises",
    features: ["Cuir Nappa", "Wifi 5G", "Tablettes"]
  },
  {
    name: "Mercedes-Benz EQV",
    image: "/eqv_lux.png",
    seats: "6 Places",
    luggage: "4 Valises",
    features: ["100% Électrique", "Silence absolu", "Écologique"]
  },
  {
    name: "Mercedes-Benz Sprinter (519 / VIP)",
    image: "/sprinter_vip_lux.png",
    seats: "16 Places",
    luggage: "20 Valises",
    features: ["Salon VIP", "TV 4K", "Frigo"]
  },
  {
    name: "Mercedes-Benz Vision V",
    image: "/vision_v_lux.png",
    seats: "4 Places",
    luggage: "3 Valises",
    features: ["Concept Car", "Design Futuriste", "Ultra Luxe"]
  },
  {
    name: "Mercedes VLE",
    image: "/vle_lux.png",
    seats: "4 Places",
    luggage: "4 Valises",
    features: ["Executive Lounge", "Sièges Massants", "Bureau"]
  },
  {
    name: "Mercedes-Benz Classe V Marco Polo",
    image: "/marcopolo_lux.png",
    seats: "4 Places",
    luggage: "Camp Mode",
    features: ["Cuisine intégrée", "Toit relevable", "Aventure Luxe"]
  }
];

const Fleet = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <section id="fleet" className="py-24 bg-gray-50 overflow-hidden text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-black"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Notre Collection</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Flotte Exclusive
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed font-light border-l border-gray-200 pl-6 lg:mb-4">
            Découvrez notre sélection de véhicules de prestige, alliant confort absolu, technologie de pointe et sécurité maximale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 p-0 flex flex-col hover:border-gray-900 transition-colors duration-500 shadow-sm hover:shadow-xl"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-gray-50 overflow-hidden p-6 flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-xl relative z-0 mix-blend-multiply"
                />

                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="absolute bottom-4 right-4 p-2 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white rounded-full shadow-lg"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 h-16 flex items-center">
                  {item.name}
                </h3>

                <div className="w-10 h-0.5 bg-gray-900 mb-6"></div>

                {/* Stats Minimalist */}
                <div className="flex items-center gap-6 mb-8 text-xs font-bold uppercase tracking-wider text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-gray-900" />
                    <span>{item.seats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-gray-900" />
                    <span>{item.luggage}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-[10px] uppercase tracking-wide font-bold text-gray-600 rounded-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedVehicle(item)}
                  className="w-full mt-auto py-4 border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  Détails <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modals - Clean Design */}
      <AnimatePresence>
        {/* Full Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-gray-900 hover:rotate-90 transition-transform duration-500"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-h-[80vh] max-w-full drop-shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}

        {/* Detail Modal */}
        {selectedVehicle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedVehicle(null)}
            />
            <motion.div
              layoutId={`vehicle-${selectedVehicle.name}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:grid md:grid-cols-2 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-50 flex items-center justify-center p-10 relative">
                <img src={selectedVehicle.image} className="w-full max-h-[400px] object-contain drop-shadow-2xl mix-blend-multiply" alt="" />
              </div>

              <div className="p-10 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-900" />
                </button>

                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                  BMW Transport Collection
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-6">{selectedVehicle.name}</h2>

                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-b border-gray-100 py-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Capacité</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">{selectedVehicle.seats}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Bagages</p>
                    <p className="text-2xl font-serif font-bold text-gray-900">{selectedVehicle.luggage}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Équipements Inclus</p>
                  <div className="space-y-3">
                    {selectedVehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#contact" onClick={() => setSelectedVehicle(null)} className="mt-10 w-full py-4 bg-black text-white font-bold text-center uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-lg">
                  Réserver ce véhicule
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Fleet;
