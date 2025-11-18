import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductsGrid } from "./components/ProductsGrid";
import { CartSidebar } from "./components/CartSidebar";
import { Footer } from "./components/Footer";

import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";


import Contact from "./pages/Contact";

// <-- IMPORT ABOUT PAGE

const App: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          {/* HEADER */}
          <Header
            onCartOpen={() => setCartOpen(true)}
            onSearch={(query: string) => setSearchQuery(query)}
          />

          <Routes>
            {/* HOME PAGE */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProductsGrid searchQuery={searchQuery} />
                </>
              }
            />

            {/* ABOUT PAGE */}
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<Shipping />} />

            {/* CONTACT PAGE */}
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* FOOTER */}
          <Footer />

          {/* CART SIDEBAR */}
          <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
