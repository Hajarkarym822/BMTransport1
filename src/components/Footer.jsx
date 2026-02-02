import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { name: t('navbar.home'), href: '/#' },
    { name: t('navbar.items.driver'), href: '/#services' },
    { name: t('navbar.items.concierge'), href: '/#services' },
    { name: t('navbar.items.fleet'), href: '/#fleet' },
    { name: t('navbar.items.destinations'), href: '/#destinations' },
    { name: t('navbar.items.corporate'), href: '/#services' },
    { name: t('navbar.items.reviews'), href: '/#reviews' },
    { name: t('navbar.items.about'), href: '/#about' },
    { name: t('footer.contact'), href: '/#contact' },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <h2 className="font-serif text-3xl font-black tracking-tight">BM Transport</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 pl-0 lg:pl-16">
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-8">{t('footer.navigation')}</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {links.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-xs text-gray-500 mb-8">{t('footer.contact')}</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-300 font-light">Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-300 font-light">+212 668-139858</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-300 font-light">contact@bmtransport.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} BM Transport. {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/legal" className="hover:text-white transition-colors">{t('footer.legal')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;