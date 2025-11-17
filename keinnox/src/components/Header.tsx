import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartOpen: () => void;
  onSearch: (query: string) => void;
}

export const Header = ({ onCartOpen, onSearch }: HeaderProps) => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchText);
    setMobileSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="\logo.jpg" alt="Keinnox Logo" className="w-8 h-8 object-contain" />
            <span className="text-2xl font-serif text-white">Keinnox</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-300 hover:text-amber-500 transition">Home</a>
            <a href="/#products" className="text-gray-300 hover:text-amber-500 transition">Collection</a>
            <a href="/about" className="text-gray-300 hover:text-amber-500 transition">About</a>
            <a href="/contact" className="text-gray-300 hover:text-amber-500 transition">Contact</a>

            {/* Desktop Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="pl-8 pr-4 py-1 rounded-full bg-zinc-900 text-gray-300 placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-2 top-1.5 w-5 h-5 text-gray-400" />
            </div>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            {/* Mobile Search Toggle */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>

            <button onClick={onCartOpen} className="relative text-gray-300 hover:text-amber-500 transition">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-amber-900/20">
            <a href="/" className="block text-gray-300 hover:text-amber-500">Home</a>
            <a href="/#products" className="block text-gray-300 hover:text-amber-500">Collection</a>
            <a href="/about" className="block text-gray-300 hover:text-amber-500">About</a>
            <a href="/contact" className="block text-gray-300 hover:text-amber-500">Contact</a>
          </nav>
        )}

        {/* Mobile Search Input */}
        {mobileSearchOpen && (
          <div className="md:hidden mt-2 px-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="w-full pl-8 pr-4 py-2 rounded-full bg-zinc-900 text-gray-300 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        )}
      </div>
    </header>
  );
};
