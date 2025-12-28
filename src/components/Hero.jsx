import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Color Blocks - Sunflower Theme */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {/* Top Left - Golden Yellow */}
          <div className="col-span-12 md:col-span-4 row-span-3 bg-yellow-400/90"></div>
          {/* Top Center - Warm Orange */}
          <div className="col-span-12 md:col-span-5 row-span-2 bg-orange-400/80"></div>
          {/* Top Right - Deep Brown */}
          <div className="col-span-12 md:col-span-3 row-span-4 bg-amber-800/90"></div>
          
          {/* Middle Left - Light Sunflower Yellow */}
          <div className="col-span-6 md:col-span-4 row-span-3 bg-yellow-100"></div>
          {/* Center - White for text clarity */}
          <div className="col-span-6 md:col-span-5 row-span-4 bg-white"></div>
          
          {/* Bottom Right - Vibrant Amber */}
          <div className="col-span-12 md:col-span-3 row-span-2 bg-amber-600"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl md:bg-transparent md:backdrop-blur-none md:p-0 md:shadow-none"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-100 text-amber-600 mb-8 shadow-lg transform -rotate-3 border-2 border-yellow-200"
            >
              <Sun className="w-10 h-10 fill-yellow-400 text-amber-600" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Gabriela <br className="hidden lg:block" />
              <span className="text-amber-700">Silva de Carvalho</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-8">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-900 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm border border-yellow-200">
                Psicóloga Clínica
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-900 rounded-full font-medium text-sm shadow-sm border border-orange-200">
                CRP 12/25716
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-10 font-medium">
              Acolhimento humanizado e inclusivo. Um espaço seguro para florescer, 
              com foco no desenvolvimento pessoal e apoio às singularidades invisíveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-600 text-white font-bold rounded-xl shadow-lg hover:bg-amber-700 transition-colors border-b-4 border-amber-800"
              >
                Agendar Consulta
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-amber-900 font-bold rounded-xl shadow-lg border-2 border-amber-100 hover:border-amber-300 hover:bg-yellow-50 transition-colors"
              >
                Saiba Mais
              </motion.button>
            </div>
          </motion.div>

          {/* Hero Images - Profile Integrated with Sunflower */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Integrated Frame Container */}
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              
              {/* Profile Photo */}
              <div className="relative z-20 rounded-t-[2.5rem] rounded-bl-[2.5rem] rounded-br-[10rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                 <img 
                  src="https://horizons-cdn.hostinger.com/6746c104-b3ad-4ba5-8647-266e6be7eb66/64640625d39b0f8c2c453e9b79aed815.jpg"
                  alt="Gabriela Silva de Carvalho - Psicóloga Clínica"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Sunflower Image - Integrated into the bottom right corner curve */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 z-30 w-48 h-48 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white"
              >
                 <img 
                   src="https://horizons-cdn.hostinger.com/6746c104-b3ad-4ba5-8647-266e6be7eb66/1a7619bf320b804189e0413b8258d89f.jpg"
                   alt="Rainbow sunflower"
                   className="w-full h-full object-cover scale-110"
                 />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-400 rounded-full blur-2xl opacity-50 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-40 z-0"></div>
            
            {/* Small decorative circles representing seeds/pollen */}
            <div className="absolute top-10 -left-4 w-4 h-4 bg-amber-700 rounded-full opacity-60 z-20 animate-pulse"></div>
            <div className="absolute bottom-20 -right-4 w-6 h-6 bg-yellow-500 rounded-full opacity-80 z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;