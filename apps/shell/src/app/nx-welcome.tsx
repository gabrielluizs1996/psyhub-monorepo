import { motion } from "framer-motion"
import { Brain, Heart, Shield, Users } from "lucide-react";

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
    {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-hero opacity-5" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="w-20 h-20 rounded-2xl gradient-hero mx-auto mb-8 flex items-center justify-center shadow-hover"
            >
              <Brain className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              Encontre o{' '}
              <span className="text-primary">profissional ideal</span>{' '}
              para cuidar da sua mente
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Conectamos você a psicólogos e neuropsicólogos qualificados, 
              seja para atendimento presencial ou online
            </p>

            {/* Mode selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-lg font-semibold text-foreground mb-6">
                Como você prefere o atendimento?
              </p>
              {/* <ModeSelector onSelectMode={setSelectedMode} /> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: 'Profissionais Verificados',
                description: 'Todos os psicólogos possuem registro ativo no CRP e passam por verificação',
              },
              {
                icon: Heart,
                title: 'Busca Personalizada',
                description: 'Encontre por especialidade, abordagem, localização e muito mais',
              },
              {
                icon: Users,
                title: 'Milhares de Opções',
                description: 'Acesso à maior rede de profissionais de saúde mental do Brasil',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default NxWelcome;
