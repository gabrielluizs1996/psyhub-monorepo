import { motion } from 'framer-motion';
import { MapPin, Video } from 'lucide-react';

interface ModeSelectorProps {
  onSelectMode: (mode: 'presencial' | 'remoto') => void;
}

export const ModeSelector = ({ onSelectMode }: ModeSelectorProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <motion.button
        onClick={() => onSelectMode('presencial')}
        className="group relative overflow-hidden rounded-2xl p-8 bg-presencial-light border-2 border-transparent hover:border-presencial transition-all duration-300"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-presencial flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Presencial
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Encontre profissionais próximos a você para atendimento no
            consultório
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-presencial font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Busca por localização</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-presencial/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>

      <motion.button
        onClick={() => onSelectMode('remoto')}
        className="group relative overflow-hidden rounded-2xl p-8 bg-remoto-light border-2 border-transparent hover:border-remoto transition-all duration-300"
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-remoto flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <Video className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Online</h3>
          <p className="text-muted-foreground leading-relaxed">
            Atendimento por videochamada, de qualquer lugar do Brasil
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-remoto font-semibold">
            <Video className="w-4 h-4" />
            <span>Busca nacional</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-remoto/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
};
