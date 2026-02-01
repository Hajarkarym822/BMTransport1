import React from 'react';
import { motion } from 'framer-motion';

const Legal = () => {
    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-16 shadow-xl rounded-2xl"
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-8">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-lg text-gray-500 font-light">

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">1. Éditeur du Site</h3>
                        <p className="mb-4">
                            Le site <strong>BM Transport</strong> est édité par la société BM TRANSPORT, société spécialisée dans le transport touristique et la location de véhicules de luxe.
                        </p>
                        <ul className="list-none pl-0 mb-6 space-y-2">
                            <li><strong>Siège Social :</strong> Casablanca, Maroc</li>
                            <li><strong>Email :</strong> contact@bmtransport.ma</li>
                            <li><strong>Téléphone :</strong> +212 6 XX XX XX XX</li>
                            <li><strong>Forme Juridique :</strong> SARL</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">2. Hébergement</h3>
                        <p className="mb-6">
                            Ce site est hébergé par [Nom de l'Hébergeur], [Adresse de l'Hébergeur].
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">3. Propriété Intellectuelle</h3>
                        <p className="mb-6">
                            L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="mb-6">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">4. Responsabilité</h3>
                        <p className="mb-6">
                            BM Transport s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
                            © 2026 BM Transport. Tous droits réservés.
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Legal;
