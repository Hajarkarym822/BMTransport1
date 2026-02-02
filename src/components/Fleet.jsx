import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, X, Check, ArrowRight, Calendar, Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

// Import images
import img1 from '../assets/images/Mercedes Benz Classe V/back-mercedes-class-v-600x373.png';
import img2 from '../assets/images/Mercedes Benz Classe V/location-class-v-casablanca-600x373.png';
import img3 from '../assets/images/Mercedes Benz Classe V/louer-mercedes-class-v-casablanca.png';

const galleryImages = [img2, img1, img3];

const Fleet = () => {
  const { t, language } = useTranslation();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const fleet = [
    {
      id: 1,
      name: "Mercedes-Benz Classe V",
      image: img2,
      gallery: galleryImages,
      seats: `7 ${t('fleetSection.seats')}`,
      luggage: `6 ${t('fleetSection.luggage')}`,
      features: [t('fleetSection.features.leather'), t('fleetSection.features.wifi'), t('fleetSection.features.tablets'), t('fleetSection.features.tinted'), t('fleetSection.features.ac')]
    },
    {
      id: 2,
      name: "Mercedes-Benz Classe V",
      image: img1,
      gallery: galleryImages,
      seats: `7 ${t('fleetSection.seats')}`,
      luggage: `6 ${t('fleetSection.luggage')}`,
      features: [t('fleetSection.features.vipLounge'), t('fleetSection.features.serenity'), t('fleetSection.features.premiumService'), t('fleetSection.features.expertDriver')]
    },
    {
      id: 3,
      name: "Mercedes-Benz Classe V",
      image: img3,
      gallery: galleryImages,
      seats: `6 ${t('fleetSection.seats')}`,
      luggage: `5 ${t('fleetSection.luggage')}`,
      features: [t('fleetSection.features.loungeConfig'), t('fleetSection.features.centerTable'), t('fleetSection.features.ambientLight'), t('fleetSection.features.fridge')]
    }
  ];

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    departureCity: '',
    arrivalCity: '',
    date: '',
    time: '',
    returnDate: ''
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  // --- Custom Calendar & Time Picker Logic (Hero Style) ---
  const [activeCalendarField, setActiveCalendarField] = useState(null); // 'date' | 'returnDate' | null
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentMonth);
  const firstDayMon = firstDay === 0 ? 6 : firstDay - 1;

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  const selectDate = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const yyyy = newDate.getFullYear();
    const mm = String(newDate.getMonth() + 1).padStart(2, '0');
    const dd = String(day).padStart(2, '0');

    if (activeCalendarField) {
      setBookingData(prev => ({ ...prev, [activeCalendarField]: `${yyyy}-${mm}-${dd}` }));
    }
    setActiveCalendarField(null);
  };

  const isSelectedDate = (day) => {
    if (!activeCalendarField || !bookingData[activeCalendarField]) return false;
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return bookingData[activeCalendarField] === d.toISOString().split('T')[0];
  };

  // Generate Time Slots (30 min intervals)
  const timeSlots = [];
  for (let i = 0; i < 24; i++) {
    const hour = String(i).padStart(2, '0');
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  const selectTime = (t) => {
    setBookingData(prev => ({ ...prev, time: t }));
    setShowTimePicker(false);
  };
  // -------------------------------------------------------

  const getFormattedMessage = () => {
    const { firstName, lastName, date, time, departureCity, arrivalCity, returnDate } = bookingData;
    const fullName = `${firstName} ${lastName}`.trim();

    if (!fullName || !date || !time || !departureCity || !arrivalCity) {
      return null;
    }

    let message = `*NOUVELLE DEMANDE DE RÉSERVATION*\n\n`;
    message += `🚗 *Véhicule :* ${selectedVehicle.name}\n`;
    message += `👤 *Client :* ${fullName}\n\n`;
    message += `📍 *Trajet :* ${departureCity} ➝ ${arrivalCity}\n`;
    message += `📅 *Date :* ${date}\n`;
    message += `🕒 *Heure :* ${time}\n`;

    if (returnDate) {
      message += `🔙 *Retour :* ${returnDate}\n`;
    }

    message += `\nMerci de confirmer la disponibilité et le tarif pour cette course.`;
    return message;
  };

  const handleWhatsAppRedirect = () => {
    const message = getFormattedMessage();
    if (!message) {
      alert("Veuillez remplir les champs obligatoires (Nom, Trajet, Date, Heure).");
      return;
    }
    const url = `https://wa.me/212668139858?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmailRedirect = () => {
    const message = getFormattedMessage();
    if (!message) {
      alert("Veuillez remplir les champs obligatoires (Nom, Trajet, Date, Heure).");
      return;
    }
    const subject = `Réservation : ${selectedVehicle.name} - ${bookingData.firstName} ${bookingData.lastName}`;
    const mailto = `mailto:bamustapha70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="fleet" className="relative py-32 bg-[#F2F2F0] overflow-hidden text-gray-900 border-t border-gray-200">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-white/40 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header Box Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative Glare */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">{t('fleetSection.subtitle')}</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              {t('fleetSection.title')}
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('fleetSection.description')}
            </p>
          </div>
        </motion.div>

        {/* Grid - 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => {
                setBookingData({ firstName: '', lastName: '', departureCity: '', arrivalCity: '', date: '', time: '', returnDate: '' }); // Reset form
                setSelectedVehicle(item);
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-[#F9F9F9] rounded-[1.5rem] mb-6 overflow-hidden group-hover:bg-[#F2F2F0] transition-colors duration-500">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4 mix-blend-multiply relative z-10"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              </div>

              {/* Info Section */}
              <div className="px-2 pb-2">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3 group-hover:text-black transition-colors font-bold">
                  {item.name}
                </h3>

                {/* Minimalist Stats */}
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-[#1A1A1A]" />
                    <span>{item.seats}</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-[#1A1A1A]" />
                    <span>{item.luggage}</span>
                  </div>
                </div>

                <div className="w-full py-3 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300 gap-2 font-bold uppercase text-xs tracking-widest">
                  <span>{t('fleetSection.book')}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <div className="fixed inset-0 z-[9999] flex items-end lg:items-center justify-center p-0 lg:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedVehicle(null)}
            />

            <motion.div
              layoutId={`vehicle-${selectedVehicle.id}`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-5xl rounded-t-[2rem] lg:rounded-[2rem] shadow-2xl relative z-10 flex flex-col lg:flex-row h-[90vh] lg:h-[80vh] overflow-y-auto lg:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Mobile Header (Name at top) */}
              <div className="lg:hidden p-6 pb-4 border-b border-gray-50 flex justify-between items-start order-1 shrink-0 z-50 bg-white/95 backdrop-blur-sm sticky top-0 shadow-sm">
                <div>
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1 block">{t('booking.title')}</span>
                  <h2 className="text-2xl font-serif font-black text-black leading-tight">{selectedVehicle.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Left Side: Gallery */}
              <div className="w-full lg:w-5/12 bg-white p-4 lg:p-8 flex flex-col order-2 lg:order-1 h-auto lg:h-full shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 lg:overflow-y-auto custom-scrollbar">
                <div
                  className="aspect-video w-full bg-white rounded-2xl mb-4 p-6 shadow-sm flex items-center justify-center cursor-zoom-in hover:shadow-md transition-all group"
                  onClick={() => setSelectedImage(selectedVehicle.image)}
                >
                  <img src={selectedVehicle.image} alt={selectedVehicle.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </div>

                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4 mt-2">{t('booking.gallery')}</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {selectedVehicle.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] bg-white rounded-xl p-2 shadow-sm flex items-center justify-center cursor-zoom-in hover:shadow-md transition-all hover:-translate-y-1"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {selectedVehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-black" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Booking Form */}
              <div className="w-full lg:w-7/12 flex flex-col bg-[#F5F5F7] order-3 lg:order-2 h-auto lg:h-full relative">

                {/* Static Header & Close Button (Desktop Only) */}
                <div className="hidden lg:block p-8 lg:p-12 pb-4 flex-shrink-0 relative z-20 bg-white border-b border-gray-50">
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="absolute top-6 right-6 z-50 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:rotate-90 transition-all duration-300 shadow-lg"
                  >
                    <X size={24} />
                  </button>

                  <div className="pr-16">
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2 block">{t('booking.title')}</span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-black text-black leading-tight">{selectedVehicle.name}</h2>
                  </div>
                </div>

                <div className="p-6 lg:p-8 lg:overflow-y-auto custom-scrollbar flex-grow">
                  <div className="space-y-4">

                    {/* Personal Info Card */}
                    <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-5">
                      <label className="text-xs font-black text-black uppercase tracking-widest flex items-center gap-2 mb-2">
                        <div className="w-6 h-px bg-black"></div>
                        {t('booking.personalInfo')}
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.firstName')} *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={bookingData.firstName}
                            onChange={handleBookingChange}
                            className="w-full bg-gray-50 border-none rounded-xl py-3 px-3.5 font-bold text-gray-900 focus:ring-1 focus:ring-black placeholder:font-medium placeholder:text-gray-300 transition-all text-sm"
                            placeholder={t('booking.firstNamePH')}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.lastName')} *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={bookingData.lastName}
                            onChange={handleBookingChange}
                            className="w-full bg-gray-50 border-none rounded-xl py-3 px-3.5 font-bold text-gray-900 focus:ring-1 focus:ring-black placeholder:font-medium placeholder:text-gray-300 transition-all text-sm"
                            placeholder={t('booking.lastNamePH')}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Trip Details Card */}
                    <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] space-y-5">
                      <label className="text-xs font-black text-black uppercase tracking-widest flex items-center gap-2 mb-2">
                        <div className="w-6 h-px bg-black"></div>
                        {t('booking.tripDetails')}
                      </label>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.departureCity')} *</label>
                          <input
                            type="text"
                            name="departureCity"
                            value={bookingData.departureCity}
                            onChange={handleBookingChange}
                            className="w-full bg-gray-50 border-none rounded-xl py-3 px-3.5 font-bold text-gray-900 focus:ring-1 focus:ring-black placeholder:font-medium placeholder:text-gray-300 transition-all text-sm"
                            placeholder={t('booking.departureCityPH')}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.arrivalCity')} *</label>
                          <input
                            type="text"
                            name="arrivalCity"
                            value={bookingData.arrivalCity}
                            onChange={handleBookingChange}
                            className="w-full bg-gray-50 border-none rounded-xl py-3 px-3.5 font-bold text-gray-900 focus:ring-1 focus:ring-black placeholder:font-medium placeholder:text-gray-300 transition-all text-sm"
                            placeholder={t('booking.arrivalCityPH')}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Date Picker (Hero Style) */}
                        <div className="space-y-1.5 relative">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.departureDate')} *</label>
                          <div className="relative">
                            <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            <input
                              type="text"
                              readOnly
                              value={bookingData.date ? new Date(bookingData.date).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR')) : ''}
                              onClick={() => { setActiveCalendarField('date'); setShowTimePicker(false); }}
                              className="w-full bg-gray-50 border-none rounded-xl py-3 pl-10 pr-3 font-bold text-gray-900 focus:ring-1 focus:ring-black cursor-pointer text-sm placeholder:text-gray-400"
                              placeholder={t('booking.departureDatePH')}
                            />
                          </div>

                          {/* Custom Calendar Popup */}
                          {activeCalendarField === 'date' && (
                            <div className="absolute bottom-full mb-2 left-0 w-64 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 p-4 z-50">
                              {/* Header */}
                              <div className="flex justify-between items-center mb-4">
                                <button type="button" onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full"><ArrowRight size={14} className="rotate-180" /></button>
                                <span className="font-bold text-xs capitalize">{currentMonth.toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'), { month: 'long', year: 'numeric' })}</span>
                                <button type="button" onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded-full"><ArrowRight size={14} /></button>
                              </div>
                              {/* Weekdays */}
                              <div className="grid grid-cols-7 mb-2 text-center">
                                {[...Array(7)].map((_, i) => {
                                  // Monday Jan 1, 2024
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
                                {[...Array(firstDayMon)].map((_, i) => <div key={`empty-${i}`} />)}
                                {[...Array(days)].map((_, i) => {
                                  const d = i + 1;
                                  const isSelected = isSelectedDate(d);
                                  return (
                                    <div
                                      key={d}
                                      onClick={() => selectDate(d)}
                                      className={`w-7 h-7 flex items-center justify-center text-xs font-bold rounded-full cursor-pointer transition-all ${isSelected ? 'bg-black text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
                                    >
                                      {d}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Time Picker (Hero Style Dropdown) */}
                        <div className="space-y-1.5 relative">
                          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{t('booking.time')} *</label>
                          <div className="relative">
                            <Clock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            <input
                              type="text"
                              readOnly
                              value={bookingData.time}
                              onClick={() => { setShowTimePicker(!showTimePicker); setActiveCalendarField(null); }}
                              className="w-full bg-gray-50 border-none rounded-xl py-3 pl-10 pr-3 font-bold text-gray-900 focus:ring-1 focus:ring-black cursor-pointer text-sm placeholder:text-gray-400"
                              placeholder={t('booking.timePH')}
                            />
                          </div>

                          {/* Custom Time Popup */}
                          {showTimePicker && (
                            <div className="absolute bottom-full mb-2 left-0 w-full h-48 overflow-y-auto bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 p-2 z-50 custom-scrollbar">
                              <div className="grid grid-cols-1 gap-1">
                                {timeSlots.map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => selectTime(t)}
                                    className={`w-full text-left px-4 py-2 rounded-lg text-xs font-bold transition-colors ${bookingData.time === t ? 'bg-black text-white' : 'hover:bg-gray-50 text-gray-700'}`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5 relative">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide flex justify-between">
                          <span>{t('booking.returnDate')}</span>
                          <span className="text-gray-300 font-normal normal-case italic">{t('booking.optional')}</span>
                        </label>
                        <div className="relative">
                          <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                          <input
                            type="text"
                            readOnly
                            value={bookingData.returnDate ? new Date(bookingData.returnDate).toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR')) : ''}
                            onClick={() => { setActiveCalendarField('returnDate'); setShowTimePicker(false); }}
                            className="w-full bg-gray-50 border-none rounded-xl py-3 pl-10 pr-3 font-bold text-gray-900 focus:ring-1 focus:ring-black cursor-pointer placeholder:text-gray-400 text-sm"
                            placeholder={t('booking.returnDatePH')}
                          />
                        </div>

                        {/* Custom Calendar Popup for Return Date */}
                        {activeCalendarField === 'returnDate' && (
                          <div className="absolute bottom-full mb-2 left-0 w-64 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 p-4 z-50">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                              <button type="button" onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full"><ArrowRight size={14} className="rotate-180" /></button>
                              <span className="font-bold text-xs capitalize">{currentMonth.toLocaleDateString(language === 'en' ? 'en-US' : (language === 'es' ? 'es-ES' : 'fr-FR'), { month: 'long', year: 'numeric' })}</span>
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
                              {[...Array(firstDayMon)].map((_, i) => <div key={`empty-${i}`} />)}
                              {[...Array(days)].map((_, i) => {
                                const d = i + 1;
                                const isSelected = isSelectedDate(d);
                                return (
                                  <div
                                    key={d}
                                    onClick={() => selectDate(d)}
                                    className={`w-7 h-7 flex items-center justify-center text-xs font-bold rounded-full cursor-pointer transition-all ${isSelected ? 'bg-black text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
                                  >
                                    {d}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-12 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="py-4 bg-[#25D366] hover:bg-[#1dbf57] text-white font-black uppercase tracking-widest rounded-xl shadow-lg shadow-green-100 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform text-xs"
                    >
                      <span>{t('booking.whatsapp')}</span>
                      <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={14} /></div>
                    </button>

                    <button
                      onClick={handleEmailRedirect}
                      className="py-4 bg-black hover:bg-gray-800 text-white font-black uppercase tracking-widest rounded-xl shadow-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform text-xs"
                    >
                      <span>{t('booking.email')}</span>
                      <div className="bg-white/20 p-1.5 rounded-full"><ArrowRight size={14} /></div>
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </div >
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>

            {/* Main Gallery Area */}
            <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const gallery = selectedVehicle.gallery;
                  const idx = gallery.findIndex(img => img === selectedImage);
                  const newIdx = (idx - 1 + gallery.length) % gallery.length;
                  setSelectedImage(gallery[newIdx]);
                }}
                className="absolute left-0 lg:-left-20 p-4 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all shadow-lg"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Main Image */}
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedImage}
                alt="Gallery view"
                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl select-none"
                draggable={false}
              />

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const gallery = selectedVehicle.gallery;
                  const idx = gallery.findIndex(img => img === selectedImage);
                  const newIdx = (idx + 1) % gallery.length;
                  setSelectedImage(gallery[newIdx]);
                }}
                className="absolute right-0 lg:-right-20 p-4 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all shadow-lg"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Thumbnails */}
            <div
              className="absolute bottom-8 flex gap-3 overflow-x-auto p-2 max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVehicle.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-12 lg:w-20 lg:h-14 rounded-lg overflow-hidden transition-all duration-300 ${selectedImage === img ? 'ring-2 ring-white scale-110 opacity-100' : 'opacity-40 hover:opacity-100 hover:scale-105'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence >
    </section >
  );
};

export default Fleet;
