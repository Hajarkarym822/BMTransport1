
import React, { useState } from 'react';
import { ArrowRight, Star, MapPin, Calendar, Clock, CheckCircle, X, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

const Hero = () => {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState('transfert');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  /* Calendar State & Logic */
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  /* New Booking Modal State */
  const [showBookingModal, setShowBookingModal] = useState(false);

  const popularCities = ["Marrakech", "Casablanca", "Agadir", "Tanger", "Fès", "Rabat", "Chefchaouen", "Essaouira", "Ouarzazate", "Merzouga"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!destination) {
      // Small shake or alert could go here, but for now just open to let them fill/confirm
    }
    setShowBookingModal(true);
  };

  // Calendar Helpers
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    // Adjust for Monday start (0=Sunday in JS, but 1=Monday usually preferred in display)
    // Let's stick to standard Sunday start for simplicity or match French (Mon start)
    // French: Dimanche is 0.
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentMonth);
  // Adjust firstDay to make Monday index 0 (JS: Sun=0, Mon=1...Sat=6) -> (Mon=0...Sun=6)
  const firstDayMon = firstDay === 0 ? 6 : firstDay - 1;

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const selectDate = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    // Format YYYY-MM-DD for consistency
    const yyyy = newDate.getFullYear();
    const mm = String(newDate.getMonth() + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
    setShowCalendar(false);
  };

  const isSelected = (day) => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date === d.toISOString().split('T')[0];
  };

  const getWhatsAppLink = () => {
    const message = `Bonjour, je souhaite réserver un service de *${activeTab.toUpperCase()}*.\n\n📍 Destination : ${destination || t('heroNew.destinationUndefined')}\n📅 Date : ${new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'))}\n\nMerci de me contacter pour confirmer la disponibilité.`;
    return `https://wa.me/212668139858?text=${encodeURIComponent(message)}`;
  };

  const getMailToLink = () => {
    const subject = `Réservation : ${activeTab.toUpperCase()} - ${new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'))}`;
    const body = `Bonjour,\n\nJe souhaite réserver un service de ${activeTab.toUpperCase()}.\n\nDétails :\n- Destination : ${destination || t('heroNew.destinationUndefined')}\n- Date : ${new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'))}\n\nMerci de me recontacter.\n\nCordialement.`;
    return `mailto:bamustapha70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="relative min-h-screen bg-[#F2F2F0] overflow-x-hidden flex flex-col justify-center pt-32 lg:pt-32">

      {/* Top Graphic Shape (imitating the reference top-right cut) */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-white/50 skew-x-12 origin-top-right transform translate-x-10 -translate-y-16 blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-0 items-center h-full">

        {/* --- LEFT SIDE: Typography & Form --- */}
        <div className="lg:col-span-6 flex flex-col justify-center relative z-20 pt-10 lg:pt-0">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-10 tracking-tight text-[#1A1A1A]"
          >
            <span className="font-extrabold block">{t('heroNew.titlePart1')}</span>
            <span className="font-light text-gray-400 block">{t('heroNew.titlePart2')}</span>
            <span className="font-extrabold block">{t('heroNew.titlePart3')}</span>
          </motion.h1>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-4 pl-2"
          >
            {['tabTransfer', 'tabDisposal', 'tabCircuit'].map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(t(`heroNew.${tabKey}`))}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${activeTab === t(`heroNew.${tabKey}`)
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white/50 text-gray-500 hover:bg-white'
                  }`}
              >
                {t(`heroNew.${tabKey}`)}
              </button>
            ))}
          </motion.div>

          {/* Search Bar Pill */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-2 rounded-full shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] flex items-center max-w-2xl relative z-30"
          >
            {/* Input Area: Destination */}
            <div className="flex-grow flex items-center px-6 gap-3 relative min-w-0">
              <MapPin size={22} className="text-gray-400 shrink-0" />
              <div className="w-full">
                <input
                  type="text"
                  placeholder={t('heroNew.destPlaceholder')}
                  className="w-full bg-transparent border-none p-0 text-gray-800 font-bold placeholder:font-medium placeholder:text-gray-300 focus:ring-0 text-base sm:text-lg truncate"
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  // Slightly longer delay to allow click on item
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />

                {/* Custom Styled Dropdown - Destination */}
                {showSuggestions && (
                  <div className="absolute bottom-full mb-4 left-0 w-[120%] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">
                      Populaire au Maroc
                    </div>
                    {popularCities.filter(c => c.toLowerCase().includes(destination.toLowerCase())).map((city, i) => (
                      <div
                        key={i}
                        className="px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-sm font-bold text-gray-800 transition-colors"
                        onClick={() => {
                          setDestination(city);
                          setShowSuggestions(false);
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        {city}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Divider (Visual) */}
            <div className="w-px h-10 bg-gray-100 hidden sm:block mx-2"></div>

            {/* Input Area: Date */}
            <div className="hidden sm:flex items-center px-4 gap-3 relative shrink-0">
              <Calendar size={20} className="text-gray-400" />
              <input
                type="text"
                readOnly
                className="bg-transparent border-none p-0 text-gray-800 font-bold focus:ring-0 text-base w-32 cursor-pointer"
                value={new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'), { day: 'numeric', month: 'short', year: 'numeric' })}
                onClick={() => setShowCalendar(!showCalendar)}
              />

              {/* Custom Styled Calendar Popup */}
              {showCalendar && (
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <button type="button" onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full"><ArrowRight size={14} className="rotate-180" /></button>
                    <span className="font-bold text-sm capitalize">{currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
                    <button type="button" onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded-full"><ArrowRight size={14} /></button>
                  </div>

                  {/* Weekdays */}
                  <div className="grid grid-cols-7 mb-2 text-center">
                    {[...Array(7)].map((_, i) => {
                      const d = new Date(2024, 0, i + 1);
                      const dayName = d.toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'), { weekday: 'short' });
                      return (
                        <span key={i} className="text-[10px] uppercase font-bold text-gray-400">
                          {dayName.slice(0, 2)}
                        </span>
                      );
                    })}
                  </div>

                  {/* Days */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Empty slots for start of month */}
                    {[...Array(firstDayMon)].map((_, i) => <div key={`empty-${i}`} />)}

                    {/* Days */}
                    {[...Array(days)].map((_, i) => {
                      const d = i + 1;
                      const selected = isSelected(d);
                      return (
                        <div
                          key={d}
                          onClick={() => selectDate(d)}
                          className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-full cursor-pointer transition-all ${selected ? 'bg-black text-white shadow-lg' : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                          {d}
                        </div>
                      );
                    })}
                  </div>

                  {/* Today Button */}
                  <div className="mt-4 border-t border-gray-100 pt-3 text-center">
                    <button
                      type="button"
                      className="text-xs font-bold text-black border-b border-black/20 hover:border-black transition-colors"
                      onClick={() => {
                        const today = new Date();
                        const yyyy = today.getFullYear();
                        const mm = String(today.getMonth() + 1).padStart(2, '0');
                        const dd = String(today.getDate()).padStart(2, '0');
                        setDate(`${yyyy}-${mm}-${dd}`);
                        setShowCalendar(false);
                        setCurrentMonth(today);
                      }}
                    >
                      {t('booking.today') || "Aujourd'hui"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button type="submit" className="w-12 h-12 bg-black hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg shrink-0 cursor-pointer">
              <ArrowRight size={20} className="-rotate-45" />
            </button>
          </motion.form>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pl-4 border-l-2 border-gray-300 max-w-md"
          >
            <p className="text-gray-500 text-sm font-medium italic leading-relaxed">
              {t('heroNew.quote')}
            </p>
          </motion.div>

        </div>

        {/* --- RIGHT SIDE: Image Presentation --- */}
        <div className="lg:col-span-6 relative h-[50vh] lg:h-[80vh] w-full mt-10 lg:mt-0">

          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/* The Image Itself - Masked */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/desert_fleet_hero.png"
                alt="Luxury Fleet in Desert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* "Bismillah House" Card Replica - Bottom Right */}
            <div className="absolute bottom-10 right-0 sm:-right-8 bg-white p-6 sm:p-8 rounded-l-[2rem] rounded-tr-[2rem] shadow-xl flex flex-col gap-4 max-w-xs z-20">

              {/* Visual 'Connector' to mimic the curve if possible, or just clean overlapping card */}
              {/* Title */}
              <div>
                <h3 className="font-serif text-xl font-bold text-gray-900">Mercedes-Benz</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mt-1">{t('heroNew.cardCollection')}</p>
              </div>

              {/* Price/Rating */}
              <div className="flex items-center justify-between mt-2">
                <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600">
                  {t('heroNew.cardPrice')}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-black fill-current" />
                  <span className="text-sm font-bold">5.0</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-end gap-2 mt-2">
                <a
                  href="#fleet"
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-colors"
                  title="Précédent"
                >
                  <ArrowRight size={14} className="rotate-180" />
                </a>
                <a
                  href="#fleet"
                  className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  title="Voir la flotte"
                >
                  <ArrowRight size={14} />
                </a>
              </div>

            </div>

            {/* Decorative abstract shape behind */}
            <div className="absolute -z-10 top-20 -right-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50"></div>

          </motion.div>
        </div>

      </div>

      {/* --- BOOKING MODAL --- */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative">

            {/* Close Button */}
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{t('heroNew.modalTitle')}</h3>
              <p className="text-gray-500 text-sm mb-8">
                {t('heroNew.modalSubtitle')}
              </p>

              {/* Summary Card */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-bold text-gray-900 uppercase tracking-wide text-xs">{activeTab}</span>
                </div>
                <div className="space-y-2 pl-11">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="font-medium">{destination || t('heroNew.destinationUndefined')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="font-medium">{new Date(date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'), { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1dbf57] text-white rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-lg shadow-green-100"
                >
                  <MessageCircle size={20} />
                  <span className="text-lg">{t('heroNew.btnWhatsapp')}</span>
                </a>

                <a
                  href={getMailToLink()}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-transform hover:scale-[1.02] shadow-lg"
                >
                  <Mail size={20} />
                  <span>{t('heroNew.btnEmail')}</span>
                </a>
              </div>

              <p className="text-center text-[10px] text-gray-400 mt-6 max-w-xs mx-auto">
                {t('heroNew.terms')}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Hero;