import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from '../components';

const Auth = React.lazy(() => import('auth/Module'));
const Shop = React.lazy(() => import('shop/Module'));
const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  const navigate = useNavigate();

  return (
    <React.Suspense fallback={null}>
      <div className="min-h-screen bg-background">
        <Header mode={null} onLogoClick={() => navigate('/')} />

        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2024 PsyHub. Cuidando da sua saúde mental.</p>
          </div>
        </footer>
      </div>
    </React.Suspense>
  );
}

export default App;
