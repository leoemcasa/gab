import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Phone, Instagram, Award } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Globe className="w-6 h-6" />,
      label: 'Website',
      value: 'gab.psuche.com.br',
      href: 'https://gab.psuche.com.br',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Telefone',
      value: '+55 48 9111-9795',
      href: 'tel:+5548991119795',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@psico_gab.carvalho',
      href: 'https://instagram.com/psico_gab.carvalho',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'CRP',
      value: '12/25716',
      href: null,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estou à disposição para ajudá-lo em sua jornada de autoconhecimento e bem-estar emocional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full"
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-900 font-medium break-words">
                    {item.value}
                  </p>
                </a>
              ) : (
                <div className="block bg-white p-6 rounded-2xl shadow-lg h-full">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {item.label}
                  </h3>
                  <p className="text-gray-900 font-medium">
                    {item.value}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Agende sua consulta
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato para agendar sua primeira sessão ou tirar dúvidas sobre os serviços oferecidos.
            </p>
            <motion.a
              href="tel:+5548991119795"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Ligar Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;