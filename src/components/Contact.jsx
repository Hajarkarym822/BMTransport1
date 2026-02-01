import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const subjects = t('contact.form.subjects', { returnObjects: true });
  const displaySubjects = Array.isArray(subjects) ? subjects : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_8sfoqy4',
        'template_z4sybip',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject || displaySubjects[0],
          message: formData.message
        },
        'm5CrZGt5jMj2lCNBV'
      );

      setStatus({ loading: false, success: true, error: false });
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-black"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Contactez-nous</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              {t('contact.heading')}
            </h2>

            <p className="text-lg text-gray-500 mb-12 leading-relaxed font-light border-l-2 border-gray-100 pl-6">
              {t('contact.description')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1 text-sm tracking-wide uppercase">{t('contact.info.phone')}</h5>
                  <p className="font-serif text-xl">+212 668-139858</p>
                  <p className="font-serif text-xl">+212 661-711423</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1 text-sm tracking-wide uppercase">{t('contact.info.email')}</h5>
                  <p className="text-gray-600">bamustapha70@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1 text-sm tracking-wide uppercase">{t('contact.info.address')}</h5>
                  <p className="text-gray-600">Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 lg:p-16 relative">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-black outline-none transition-all placeholder-gray-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-black outline-none transition-all placeholder-gray-300"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.subject')}</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-black outline-none transition-all text-gray-700"
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  {displaySubjects.map((subject, idx) => (
                    <option key={idx} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border-b border-gray-200 focus:border-black outline-none transition-all placeholder-gray-300 resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-4 px-8 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    <span>{t('contact.form.send')}</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 text-green-800 text-sm font-medium flex items-center gap-2 border border-green-100"
                  >
                    <CheckCircle size={16} />
                    <span>Message envoyé avec succès. Nous vous répondrons sous peu.</span>
                  </motion.div>
                )}
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-red-50 text-red-800 text-sm font-medium flex items-center gap-2 border border-red-100"
                  >
                    <AlertCircle size={16} />
                    <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
