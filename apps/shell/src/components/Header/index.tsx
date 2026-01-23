import { motion } from 'framer-motion';
import { Brain, MapPin, Video } from 'lucide-react';

interface HeaderProps {
  mode: 'presencial' | 'remoto' | null;
  onBack?: () => void;
  onLogoClick?: () => void;
}

const Header = ({ mode, onBack, onLogoClick }: HeaderProps) => {

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">

          <button 
            onClick={onLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              PsyHub
            </span>
          </button>
        </div>

        {mode && (
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
            mode === 'presencial' 
              ? 'bg-presencial-light text-presencial' 
              : 'bg-remoto-light text-remoto'
          }`}>
            {mode === 'presencial' ? (
              <>
                <MapPin className="w-4 h-4" />
                <span>Presencial</span>
              </>
            ) : (
              <>
                <Video className="w-4 h-4" />
                <span>Online</span>
              </>
            )}
          </div>
        )}

      </div>
    </motion.header>
  );
};

export default Header;
