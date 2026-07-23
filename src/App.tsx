import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { CartProvider } from './context/CartContext';
import { Toaster } from './components/Toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false);

  // Listen for custom "open-cart" event from ProductDetail
  const handleOpenCart = useCallback(() => setCartOpen(true), []);

  useEffect(() => {
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, [handleOpenCart]);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:slug" element={<RecipeDetail />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid rgba(27,27,27,0.08)',
            borderRadius: '1rem',
            fontFamily: 'var(--sans, Inter, sans-serif)',
            fontSize: 14,
            color: 'var(--text, #1b1b1b)',
            boxShadow: 'var(--shadow-md, 0 8px 28px rgba(27,27,27,0.08))',
          },
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  );
}

