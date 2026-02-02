import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Privacy = () => {
    const { t } = useTranslation();

    const collectionList = t('privacyPage.collectionList');
    const usageList = t('privacyPage.usageList');

    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 md:p-16 shadow-xl rounded-2xl"
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-black text-gray-900 mb-8 border-b border-gray-100 pb-8">
                        {t('privacyPage.title')}
                    </h1>

                    <div className="prose prose-lg text-gray-500 font-light">
                        <p className="mb-6">
                            {t('privacyPage.intro')}
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('privacyPage.collectionTitle')}</h3>
                        <p className="mb-4">
                            {t('privacyPage.collectionText')}
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            {Array.isArray(collectionList) && collectionList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('privacyPage.usageTitle')}</h3>
                        <p className="mb-4">
                            {t('privacyPage.usageText')}
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            {Array.isArray(usageList) && usageList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('privacyPage.protectionTitle')}</h3>
                        <p className="mb-6">
                            {t('privacyPage.protectionText')}
                        </p>

                        <h3 className="text-gray-900 font-bold text-xl mt-8 mb-4">{t('privacyPage.rightsTitle')}</h3>
                        <p className="mb-6">
                            {t('privacyPage.rightsText')}
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400">
                            {t('privacyPage.update').replace('2026', new Date().getFullYear())}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
