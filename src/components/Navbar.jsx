import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Globe, Instagram, Facebook, Twitter, Linkedin, Phone, ChevronDown } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#');
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const { t, changeLanguage, language } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const servicesSubmenu = [
        { name: t('navbar.items.driver'), href: "#services" },
        { name: t('navbar.items.concierge'), href: "#services" },
        { name: t('navbar.items.corporate'), href: "#services" },
    ];

    // Full list for Mobile
    const mobileLinks = [
        { name: t('navbar.home'), href: '#' },
        { name: t('navbar.items.fleet'), href: '#fleet' },
        { name: t('navbar.items.destinations'), href: '#destinations' },
        { name: t('navbar.items.reviews'), href: '#reviews' },
        { name: t('navbar.items.about'), href: '#about' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    // Reduced list for Desktop
    const desktopLinks = [
        { name: t('navbar.items.fleet'), href: '#fleet' },
        { name: t('navbar.items.destinations'), href: '#destinations' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="relative z-[100] group">
                        <span className={`font-serif text-2xl lg:text-3xl font-black tracking-tighter transition-colors ${scrolled || isOpen ? 'text-gray-900' : 'text-gray-900'}`}>
                            BM<span className="text-gray-400 group-hover:text-black transition-colors">Transport</span>
                        </span>
                    </a>

                    {/* Desktop Navigation - CLEAN & LUXURY */}
                    <div className="hidden lg:flex items-center gap-10">

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setServiceDropdownOpen(true)}
                            onMouseLeave={() => setServiceDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest py-2">
                                {t('navbar.services')} <ChevronDown size={14} />
                            </button>

                            <AnimatePresence>
                                {serviceDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 pt-4"
                                    >
                                        {servicesSubmenu.map((service, idx) => (
                                            <a key={idx} href={service.href} className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-black rounded-lg transition-colors">
                                                {service.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {desktopLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Actions */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setLangMenuOpen(true)}
                            onMouseLeave={() => setLangMenuOpen(false)}
                        >
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider hover:opacity-70 transition-opacity py-2">
                                <Globe size={16} />
                                <span>{language.toUpperCase()}</span>
                                <ChevronDown size={12} />
                            </div>

                            <AnimatePresence>
                                {langMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 w-24 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden py-2"
                                    >
                                        {[
                                            { code: 'fr', label: 'Français' },
                                            { code: 'en', label: 'English' },
                                            { code: 'es', label: 'Español' }
                                        ].map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => { changeLanguage(lang.code); setLangMenuOpen(false); }}
                                                className={`block w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${language === lang.code ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-black'}`}
                                            >
                                                {lang.code}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a href="#contact" className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300">
                            {t('navbar.reserve')}
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="lg:hidden z-[100]">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-900 focus:outline-none">
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: '0%' }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 bg-white z-[90] flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
                        style={{ height: '100dvh' }}
                    >
                        <div className="flex flex-col gap-6 mb-8">
                            {/* Mobile Links */}
                            <a href="#" onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-gray-900 flex justify-between items-center border-b border-gray-100 pb-4">
                                {mobileLinks[0].name} <ChevronRight size={24} className="text-gray-300" />
                            </a>

                            {/* Mobile Services Group */}
                            <div className="space-y-4 border-b border-gray-100 pb-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">{t('navbar.ourServices')}</span>
                                {servicesSubmenu.map((item, idx) => (
                                    <a key={idx} href={item.href} onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800 block pl-4 border-l-2 border-gray-100 md:hover:border-black transition-colors">
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {mobileLinks.slice(1).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-serif font-bold text-gray-900 flex justify-between items-center border-b border-gray-100 pb-4"
                                >
                                    {link.name} <ChevronRight size={24} className="text-gray-300" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto space-y-6">
                            <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                <div className="flex gap-6">
                                    <Instagram size={24} className="text-gray-900" />
                                    <Facebook size={24} className="text-gray-900" />
                                    <Linkedin size={24} className="text-gray-900" />
                                </div>

                                {/* Mobile Language Switcher */}
                                <div className="flex items-center gap-4">
                                    {['fr', 'en', 'es'].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => changeLanguage(lang)}
                                            className={`text-xs font-bold uppercase tracking-wider ${language === lang ? 'text-black underline underline-offset-4' : 'text-gray-400'}`}
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full py-5 bg-black text-white text-center font-bold text-lg uppercase tracking-widest rounded-xl">
                                {t('navbar.bookNow')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
