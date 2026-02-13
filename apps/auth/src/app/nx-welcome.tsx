import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, ArrowLeft, User, Mail, Lock } from 'lucide-react';
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
} from '@org/psyhub-ui';
// import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { z } from 'zod';

import { supabase } from './client';

const emailSchema = z.string().email('Email inválido').max(255);
const passwordSchema = z
  .string()
  .min(6, 'Senha deve ter no mínimo 6 caracteres')
  .max(72);
const nameSchema = z
  .string()
  .min(2, 'Nome deve ter no mínimo 2 caracteres')
  .max(100);

interface AuthPageProps {
  mode: 'login' | 'register';
}

const AuthPage = ({ mode }: AuthPageProps) => {
  const navigate = useNavigate();
  // const { signIn, signUp } = useAuth();
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<'professional' | 'patient'>('patient');

  const signUp = async (
    email: string,
    password: string,
    fullName: string,
    role: 'professional' | 'patient'
  ) => {
    try {
      // Pass role in user metadata - the database trigger will handle role assignment
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: {
            role: role,
            full_name: fullName,
          },
        },
      });

      if (error) return { error };

      if (data.user) {
        // Create profile - role is handled by database trigger automatically
        const { error: profileError } = await supabase.from('profiles').insert({
          user_id: data.user.id,
          full_name: fullName,
        });

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
        // Note: Role is now assigned automatically by database trigger (handle_new_user_role)
        // This prevents users from self-assigning privileged roles
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate inputs
      emailSchema.parse(email);
      passwordSchema.parse(password);
      if (!isLogin) {
        nameSchema.parse(fullName);
      }

      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast.error('Erro ao entrar', { description: error.message });
        } else {
          toast.success('Login realizado com sucesso!');
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, fullName, role);
        if (error) {
          toast.error('Erro ao criar conta', { description: error.message });
        } else {
          toast.success('Conta criada com sucesso!');
          if (role === 'professional') {
            navigate('/cadastro-profissional');
          } else {
            navigate('/');
          }
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // toast.error('Erro de validação', { description: error.errors[0].message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">PsyHub</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta'}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isLogin
              ? 'Entre para acessar sua conta'
              : 'Junte-se à nossa comunidade de saúde mental'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Seu nome completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10"
                    required
                    maxLength={100}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                  maxLength={255}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                  minLength={6}
                  maxLength={72}
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-3">
                <Label>Você é:</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) =>
                    setRole(value as 'professional' | 'patient')
                  }
                  className="grid grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="patient"
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      role === 'patient'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem
                      value="patient"
                      id="patient"
                      className="sr-only"
                    />
                    <User className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">Paciente</span>
                    <span className="text-xs text-muted-foreground">
                      Busco atendimento
                    </span>
                  </Label>
                  <Label
                    htmlFor="professional"
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      role === 'professional'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <RadioGroupItem
                      value="professional"
                      id="professional"
                      className="sr-only"
                    />
                    <Brain className="w-8 h-8 mb-2 text-primary" />
                    <span className="font-medium">Profissional</span>
                    <span className="text-xs text-muted-foreground">
                      Sou psicólogo(a)
                    </span>
                  </Label>
                </RadioGroup>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? 'Carregando...' : isLogin ? 'Entrar' : 'Criar conta'}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-medium hover:underline"
            >
              {isLogin ? 'Cadastre-se' : 'Entre'}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Right side - Image/Decoration */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-primary-foreground"
        >
          <Brain className="w-32 h-32 mx-auto mb-8 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Sua saúde mental importa</h2>
          <p className="text-lg opacity-90 max-w-md">
            Conecte-se com profissionais qualificados e comece sua jornada de
            autoconhecimento
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
