import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Residente em Saúde da Família e Comunidade',
      organization: 'Escola de Saúde Pública de Santa Catarina',
      location: 'Florianópolis, Santa Catarina, Brasil',
      period: 'Mar 2024 - Presente',
      duration: '10 meses',
      description: 'Especialização em Saúde da Família e Comunidade pela Escola de Saúde Pública de Santa Catarina. Desenvolvimento de práticas de promoção, prevenção e recuperação da saúde, sob a ótica da Estratégia de Saúde da Família.',
      type: 'On-site'
    },
    {
      position: 'Estagiária de Psicologia',
      organization: 'MARGENS (UFSC) - Internship',
      location: 'Florianópolis, Santa Catarina, Brasil',
      period: 'Mar 2023 - Dez 2023',
      duration: '10 meses',
      description: 'Planejamento e realização de Grupos Reflexivos para Homens Autores de violência. Participação durante 8 anos como facilitadora e integrante da equipe do Projeto Ágora.',
      type: 'On-site'
    },
    {
      position: 'Bolsista de Iniciação Científica',
      organization: 'LANCE - Laboratório de Neuropsicologia Cognitiva e Escolar da UFSC',
      location: 'Florianópolis, Santa Catarina, Brasil',
      period: 'Ago 2022 - Dez 2023',
      duration: '1 ano 5 meses',
      description: 'Bolsista de Iniciação Científica. Intervenção baseada em jogos para melhorar as habilidades socioemocionais no contexto da adversidade no Brasil: uma abordagem para crianças com autismo.',
      type: 'Part-time'
    },
    {
      position: 'Estagiária de Psicologia',
      organization: 'Ambulatório Nuvaf de Florianópolis',
      location: 'Florianópolis, Santa Catarina, Brasil',
      period: 'Abr 2022 - Dez 2022',
      duration: '9 meses',
      description: 'Realização de psicoterapia breve, grupos terapêuticos, avaliação psicológica de concurso, avaliação de concessão, organização e representação de palestras sobre saúde mental do trabalhador.',
      type: 'On-site'
    },
    {
      position: 'Bolsista Voluntária',
      organization: 'NEPEDI - Núcleo de Estudo e Pesquisa em Desenvolvimento Infantil da UFSC',
      location: 'Florianópolis, Santa Catarina, Brasil',
      period: 'Mar 2022 - Jul 2022',
      duration: '5 meses',
      description: 'Atividades: criação e divulgação de conteúdo sobre as atividades realizadas, e auxílio na condução de grupos reflexivos.',
      type: 'Remote'
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>
              <div className="absolute left-0 top-2 w-4 h-4 bg-emerald-500 rounded-full -translate-x-[7px]"></div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-3">{exp.location}</p>
                <p className="text-gray-700 leading-relaxed mb-3">{exp.description}</p>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                  {exp.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;