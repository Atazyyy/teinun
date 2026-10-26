import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueStrip from "./components/ValueStrip";
import Products from "./components/Products";
import About from "./components/About";
import HowTo from "./components/HowTo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { useCart } from "./hooks/useCart";

export default function App() {
  const cart = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (id) => {
    cart.add(id);
    setCartOpen(true);
  };

  return (
    <div className="bg-ivory font-sans text-bark antialiased">
      <Navbar cartCount={cart.count} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ValueStrip />
        <Products onAdd={addToCart} />
        <About />
        <HowTo />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
      />
      <WhatsAppFloat />
    </div>
  );
}
