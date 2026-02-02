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
    <section id="contact" className="relative py-24 bg-[#F2F2F0] text-gray-900 border-t border-gray-200 overflow-hidden">

      {/* Decorative ambient blobs & Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-white/40 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-gray-300/20 blur-3xl rounded-full transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Box Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative Glare */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10 w-full md:w-3/5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-[1px] bg-white"></div>
              <span className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">Contactez-nous</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[0.95]">
              {t('contact.heading')}
            </h2>
          </div>

          <div className="relative z-10 w-full md:w-2/5 md:border-l md:border-white/10 md:pl-10">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {t('contact.description')}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Contact Info (List Only) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >

            <div className="space-y-8">
              {[
                { icon: Phone, title: t('contact.info.phone'), content: <><p className="font-serif text-xl text-[#1A1A1A]">+212 668-139858</p><p className="font-serif text-xl text-[#1A1A1A]">+212 661-711423</p></> },
                { icon: Mail, title: t('contact.info.email'), content: <p className="text-gray-600 font-medium">bamustapha70@gmail.com</p> },
                { icon: MapPin, title: t('contact.info.address'), content: <p className="text-gray-600 font-medium">Casablanca, Maroc</p> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-400 mb-1 text-xs tracking-widest uppercase">{item.title}</h5>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white p-8 md:p-12 lg:p-16 relative rounded-[2.5rem] shadow-xl"
          >
            <h3 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-8">{t('contact.form.title')}</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F9F9F9] rounded-xl border border-transparent focus:bg-white focus:border-black outline-none transition-all placeholder-gray-300 font-medium"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#F9F9F9] rounded-xl border border-transparent focus:bg-white focus:border-black outline-none transition-all placeholder-gray-300 font-medium"
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact.form.subject')}</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9F9F9] rounded-xl border border-transparent focus:bg-white focus:border-black outline-none transition-all text-gray-700 font-medium cursor-pointer"
                >
                  <option value="" disabled>Sélectionnez un sujet</option>
                  {displaySubjects.map((subject, idx) => (
                    <option key={idx} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#F9F9F9] rounded-xl border border-transparent focus:bg-white focus:border-black outline-none transition-all placeholder-gray-300 font-medium resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-4 px-8 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-transform hover:scale-[1.02] rounded-xl flex items-center justify-center gap-3 shadow-lg ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
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
                    className="p-4 bg-green-50 text-green-800 text-sm font-medium flex items-center gap-2 border border-green-100 rounded-xl"
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
                    className="p-4 bg-red-50 text-red-800 text-sm font-medium flex items-center gap-2 border border-red-100 rounded-xl"
                  >
                    <AlertCircle size={16} />
                    <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
