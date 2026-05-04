import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function RFContact() {
  return (
    <section id="contato" className="section-padding bg-rf-blue py-20 lg:py-32 text-white">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6"
        >
          Entre em contato
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-rf-blue-light max-w-3xl mx-auto mb-12"
        >
          Tem alguma dúvida ou quer saber mais sobre o RegiFlex? Envie-nos uma mensagem!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto glass-card p-8 bg-white/10 border-white/20"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name" className="text-left text-white">Nome</Label>
              <Input id="name" type="text" placeholder="Seu nome" className="bg-white/5 border-white/20 text-white placeholder:text-white/70" />
            </div>
            <div>
              <Label htmlFor="email" className="text-left text-white">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/70" />
            </div>
            <div>
              <Label htmlFor="message" className="text-left text-white">Mensagem</Label>
              <Textarea id="message" placeholder="Sua mensagem" rows={5} className="bg-white/5 border-white/20 text-white placeholder:text-white/70" />
            </div>
            <Button type="submit" className="w-full bg-rf-accent text-white hover:bg-rf-accent/90 transition-colors">
              Enviar Mensagem
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
