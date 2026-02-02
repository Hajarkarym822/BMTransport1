import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Legal = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-16 shadow-xl rounded-2xl"
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-8">
                        {t('legalPage.title')}
                    </h1>

                    <div className="prose prose-lg text-gray-500 font-light">

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('legalPage.editorTitle')}</h3>
                        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('legalPage.editorText') }}></p>
                        <ul className="list-none pl-0 mb-6 space-y-2">
                            <li><strong>{t('legalPage.address')}</strong> Casablanca, Maroc</li>
                            <li><strong>{t('legalPage.email')}</strong> contact@bmtransport.ma</li>
                            <li><strong>{t('legalPage.phone')}</strong> +212 6 XX XX XX XX</li>
                            <li><strong>{t('legalPage.legalForm')}</strong> SARL</li>
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('legalPage.hostingTitle')}</h3>
                        <p className="mb-6">
                            {t('legalPage.hostingText')}
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('legalPage.ipTitle')}</h3>
                        <p className="mb-6">
                            {t('legalPage.ipText1')}
                        </p>
                        <p className="mb-6">
                            {t('legalPage.ipText2')}
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('legalPage.liabilityTitle')}</h3>
                        <p className="mb-6">
                            {t('legalPage.liabilityText')}
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
                            © {new Date().getFullYear()} BM Transport. {t('footer.rights')}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Legal;
