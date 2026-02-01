import React from 'react';
import { motion } from 'framer-motion';
import { Car, Key, Briefcase, ChevronRight, ArrowRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'driver',
      title: "Location avec Chauffeur",
      desc: "L'excellence du déplacement privé. Transferts aéroports, mises à disposition et voyages longue distance dans un confort absolu.",
      icon: Car,
      link: "#contact"
    },
    {
      id: 'concierge',
      title: "Conciergerie de Luxe",
      desc: "Bien plus qu'un transport. Réservations d'hôtels, restaurants, accès VIP et assistance personnalisée pour chaque moment de votre séjour.",
      icon: Key,
      link: "#contact"
    },
    {
      id: 'corporate',
      title: "Entreprises & Événements",
      desc: "Logistique de transport sur-mesure pour vos séminaires, congrès et événements d'entreprise. Une gestion de flotte rigoureuse et professionnelle.",
      icon: Briefcase,
      link: "#contact"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-black"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">Nos Expertises</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-black text-gray-900 leading-[0.9]">
              Services <span className="text-gray-400">Exclusifs</span>
            </h2>
          </div>

          <p className="max-w-md text-gray-500 text-lg leading-relaxed font-light border-l border-gray-300 pl-6">
            Une gamme complète de solutions haut de gamme pour répondre à toutes vos exigences de mobilité et d'accompagnement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 lg:p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-500 group flex flex-col"
            >
              <div className="mb-10 inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full group-hover:bg-black transition-colors duration-500">
                <service.icon size={28} className="text-gray-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>

              <div className="w-12 h-px bg-gray-200 mb-6 group-hover:w-full group-hover:bg-black transition-all duration-700"></div>

              <p className="text-gray-500 mb-10 leading-relaxed font-light flex-grow">
                {service.desc}
              </p>

              <a href={service.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-black hover:opacity-70 transition-opacity">
                En savoir plus <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;