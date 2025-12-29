import React from 'react';
import fotoPerfil from '@/assets/fotoPerfil.webp';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Removi o import do Sun

const Hero = () => {
  // PALETA DEFINITIVA:
  // Luz/Fundo: #E8D1A7 (Bege Dourado)
  // Vida/Natureza: #9D9167 (Oliva Dourado)
  // Calor: #84592B (Caramelo)
  // Força/Destaque: #743014 (Mogno)
  // Texto: #442D1C (Café)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* --- BLOCOS GEOMÉTRICOS --- */}
      <div className="absolute inset-0 z-0 opacity-90">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {/* Topo Esquerdo: Oliva Dourado */}
          <div className="col-span-12 md:col-span-4 row-span-3 bg-[#9D9167]"></div>
          
          {/* Centro Superior: Bege Dourado */}
          <div className="col-span-12 md:col-span-5 row-span-2 bg-[#E8D1A7]"></div>
          
          {/* Topo Direito: Mogno */}
          <div className="col-span-12 md:col-span-3 row-span-4 bg-[#743014]"></div>
          
          {/* Meio Esquerda: Caramelo */}
          <div className="col-span-6 md:col-span-4 row-span-3 bg-[#84592B]"></div>
          
          {/* CENTRO: BRANCO ABSOLUTO */}
          <div className="col-span-6 md:col-span-5 row-span-4 bg-white"></div>
          
          {/* Base Direita: Bege */}
          <div className="col-span-12 md:col-span-3 row-span-2 bg-[#E8D1A7]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* --- CONTEÚDO DE TEXTO --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl md:bg-transparent md:backdrop-blur-none md:p-0 md:shadow-none"
          >
            {/* Título: Bloco Editorial Vertical */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight leading-[1.1]">
              <span className="block text-[#442D1C]">Gabriela</span>
              <span className="block text-[#743014]">Silva de</span>
              <span className="block text-[#743014]">Carvalho</span>
            </h1>
            
            {/* Etiquetas (Badges) */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-8">
              <span className="px-5 py-2 bg-[#743014] text-[#E8D1A7] rounded-full font-bold text-sm tracking-wide uppercase shadow-md">
                Psicóloga Clínica
              </span>
              <span className="px-5 py-2 bg-[#9D9167] text-white rounded-full font-bold text-sm border border-[#9D9167]/50">
                CRP 12/25716
              </span>
            </div>

            <p className="text-lg md:text-xl text-[#442D1C] leading-relaxed max-w-md mb-10 font-medium mx-auto md:mx-0">
              Acolhimento humanizado e inclusivo. Um espaço seguro para florescer, 
              com foco no desenvolvimento pessoal.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-[#84592B] text-white font-bold rounded-xl shadow-xl hover:bg-[#743014] transition-all flex items-center justify-center gap-2"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#743014] font-bold rounded-xl shadow-md border-2 border-[#E8D1A7] hover:border-[#9D9167] transition-colors"
              >
                Saiba Mais
              </motion.button>
            </div>
          </motion.div>

          {/* --- FOTO COM O FRAME ORIGINAL --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              
              {/* Frame da foto */}
              <div className="relative z-20 rounded-t-[2.5rem] rounded-bl-[2.5rem] rounded-br-[10rem] overflow-hidden shadow-2xl border-[10px] border-white bg-white">
                <img 
                  src={fotoPerfil} 
                  alt="Gabriela Silva de Carvalho"
                  className="block w-full h-auto object-cover min-h-[550px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#743014]/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Decoração de fundo */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#9D9167] rounded-full blur-2xl opacity-50 z-0 mix-blend-multiply"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#743014] rounded-full blur-3xl opacity-20 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;