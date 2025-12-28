import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, MessageCircle, Baby, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <User className="w-10 h-10" />,
      title: 'Psicoterapia Individual',
      description: 'Atendimento personalizado focado em suas necessidades específicas, promovendo autoconhecimento e bem-estar emocional.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Grupos Terapêuticos',
      description: 'Espaços de compartilhamento e crescimento coletivo, onde experiências são trocadas em um ambiente seguro e acolhedor.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: 'Grupos Reflexivos para Homens Autores de Violência',
      description: 'Intervenção baseada em jogos para melhorar as habilidades socioemocionais no contexto da adversidade no Brasil.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Grupos Reflexivos para Pais e Cuidadores',
      description: 'Suporte e orientação para pais e cuidadores, fortalecendo vínculos familiares e habilidades parentais.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Baby className="w-10 h-10" />,
      title: 'Intervenção Baseada em Jogos',
      description: 'Abordagem lúdica para desenvolver habilidades socioemocionais em crianças no contexto do autismo.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos atendimento psicológico especializado com abordagens 
            individuais e em grupo, focadas no seu bem-estar e desenvolvimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;