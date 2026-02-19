import { motion } from 'framer-motion';
import { Brain, ArrowLeft, MapPin, Video, LogIn, User } from 'lucide-react';
import { Button } from '@org/psyhub-ui';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  mode: 'presencial' | 'remoto' | null;
  onBack?: () => void;
  onLogoClick?: () => void;
}

export const Header = ({ mode, onBack, onLogoClick }: HeaderProps) => {
  //   const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [ user ] = useState(null);
  const [loading] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="shrink-0"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
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
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              mode === 'presencial'
                ? 'bg-presencial-light text-presencial'
                : 'bg-remoto-light text-remoto'
            }`}
          >
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

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          {!loading &&
            (user ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/meu-perfil')}
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Meu Perfil</span>
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/login')}
                >
                  Entrar
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/cadastro')}
                  className="hidden sm:flex"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Cadastrar
                </Button>
              </>
            ))}
        </div>
      </div>
    </motion.header>
  );
};
