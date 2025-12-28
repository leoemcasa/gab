import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold">Gabriela Carvalho</span>
            </div>
            <p className="text-gray-400">
              Psicóloga Clínica
            </p>
            <p className="text-gray-400">
              CRP 12/25716
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a href="tel:+5548991119795" className="hover:text-emerald-400 transition-colors">
                  +55 48 9111-9795
                </a>
              </p>
              <p className="text-gray-400">
                <a href="https://gab.psuche.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  gab.psuche.com.br
                </a>
              </p>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Redes Sociais</span>
            <p className="text-gray-400">
              <a href="https://instagram.com/psico_gab.carvalho" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                @psico_gab.carvalho
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gabriela Silva de Carvalho. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Florianópolis, Santa Catarina, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;