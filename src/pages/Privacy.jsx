import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-16 shadow-xl rounded-2xl"
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-8">
                        Politique de Confidentialité
                    </h1>

                    <div className="prose prose-lg text-gray-500 font-light">
                        <p className="mb-6">
                            Chez BM Transport, nous accordons une importance capitale à la confidentialité de vos données. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations personnelles.
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">1. Collecte des Données</h3>
                        <p className="mb-4">
                            Nous collectons les informations que vous nous fournissez directement lorsque vous réservez un véhicule, demandez un devis ou nous contactez. Cela inclut :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Identité (Nom, Prénom)</li>
                            <li>Coordonnées (Email, Téléphone)</li>
                            <li>Détails du voyage (Dates, Lieux, Préférences)</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">2. Utilisation des Données</h3>
                        <p className="mb-4">
                            Vos données sont utilisées exclusivement pour :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Traiter vos réservations et fournir nos services de transport.</li>
                            <li>Communiquer avec vous concernant votre trajet.</li>
                            <li>Améliorer nos services et votre expérience client.</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">3. Protection des Données</h3>
                        <p className="mb-6">
                            Nous mettons en œuvre des mesures de sécurité strictes pour protéger vos informations contre tout accès non autorisé, modification ou divulgation. Vos données ne sont jamais vendues à des tiers.
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">4. Vos Droits</h3>
                        <p className="mb-6">
                            Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous via notre formulaire de contact.
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
                            Dernière mise à jour : Février 2026
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
