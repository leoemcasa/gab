import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Bacharelado em Psicologia',
      institution: 'Universidade Federal de Santa Catarina (UFSC)',
      year: '2018',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Especialização em Saúde Pública',
      institution: 'Escola de Saúde Pública de Santa Catarina (ESPSC)',
      year: '2024',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Formação Continuada',
      institution: 'Grupos Reflexivos e Intervenção Baseada em Jogos',
      year: 'Em andamento',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
        </motion.div>

        {/* Text-only layout centered */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-center"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Psicóloga clínica formada pela Universidade Federal de Santa Catarina (UFSC), 
              com especialização em Saúde Pública pela Escola de Saúde Pública de Santa Catarina (ESPSC).
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Minha abordagem terapêutica é centrada no acolhimento e no desenvolvimento de 
              habilidades socioemocionais, trabalhando com grupos reflexivos e atendimentos 
              individuais personalizados.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Acredito que cada pessoa possui recursos internos valiosos para enfrentar 
              seus desafios. Meu papel é facilitar esse processo de autoconhecimento e 
              crescimento pessoal em um espaço seguro e acolhedor.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} text-white mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {item.institution}
              </p>
              <p className="text-sm text-emerald-600 font-semibold">
                {item.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;