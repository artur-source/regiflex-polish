import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function RFContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contato" className="section-padding bg-secondary/50">
      <div className="container-narrow mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-3 mb-5 tracking-tight">
            Fale <span className="text-gradient-green">conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Solicite uma demonstração ou tire suas dúvidas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-rf-green/10 flex items-center justify-center mb-4">
                    <CheckCircle className="text-rf-green" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Mensagem enviada!</h3>
                  <p className="text-muted-foreground text-sm">Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-rf-blue/30 focus:border-rf-blue outline-none transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-rf-blue/30 focus:border-rf-blue outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-rf-blue/30 focus:border-rf-blue outline-none transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-rf-blue text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'regiflex.contato@gmail.com',
                href: 'mailto:regiflex.contato@gmail.com',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                value: '@regiflex.app',
                href: 'https://www.instagram.com/regiflex.app',
              },
              {
                icon: MapPin,
                title: 'Localização',
                value: 'Suzano – SP, Brasil',
              },
            ].map((info) => (
              <div key={info.title} className="glass-card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rf-blue/10 flex items-center justify-center shrink-0">
                  <info.icon className="text-rf-blue" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{info.title}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-rf-blue hover:underline"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Mascot */}
            <div className="glass-card p-6 text-center">
              <img src="/flux-mascot.jpg" alt="Mascote Flux" className="w-24 h-24 rounded-2xl mx-auto mb-3 object-cover" />
              <p className="text-sm font-semibold text-foreground">Conheça o Flux!</p>
              <p className="text-xs text-muted-foreground mt-1">Seu guia amigável na jornada RegiFlex</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
