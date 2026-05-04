import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

export default function RFContact() {
  return (
    <section id="contato" className="py-24 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Contato</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.a
            href="mailto:regiflex.contato@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-lg font-semibold">regiflex.contato@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://instagram.com/regiflex.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Instagram className="w-8 h-8" />
            </div>
            <span className="text-lg font-semibold">@regiflex.app</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
